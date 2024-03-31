// CareerPage.js
import React from 'react';
import './CareerPage.css';
import AppBar from '../../components/AppBar/AppBar';

const CareerPage = () => {
  return (
    <div className="career-page">
      <AppBar/>
      <div className="content">
        <h1>Career Opportunities</h1>
        <p>We're always looking for talented individuals to join our team. Check back regularly for updates on open positions and recruitment events.</p>
        <h2>Open Positions</h2>
        <ul>
          <li>Position 1</li>
          <li>Position 2</li>
          {/* Add more open positions as needed */}
        </ul>
        <h2>Recruitment Events</h2>
        <p>Stay tuned for information about upcoming recruitment events and player trials.</p>
      </div>
    </div>
  );
};

export default CareerPage;
