// Contact.js
import React from 'react';
import './contact.css'
import AppBar from '../../components/AppBar/AppBar';
const Contact = () => {
  return (
    <div>
      <AppBar/>
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Phone Numbers</h3>
          <p>Main: 0707813742</p>
          <p>Alternate: 0123456789</p>
        </div>
        <div className="contact-item">
          <h3>Emails</h3>
          <p>General: info@derbyfc.com</p>
          <p>Support: support@derbyfc.com</p>
        </div>
        <div className="contact-item">
          <h3>Social Media</h3>
          <p>Facebook: <a href="https://www.facebook.com/derbyfc">Derby FC</a></p>
          <p>Twitter: <a href="https://twitter.com/derbyfc">Derby FC</a></p>
          <p>Instagram: <a href="https://www.instagram.com/derbyfc">Derby FC</a></p>
        </div>
        {/* Add more contact methods as needed */}
      </div>
    </div>
  );
};

export default Contact;
