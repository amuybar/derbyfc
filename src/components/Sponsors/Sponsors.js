// Sponsor.js
import React from 'react';
import './Sponsors.css';

const Sponsor = () => {
  // Sample data for sponsor logos
  const sponsors = [
    { id: 1, logo: 'images/sp.jpg', alt: 'Sponsor 1' },
    { id: 2, logo: 'images/sp.jpg', alt: 'Sponsor 2' },
    { id: 3, logo: 'images/sp.jpg', alt: 'Sponsor 3' },
    // Add more sponsors as needed
  ];

  return (
    <><h2>Sponsors</h2><div className="sponsor-container">
      {sponsors.map((sponsor) => (
        <img key={sponsor.id} src={sponsor.logo} alt='' className="sponsor-logo" />
      ))}
    </div></>
  );
};

export default Sponsor;
