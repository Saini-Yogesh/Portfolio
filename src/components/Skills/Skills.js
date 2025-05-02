import React from "react";
import "./SkillsCSS.css";
import { motion } from "framer-motion";

const skillsData = [
  {
    icon: "fa-regular fa-file-code",
    title: "Programming Languages",
    description: "C, C++, HTML, CSS, JavaScript",
  },
  {
    icon: "fa-solid fa-code",
    title: "Relevant Courses",
    description: "Data Structures And Algorithms (DSA), Object-Oriented Programming (OOPS), Database Management System (DBMS), Operating System (OS)",
  },
  {
    icon: "fa-brands fa-phoenix-framework",
    title: "Frameworks",
    description: "Node.js, React.js, Next.js, Mongoose, Express, Bootstrap, Tailwind CSS, REST APIs, npm Packages",
  },
  {
    icon: "fa-solid fa-wrench",
    title: "Developer Tools",
    description: "MongoDB, Postman, Thunder Client, VS Code, Git, GitHub, Redux and Redux Toolkit, OpenAI's",
  },
  {
    icon: "fa-solid fa-users",
    title: "Soft Skills",
    description: "Adaptability, Problem-solving, Teamwork, Communication, Leadership, Time Management, Enthusiasm, Critical Thinking",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};

const Skills = () => {
  return (
    <div id="Skills" className="skills-section">
      <h2>
        <i className="fa fa-cogs" aria-hidden="true"></i> Skills
      </h2>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
      >
        {skillsData.map((skill, i) => (
          <motion.div className="skill-item" variants={itemVariants} key={i}>
            <i className={`${skill.icon} skill-icon`}></i>
            <div className="skill-content">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
