import React from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";
import SGT from "./Images/SGT.png";
import eCommerceStore from "./Images/E-commerce-store.png";
import TripConnect from "./Images/TripConnect.png";
import FlowBuilder from "./Images/Flow-Builder.png";

const Project = () => {
  const projectData = [
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/WhatsApp-AI-Chatbot",
      deployedLink: "https://github.com/Saini-Yogesh/WhatsApp-AI-Chatbot",
      name: "WhatsApp AI Chatbot Flow Builder",
      description:
        "The WhatsApp AI Chatbot Flow Builder lets businesses automate chat flows using a drag-and-drop UI. It supports editable questions, dynamic responses, and Twilio integration. Clean UI, easy setup, and smooth automation.",
      languages: "JavaScript | React.js | React Flow | Node.js | Express.js | MongoDB | Mongoose | Twilio API | OpenAI API | APIs | Ngrok | WhatsApp Business API | MERN Stack",
      image: FlowBuilder,
      projectType: "AI-Integrated Full Stack App",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/Trip-connect",
      deployedLink: "https://saini-yogesh.github.io/Trip-connect/",
      name: "Trip-connect",
      description:
        "Trip-Connect is a platform that connects solo travelers to share expenses and enhance social interactions. Built with React.js, Node.js, Express.js, and MongoDB, it offers a responsive UI and real-time travel planning features for a seamless experience.",
      languages: "React JS | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT | Bcrypt | MERN Stack",
      image: TripConnect,
      projectType: "Real-Time Full Stack Travel App",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/segment-tree-visualization",
      deployedLink: "https://segment-tree-visualization.vercel.app/",
      name: "Segment Tree Visualizer",
      description:
        "The Segment Tree Visualizer is a web-based application built using Next.js that provides an interactive way to understand and visualize different types of segment trees. This project showcases efficient data structure operations and dynamic visualizations.",
      languages: "Next.js | D3.js | JavaScript | HTML | CSS | Segment Tree Algorithm",
      image: SGT,
      projectType: "Advanced DSA Visualizer",
    },
    {
      sourceCodeLink: "https://github.com/Saini-Yogesh/E-Commerce-Store",
      deployedLink: "https://github.com/Saini-Yogesh/E-Commerce-Store",
      name: "E-Commerce-Store",
      description:
        "E-Commerce Website is a modern shopping platform built with React, Node.js, Express.js, and MongoDB. It features user authentication, product browsing, shopping cart, secure payments (PayPal/Stripe), and an admin dashboard for managing inventory and orders. With a responsive design and seamless experience, it ensures smooth transactions.",
      languages: "React JS | Redux | Redux Toolkit | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT | Bcrypt | Tailwind CSS | MERN Stack",
      image: eCommerceStore,
      projectType: "MERN-Based E-Commerce Platform",
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
              projectType={project.projectType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
