"use client";

import React, { useState, useEffect, useRef } from 'react';
import ServiceIcons from '../serviceIcons/ServiceIcons';
import ServiceCards from '../serviceCards/ServiceCards';
import Cart from '../cart/Cart';
import ContentSection from '../contentSection/contentSection';
import Modal from '../modal/Modal';
import './ServicePage.css';
import { FaStar } from 'react-icons/fa';

const ServicePage = ({ serviceData, serviceName }) => {
  const [cart, setCart] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rightSectionRef = useRef(null);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (rightSectionRef.current) {
      rightSectionRef.current.scrollTop = 0;
    }
  }, [serviceName]);

  return (
    <div className="service-page">
      <div className="service-page-container">
        <div className="left-section">
          <ServiceIcons icons={serviceData.scrolls} />
          <ServiceCards 
            cards={serviceData.cards} 
            onAddClick={openModal}
          />
        </div>
        
        <div className="right-section" ref={rightSectionRef}>
        {/* <h2 className="cart-title">{heading}</h2> */}
          <Cart 
            cartItems={cart} 
            onRemoveItem={handleRemoveFromCart} 
          />
          <ContentSection content={serviceData.content} />
        </div>
      </div>

      {isModalOpen && selectedService && (
        <Modal 
          service={selectedService} 
          onClose={closeModal} 
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ServicePage;
