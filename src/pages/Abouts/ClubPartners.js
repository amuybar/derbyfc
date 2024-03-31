// ClubPartnerPage.js
import React from 'react';
import './ClubPartnerPage.css';
import AppBar from '../../components/AppBar/AppBar';

const ClubPartnerPage = () => {
  return (
    <div className="club-partner-page">
      <AppBar/>
      <div className="content">
        <h1>Club Partners and Donors</h1>
        <ul>
          <li>Partner 1</li>
          <li>Partner 2</li>
          <li>Donor 1</li>
          <li>Donor 2</li>
          {/* Add more partners and donors as needed */}
        </ul>
      </div>
    </div>
  );
};

export default ClubPartnerPage;
