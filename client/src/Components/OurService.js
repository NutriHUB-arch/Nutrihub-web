import React, { useEffect, useRef, useState } from 'react';
import './OurService.css';
import { FaClipboardList, FaUserMd, FaSyncAlt, FaChartLine, FaRedoAlt, FaTag } from 'react-icons/fa';

const serviceCards = [
  { icon: <FaClipboardList />, title: '100% Personalized Plans', description: 'Every plan is tailored to your unique body type, lifestyle, and preferences', position: 'top-left' },
  { icon: <FaChartLine />,    title: 'Proven Results',          description: '500+ successful transformations with evidence-based nutrition strategies', position: 'top-right' },
  { icon: <FaUserMd />,       title: 'Expert Guidance',         description: 'Professional support from a certified clinical nutritionist', position: 'middle-left' },
  { icon: <FaRedoAlt />,      title: 'Regular Follow-ups',      description: 'Continuous monitoring and plan adjustments for optimal results', position: 'middle-right' },
  { icon: <FaSyncAlt />,      title: 'Easy-to-Follow',          description: 'Simple, practical meal plans that fit into your daily routine', position: 'bottom-left' },
  { icon: <FaTag />,          title: 'Affordable Packages',     description: 'Quality nutrition guidance at competitive prices for everyone', position: 'bottom-right' },
];

const OurService = () => {
  const sliderRef = useRef(null);
  const indexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const cardWidth = slider.offsetWidth;
      indexRef.current++;

      if (indexRef.current >= serviceCards.length) {
        indexRef.current = 0;
        setCurrentIndex(0);
        slider.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        setCurrentIndex(indexRef.current);
        slider.scrollTo({
          left: indexRef.current * cardWidth,
          behavior: 'smooth',
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    indexRef.current = index;
    setCurrentIndex(index);
    const cardWidth = slider.offsetWidth;
    slider.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div id="services1" className="our-service">
      <div className="radial-container">
        <div className="service-header">
          <h2>Our Service</h2>
          <p>Comprehensive nutrition solutions for all your health needs</p>
        </div>

        <div className="rings">
          <div className="ring outer" />
          <div className="ring middle" />
          <div className="ring inner" />
        </div>

        <div className="service-card-slider" ref={sliderRef}>
          {serviceCards.map((card, i) => (
            <div key={i} className={`service-card ${card.position}`}>
              <div className="card-icon">{card.icon}</div>
              <div className="box1">
                <div className="card-title">{card.title}</div>
                <div className="card-desc">{card.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="service-pagination">
          {serviceCards.map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
