import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { FaGripLines } from 'react-icons/fa';
import './Navbar.css';

import { Link } from 'react-router-dom';



export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`App-navbar ${props.className}`} id='logged_nav' >
      <div id='logo'>{props.logo}</div>
      <button className='App-navbar-toggle' onClick={handleToggle}>
        {isOpen ? <FaGripLines /> : <FaBars />}

      </button>
      <ul className={`App-navbar-menu ${isOpen ? 'active' : ''}`}>
        <li className='App-navbar-item'><Link to="/Dashboard" className='App-navlink' >Home</Link></li>
        <li className='App-navbar-item'><Link to="/Dashboard/Lands" className='App-navlink' >Lands</Link></li>
        <li className='App-navbar-item'><Link to="/Dashboard/CropDetails" className='App-navlink' >Crops</Link></li>
        <li className='App-navbar-item'>Help</li>
        <li className='App-navbar-item'>
          <Link to="/Dashboard/ProfilePage" className='App-navlink' >
            <span className="material-symbols-outlined">
              account_circle
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  logo: `Logo`,
  navsec1: 'navsec1',
  navsec2: 'navsec2',
  navsec3: 'navsec3',
};
