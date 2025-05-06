import React from 'react';
import Header1 from '@/components/headers/Header1'; // Import your header component
import Footer1 from '@/components/footer/Footer1'; // Import your footer component
import ServicePage from '@/components/servicePage/ServicePage'; // Import the ServicePage component
import { packersData} from '@/data/packersData'; // Import the cleaning data
import './packersService.css';

const PackersService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={packersData} serviceName="packers" />
      </div>
      <Footer1 />
    </>
  );
};

export default  PackersService;
