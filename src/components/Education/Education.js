import React from "react";
import "./EducationCSS.css";

const Education = () => {
  return (
    <>
      <div id="Education" className="education-section">
        <h2>
          <i className="fa-solid fa-user-graduate"></i> Education
        </h2>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">
              National Institute of Technology, Rourkela
            </span>
            <span className="location">Rourkela, India</span>
          </div>
          <div className="education-row">
            <span className="degree">B.Tech in Mechanical Engineering</span>
            <span className="year">2022 – 2026</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">Cleared JEE Main</span>
            <span className="location">Sikar,India</span>
          </div>
          <div className="education-row">
            <span className="degree">Admission at NIT Rourkela</span>
            <span className="year"> AIR – 24,000</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">Modern Children Sr Sec School</span>
            <span className="location">Neem Ka Thana, Sikar, India</span>
          </div>
          <div className="education-row">
            <span className="degree">12th Grade</span>
            <span className="year">Intermediate – 95.20%, May 2021</span>
          </div>
        </div>
        <div className="education-item">
          <div className="education-row">
            <span className="institute">Modern Children Sr Sec School</span>
            <span className="location">Neem Ka Thana, Sikar, India</span>
          </div>
          <div className="education-row">
            <span className="degree">10th Grade</span>
            <span className="year">High School – 75.50%, May 2019</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
