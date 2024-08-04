import React from "react";
import "./SkillsCSS.css";

const Skills = () => {
  return (
    <>
      <div id="Skills" className="skills-section">
        <h2>
          <i className="fa fa-cogs" aria-hidden="true"></i> Skills
        </h2>
        <div className="skills-container">
          <div className="skill-item">
            <i className="fa-regular fa-file-code skill-icon"></i>
            <div className="skill-content">
              <h3>Programming Languages</h3>
              <p> C++,HTML, CSS, JavaScript,</p>
            </div>
          </div>
          <div className="skill-item">
            <i className="fa-solid fa-code skill-icon"></i>
            <div className="skill-content">
              <h3>Relevant Courses</h3>
              <p>
                Data Structures And Algorithm(DSA), Object-oriented
                programming(OOPS), Database Management System(DBMS)
              </p>
            </div>
          </div>
          <div className="skill-item">
            <i className="fa-brands fa-phoenix-framework skill-icon"></i>
            <div className="skill-content">
              <h3>Frameworks & Developer Tools</h3>
              <p>React, VS Code, Git, GitHub, Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
