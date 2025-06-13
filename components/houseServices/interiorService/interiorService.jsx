import React from 'react';
import Header1 from '@/components/headers/Header1'; // Import your header component
import Footer1 from '@/components/footer/Footer1'; // Import your footer component
import ServicePage from '@/components/servicePage/ServicePage'; // Import the ServicePage component
import { interiorData} from '@/data/interiorData'; // Import the cleaning data
import './interiorService.css';

const InteriorService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={interiorData} serviceName="interior" />
      </div>
      <Footer1 />
    </>
  );
};

export default  InteriorService;
