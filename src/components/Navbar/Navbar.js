import React from "react";
import "./NavbarCSS.css";
import { useState } from "react";
import logo from "../logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/Portfolio">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <a href="#AboutMe">About Me</a>
          <a href="#Education">Education</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Achievement">Achievement</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="navbar-menu-icon" onClick={handleMenuToggle}>
          ☰
        </div>
      </nav>
    </>
  );
};

export default Navbar;
