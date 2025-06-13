import React from 'react';
import Header1 from '@/components/headers/Header1'; // Import your header component
import Footer1 from '@/components/footer/Footer1'; // Import your footer component
import ServicePage from '../../../components/servicePage'; // Import the ServicePage component
import { vastuData} from '@/data/vastuData'; // Import the cleaning data
import './vastuService.css';

const VastuService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={vastuData} serviceName="vastu" />
      </div>
      <Footer1 />
    </>
  );
};

export default VastuService;
