import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { ReactComponent as Addcircle } from '../../components/assets/Addcircle.svg';
import { ReactComponent as Wallet } from '../../components/assets/Wallet.svg';
import  Bellring  from '../../components/assets/Bellring.jpg';
import { ReactComponent as Arrow } from '../assets/doublearrow.svg';
import Ellipse from '../assets/Ellipse.png';
import badge from '../../components/assets/badge2.png';
import './Navbar.css'; 

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="navbar-container">
      <div className="brand-logo">
        <img src={logo} alt="Customer" />
      </div>
      <div className="navbar-content">
        <div className="brand-container">
          <span className="brand-name">Customer Expe </span>
          <span className="branding-name">rience Portal</span>
        </div>

        <div className="nav-links">
          
        <div className="nav-link add-circle">
          <Addcircle />
        </div>

        <div className="nav-link badge">
          <img src={badge} alt="login" />
        </div>

        <div className="nav-link wallet">
          <Wallet />
        </div>

        <div className="nav-link bell">
     
        </div>

          <div className="nav-link" id="special-item" onClick={toggleDropdown}>
            <img src={Ellipse} alt="login" />
            {isDropdownVisible && (
              <div className="dropdown-content">
                <a href="/">HOME</a>
                <a href="/">ABOUT</a>
                <a href="/">CONTACT</a>
              </div>
            )}
          </div>

          <div className="nav-link">
            <Arrow />
          </div>
        </div>
      </div>

     
    </nav>
  );
};

export default Navbar;