import React from 'react';
import Header1 from '@/components/headers/Header1'; // Import your header component
import Footer1 from '@/components/footer/Footer1'; // Import your footer component

import ServicePage from '@/components/servicePage/ServicePage';
import { renovationData} from '@/data/renovationData'; // Import the cleaning data
import './renovationService.css';

const RenovationService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={renovationData} serviceName="renovation" />
      </div>
      <Footer1 />
    </>
  );
};

export default RenovationService;
