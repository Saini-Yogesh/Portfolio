import React from "react";
import { motion } from "framer-motion";
import "./EducationCSS.css";

const educationData = [
  {
    institute: "National Institute of Technology, Rourkela",
    location: "Rourkela, India",
    degree: "B.Tech in Mechanical Engineering",
    year: "2022 – 2026",
  },
  {
    institute: "Cleared JEE Main",
    location: "Sikar, India",
    degree: "Admission at NIT Rourkela",
    year: "AIR – 24,000",
  },
  {
    institute: "Modern Children Sr Sec School",
    location: "Neem Ka Thana, Sikar, India",
    degree: "12th Grade",
    year: "Intermediate – 95.20%, May 2021",
  },
  {
    institute: "Modern Children Sr Sec School",
    location: "Neem Ka Thana, Sikar, India",
    degree: "10th Grade",
    year: "High School – 75.50%, May 2019",
  },
];

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

      {educationData.map((item, index) => (
        <motion.div
          key={index}
          className="education-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * (index + 1) }}
        >
          <div className="education-row">
            <span className="institute">{item.institute}</span>
            <span className="location">{item.location}</span>
          </div>
          <div className="education-row">
            <span className="degree">{item.degree}</span>
            <span className="year">{item.year}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
