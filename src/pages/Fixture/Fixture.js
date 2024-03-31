// FixturePage.js
import React, { useState } from 'react';
import './FixturePage.css';
import AppBar from '../../components/AppBar/AppBar';
import Add from '../../components/Add/Add';

const FixturePage = () => {
  const [activeTab, setActiveTab] = useState('Fixture');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="fixture-page">
      <AppBar/>
      <Add/>
      <div className="tabs">
        <div
          className={activeTab === 'Fixture' ? 'active' : ''}
          onClick={() => handleTabClick('Fixture')}
        >
          Fixture
        </div>
        <div
          className={activeTab === 'Standings' ? 'active' : ''}
          onClick={() => handleTabClick('Standings')}
        >
          Standings
        </div>
        <div
          className={activeTab === 'Results' ? 'active' : ''}
          onClick={() => handleTabClick('Results')}
        >
          Results
        </div>
      </div>
      <div className="tab-content">
        {/* Render content based on active tab */}
        {activeTab === 'Fixture' && <FixtureTab />}
        {activeTab === 'Standings' && <StandingsTab />}
        {activeTab === 'Results' && <ResultsTab />}
      </div>
    </div>
  );
};

const FixtureTab = () => {
  // Dummy data for the Fixture tab
  const fixtures = [
    { id: 1, homeTeam: 'Team A', awayTeam: 'Team B', date: '2024-04-01' },
    { id: 2, homeTeam: 'Team C', awayTeam: 'Team D', date: '2024-04-05' },
    // Add more fixture data as needed
  ];

  return (
    <div className="tab-content">
      <h3>Fixture</h3>
      {/* Render fixture data */}
      <ul>
        {fixtures.map((fixture) => (
          <li key={fixture.id}>{fixture.homeTeam} vs {fixture.awayTeam} - {fixture.date}</li>
        ))}
      </ul>
    </div>
  );
};

const StandingsTab = () => {
  // Dummy data for the Standings tab
  const standings = [
    { id: 1, team: 'Team A', points: 20 },
    { id: 2, team: 'Team B', points: 18 },
    // Add more standings data as needed
  ];

  return (
    <div className="tab-content">
      <h3>Standings</h3>
      {/* Render standings data */}
      <ul>
        {standings.map((standing) => (
          <li key={standing.id}>{standing.team}: {standing.points} points</li>
        ))}
      </ul>
    </div>
  );
};

const ResultsTab = () => {
  // Dummy data for the Results tab
  const results = [
    { id: 1, homeTeam: 'Team A', awayTeam: 'Team B', score: '2-1' },
    { id: 2, homeTeam: 'Team C', awayTeam: 'Team D', score: '3-0' },
    // Add more results data as needed
  ];

  return (
    <div className="tab-content">
      <h3>Results</h3>
      {/* Render results data */}
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.homeTeam} {result.score} {result.awayTeam}</li>
        ))}
      </ul>
    </div>
  );
};

export default FixturePage;
