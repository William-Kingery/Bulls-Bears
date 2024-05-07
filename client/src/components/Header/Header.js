import React, { useState } from "react"
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className="header">
         <h1 className="header__logo">Bulls & Bears</h1>
         <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="header__hamburger" onClick={toggleMenu}>
               <div className="header__ham-line"></div>
               <div className="header__ham-line"></div>
               <div className="header__ham-line"></div>
            </div>
            <ul className="header__dropdown">
               <li className="header__dropdown-item"><Link to="/News">News</Link></li>
               <li className="header__dropdown-item"><Link to="/Trending">Trending</Link></li>
               <li className="header__dropdown-item"><Link to="/Profile">Profile</Link></li>
            </ul>
         </div>
      </header>
  );
};

export default Header;


