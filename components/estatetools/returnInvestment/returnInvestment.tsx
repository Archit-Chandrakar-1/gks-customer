"use client";

import React, { useState } from 'react';
import './returnInvestment.css';

const ReturnInvestment = () => {
  const [amountInvested, setAmountInvested] = useState('');
  const [amountReturned, setAmountReturned] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState(1);
  const [results, setResults] = useState<{
    totalGain: number;
    roi: number;
    annualRoi: number;
    cagr: number;
  } | null>(null);

  const calculateROI = () => {
    const invested = Number(amountInvested) || 0;
    const returned = Number(amountReturned) || 0;
    const period = Number(investmentPeriod) || 1;

    if (invested <= 0) return;

    const totalGain = returned - invested;
    const roi = (totalGain / invested) * 100;
    const annualRoi = roi / period;
    const cagr = (Math.pow((returned / invested), 1/period) - 1) * 100;

    setResults({
      totalGain,
      roi,
      annualRoi,
      cagr
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="roi-calculator">
      <div className="calculator-container">
        <h1>ROI Calculator</h1>
        
        <div className="input-section">
          <div className="input-group">
            <label>Amount Invested</label>
            <div className="value-input-wrapper">
              <span className="currency-symbol">₹</span>
              <input
                type="number"
                value={amountInvested}
                onChange={(e) => setAmountInvested(e.target.value)}
                className="value-input"
                placeholder="Enter initial investment"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Amount Returned</label>
            <div className="value-input-wrapper">
              <span className="currency-symbol">₹</span>
              <input
                type="number"
                value={amountReturned}
                onChange={(e) => setAmountReturned(e.target.value)}
                className="value-input"
                placeholder="Enter final amount"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Investment Period (in years)</label>
            <div className="slider-container">
              <input
                type="range"
                min="1"
                max="30"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                className="period-slider"
              />
              <div className="period-display">
                <span>{investmentPeriod}</span>
                <span>Years</span>
              </div>
            </div>
          </div>

          <button onClick={calculateROI} className="calculate-btn">
            Calculate ROI
          </button>
        </div>

        {results && (
          <div className="results-section">
            <div className="result-item">
              <h3>Total Gain on Investment</h3>
              <div className="result-value">{formatCurrency(results.totalGain)}</div>
            </div>

            <div className="result-item">
              <h3>Return on Investment (ROI)</h3>
              <div className="result-value">{results.roi.toFixed(2)}%</div>
            </div>

            <div className="result-item">
              <h3>Simple Annual ROI</h3>
              <div className="result-value">{results.annualRoi.toFixed(2)}%</div>
            </div>

            <div className="result-item">
              <h3>Compound Annual Growth Rate (CAGR)</h3>
              <div className="result-value">{results.cagr.toFixed(2)}%</div>
            </div>
          </div>
        )}
      </div>

      <div className="info-container">
        <h2>Understanding ROI</h2>
        <p>
          Return on Investment (ROI) is a financial metric that helps you evaluate the profitability
          of your investments. It shows the percentage return relative to your investment cost.
        </p>
        
        <div className="key-points">
          <h3>Key Points:</h3>
          <ul>
            <li>ROI = (Net Profit / Cost of Investment) × 100</li>
            <li>Simple Annual ROI averages the return over the investment period</li>
            <li>CAGR shows the year-over-year growth rate</li>
            <li>A positive ROI indicates profit, while negative shows loss</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReturnInvestment;