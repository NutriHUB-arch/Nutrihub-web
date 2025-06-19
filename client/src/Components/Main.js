import './Main.css';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
export default function Main() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "specialities",
        "testimonials",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        let element;

        if (section === "home") {
          if (window.scrollY < 100) {
            setActiveSection("home");
            return;
          }
        } else {
          element = document.getElementById(section);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
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
    <div className="hero-section">
      <div className="hero-content">
        <div className="text-area">
          <h1 className="main-heading">
            Transform Your Health with <br />
            <span className="highlight-name"><p className='sparle'>Megha Chandel</p></span>
          </h1>
          <p className="subheading1">
            <div className="mc">Unlock your transformation with Megha Chandel!</div> As a certified nutrition expert with <b>18 years</b> of experience, she's guided over <b>1000+ clients</b> to remarkable results.
          </p>
        
          <ul className="benefits-list">
            <li>   Personal diet charts</li>
            <li>  Sustainable lifestyle changes</li>
            <li>  Visible results, healthy confidence</li>
            <li>  1-on-1 expert guidance</li>
          </ul>

          <div className="cta-buttons">
                <div className="socials">
                    <a href="https://www.youtube.com/@dieticianmeghachandel5061" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faYoutube} className="social-icon youtube" />
                    </a>
                    <a href="https://www.instagram.com/dieticianmegha/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
                    </a>
                    <a href="https://wa.me/9301902225" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp" />
                    </a>
                    <a href="https://www.facebook.com/dieticianmegha/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
                    </a>
                  </div>
          </div>
        </div>

        <div className="image-area">
          <div className="soft-background"></div>
          <img
            src={require('../Images/aunty.png')}
            alt="Megha Chandel"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
}
