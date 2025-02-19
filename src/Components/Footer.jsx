// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <div className="about-us-image-placeholder">
    <img src="vend 1.png" alt="About Us" className="your-custom-class" />
</div>
          <div className="about-us-content">
   

            <p>
              Lorem Ipsum is simply dummy text <br></br> of the and typesetting
              industry. <br></br>Lorem Ipsum is dummy text of the printing.
            </p>
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/adposting">Post Ad</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <p>Wish List</p>
          <p>Login</p>
          <p>Submit a request</p>
          <p>Appointment</p>
          <p>Promotional Offers</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3> {/* Corrected heading */}
          <p>Pakistan</p>
          <p>0300000000000</p>
          <p>waleed@gmail.com</p> {/* Removed extra <> </> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
        <ul className="footer-bottom-links">
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;