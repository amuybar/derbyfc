// LinkSection.js
import React from 'react';
import './LinkSection.css';

const LinkSection = () => {
  return (
    <div className="link-section">
      <a href="/news" className="link">News</a>
      <a href="/about" className="link">About</a>
      <a href="/faq" className="link">FAQ</a>
      <a href="/contact" className="link">Contact Us</a>
    </div>
  );
};

export default LinkSection;
