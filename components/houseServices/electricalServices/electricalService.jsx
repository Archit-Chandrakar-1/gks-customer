import React from 'react';
import Header1 from '@/components/headers/Header1'; 
import Footer1 from '@/components/footer/Footer1'; 
import ServicePage from '@/components/servicePage/ServicePage';

import { electricalData } from '@/data/electricalData';
import './electricalService.css';

const ElectricalService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={electricalData} serviceName="electrical" />
      </div>
      <Footer1 />
    </>
  );
};

export default ElectricalService;
