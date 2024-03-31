// Results.js
import React from 'react';
import './Results.css';

const Results = () => {
  // Sample data for results
  const results = [
    {
      id: 1,
      image: "images/md.jpg",
      matchday: "Matchday 1",
      opponent: "Opponent 1",
    },
    {
      id: 2,
      image: "images/md.jpg",
      matchday: "Matchday 2",
      opponent: "Opponent 2",
    },
    {
      id: 3,
      image: "images/md.jpg",
      matchday: "Matchday 3",
      opponent: "Opponent 3",
    },
    {
      id: 2,
      image: "images/md.jpg",
      matchday: "Matchday 2",
      opponent: "Opponent 2",
    },
    {
      id: 3,
      image: "images/md.jpg",
      matchday: "Matchday 3",
      opponent: "Opponent 3",
    },
    // Add more result objects as needed
  ];

  return (
    <div className="results-container">
      {results.map((result) => (
        <div key={result.id} className="result-card">
          <img src={result.image} alt=''className="result-image" />
          <div className="result-details">
            <h3>{result.matchday}</h3>
            <p>Opponent: {result.opponent}</p>
            <button className="review-button">Review</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
