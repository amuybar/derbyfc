// PlayersGallery.js
import React from 'react';

import './PlayersGallery.css';

const PlayersGallery = () => {
  // Sample data for players
  const players = [
    {
      id: 1,
      photo: "images/p1.jpg",
      name: "Player 1",
      age: 25,
      position: "Forward",
    },
    {
      id: 2,
      photo: "images/p2.jpg",
      name: "Player 2",
      age: 28,
      position: "Midfielder",
    },
    {
      id: 3,
      photo: "images/p3.jpg",
      name: "Player 3",
      age: 23,
      position: "Defender",
    },
    {
      id: 4,
      photo: "images/p2.jpg",
      name: "Player 4",
      age: 30,
      position: "Goalkeeper",
    },
  ];

  return (
    <div className="players-gallery">
      {players.slice(0, 4).map((player) => (
        <div key={player.id} className="player-card">
          <img src={player.photo} alt=''className="player-photo" />
          <div className="player-details">
            <h3>{player.name}</h3>
            <p>Age: {player.age}</p>
            <p>Position: {player.position}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default PlayersGallery;
