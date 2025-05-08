import React from 'react';
import Header1 from '@/components/headers/Header1'; // Import your header component
import Footer1 from '@/components/footer/Footer1'; // Import your footer component
import ServicePage from '@/components/servicePage/servicePage';
import { constructionData} from '@/data/constructionData'; // Import the cleaning data
import './constructionService.css';

const ConstructionService = () => {
  return (
    <>
      <Header1 />
      <div className="cleaning-service-container">
        <ServicePage serviceData={constructionData} serviceName="construction" />
      </div>
      <Footer1 />
    </>
  );
};

export default  ConstructionService;
