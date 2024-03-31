// AppBar.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './AppBar.css';

const AppBar = ({ history }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="app-bar">
   
        <button className='arrow-button' onClick={goBack}><FaArrowLeft />Back</button>
     
      <p className="current-path">{location.pathname}</p>
    </div>
  );
};

export default AppBar;
