"use client";

import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './stampDuty.css';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const stampDutyRates = {
  "Andhra Pradesh": 5,
  "Arunachal Pradesh": 6,
  "Assam": 8.25,
  "Bihar": 5.70,
  "Chhattisgarh": 5,
  "Goa": 4,
  "Gujarat": 4.9,
  "Haryana": 6,
  "Himachal Pradesh": 5,
  "Jharkhand": 4,
  "Jammu & Kashmir": 5,
  "Karnataka": 4,
  "Kerala": 8,
  "Madhya Pradesh": 7.5,
  "Maharashtra": 3,
  "Manipur": 7,
  "Meghalaya": 9.9,
  "Mizoram": 9,
  "Nagaland": 8.25,
  "Odisha": 5,
  "Punjab": 7,
  "Rajasthan": 5,
  "Sikkim": 4,
  "Tamil Nadu": 7,
  "Telangana": 5,
  "Tripura": 5,
  "Uttar Pradesh": 7,
  "Uttarakhand": 5,
  "West Bengal": 7
};

const MIN_VALUE = 500000; // 5 lakhs

const StampDutyCalculator = () => {
  const [selectedState, setSelectedState] = useState("Andhra Pradesh");
  const [propertyValue, setPropertyValue] = useState(MIN_VALUE);
  const [stampDuty, setStampDuty] = useState(null);
  const resultRef = useRef(null);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const convertToWords = (value) => {
    const lakhs = value / 100000;
    return `${lakhs.toFixed(2)} Lakh`;
  };

  const handleCalculate = () => {
    const rate = stampDutyRates[selectedState];
    const calculatedDuty = (propertyValue * rate) / 100;
    setStampDuty(calculatedDuty);
  };

  const handleRecalculate = () => {
    setSelectedState("Andhra Pradesh");
    setPropertyValue(MIN_VALUE);
    setStampDuty(null);
  };

  const handleShare = async () => {
    if (!resultRef.current || stampDuty === null) return;

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
    pdf.text('Stamp Duty Calculator Results', 20, 20);

    // Add calculation details
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`State: ${selectedState}`, 20, 40);
    pdf.text(`Property Value: ${formatCurrency(propertyValue)}`, 20, 50);
    pdf.text(`Stamp Duty Rate: ${stampDutyRates[selectedState]}%`, 20, 60);
    pdf.text(`Stamp Duty Amount: ${formatCurrency(stampDuty)}`, 20, 70);

    // Add the result section image
    pdf.addImage(imgData, 'PNG', 20, 90, 170, 100);

    pdf.save('stamp-duty-calculation.pdf');
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setStampDuty(null);
  };

  const handlePropertyValueChange = (e) => {
    const value = Math.max(MIN_VALUE, Number(e.target.value));
    setPropertyValue(value);
    setStampDuty(null);
  };

  const handleSliderChange = (e) => {
    setPropertyValue(Number(e.target.value));
    setStampDuty(null);
  };

  return (
    <>
      <div className="stamp-duty-calculator">
        <div className="calculator-container">
          <h1>Stamp Duty Calculator</h1>
          
          <div className="input-section">
            <div className="input-group">
              <label>State</label>
              <select 
                value={selectedState}
                onChange={handleStateChange}
                className="state-select"
              >
                {indianStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="input-group property-value-group">
              <label>Property Value</label>
              <div className="value-input-container">
                <div className="value-input-wrapper">
                  <span className="currency-symbol">₹</span>
                  <input
                    type="number"
                    value={propertyValue}
                    onChange={handlePropertyValueChange}
                    min={MIN_VALUE}
                    className="value-input"
                  />
                </div>
                <span className="amount-in-words">{convertToWords(propertyValue)}</span>
              </div>
              <input
                type="range"
                min={MIN_VALUE}
                max={10000000}
                value={propertyValue}
                onChange={handleSliderChange}
                className="property-slider"
                step="100000"
              />
            </div>

            <button onClick={handleCalculate} className="calculate-btn">
              Calculate Stamp Duty
            </button>
          </div>

          {stampDuty !== null && (
            <div ref={resultRef} className="result-section">
              <h2>Stamp Duty for Your Property</h2>
              <div className="result-amount">{formatCurrency(stampDuty)}</div>
              <p className="rate-info">
                Stamp Duty rate for {selectedState}: {stampDutyRates[selectedState]}%
              </p>

              <div className="button-group mt-6 flex justify-center gap-4">
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
          <h2>Understanding Stamp Duty</h2>
          <p>
            Stamp Duty is a mandatory tax levied by state governments on property transactions.
            It's calculated as a percentage of the property value and varies by state.
          </p>
          
          <div className="key-points">
            <h3>Important Information:</h3>
            <ul>
              <li>Rates vary by state and property type</li>
              <li>Must be paid before property registration</li>
              <li>Calculated on the total property value</li>
              <li>Non-payment can lead to legal complications</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StampDutyCalculator;