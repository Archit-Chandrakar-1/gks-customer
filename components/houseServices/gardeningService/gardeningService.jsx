import React from 'react';
import Header1 from '@/components/headers/Header1'; 
import Footer1 from '@/components/footer/Footer1'; 
import ServicePage from '@/components/servicePage/ServicePage';
import { gardeningData } from '@/data/gardeningData';
import './gardeningService.css';

const GardeningService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={gardeningData} serviceName="gardening" />
      </div>
      <Footer1 />
    </>
  );
};

export default GardeningService;
