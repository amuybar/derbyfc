import React from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Results from './components/Results/Results';
import NextGames from './components/NextGames/NextGames';
import PlayersGallery from './components/PlayersGallery/PlayersGallery';
import News from './components/News/News';
import Sponsors from './components/Sponsors/Sponsors';

import Footer from './components/Footer/Footer';
import './App.css';
import Add from './components/Add/Add';
import AboutSummary from './components/about/AboutSummary';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Add/>
      <AboutSummary/>
      <Add/>
      <Results />
      <Add/>
      <NextGames />
      <Add/>
      <PlayersGallery />
      <Add/>
      <News />
      <Add/>
      <Sponsors />
      <Add/>
     
      <Footer /> 
    </div>
  );
}

export default App;
