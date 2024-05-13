import React, { useState } from "react"
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const page = useLocation();

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };
 

   const handleLogout = () => {
      sessionStorage.removeItem('token');
      window.location.href = '/';
    };

   return (
      <header className="header">
         <Link className="header__link" to={"/home"}>
            <h1 className="header__logo">Bulls & Bears</h1>
         </Link>
         <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="header__hamburger" onClick={toggleMenu}>
               <div className="header__ham-line"></div>
               <div className="header__ham-line"></div>
               <div className="header__ham-line"></div>
            </div>
            <ul className={`header__dropdown ${isMenuOpen ? "open" : "hidden"}`}>
               {page.pathname !== "/home" && <li className="header__drop-item"><Link className="header__item-link" to="/home">Home</Link></li>}
               {page.pathname !== "/news" && <li className="header__drop-item"><Link className="header__item-link" to="/news">News</Link></li>}
               <li className="header__drop-item"><a className="header__item-link" href="/" onClick={handleLogout}>Logout</a></li>
            </ul>
         </div>
      </header>
   );


};

export default Header;


