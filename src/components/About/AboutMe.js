import React from "react";
import "./AboutMeCSS.css";
import { motion } from "framer-motion";

const profileImage = (process.env.PUBLIC_URL || "") + "/images/myPhoto2.jpg";

const AboutMe = () => {
  return (
    <>
      <div id="AboutMe" className="about-section">
        <div className="about-container">
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
              Hi, I'm <b style={{ color: 'var(--primary)', fontSize: "1.2em" }}>Yogesh Saini</b> —
              a <b>Mechanical Engineering</b> graduate from{" "}
              <b>NIT Rourkela</b> who discovered a deep passion for building
              software. Currently a <b>Data Engineering Intern at Vivriti Capital</b> and
              a <b>Freelance Full-Stack Developer</b>, I specialize in the MERN
              stack, PySpark, and crafting clean, responsive web applications.
              With <b>2,000+ DSA problems</b> solved across competitive programming
              platforms, I bring strong problem-solving skills to every project I build.
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
              alt="Yogesh Saini — Full Stack Web Developer, NIT Rourkela"
              draggable="false"
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
