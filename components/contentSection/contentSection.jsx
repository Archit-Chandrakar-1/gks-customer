import React from 'react';
import '../contentSection/contentSection.css';

const ContentSection = ({ content }) => {
  return (
  <>
    {/* <div className="content-section">
      {content.map((section, index) => (
        <div key={index} className="content-block">
          {section.title && <h2 className="content-title">{section.title}</h2>}
          {section.subtitle && <h3 className="content-subtitle">{section.subtitle}</h3>}
          {section.text && <p className="content-text">{section.text}</p>}
          {section.image && (
            <div className="content-image-container">
              <img src={section.image} alt={section.title || 'Content image'} className="content-image" />
            </div>
          )}
          {section.list && (
            <ul className="content-list">
              {section.list.map((item, i) => (
                <li key={i} className="content-list-item">{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div> */}
    </>
  );
};

export default ContentSection;
