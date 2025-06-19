import React from "react";
import "./About.css";
import arrow from '../Images/Vector.svg'

export default function About() {
  return (
    <div id="about" className="about-section container-fluid py-5 px-3">
      <div className="stats-box row mx-auto mb-8 px-2 text-center ">
        <div className="col-6 col-md-3 stat-item">
          <h3>3+</h3>
          <p>Total Industries</p>
        </div>
        <div className="col-6 col-md-3 stat-item">
          <h3>150+</h3>
          <p>Active Candidates</p>
        </div>
        <div className="col-6 col-md-3 stat-item">
          <h3>1000+</h3>
          <p>Our Trusted Clients</p>
        </div>
        <div className="col-6 col-md-3 stat-item">
          <h3>18+ YRS</h3>
          <p>Years in Business</p>
        </div>
      </div>
      <h2 className="text-center fw-bold mb-3 ">About Nutrihub</h2>
      <p className="text-center text-muted mb-5 px-md-5">
        Nutrihub is your trusted partner in achieving optimal <br></br> health
        through personalized nutrition guidance
      </p>

      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 mb-4 px-4">
          <div className="vision-box p-4 rounded-4 shadow">
            <h4 className="title fw-semibold">Our Vision</h4>
            <p className="text">
              To empower individuals with evidence-based nutrition strategies
              that promote long-term health and wellness. We believe in
              sustainable lifestyle changes rather than quick fixes.
              <br />
              <em className="credential-link">
                Megha Chandel's Credentials
                <img src={arrow} alt="arrow icon" className="arrow-icon" />
              </em>

            </p>
          </div>
        </div>
        <div className="col-md-6 px-4">
          <ul className="list-unstyled mt-3 flex3">
            <li className="credential-item mb-3 p-3 rounded-3 shadow-sm">
              <div className="checkmark">✓</div> Certified Clinical Nutritionist
            </li>
            <li className="credential-item mb-3 p-3 rounded-3 shadow-sm">
              <div className="checkmark">✓</div> 18+ Years of Experience
            </li>
            <li className="credential-item mb-3 p-3 rounded-3 shadow-sm">
              <div className="checkmark">✓</div> Specialized in PCOS & Diabetes
              Management
            </li>
            <li className="credential-item mb-3 p-3 rounded-3 shadow-sm">
              <div className="checkmark">✓</div> 500+ Successful Transformations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
