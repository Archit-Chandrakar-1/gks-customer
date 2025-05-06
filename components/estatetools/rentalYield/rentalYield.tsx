"use client";

import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './rentalYield.css';

const RentalYieldCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState('');
  const [rent, setRent] = useState('');
  const [rentPeriod, setRentPeriod] = useState('monthly');
  const [vacancyRate, setVacancyRate] = useState('');
  const [expenses, setExpenses] = useState('');
  const [grossYield, setGrossYield] = useState<number | null>(null);
  const [netYield, setNetYield] = useState<number | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);

  const calculateYield = () => {
    const price = Number(propertyPrice) || 0;
    let annualRent = Number(rent) || 0;
    const vacancy = Number(vacancyRate) || 0;
    const annualExpenses = Number(expenses) || 0;

    if (rentPeriod === 'weekly') {
      annualRent *= 52;
    } else if (rentPeriod === 'monthly') {
      annualRent *= 12;
    }

    const grossYieldValue = (annualRent / price) * 100;
    setGrossYield(grossYieldValue);

    const effectiveRent = annualRent * (1 - vacancy / 100);
    const netYieldValue = ((effectiveRent - annualExpenses) / price) * 100;
    setNetYield(netYieldValue);
  };

  const handleRecalculate = () => {
    setPropertyPrice('');
    setRent('');
    setRentPeriod('monthly');
    setVacancyRate('');
    setExpenses('');
    setGrossYield(null);
    setNetYield(null);
  };

  const handleShare = async () => {
    if (!resultRef.current || !grossYield) return;

    const canvas = await html2canvas(resultRef.current);
    const imgData = canvas.toDataURL('image/png');
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Add title
    pdf.setFontSize(20);
    pdf.setTextColor(156, 5, 5);
    pdf.text('Rental Yield Calculator Results', 20, 20);

    // Add calculation details
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Property Price: ₹${Number(propertyPrice).toLocaleString('en-IN')}`, 20, 40);
    pdf.text(`Rent: ₹${Number(rent).toLocaleString('en-IN')} (${rentPeriod})`, 20, 50);
    pdf.text(`Vacancy Rate: ${vacancyRate}%`, 20, 60);
    pdf.text(`Annual Expenses: ₹${Number(expenses).toLocaleString('en-IN')}`, 20, 70);

    // Add results
    pdf.setFontSize(14);
    pdf.text('Results:', 20, 90);
    pdf.text(`Gross Yield: ${grossYield.toFixed(2)}%`, 20, 100);
    pdf.text(`Net Yield: ${netYield?.toFixed(2)}%`, 20, 110);

    // Add the result section image
    pdf.addImage(imgData, 'PNG', 20, 130, 170, 100);

    pdf.save('rental-yield-calculation.pdf');
  };

  const formatCurrency = (value: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(Number(value) || 0);
  };

  return (
    <div className="rental-yield-calculator">
      <div className="calculator-container">
        <h1>Rental Yield Calculator</h1>
        
        <div className="input-section">
          <div className="input-group">
            <label>Property Price</label>
            <div className="value-input-wrapper">
              <span className="currency-symbol">₹</span>
              <input
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
                className="value-input"
                placeholder="Enter property price"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Rent</label>
            <div className="rent-input-container">
              <div className="value-input-wrapper">
                <span className="currency-symbol">₹</span>
                <input
                  type="number"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  className="value-input"
                  placeholder="Enter rent amount"
                />
              </div>
              <select 
                value={rentPeriod}
                onChange={(e) => setRentPeriod(e.target.value)}
                className="period-select"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="annually">Annually</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Vacancy Rate (%)</label>
            <div className="value-input-wrapper">
              <input
                type="number"
                value={vacancyRate}
                onChange={(e) => setVacancyRate(e.target.value)}
                className="value-input"
                placeholder="Enter vacancy rate"
                min="0"
                max="100"
              />
              <span className="suffix">%</span>
            </div>
          </div>

          <div className="input-group">
            <label>Annual Expenses</label>
            <div className="value-input-wrapper">
              <span className="currency-symbol">₹</span>
              <input
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
                className="value-input"
                placeholder="Enter annual expenses"
              />
            </div>
          </div>

          <button onClick={calculateYield} className="calculate-btn">
            Calculate Yield
          </button>
        </div>

        {(grossYield !== null && netYield !== null) && (
          <div ref={resultRef} className="result-section">
            <div className="yield-result">
              <h3>Gross Rental Yield</h3>
              <div className="yield-value">{grossYield.toFixed(2)}%</div>
            </div>
            <div className="yield-result">
              <h3>Net Rental Yield</h3>
              <div className="yield-value">{netYield.toFixed(2)}%</div>
            </div>
            
            <div className="button-group">
              <button 
                onClick={handleRecalculate}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Recalculate
              </button>
              <button 
                onClick={handleShare}
                className="px-6 py-2 bg-[#9c0505] text-white rounded-lg hover:bg-[#7c0404] transition-colors"
              >
                Share as PDF
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="info-container">
        <h2>Understanding Rental Yield</h2>
        <p>
          Rental yield is a key metric used to evaluate and compare investment properties. It shows the relationship between rental income and property value, expressed as a percentage.
        </p>
        
        <div className="key-points">
          <h3>Two Types of Rental Yield:</h3>
          <ul>
            <li>
              <strong>Gross Rental Yield:</strong> Annual rental income ÷ Property value × 100
            </li>
            <li>
              <strong>Net Rental Yield:</strong> (Annual rent - Annual expenses) ÷ Property value × 100
            </li>
          </ul>
        </div>

        <div className="key-points">
          <h3>Important Considerations:</h3>
          <ul>
            <li>Higher yield generally indicates better return on investment</li>
            <li>Net yield provides a more accurate picture of returns</li>
            <li>Consider vacancy rates and maintenance costs</li>
            <li>Compare yields of similar properties in the area</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RentalYieldCalculator;