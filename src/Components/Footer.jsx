import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Utility function to generate unique class names
const generateUniqueClassName = (baseName) => {
  return `${baseName}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

const Footer = () => {
  // Generate unique class names for each section
  const aboutClass = generateUniqueClassName("about-section");
  const quickLinksClass = generateUniqueClassName("quick-links-section");
  const servicesClass = generateUniqueClassName("services-section");
  const contactClass = generateUniqueClassName("contact-section");

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* About Section with Image */}
        <div className={aboutClass}>
          <img src="vend 1.png" alt="About Us" className="about-image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <br></br> Nulla posuere felis at urna tincidunt, sed sodales mi cursus.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={quickLinksClass}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className={servicesClass}>
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>SEO Optimization</li>
            <li>Marketing</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={contactClass}>
          <h3>Contact</h3>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 1234 Example St, City, Country</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
