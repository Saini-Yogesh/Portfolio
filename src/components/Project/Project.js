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
        "TripConnect is a platform designed to connect travelers who are planning to visit the same destination. By matching travelers with similar itineraries, TripConnect helps users reduce travel expenses by sharing costs such as accommodation, transportation, and activities. Whether you're a solo traveler looking for company or simply want to make your trip more economical, TripConnect makes travel planning easier and more affordable.",
      languages:
        "React JS | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT | Bcrypt",
      image: TripConnect,
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/E-Commerce-Store",
      deployedLink: "https://github.com/Saini-Yogesh/E-Commerce-Store",
      name: "E-Commerce-Store",
      description:
        "The E-Commerce Store is a full-stack web application designed to deliver a seamless online shopping experience. Built using modern technologies like React JS, Redux Toolkit, Node.js, Express.js, and MongoDB, the platform features a responsive design and a user-friendly interface. Customers can browse, search, and filter products, manage their shopping cart, and make secure payments via PayPal. The application includes user authentication for secure access and personalized experiences. Additionally, an admin dashboard enables efficient management of products, orders, and users. Styled with Tailwind CSS, this project showcases expertise in frontend, backend, and state management, making it a robust foundation for scalable e-commerce solutions.",
      languages:
        "React JS | Redux | Redux Toolkit | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT | Bcrypt | Tailwind CSS",
      image: eCommerceStore,
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/SAMS",
      deployedLink: "https://github.com/Saini-Yogesh/SAMS",
      name: "Students' Auditorium Management System (SAMS)",
      description:
        "ransforming traditional auditorium management, the Students' Auditorium Management System (SAMS) leverages C++ and OOP principles to automate event organization. It empowers Show Managers to handle event details, seat allocation, ticketing, and sales tracking. SAMS streamlines the process, enhancing efficiency and customer satisfaction.",
      languages: "C++ | OOPS",
      image: SAMS,
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/Contact-list",
      deployedLink: "https://saini-yogesh.github.io/Contact-list/",
      name: "Contact List",
      description:
        "This project is a web application for managing a contact list with an autocomplete feature using a trie data structure. Users can add, delete, and call contacts, with names and phone numbers stored efficiently. The trie enables fast, dynamic search suggestions as users type in the search box.",
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
              key={index}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              name={project.name}
              description={project.description}
              languages={project.languages}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
