// Results.js
import React from 'react';
import './Results.css';

const Results = () => {
  // Sample data for results
  const results = [
    {
      id: 1,
      image: "images/game1.jpg",
      matchday: "Matchday 6",
      homeTeam: "Gachie sc ",
      awayTeam: "Derby Fc",
      results:"2-1",
      date: "2024-03-11",
    },
    {
      id: 2,
      image: "images/game1.jpg",
      matchday: "Matchday 5",
      homeTeam: "Derby Fc",results:"0-0",
      awayTeam: " Huruma SC",
      date: "2024-03-05",
    },
    {
      id: 3,
      image: "images/md.jpg",
      matchday: "Matchday 4",
      homeTeam: "LSA Fc ",results:"2-4",
      awayTeam: "derby fc",
      date: "2024-02-19",
    },
    // Add more result objects as needed
  ];

  return (
    <div>
      <h2>Previous Games</h2>
      <div className="results-container">
        {results.map((result) => (
          <div key={result.id} className="result-card">
            <img src={result.image} alt='' className="result-image" />
            <div className="result-details">
              <h3>{result.matchday}</h3>
              <div className='results'><p>{result.homeTeam}</p>
              <p className='pr'> {result.results}</p>
              <p>{result.awayTeam}</p></div>
              <p>Date: {result.date}</p>
              <button className="review-button">Review</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
