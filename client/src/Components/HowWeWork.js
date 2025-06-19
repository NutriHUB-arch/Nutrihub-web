import React from "react";
import "./HowWeWork.css";

const steps = [
  {
    number: 1,
    title: "Get Started",
    description: "Schedule a detailed consultation to assess your needs",
  },
  {
    number: 2,
    title: "Select Package",
    description: "Choose the nutrition plan that fits your goals and budget",
  },
  {
    number: 3,
    title: "Get Your Plan",
    description: "Receive your personalized nutrition and meal plan",
  },
  {
    number: 4,
    title: "Track Progress",
    description: "Regular follow-ups and support to ensure success",
  },
];

const HowWeWork = () => {
  return (
    <section className="how-we-work-container">
      <h2 className="how-we-work-title">How We Work</h2>
      <p className="how-we-work-subtitle">Simple steps to transform your health</p>
      <div className="how-we-work-steps">
        {steps.map((step) => (
          <div className="step" key={step.number}>
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
