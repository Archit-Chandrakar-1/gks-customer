"use client";

import React, { useState } from 'react';
import './myBookingCart.css';

const MyBookingCart = () => {
  // Dummy user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    address: "123 Park Street, Mumbai, Maharashtra 400001",
    profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  };

  // Dummy booking data (you would fetch this from your cart state)
  const [bookings, setBookings] = useState({
    electrical: [
      { id: 1, title: "Fan Installation", type: "Installation", price: 499 },
      { id: 2, title: "Circuit Repair", type: "Repair", price: 799 }
    ],
    cleaning: [
      { id: 3, title: "Deep House Cleaning", type: "Premium", price: 1499 }
    ]
  });

  const [selectedPayment, setSelectedPayment] = useState('upi');

  const calculateTotal = () => {
    let total = 0;
    Object.values(bookings).forEach(category => {
      category.forEach(service => {
        total += service.price;
      });
    });
    return total;
  };

  const handleRemoveService = (categoryKey, serviceId) => {
    setBookings(prev => ({
      ...prev,
      [categoryKey]: prev[categoryKey].filter(service => service.id !== serviceId)
    }));
  };

  const handleBookNow = () => {
    // Handle booking logic here
    console.log("Processing booking...");
  };

  return (
    <div className="booking-cart-container">
      <h1 className="booking-cart-title">My Booking Cart</h1>

      <div className="booking-cart-grid">
        <div className="services-section">
          {Object.entries(bookings).map(([category, services]) => (
            services.length > 0 && (
              <div key={category} className="service-category">
                <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)} Services</h3>
                {services.map(service => (
                  <div key={service.id} className="service-item">
                    <div className="service-details">
                      <h4>{service.title}</h4>
                      <span className="service-type">{service.type}</span>
                    </div>
                    <div className="service-actions">
                      <span className="service-price">₹{service.price}</span>
                      <button
                        className="remove-btn"
                        onClick={() => handleRemoveService(category, service.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          ))}
        </div>

        <div className="user-details">
          <div className="user-profile">
            <img
              src={userData.profileImage}
              alt="Profile"
              className="profile-image"
            />
            <h3>{userData.name}</h3>
          </div>

          <div className="user-info">
            <div className="info-group">
              <p className="info-label">Email</p>
              <p className="info-value">{userData.email}</p>
            </div>
            <div className="info-group">
              <p className="info-label">Phone</p>
              <p className="info-value">{userData.phone}</p>
            </div>
            <div className="info-group">
              <p className="info-label">Address</p>
              <p className="info-value">{userData.address}</p>
            </div>
          </div>

          <div className="payment-section">
            <h3>Payment Method</h3>
            <div className="payment-methods">
              <label className={`payment-method ${selectedPayment === 'upi' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={selectedPayment === 'upi'}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                UPI
              </label>
              <label className={`payment-method ${selectedPayment === 'card' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={selectedPayment === 'card'}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                Credit/Debit Card
              </label>
              <label className={`payment-method ${selectedPayment === 'cash' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={selectedPayment === 'cash'}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                Cash on Service
              </label>
            </div>
          </div>

          <div className="total-section">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="total-row">
              <span>GST (18%):</span>
              <span>₹{(calculateTotal() * 0.18).toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Total:</span>
              <span className="total-amount">₹{(calculateTotal() * 1.18).toFixed(2)}</span>
            </div>
            <button className="book-now-btn" onClick={handleBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCart;