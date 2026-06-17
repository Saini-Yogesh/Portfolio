import React from "react";
import "./ContactCSS.css";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">YOGESH SAINI</div>
            <div className="brand-subtitle">Full-Stack Developer & Data Engineer</div>
          </div>

          <div className="footer-icons">
            <p className="footer-find-text">You can find me here✌</p>
            <div className="icon-links">
              <a
                href="https://www.linkedin.com/in/yogesh-saini-203153265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin footer-icon"></i>
              </a>
              <a
                href="https://github.com/Saini-Yogesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github footer-icon"></i>
              </a>
              <a href="mailto:yogesh.saini4002@gmail.com">
                <i className="fa-solid fa-envelope footer-icon"></i>
              </a>
              <a
                href="https://codolio.com/profile/yogesh_1___"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-user footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-border">
          <p className="footer-text">
            {new Date().getFullYear()} ❤️ © Designed and built by Yogesh Saini.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
