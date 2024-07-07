import React from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";

const Project = () => {
  const projectData = [
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/Trip-connect",
      deployedLink: "https://saini-yogesh.github.io/Trip-connect/",
      name: "Trip-connect",
      description:
        "TripConnect is a platform designed to connect travelers who are planning to visit the same destination. By matching travelers with similar itineraries, TripConnect helps users reduce travel expenses by sharing costs such as accommodation, transportation, and activities. Whether you're a solo traveler looking for company or simply want to make your trip more economical, TripConnect makes travel planning easier and more affordable.",
      languages: "HTML | CSS | JavaScript | React JS",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/Contact-list",
      deployedLink: "https://saini-yogesh.github.io/Contact-list/",
      name: "Contact List",
      description:
        "This project is a web application for managing a contact list with an autocomplete feature using a trie data structure. Users can add, delete, and call contacts, with names and phone numbers stored efficiently. The trie enables fast, dynamic search suggestions as users type in the search box.",
      languages: "HTML | CSS | Javascript | Trie Data structure",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/SAMS",
      deployedLink: "https://github.com/Saini-Yogesh/SAMS",
      name: "Students' Auditorium Management System (SAMS)",
      description:
        "ransforming traditional auditorium management, the Students' Auditorium Management System (SAMS) leverages C++ and OOP principles to automate event organization. It empowers Show Managers to handle event details, seat allocation, ticketing, and sales tracking. SAMS streamlines the process, enhancing efficiency and customer satisfaction.",
      languages: "C++ | OOPS",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/News-Monkey",
      deployedLink: "https://github.com/Saini-Yogesh/News-Monkey",
      name: "News-Monkey",
      description:
        "The News-Monkey app, developed using HTML, CSS, React, and JavaScript, delivers the latest news across various categories. Users can easily browse news articles from different fields, ensuring they stay informed on topics of interest. This app offers a responsive and dynamic user experience, leveraging React for seamless navigation and real-time updates.",
      languages: "HTML | CSS | JavaScript | React JS | APIs",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/TextUtils",
      deployedLink: "https://saini-yogesh.github.io/TextUtils/",
      name: "TextUtils App",
      description:
        "The TextUtils app, built with HTML, CSS, React, and JavaScript, provides essential text manipulation features. Users can convert text to uppercase or lowercase, copy text to the clipboard, use text-to-speech functionality, and remove extra spaces, all through an intuitive interface. This app leverages React for a dynamic user experience, ensuring efficient and user-friendly text processing.",
      languages: "HTML | CSS | JavaScript | React JS",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/QR-Code-Maker",
      deployedLink: "https://saini-yogesh.github.io/QR-Code-Maker/",
      name: "QR-Code-Maker",
      description:
        "Welcome to our QR Code generator! Developed with HTML, CSS, and JavaScript, our tool swiftly creates and download your customizes QR Codes.",
      languages: "HTML | CSS | JavaScript | APIs",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/Mini-ATM",
      deployedLink: "https://github.com/Saini-Yogesh/Mini-ATM",
      name: "Mini-ATM",
      description:
        "A C++ masterpiece replicating traditional ATM functions in a compact design. Check balances, withdraw cash, and view transaction history effortlessly. Update your details on-the-go. With Mini-ATM, banking fits in your pocket, bringing simplicity and sophistication to personal finance.",
      languages: "C++ | OOPS",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/Amazon-clone",
      deployedLink: "https://saini-yogesh.github.io/Amazon-clone/",
      name: "Amazon Clone",
      description:
        "This project is a static clone of the Amazon website, developed using HTML and CSS. It replicates the layout and design of the original site, including key features such as the navigation bar, product listings, and footer. Created for learning purposes, it showcases frontend development skills and proficiency in recreating complex web layouts.",
      languages: "HTML | CSS",
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
