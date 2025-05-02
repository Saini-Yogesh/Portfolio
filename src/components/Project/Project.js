import React from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";
import ContactList from "./Images/ContactList.png";
import eCommerceStore from "./Images/E-commerce-store.png";
import TripConnect from "./Images/TripConnect.png";
import SAMS from "./Images/SAMS.png";

const Project = () => {
  const projectData = [
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/Trip-connect",
      deployedLink: "https://saini-yogesh.github.io/Trip-connect/",
      name: "Trip-connect",
      description:
        "TripConnect is a platform designed to connect travelers who are planning to visit the same destination...",
      languages: "React JS | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT | Bcrypt",
      image: TripConnect,
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/E-Commerce-Store",
      deployedLink: "https://github.com/Saini-Yogesh/E-Commerce-Store",
      name: "E-Commerce-Store",
      description:
        "The E-Commerce Store is a full-stack web application designed to deliver a seamless online shopping experience...",
      languages: "React JS | Redux | Redux Toolkit | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT | Bcrypt | Tailwind CSS",
      image: eCommerceStore,
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/SAMS",
      deployedLink: "https://github.com/Saini-Yogesh/SAMS",
      name: "Students' Auditorium Management System (SAMS)",
      description:
        "Transforming traditional auditorium management, the Students' Auditorium Management System (SAMS) leverages C++ and OOP principles...",
      languages: "C++ | OOPS",
      image: SAMS,
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/Contact-list",
      deployedLink: "https://saini-yogesh.github.io/Contact-list/",
      name: "Contact List",
      description:
        "This project is a web application for managing a contact list with an autocomplete feature using a trie data structure...",
      languages: "HTML | CSS | Javascript | Trie Data structure",
      image: ContactList,
    },
  ];

  return (
    <>
      <div id="Projects" className="projects-section">
        <h2>
          <i className="fas fa-project-diagram"></i> Projects
        </h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <Projectitem
              key={project.id}
              index={index}
              name={project.name}
              description={project.description}
              languages={project.languages}
              image={project.image}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
