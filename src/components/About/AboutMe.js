import React from "react";
import "./AboutMeCSS.css";
import profileImage from "../../images/myPhoto2.jpg";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <div id="AboutMe" className="about-section">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1>
            <i className="fa-regular fa-user"></i> About Me
          </h1>
          <p>
            Hi, I'm <b style={{ color: '#4a90e2', fontSize: "1.2em" }}>Yogesh Saini</b>.
            I'm a web developer with a passion for
            creating dynamic and responsive web applications. With a strong
            background in the MERN stack and a keen eye for design, I enjoy
            bringing ideas to life in the browser. My journey in web development
            started with a curiosity for how websites are built, and it has
            evolved into a fulfilling career where I get to solve interesting
            problems every day.
          </p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 80,
            damping: 11
          }}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            draggable="false"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
