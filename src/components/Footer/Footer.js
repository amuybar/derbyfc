// Footer.js
import React from 'react';
import LinkSection from '../LinkSection/LinkSection';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Links</h4>
          <LinkSection />
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <SocialMediaLinks />
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@derbyfc.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Derby FC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
