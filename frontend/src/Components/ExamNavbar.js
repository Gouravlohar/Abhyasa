import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function ExamNavbar() {
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
          <a href="/">
          Abhyasa <span className="navbar-sign"></span>
          </a>
        </h1>
  
        {/* Desktop */}
        <ul className="navbar-items">
          <li>
            <a >
              WELCOME TO EXAMPORTAL
            </a>
          </li>
          <li>
            <a href="/" className="navbar-links">
              Back To Home
            </a>
          </li>
          
        </ul>
  
        <a href="/login"><button
          className="navbar-btn"
          type="button"
          onClick={handleLoginBtnClick}
        >
          <FontAwesomeIcon icon={faUser} /> Login
        </button></a>
  
        {/* Mobile */}
        <div className={`mobile-navbar ${nav? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar-close">
            <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
          </div>
  
          <ul className="mobile-navbar-links">
            <li>
              <a onClick={openNav} to="/">
                Home
              </a>
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
  
  export default ExamNavbar;