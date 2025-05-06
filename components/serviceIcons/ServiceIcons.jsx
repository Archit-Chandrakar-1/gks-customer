import React from 'react';
import './ServiceIcons.css';

const ServiceIcons = ({ icons }) => {
  return (
    <div className="service-icons">
      <h4 style={{marginBottom: "10px"}}>Select The Service You Need</h4>
      <div className="icons-container">
      
        {icons.map((icon) => (
          <div key={icon.id} className="icon-item">
            
            <img src={icon.image} alt={icon.name} className="icon-image" />
            <p className="icon-name">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceIcons;
