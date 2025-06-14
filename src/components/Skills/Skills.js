import React from "react";
import { motion } from "framer-motion";
import "./SkillsCSS.css"; // Make sure CSS uses --skills-* variables

const skills = {
  "Programming Languages": [
    { name: "C", icon: "C", color: "#00599C", textColor: "#fff" },
    { name: "C++", icon: "C++", color: "#004482", textColor: "#fff" },
    { name: "HTML", icon: "H", color: "#e34f26", textColor: "#fff" },
    { name: "CSS", icon: "C", color: "#1572b6", textColor: "#fff" },
    { name: "JavaScript", icon: "JS", color: "#f7df1e", textColor: "#000" },
  ],
  "Relevant Courses": [
    { name: "Data Structures", icon: "🧩", color: "#1abc9c", textColor: "#fff" },
    { name: "Algorithms", icon: "🧠", color: "#16a085", textColor: "#fff" },
    { name: "OOPS", icon: "📦", color: "#3498db", textColor: "#fff" },
    { name: "DBMS", icon: "🗃️", color: "#9b59b6", textColor: "#fff" },
    { name: "OS", icon: "💻", color: "#e67e22", textColor: "#fff" },
  ],
  "Frameworks": [
    { name: "Node.js", icon: "Node", color: "#3c873a", textColor: "#fff" },
    { name: "React.js", icon: "⚛️", color: "#61dafb", textColor: "#000" },
    { name: "Next.js", icon: "NX", color: "#000", textColor: "#fff" },
    { name: "Mongoose", icon: "MG", color: "#800000", textColor: "#fff" },
    { name: "Express", icon: "Ex", color: "#444", textColor: "#fff" },
    { name: "Bootstrap", icon: "B", color: "#563d7c", textColor: "#fff" },
    { name: "Tailwind CSS", icon: "TW", color: "#38b2ac", textColor: "#fff" },
    { name: "npm Packages", icon: "npm", color: "#cb3837", textColor: "#fff" },
  ],
  "Developer Tools": [
    { name: "MongoDB", icon: "🍃", color: "#13aa52", textColor: "#fff" },
    { name: "Postman", icon: "📬", color: "#ff6c37", textColor: "#fff" },
    { name: "Thunder Client", icon: "⚡", color: "#7f8c8d", textColor: "#fff" },
    { name: "VS Code", icon: "VS", color: "#007acc", textColor: "#fff" },
    { name: "Git", icon: "Git", color: "#f34f29", textColor: "#fff" },
    { name: "GitHub", icon: "GH", color: "#171515", textColor: "#fff" },
    { name: "Redux Toolkit", icon: "RTK", color: "#764abc", textColor: "#fff" },
    { name: "OpenAI", icon: "🧠", color: "#10a37f", textColor: "#fff" },
  ], "APIs & Integrations": [
    { name: "REST APIs", icon: "API", color: "#27ae60", textColor: "#fff" },
    { name: "OpenAI API", icon: "🔮", color: "#10A37F", textColor: "#fff" },
    { name: "Twilio", icon: "📡", color: "#F22F46", textColor: "#fff" },
    { name: "WebSockets", icon: "🔌", color: "#2C3E50", textColor: "#fff" },
    { name: "Webhooks", icon: "🔄", color: "#8E44AD", textColor: "#fff" },
    { name: "ngrok", icon: "🌐", color: "#1F1F1F", textColor: "#fff" },
  ],
  "Soft Skills": [
    { name: "Adaptability", icon: "🌱", color: "#16a085", textColor: "#fff" },
    { name: "Problem-solving", icon: "🧩", color: "#2980b9", textColor: "#fff" },
    { name: "Teamwork", icon: "🤝", color: "#27ae60", textColor: "#fff" },
    { name: "Communication", icon: "💬", color: "#8e44ad", textColor: "#fff" },
    { name: "Leadership", icon: "🧭", color: "#c0392b", textColor: "#fff" },
    { name: "Time Management", icon: "⏳", color: "#e67e22", textColor: "#fff" },
    { name: "Enthusiasm", icon: "🔥", color: "#f39c12", textColor: "#000" },
    { name: "Critical Thinking", icon: "🧠", color: "#2c3e50", textColor: "#fff" },
  ],
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  },
  hover: {
    y: -10,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

export default function SkillGrid() {
  return (
    <div id="Skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <i className="fa fa-cogs" aria-hidden="true"></i> Skills
      </motion.h2>

      <div className="skills-list">
        {Object.entries(skills).map(([category, skillItems], i) => (
          <div className="skill-category" key={category}>
            <h3 className="category-title">{category}</h3>
            <div className="skill-grid">
              {skillItems.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ amount: 0.2 }}
                  className="skill-item group"
                >
                  <div className="skill-card">
                    <div className="corner-br-h"></div>
                    <div className="corner-br-v"></div>

                    <motion.div
                      className="skill-icon"
                      style={{
                        backgroundColor: skill.color,
                        color: skill.textColor
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="skill-name">{skill.name}</div>

                    {/* Animated top-left & bottom-right corners */}
                    <div className="corner-decor">
                      <div className="corner top-left-h" />
                      <div className="corner top-left-v" />
                      <div className="corner bottom-right-h" />
                      <div className="corner bottom-right-v" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
