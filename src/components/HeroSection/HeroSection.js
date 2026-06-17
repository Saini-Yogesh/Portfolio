import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import "./HeroSectionCSS.css";
import { motion } from "framer-motion";

const TechGlobe = lazy(() => import("../TechGlobe/TechGlobe"));

const TypingEffect = ({ text, speed, loop }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplayedText(text);
      return;
    }

    indexRef.current = 0;
    setDisplayedText("");

    let timeoutId;
    const intervalId = setInterval(() => {
      const nextIndex = indexRef.current + 1;

      if (nextIndex <= text.length) {
        indexRef.current = nextIndex;
        setDisplayedText(text.slice(0, nextIndex));
        return;
      }

      if (loop) {
        timeoutId = setTimeout(() => {
          indexRef.current = 0;
          setDisplayedText("");
        }, 2000);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [text, speed, loop]);

  return <motion.span>{displayedText}</motion.span>;
};

const HeroSection = () => {
  const heroRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const idleCallback =
      window.requestIdleCallback ||
      ((cb) => setTimeout(cb, 120));

    const cancelIdle =
      window.cancelIdleCallback ||
      ((id) => clearTimeout(id));

    const idleId = idleCallback(() => setShowGlobe(true), { timeout: 600 });

    return () => cancelIdle(idleId);
  }, [isInView]);

  return (
    <div>
      <div className="hero-section" ref={heroRef}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="availability-badge shine-button">
              <div className="ping-dot" />
              <span>Open to Full-Time Roles</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <TypingEffect text="Hi, I'm Yogesh." speed={200} loop={true} />
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            >
              I build things for the WEB
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            >
              Full-Stack Developer · Data Engineer · 2000+ DSA Problems Solved
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1.7 }}
            >
              <a
                href="https://drive.google.com/file/d/1-frlPpqVDPKqFLewu8O5xBCd-uHKyQO1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="join-button shine-button"
              >
                My Resume
              </a>
              <a
                href="mailto:yogesh.saini4002@gmail.com"
                className="contact-link shine-button"
              >
                Mail Me
              </a>
            </motion.div>
          </div>
          {showGlobe && (
            <Suspense fallback={<div className="tech-globe-placeholder" aria-hidden="true" />}>
              <TechGlobe />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
