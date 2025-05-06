import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ServiceCards.css';

const ServiceCards = ({ cards, onAddClick }) => {
  return (
    <div className="service-cards">
      
      {cards.map((card) => (
        <div key={card.id} className="card">
          <div className="card-content">
            <div className="card-left">
              <h3 className="card-title">{card.title}</h3>
              <div className="card-reviews">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < card.rating ? "star-filled" : "star-empty"} />
                  ))}
                </div>
                <span className="review-count">({card.reviewCount} reviews)</span>
              </div>
              <div className="card-price">₹{card.price}</div>
              <button className="view-details-btn">View Details</button>
            </div>
            <div className="card-right">
              <img src={card.image} alt={card.title} className="card-image" />
              <button 
                className="add-btn"
                onClick={() => onAddClick(card)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
