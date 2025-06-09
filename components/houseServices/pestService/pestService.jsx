import React from 'react';
import Header1 from '@/components/headers/Header1'; // Import your header component
import Footer1 from '@/components/footer/Footer1'; // Import your footer component
import ServicePage from '@/components/servicePage/ServicePage';

import { pestData} from '@/data/pestData'; // Import the cleaning data
import './pestService.css';

const PestService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={pestData} serviceName="pest" />
      </div>
      <Footer1 />
    </>
  );
};

export default PestService;
