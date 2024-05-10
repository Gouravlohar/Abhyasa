import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const [nav, setNav] = useState(false);
  
    const openNav = () => {
      setNav(!nav);
    };
  
    const handleLoginBtnClick = () => {
      // Add your login functionality here
    };
  
    return (
      <div className="navbar-section">
        <h1 className="navbar-title">
          <Link to="/">
          Abhyasa <span className="navbar-sign">+</span>
          </Link>
        </h1>
  
        {/* Desktop */}
        <ul className="navbar-items">
          <li>
            <Link to="/" className="navbar-links">
              Home
            </Link>
          </li>
          <li>
            <a href="#services" className="navbar-links">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="navbar-links">
              About
            </a>
          </li>
          <li>
            <a href="#exam" className="navbar-links">
              Take Exam
            </a>
          </li>
          <li>
            <a href="#teams" className="navbar-links">
              Teams
            </a>
          </li>
        </ul>
  
        <button
          className="navbar-btn"
          type="button"
          onClick={handleLoginBtnClick}
        >
          <FontAwesomeIcon icon={faUser} /> Login
        </button>
  
        {/* Mobile */}
        <div className={`mobile-navbar ${nav? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar-close">
            <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
          </div>
  
          <ul className="mobile-navbar-links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <a onClick={openNav} href="#services">
                Services
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#about">
                About
              </a>
            </li>
          
            <li>
              <a onClick={openNav} href="#teams">
                Teams
              </a>
            </li>
            <li>
              <a onClick={openNav} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
  
        {/* Hamburger Icon */}
        <div className="mobile-nav">
          <FontAwesomeIcon
            icon={faBars}
            onClick={openNav}
            className="hamb-icon"
          />
        </div>
      </div>
    );
  }
  
  export default Navbar;