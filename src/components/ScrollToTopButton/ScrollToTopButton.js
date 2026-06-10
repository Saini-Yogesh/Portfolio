import React, { useState, useEffect, useCallback } from "react";
import "./ScrollToTopButtonCSS.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        toggleVisibility();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", onScroll);
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-btn">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
