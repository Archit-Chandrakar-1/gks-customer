import React from 'react';
import Header1 from '@/components/headers/Header1'; // Import your header component
import Footer1 from '@/components/footer/Footer1'; // Import your footer component

import ServicePage from '@/components/servicePage/ServicePage';
import { plumbingData} from '@/data/plumbingData'; // Import the cleaning data
import './plumbingService.css';

const PlumbingService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={plumbingData} serviceName="plumbing" />
      </div>
      <Footer1 />
    </>
  );
};

export default PlumbingService;
