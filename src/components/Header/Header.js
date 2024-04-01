// Header.js
import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate=useNavigate();


  const handleRegister = () => {
    navigate('/register')
    
  };
  const handleLogin = () => {
    navigate('/login')}

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="header">
      <div className="left">
        <img src="images/logo.jpg" alt="" className="logo" />
      </div>
      <div className="right">
        <div className="icon">
          <FaSearch />
        </div>
        <div className="icon" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
        {showMenu && (
          <div className="dropdown-menu">
            <div className="close-button" onClick={closeMenu}>
              <FaTimes />
            </div>
            <ul>
              <h2>About The Club</h2>
              <Link className='link-btn' to='/about' ><li>About Derby FC</li></Link>
              <Link className='link-btn' to='/info' ><li>General Information</li></Link>
              <Link className='link-btn' to='/clubpatners' ><li>Club Partners</li></Link>
              <Link className='link-btn' to='/careers' ><li>Careers</li></Link>
              <Link className='link-btn' to='/about' ><li>Contact Us</li></Link>
              
              
            </ul>
            <div className="bottom-buttons">
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleRegister}>Register</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
