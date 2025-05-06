import React from 'react';
import Header1 from '@/components/headers/Header1'; // Import your header component
import Footer1 from '@/components/footer/Footer1'; // Import your footer component
import ServicePage from '@/components/servicePage/ServicePage'; // Import the ServicePage component
import { cleaningData } from '@/data/cleaningData'; // Import the cleaning data
import './cleaningService.css';

const CleaningService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={cleaningData} serviceName="cleaning" />
      </div>
      <Footer1 />
    </>
  );
};

export default CleaningService;
