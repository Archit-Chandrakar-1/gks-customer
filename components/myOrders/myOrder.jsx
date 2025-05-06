'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';

import './myOrder.css';


const serviceStatusColors = {
  completed: 'bg-green-100 text-green-800',
  ongoing: 'bg-blue-100 text-blue-800',
  upcoming: 'bg-yellow-100 text-yellow-800'
};

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{service.serviceName}</h3>
          <p className="text-gray-600 text-sm mt-1">
            Booking ID: {service.bookingId}
          </p>
          <p className="text-gray-600 text-sm">
            Scheduled: {format(new Date(service.scheduledDate), 'PPP')}
          </p>
          <p className="text-gray-600 text-sm">
            Amount: ₹{service.amount}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${serviceStatusColors[service.status]}`}>
          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
        </span>
      </div>
    </div>
  );
};

const MyOrder = () => {
  const [activeTab, setActiveTab] = useState('all');

  const mockServices = [
    {
      bookingId: "GKS001",
      serviceName: "Deep House Cleaning",
      scheduledDate: "2024-03-25",
      amount: 4999,
      status: "upcoming"
    },
    {
      bookingId: "GKS002",
      serviceName: "Electrical Repair",
      scheduledDate: "2024-03-20",
      amount: 1499,
      status: "ongoing"
    },
    {
      bookingId: "GKS003",
      serviceName: "Pest Control",
      scheduledDate: "2024-03-15",
      amount: 2999,
      status: "completed"
    }
  ];

  const filteredServices = activeTab === 'all'
    ? mockServices
    : mockServices.filter(service => service.status === activeTab);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 px-4 text-center ${
              activeTab === 'all' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All Services
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center ${
              activeTab === 'ongoing' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('ongoing')}
          >
            Ongoing
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center ${
              activeTab === 'upcoming' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center ${
              activeTab === 'completed' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredServices.map((service) => (
          <ServiceCard key={service.bookingId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default MyOrder;