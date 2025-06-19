import React from 'react';
import './DieticianHelp.css';
import { FaUserCheck, FaHeartbeat, FaHandsHelping } from 'react-icons/fa';

const DieticianHelp = () => {
  const cards = [
    {
      icon: <FaUserCheck />,
      title: 'Tailored Guidance',
      description: 'Personalized nutrition advice based on your health status and goals',
      highlight: true,
    },
    {
      icon: <FaHeartbeat />,
      title: 'Health Condition Management',
      description: 'Expert support for managing diabetes, PCOS, heart disease, and more',
      highlight: false,
    },
    {
      icon: <FaHandsHelping />,
      title: 'Motivation & Accountability',
      description: 'Continuous support to keep you motivated and on track',
      highlight: false,
    },
  ];

  return (
    <div className="dietician-container">
      <h2>How a Dietician Helps You</h2>
      <div className="dietician-cards">
        {cards.map((card, index) => (
          <div key={index} className="dietician-card" >
            <div className="card-icon">{card.icon}</div>
            <div className="card-title">{card.title}</div>
            <div className="card-desc">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DieticianHelp;
