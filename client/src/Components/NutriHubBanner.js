import React, { useState, useEffect } from "react";
import './NutriHubBanner.css';
import oldlogo from "../Images/oldlogo.png";

const NutriHubBanner = () => {
  const handleNavClick = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="banner-container">
      <div
        className="logo-section"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick("home");
        }}
      >
        <img src={oldlogo} alt="oldlogo Icon" className="nutrihub-logo" />
      </div>
      <div className="slogan">
        <h2>
          "<span className="highlight">From NutriHub's Legacy to Your Health Journey</span>"
        </h2>
        <p className="subtitle">Join 1000+ clients who have transformed their lives with personalized nutrition guidance from certified clinical nutritionist Megha Chandel</p>
      </div>
    </div>
  );
};

export default NutriHubBanner;
