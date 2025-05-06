'use client';
import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './capitalGain.css';

const CapitalGainCalculator = () => {
  const [holdingPeriod, setHoldingPeriod] = useState('short');
  const [saleValue, setSaleValue] = useState('');
  const [purchaseValue, setPurchaseValue] = useState('');
  const [transferExpenses, setTransferExpenses] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('after');
  const [capitalGain, setCapitalGain] = useState<number | null>(null);
  const [taxAmount, setTaxAmount] = useState<number | null>(null);
  
  const resultRef = useRef<HTMLDivElement>(null);

  const calculateCapitalGain = () => {
    const sale = Number(saleValue) || 0;
    const purchase = Number(purchaseValue) || 0;
    const expenses = Number(transferExpenses) || 0;
    
    const gain = sale - purchase - expenses;
    setCapitalGain(gain);

    if (holdingPeriod === 'short') {
      setTaxAmount(gain * 0.20); // 20% for short term
    } else {
      // For long term, tax is 12.5% on gains above 1.25 lakhs
      const taxableAmount = Math.max(0, gain - 125000);
      setTaxAmount(taxableAmount * 0.125);
    }
  };

  const handleRecalculate = () => {
    setSaleValue('');
    setPurchaseValue('');
    setTransferExpenses('');
    setCapitalGain(null);
    setTaxAmount(null);
  };

  const handleShare = async () => {
    if (!resultRef.current || !capitalGain) return;

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
    pdf.text('Capital Gains Calculator Results', 20, 20);

    // Add calculation details
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Sale Value: ₹${Number(saleValue).toLocaleString('en-IN')}`, 20, 40);
    pdf.text(`Purchase Value: ₹${Number(purchaseValue).toLocaleString('en-IN')}`, 20, 50);
    pdf.text(`Transfer Expenses: ₹${Number(transferExpenses).toLocaleString('en-IN')}`, 20, 60);
    pdf.text(`Holding Period: ${holdingPeriod === 'short' ? 'Short Term' : 'Long Term'}`, 20, 70);

    // Add results
    pdf.setFontSize(14);
    pdf.text('Results:', 20, 90);
    pdf.text(`Capital Gain: ₹${capitalGain.toLocaleString('en-IN')}`, 20, 100);
    pdf.text(`Tax Amount: ₹${taxAmount?.toLocaleString('en-IN')}`, 20, 110);

    // Add the result section image
    pdf.addImage(imgData, 'PNG', 20, 130, 170, 100);

    pdf.save('capital-gains-calculation.pdf');
  };

  return (
    <div className="capital-gain-calculator">
      <h1>Capital Gains Calculator</h1>
      
      <div className="calculator-container">
        <div className="input-group">
          <label>Holding Period (No of Years Between date of Purchase and sale)</label>
          <select 
            value={holdingPeriod}
            onChange={(e) => setHoldingPeriod(e.target.value)}
            className="period-select"
          >
            <option value="short">Less Than or Equal to 1 Year</option>
            <option value="long">More than 1 Year</option>
          </select>
        </div>

        <div className="input-group">
          <label>Sale Value</label>
          <div className="value-input-wrapper">
            <span className="currency-symbol">₹</span>
            <input
              type="number"
              value={saleValue}
              onChange={(e) => setSaleValue(e.target.value)}
              className="value-input"
              placeholder="Enter sale value"
            />
          </div>
        </div>

        {holdingPeriod === 'long' && (
          <div className="input-group">
            <label>Purchase Date</label>
            <select 
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              className="date-select"
            >
              <option value="before">Before 31 Jan 2018</option>
              <option value="after">On or After 31 Jan 2018</option>
            </select>
          </div>
        )}

        <div className="input-group">
          <label>Purchase Value</label>
          <div className="value-input-wrapper">
            <span className="currency-symbol">₹</span>
            <input
              type="number"
              value={purchaseValue}
              onChange={(e) => setPurchaseValue(e.target.value)}
              className="value-input"
              placeholder="Enter purchase value"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Transfer Expenses (Brokerage, STT, etc.)</label>
          <div className="value-input-wrapper">
            <span className="currency-symbol">₹</span>
            <input
              type="number"
              value={transferExpenses}
              onChange={(e) => setTransferExpenses(e.target.value)}
              className="value-input"
              placeholder="Enter transfer expenses"
            />
          </div>
        </div>

        <button onClick={calculateCapitalGain} className="calculate-btn">
          Calculate Capital Gain
        </button>

        {capitalGain !== null && (
          <div ref={resultRef} className="result-section">
            <h2>
              {holdingPeriod === 'short' ? 'Short' : 'Long'} Term Capital Gain of ₹{capitalGain.toLocaleString('en-IN')} is
              chargeable to tax @ {holdingPeriod === 'short' ? '20%' : '12.5%'} 
              i.e ₹{taxAmount?.toLocaleString('en-IN')}
            </h2>
            
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
        <h2>What is Capital Gain?</h2>
        <p>
          Capital gains are profits from the sale of capital assets such as stocks, bonds, mutual funds, real estate, or other investments. The tax rate depends on how long you held the asset before selling it.
        </p>
        
        <div className="key-points">
          <h3>Key Points:</h3>
          <ul>
            <li>Short-term capital gains (≤ 1 year) are taxed at 20%</li>
            <li>Long-term capital gains ({'>'} 1 year) are taxed at 12.5% above ₹1.25 lakhs</li>
            <li>Transfer expenses can be deducted from the capital gains</li>
            <li>Different rules apply for assets purchased before 31 Jan 2018</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CapitalGainCalculator;