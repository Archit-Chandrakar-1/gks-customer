// components/houseServices/EstateLegal/EstateLegal.jsx
"use client"; // Add this line to mark the component as a Client Component

import React, { useState } from 'react';
// import { BookingData } from '../../bookingForm/BookingForm';
import ServiceCard from '../../serviceCard/ServiceCard';
import BookingForm from '../../bookingForm/bookingForm';
import { estateLegalServices } from '@/data/estateLegalServiceData';
import './EstateLegal.css';
import Header1 from '@/components/headers/Header1';
import Footer1 from '@/components/footer/Footer1';

const EstateLegal = () => {
  // State for selected service
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  
  // Find the selected service title
  const selectedService = selectedServiceId 
    ? estateLegalServices.find(service => service.id === selectedServiceId)?.title 
    : null;

  // Handle service card selection
  const handleSelectService = (id) => {
    setSelectedServiceId(id === selectedServiceId ? null : id);
  };

  // Handle booking submission
  const handleBookingSubmit = (bookingData) => {
    // In a real app, this would send data to an API
    console.log('Booking submitted:', bookingData);
    alert(`Booking confirmed for ${bookingData.serviceType}`);
  };

  return (

    <>
    <Header1/>
    <div className="estate-legal-service-page">
      <div className="estate-content-container">
        <div className="service-cards-container">
          <h1 className="services-main-title">Estate Legal Services</h1>
          <p className="services-description">
            Professional legal assistance for all your real estate needs. Select a service to book a consultation with our experts.
          </p>
          
          <div className="service-cards-grid">
            {estateLegalServices.map(service => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                price={service.price}
                icon={service.icon}
                isSelected={service.id === selectedServiceId}
                onSelect={handleSelectService}
              />
            ))}
          </div>
        </div>
        
        <div className="booking-section">
          <BookingForm 
            selectedService={selectedService}
            onBookingSubmit={handleBookingSubmit}
          />
        </div>
      </div>
    </div>
    <Footer1/>
    </>
  );
};

export default EstateLegal;