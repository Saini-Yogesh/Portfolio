import React, { useState, useRef, useEffect, useContext } from "react";
import "./NavbarCSS.css";
import { ThemeContext } from "../../ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Logo from "./logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    setCurrentSection(href.replace("#", ""));
  };

  useEffect(() => {
    const updateCurrentSection = () => {
      const hash = window.location.hash.replace("#", "");
      setCurrentSection(hash);
    };

    updateCurrentSection(); // Initialize on mount

    window.addEventListener("hashchange", updateCurrentSection);
    return () => window.removeEventListener("hashchange", updateCurrentSection);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { label: "About Me", href: "#AboutMe" },
    { label: "Education", href: "#Education" },
    { label: "Skills", href: "#Skills" },
    { label: "Experience", href: "#Experience" },
    { label: "Projects", href: "#Projects" },
    { label: "Achievement", href: "#Achievement" },
    { label: "Coding Profiles", href: "#Coding-profiles" },
    { label: "Contact", href: "#Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <a className="logo" href="/">
          <img src={Logo} alt="Logo" className="logo-img" />
        </a>
        <div className="navbar-right">
          <div className={`navbar-center ${menuOpen ? "active" : ""}`} ref={menuRef}>
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                whileHover={{
                  scale: 1.1,
                  color: "#0dcaf0",
                  textShadow: "0 0 8px rgba(13, 202, 240, 0.8)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`nav-link-animated ${currentSection === link.href.replace("#", "") ? "active-link" : ""
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="navbar-right-icons">
            <motion.div
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ rotate: 20, scale: 1.2 }}
              whileTap={{ rotate: -20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {theme === "light" ? (
                <MdDarkMode className="theme-icon" title="Dark Mode" />
              ) : (
                <MdLightMode className="theme-icon" title="Light Mode" />
              )}
            </motion.div>

            {menuOpen ? (
              <AiOutlineClose className="navbar-menu-icon" onClick={handleMenuToggle} />
            ) : (
              <GiHamburgerMenu className="navbar-menu-icon" onClick={handleMenuToggle} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
