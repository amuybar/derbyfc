// Header.js
import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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
              <li>About Derby FC</li>
              <li>General Information</li>
              <li>Club Partners</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
            <div className="bottom-buttons">
              <button>Login</button>
              <button>Register</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
