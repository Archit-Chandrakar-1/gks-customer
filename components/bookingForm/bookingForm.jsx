import React, { useState, useEffect } from 'react';
import './bookingForm.css';

const BookingForm = ({ selectedService, onBookingSubmit }) => {
  const [formData, setFormData] = useState({
    serviceType: selectedService || '',
    name: '',
    address: '',
    date: '',
    time: '',
    mobileNumber: ''
  });

  // Mock profile data (to be replaced with API)
  const profileData = {
    name: 'John Doe',
    address: '123 Legal Avenue, New York, NY 10001'
  };

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      serviceType: selectedService || ''
    }));
  }, [selectedService]);

  useEffect(() => {
    // In a real app, this would be an API call
    setFormData(prev => ({
      ...prev,
      name: profileData.name,
      address: profileData.address
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit(formData);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={`booking-form-container ${!selectedService ? 'disabled' : ''}`}>
      <h2 className="booking-form-title">Book a Consultation</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="serviceType">Service Type</label>
          <input
            type="text"
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            readOnly
            disabled={!selectedService}
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={!selectedService}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!selectedService}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            disabled={!selectedService}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            disabled={!selectedService}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            disabled={!selectedService}
            className="form-control"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="booking-submit-btn"
          disabled={!selectedService}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;