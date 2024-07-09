import React from "react";
import "./ProjectItemCSS.css";

const Projectitem = (props) => {
  const { sourceCodeLink, deployedLink, name, description, languages } = props;
  return (
    <>
      <div className="project-item">
        <div className="project-links">
          <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-code-branch project-icon"></i>
          </a>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-globe project-icon"></i>
          </a>
        </div>
        <h3 className="project-name">{name}</h3>
        <p className="project-description">
          <strong>About :</strong>
          {description}
        </p>
        <strong>
          <p className="project-languages">Languages: {languages}</p>
        </strong>
      </div>
    </>
  );
};

export default Projectitem;
