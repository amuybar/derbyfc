// AboutSummary.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutsum.css';


const AboutSummary = () => {
const navigate=useNavigate();


  const handleRegister = () => {
    navigate('/register')
    
  };
  const handleLogin = () => {
    navigate('/login')
    
  };
  const getAticket = () => {
    navigate('/aticket');
    
  };
  return (
    <div className='about-summary'>
      <h2>About Derby FC</h2>
      <p>Derby FC was founded in 2017 and is based in South B. The team trains at Police Band and is currently led by Head Coach Sam Ongeri.</p>
      <p>We compete in the county league, specifically Nairobi West Branch Zone C. </p>
      <p>In 2020, we were the Sub County League champions in Zone A. Additionally, we achieved the 2nd position out of 22 teams in the Moss League. In the 2018/19 season, we were the champions of the Maisha League in the Mbotela Zone.</p>
      <p>For more information, you can contact us at 0707813742.</p>
      <div className='cta-buttons'>
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
        <button onClick={getAticket}>Get A Matchday Ticket</button>
      </div>
    </div>
  );
};

export default AboutSummary;
