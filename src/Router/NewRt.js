import React, { useState } from 'react';
import "./Hambrgr.css";
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
//import One from './../../../firstclass/src/InterviewPreparation/Routes/fileone';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <BrowserRouter>
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={menuOpen ? 'line line1 open' : 'line line1'}></div>
        <div className={menuOpen ? 'line line2 open' : 'line line2'}></div>
        <div className={menuOpen ? 'line line3 open' : 'line line3'}></div>
      </div>

      <div className={menuOpen ? 'menu open' : 'menu'}>
        <a href="#" onClick={closeMenu}>Home</a>
        <a href="#" onClick={closeMenu}>Hollywood</a>
        <a href="#" onClick={closeMenu}>Bollywood</a>
        <a href="#" onClick={closeMenu}>Technology</a>
        <NavLink onClick={closeMenu}>new</NavLink>
      </div>
    </div>

    
    </BrowserRouter>
    </>
  );
};

export default HamburgerMenu;