import React, { useState } from "react";
import "./ProjectItemCSS.css";

const Projectitem = (props) => {
  const { sourceCodeLink, deployedLink, name, description, languages } = props;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState("");

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription =
    description.length > 250
      ? description.substring(0, 250) + "..."
      : description;

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
  };

  return (
    <>
      <div className="project-item">
        <div className="project-links">
          <div className="icon-container">
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter("View Source Code")}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fa-solid fa-code-branch project-icon"></i>
            </a>
            {hoveredIcon === "View Source Code" && (
              <span className="icon-tooltip">View Source Code</span>
            )}
          </div>
          <div className="icon-container">
            <a
              href={deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter("View Deployed Version")}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fa-solid fa-globe project-icon"></i>
            </a>
            {hoveredIcon === "View Deployed Version" && (
              <span className="icon-tooltip">View Deployed Version</span>
            )}
          </div>
        </div>
        <h3 className="project-name">{name}</h3>
        <p className="project-description">
          <strong>About :</strong>
          {showFullDescription ? description : shortDescription}
          {description.length > 250 && (
            <span onClick={toggleDescription} className="see-more-link">
              {showFullDescription ? " See less" : " See more"}
            </span>
          )}
        </p>
        <strong>
          <p className="project-languages">Languages: {languages}</p>
        </strong>
      </div>
    </>
  );
};

export default Projectitem;
