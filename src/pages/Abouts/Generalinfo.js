// GeneralInfoPage.js
import React from 'react';
import './GeneralInfoPage.css';
import AppBar from '../../components/AppBar/AppBar';

const GeneralInfoPage = () => {
  return (
    <div className="general-info-page">
      <AppBar/>
      <div className="content">
        <h1>General Information</h1>
        <p>Venue: Stadium Name</p>
        <p>Number of Employees: 50</p>
        <p>Training Locations: Training Center Name, Training Ground Name</p>
        <p>Club History: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod vestibulum lectus, eget tincidunt turpis mollis a.</p>
        {/* Add more information as needed */}
      </div>
    </div>
  );
};

export default GeneralInfoPage;
