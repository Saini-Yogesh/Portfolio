import React from "react";
import { motion } from "framer-motion";
import "./EducationCSS.css";

const Education = () => {
  return (
    <div id="Education" className="education-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <i className="fa-solid fa-user-graduate"></i> Education
      </motion.h2>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <div className="education-row">
          <span className="institute">National Institute of Technology, Rourkela</span>
          <span className="location">Rourkela, India</span>
        </div>
        <div className="education-row">
          <span className="degree">B.Tech in Mechanical Engineering</span>
          <span className="year">2022 – 2026</span>
        </div>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="education-row">
          <span className="institute">Cleared JEE Main</span>
          <span className="location">Sikar, India</span>
        </div>
        <div className="education-row">
          <span className="degree">Admission at NIT Rourkela</span>
          <span className="year">AIR – 24,000</span>
        </div>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="education-row">
          <span className="institute">Modern Children Sr Sec School</span>
          <span className="location">Neem Ka Thana, Sikar, India</span>
        </div>
        <div className="education-row">
          <span className="degree">12th Grade</span>
          <span className="year">Intermediate – 95.20%, May 2021</span>
        </div>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="education-row">
          <span className="institute">Modern Children Sr Sec School</span>
          <span className="location">Neem Ka Thana, Sikar, India</span>
        </div>
        <div className="education-row">
          <span className="degree">10th Grade</span>
          <span className="year">High School – 75.50%, May 2019</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
