// NextGame.js
import React from 'react';
import './NextGames.css';

const NextGame = () => {
  // Sample data for next games
  const nextGames = [
    {
      id: 1,
      date: "THU 24th JUNE 2024",
      type: "County League",
      homeTeamLogo: "images/logo.jpg",
      homeTeamName: "Home Team 1",
      awayTeamLogo: "images/awaylogo.jpg",
      awayTeamName: "Away Team 1",
      time: "15:00",
    },
    {
      id: 1,
      date: "THU 24th JUNE 2024",
      type: "County League",
      homeTeamLogo: "images/logo.jpg",
      homeTeamName: "Home Team 1",
      awayTeamLogo: "images/awaylogo.jpg",
      awayTeamName: "Away Team 1",
      time: "15:00",
    },{
      id: 1,
      date: "THU 24th JUNE 2024",
      type: "County League",
      homeTeamLogo: "images/logo.jpg",
      homeTeamName: "Home Team 1",
      awayTeamLogo: "images/awaylogo.jpg",
      awayTeamName: "Away Team 1",
      time: "15:00",
    },{
      id: 1,
      date: "THU 24th JUNE 2024",
      type: "County League",
      homeTeamLogo: "images/logo.jpg",
      homeTeamName: "Home Team 1",
      awayTeamLogo: "images/awaylogo.jpg",
      awayTeamName: "Away Team 1",
      time: "15:00",
    },{
      id: 1,
      date: "THU 24th JUNE 2024",
      type: "County League",
      homeTeamLogo: "images/logo.jpg",
      homeTeamName: "Home Team 1",
      awayTeamLogo: "images/awaylogo.jpg",
      awayTeamName: "Away Team 1",
      time: "15:00",
    },
  ];

  return (
    <div className="next-game-container">
      {nextGames.map((game) => (
        <div key={game.id} className="next-game-card">
          <div className="game-details">
            <p>{game.date}</p>
            <p>{game.type}</p>
           
          </div>
          <div className="team-details">
            <div className="team-logo">
              <img src={game.homeTeamLogo} alt={game.homeTeamName} />
            </div>
            <p className='time'>{game.time}</p>
            <div className="team-logo">
              <img src={game.awayTeamLogo} alt='' />
            </div>
          </div>
          <button className="match-center-button">Match Center</button>
        </div>
      ))}
    </div>
  );
};

export default NextGame;
