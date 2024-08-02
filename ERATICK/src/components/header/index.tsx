import React from 'react';
import './style.scss';
import Logo from '../../assets/images/ERATICK_Logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="ERATICK" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            HOME 
          </li>
          <li className="header__nav-item">
            About Us 
          </li>
          <li className="header__nav-item">
            Products 
          </li>
          <li className="header__nav-item">Gallery</li>
          <li className="header__nav-item"> </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
