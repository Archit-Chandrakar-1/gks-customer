import React from 'react';
import Header1 from '@/components/headers/Header1'; // Import your header component
import Footer1 from '@/components/footer/Footer1'; // Import your footer component
import ServicePage from '../../../components/servicePage/servicePage'; // Import the ServicePage component
import { electronicData } from '@/data/electronicData';
import './electronicService.css';

const ElectronicService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={electronicData} serviceName="electronic" />
      </div>
      <Footer1 />
    </>
  );
};

export default ElectronicService;
