import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ service, onClose, onAddToCart }) => {
  const [selectedType, setSelectedType] = useState(
    service.types && service.types.length > 0 ? service.types[0] : null
  );

  const handleAddToCart = () => {
    if (selectedType) {
      const cartItem = {
        id: `${service.id}-${selectedType.id}`,
        title: service.title,
        type: selectedType.name,
        price: selectedType.price
      };
      onAddToCart(cartItem);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{service.title}</h2>
          {/* <img src={service.image} alt={service.title} className="modal-image" /> */}
        </div>
        
        <div className="modal-body">
          <h3>Select Type</h3>
          
          {service.types && service.types.length > 0 ? (
            <div className="type-selection">
              {service.types.map((type) => (
                <div 
                  key={type.id} 
                  className={`type-option ${selectedType && selectedType.id === type.id ? 'selected' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  <div className="type-details">
                    <span className="type-name">{type.name}</span>
                    <span className="type-price">₹{type.price}</span>
                  </div>
                  {type.description && <p className="type-description">{type.description}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p className="no-types">No options available for this service.</p>
          )}
          
          {service.description && (
            <div className="service-description">
              <h4>Description</h4>
              <p>{service.description}</p>
            </div>
          )}
        </div>
        
        <div className="modal-footer">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={!selectedType}
          >
            Add to Cart - ₹{selectedType ? selectedType.price : 0}
          </button>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
