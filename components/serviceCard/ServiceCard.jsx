import React from 'react';
import * as Icons from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ 
  id, 
  title, 
  description, 
  price, 
  icon, 
  isSelected, 
  onSelect 
}) => {
  // Dynamically get the icon component from lucide-react
  const IconComponent = Icons[icon] || Icons.FileText;

  return (
    <div 
      className={`service-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(id)}
    >
      <div className="service-card-icon">
        <IconComponent size={36} />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <div className="service-card-price">{price}</div>
    </div>
  );
};

export default ServiceCard;