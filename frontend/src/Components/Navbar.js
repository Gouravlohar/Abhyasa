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
          Abhyasa <span className="navbar-sign"></span>
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
            <Link to="#services" className="navbar-links">
              Services
            </Link>
          </li>
          <li>
            <Link to="#about" className="navbar-links">
              About
            </Link>
          </li>
          <li>
            <Link to="#exam" className="navbar-links">
              Take Exam
            </Link>
          </li>
          <li>
            <Link to="#teams" className="navbar-links">
              Teams
            </Link>
          </li>
        </ul>
  
        <Link to="/login"><button
          className="navbar-btn"
          type="button"
          onClick={handleLoginBtnClick}
        >
          <FontAwesomeIcon icon={faUser} /> Login
        </button></Link>
  
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
              <Link onClick={openNav} to="#services">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="#about">
                About
              </Link>
            </li>
          
            <li>
              <Link onClick={openNav} to="#teams">
                Teams
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="#contact">
                Contact
              </Link>
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