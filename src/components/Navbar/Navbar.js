import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import "./NavbarCSS.css";
import { ThemeContext } from "../../ThemeContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";

const Logo = (process.env.PUBLIC_URL || "") + "/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

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

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    setCurrentSection(href.replace("#", ""));
  };

  // Scroll-based active section tracking via IntersectionObserver
  const observerRef = useRef(null);

  const sectionIds = links.map((l) => l.href.replace("#", ""));

  const handleIntersect = useCallback((entries) => {
    // Find the entry with the largest intersection ratio
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length > 0) {
      setCurrentSection(visible[0].target.id);
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.25, 0.5],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sectionIds, handleIntersect]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar">
        <a className="logo" href="/Portfolio">
          <img
            src={Logo}
            alt="Yogesh Saini Portfolio"
            className="logo-img"
            width={48}
            height={48}
            decoding="async"
            fetchPriority="high"
          />
        </a>
        <div className="navbar-right">
          <div
            className={`navbar-center ${menuOpen ? "active" : ""}`}
            ref={menuRef}
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                whileHover={{
                  scale: 1.05,
                  color: "var(--primary)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`nav-link-animated ${
                  currentSection === link.href.replace("#", "")
                    ? "active-link"
                    : ""
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
              <AiOutlineClose
                className="navbar-menu-icon"
                onClick={handleMenuToggle}
                aria-label="Close menu"
              />
            ) : (
              <GiHamburgerMenu
                className="navbar-menu-icon"
                onClick={handleMenuToggle}
                aria-label="Open menu"
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
