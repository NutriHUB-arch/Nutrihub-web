import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Images/l.svg";
import txt from "../Images/text.svg";

export default function Navbar(props) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); 
    
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container custom-navbar">
        <div
          className="navbar-left"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          <img src={logo} alt="Logo Icon" className="navbar-logo" />
          <img src={txt} alt="Logo Text" className="navbar-logo2" />
        </div>
        <ul className="navbar-center">
          <li className="nav-item">
            <a
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
            >
              {props.menu}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeSection === "about" ? "active" : ""
              }`}
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("about");
              }}
            >
              {props.about}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeSection === "specialities" ? "active" : ""
              }`}
              href="#specialities"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("specialities");
              }}
            >
              {props.service}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeSection === "testimonials" ? "active" : ""
              }`}
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("testimonials");
              }}
            >
              {props.blog}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeSection === "faq" ? "active" : ""}`}
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("faq");
              }}
            >
              {props.faq}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeSection === "contact" ? "active" : ""
              }`}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              {props.contact}
            </a>
          </li>
        </ul>
        <div className="navbar-right">
          <button 
            className="nav-btn primary" 
            onClick={(e) => { 
              e.preventDefault();
              handleNavClick("consultation");  
            }}
          >
            Get Started
          </button>
          <button 
            className="nav-btn outline" 
            onClick={(e) => { 
              e.preventDefault();
              handleNavClick("about");  
            }}
          >
            Learn More
          </button>
        </div>
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <a
                  className={`mobile-nav-link ${activeSection === "home" ? "active" : ""}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("home");
                  }}
                >
                  {props.menu}
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  className={`mobile-nav-link ${activeSection === "about" ? "active" : ""}`}
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("about");
                  }}
                >
                  {props.about}
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  className={`mobile-nav-link ${activeSection === "specialities" ? "active" : ""}`}
                  href="#specialities"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("specialities");
                  }}
                >
                  {props.service}
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  className={`mobile-nav-link ${activeSection === "testimonials" ? "active" : ""}`}
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("testimonials");
                  }}
                >
                  {props.blog}
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  className={`mobile-nav-link ${activeSection === "faq" ? "active" : ""}`}
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("faq");
                  }}
                >
                  {props.faq}
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  className={`mobile-nav-link ${activeSection === "contact" ? "active" : ""}`}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  {props.contact}
                </a>
              </li>
            </ul>
            
            <div className="mobile-buttons">
              <button 
                className="mobile-btn primary" 
                onClick={(e) => { 
                  e.preventDefault();
                  handleNavClick("consultation");  
                }}
              >
                Get Started
              </button>
              <button 
                className="mobile-btn outline" 
                onClick={(e) => { 
                  e.preventDefault();
                  handleNavClick("about");  
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
