// SocialMediaLinks.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons
import './SocialMediaLinks.css';

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <a href="https://www.facebook.com/">
        <FaFacebook className="icon facebook" />
      </a>
      <a href="https://twitter.com/">
        <FaTwitter className="icon twitter" />
      </a>
      <a href="https://www.instagram.com/">
        <FaInstagram className="icon instagram" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
