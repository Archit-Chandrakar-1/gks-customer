'use client';

import React, { useState } from 'react';
import Cart from '../cart/Cart';
import './checkoutPage.css';

const CheckoutPage = () => {
  const [cartItems] = useState([
    {
      id: 1,
      title: "Island Chimney Basic Cleaning Service",
      type: "Cleaning Service",
      price: 649
    },
    {
      id: 2,
      title: "Wall-mount Chimney Basic Cleaning",
      type: "Cleaning Service",
      price: 599
    }
  ]);

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    paymentMethod: 'upi'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRemoveItem = (id) => {
    console.log('Remove item:', id);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handlePayNow = () => {
    console.log('Processing payment with:', customerDetails.paymentMethod);
    console.log('Customer details:', customerDetails);
    console.log('Total amount:', calculateTotal());
  };

  return (
    <><div className="checkout-container">
    <div className="customer-details">
      <h2 className="section-title">Customer Details</h2>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerDetails.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={customerDetails.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={customerDetails.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={customerDetails.address}
          onChange={handleInputChange}
          placeholder="Enter your address"
        />
      </div>
    </div>

    <div className="cart-section">
      <Cart
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
      />

      <div className="customer-message">
        <h3 className="section-title">Additional Message</h3>
        <textarea
          name="message"
          value={customerDetails.message}
          onChange={handleInputChange}
          placeholder="Any special instructions or requests?"
        />
      </div>

      <div className="payment-summary">
        <h3 className="section-title">Payment Summary</h3>
        <div className="summary-item">
          <span>Total Amount</span>
          <span>₹{calculateTotal()}</span>
        </div>
        <div className="payment-methods">
          <label className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={customerDetails.paymentMethod === 'upi'}
              onChange={handleInputChange}
            />
            <span>UPI</span>
          </label>
          <label className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={customerDetails.paymentMethod === 'card'}
              onChange={handleInputChange}
            />
            <span>Credit/Debit Card</span>
          </label>
          <label className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={customerDetails.paymentMethod === 'cash'}
              onChange={handleInputChange}
            />
            <span>Cash on Service</span>
          </label>
        </div>
        <button
          className="pay-now-button"
          onClick={handlePayNow}
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
  </>
  );
};

export default CheckoutPage;