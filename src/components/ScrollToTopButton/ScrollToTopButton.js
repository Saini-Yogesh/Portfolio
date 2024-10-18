import React, { useState, useEffect } from "react";
import "./ScrollToTopButtonCSS.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [topText, setTopText] = useState("");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => {
    setTopText(" Top");
  };

  const handleMouseLeave = () => {
    setTopText("");
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
          <p className="scroppTop-text">{topText}</p>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
