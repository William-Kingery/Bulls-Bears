import React, { useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const page = useLocation();
   // set the open and close (military time)
   const openingBellTime = new Date().setHours(9, 30, 0, 0); 
   const closingBellTime = new Date().setHours(16, 0, 0, 0); 
   const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTimeRemaining(getTimeRemaining());
      }, 1000);
  
      return () => clearInterval(intervalId);
   }, []);
  
   // calculate the time remaining until the next bell (no arrow function/cant access)
   function getTimeRemaining() {
      const currentTime = new Date().getTime();
      let nextBellTime;
      let bellType;
      // check time
      if (currentTime < openingBellTime) {
         nextBellTime = openingBellTime;
         bellType = 'Opening Bell';
      } else if (currentTime < closingBellTime) {
         nextBellTime = closingBellTime;
         bellType = 'Closing Bell';
      } else {
        // calculate the time until next next bell (24hrs)
         nextBellTime = openingBellTime + 24 * 60 * 60 * 1000; 
         bellType = 'Opening Bell';
      }
      // set time breakpoint
      const timeRemaining = nextBellTime - currentTime;
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);
  
      return {
         bellType,
         hours: String(hours).padStart(2, '0'),
         minutes: String(minutes).padStart(2, '0'),
         seconds: String(seconds).padStart(2, '0'),
      };
   };

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
            <div className="header__countdown">
               <div className="header__container">
                  <h3 className="header__clockheader">{timeRemaining.bellType}</h3>
                  <time className="header__time">{timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}</time>
               </div>
            </div>
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


