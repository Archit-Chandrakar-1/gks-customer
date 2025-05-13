'use client';
import React, { useState } from 'react';
import './customerView.css';

const CustomerView = ({ customer }) => {
  const [activeTab, setActiveTab] = useState('Construction');
  const [activeSite, setActiveSite] = useState('Site A');

  const weekDays = [
    { day: 'Mon', date: 1 },
    { day: 'Tue', date: 2 },
    { day: 'Wed', date: 3 },
    { day: 'Thu', date: 4 },
    { day: 'Fri', date: 5 },
    { day: 'Sat', date: 6 },
    { day: 'Sun', date: 7 },
  ];

  const siteProgress = [
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg',
      description: 'Foundation work in progress'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/544967/pexels-photo-544967.jpeg',
      description: 'Site preparation'
    },
    {
      type: 'video',
      url: 'https://example.com/site-progress.mp4',
      description: 'Weekly progress update'
    }
  ];

  return (
    <div className="customerViewContainer">
      <header className="customerViewHeader">
        <div className="customerViewInfo">
          <h1>Welcome, {customer.name}</h1>
          <p>Customer ID: {customer.id}</p>
        </div>
        <div className="customerViewStats">
          <div className="customerViewStat">
            <h3>Active Projects</h3>
            <span className="customerViewNumber">4</span>
          </div>
          <div className="customerViewStat">
            <h3>Total Projects</h3>
            <span className="customerViewNumber">5</span>
          </div>
        </div>
      </header>

      <nav className="customerViewNav">
        <button 
          className={`customerViewNavButton ${activeTab === 'Construction' ? 'active' : ''}`}
          onClick={() => setActiveTab('Construction')}
        >
          Construction
        </button>
        <button 
          className={`customerViewNavButton ${activeTab === 'Interior' ? 'active' : ''}`}
          onClick={() => setActiveTab('Interior')}
        >
          Interior
        </button>
      </nav>

      <div className="customerViewSiteSelector">
        <button 
          className={`customerViewSiteButton ${activeSite === 'Site A' ? 'active' : ''}`}
          onClick={() => setActiveSite('Site A')}
        >
          Site A
        </button>
        <button 
          className={`customerViewSiteButton ${activeSite === 'Site B' ? 'active' : ''}`}
          onClick={() => setActiveSite('Site B')}
        >
          Site B
        </button>
      </div>

      <section className="customerViewTimeline">
        <h2>Project Timeline</h2>
        <div className="customerViewCalendar">
          {weekDays.map((day) => (
            <div 
              key={day.day} 
              className={`customerViewCalendarDay ${day.day === 'Sun' ? 'customerViewSunday' : ''}`}
            >
              <span className="customerViewDayName">{day.day}</span>
              <span className="customerViewDate">{day.date}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="customerViewProgress">
        <div className="customerViewProgressHeader">
          <h2>Site Progress</h2>
          <button className="customerViewDownloadButton">Download ZIP</button>
        </div>
        <div className="customerViewProgressGrid">
          {siteProgress.map((item, index) => (
            <div key={index} className="customerViewProgressItem">
              {item.type === 'image' ? (
                <img src={item.url} alt={item.description} />
              ) : (
                <video controls>
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerView;