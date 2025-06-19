import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <h2 className="footer-logo">Nutrihub</h2>
          <p className="footer-description">
            Your trusted partner in personalized nutrition. Helping you live healthier with simple, science-backed diet plans.
          </p>
          <div className="contact-icons">
            <a href="https://maps.google.com/?q=Ujjain,MadhyaPradesh" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Ujjain, Madhya Pradesh</span>
            </a>
            <a href="tel:+919301902225">
              <FontAwesomeIcon icon={faPhone} />
              <span>+91-9301902225</span>
            </a>
            <a href="mailto:megha.chandel@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>megha.chandel@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#specialities">Specialities</a></li>
              <li><a href="#consultation">Book Appointment</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="link-group">
            <h3>Follow Us</h3>
            <ul>
              <div className="social-icons">
                <a href="https://www.youtube.com/@dieticianmeghachandel5061" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://www.instagram.com/dieticianmegha/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://wa.me/9301902225" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://www.facebook.com/dieticianmegha/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Nutrihub. All rights reserved.
      </div>
    </footer>
  );
}
