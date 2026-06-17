import React from "react";
import { motion } from "framer-motion";
import "./SkillsCSS.css"; // Make sure CSS uses --skills-* variables

const skills = {
  Languages: [
    { name: "C++", icon: "C++", color: "#004482", textColor: "#fff" },
    { name: "Python", icon: "Py", color: "#3776AB", textColor: "#fff" },
    { name: "JavaScript", icon: "JS", color: "#f7df1e", textColor: "#000" },
    { name: "SQL", icon: "SQL", color: "#00758F", textColor: "#fff" },
    { name: "HTML", icon: "HTML", color: "#e34f26", textColor: "#fff" },
    { name: "CSS", icon: "CSS", color: "#1572b6", textColor: "#fff" },
  ],
  Frontend: [
    { name: "React.js", icon: "⚛️", color: "#61dafb", textColor: "#000" },
    { name: "Next.js", icon: "Next", color: "#000", textColor: "#fff" },
    { name: "Tailwind CSS", icon: "TW", color: "#38b2ac", textColor: "#fff" },
    { name: "Bootstrap", icon: "B", color: "#563d7c", textColor: "#fff" },
  ],
  Backend: [
    { name: "Node.js", icon: "Node", color: "#3c873a", textColor: "#fff" },
    { name: "Express.js", icon: "Ex", color: "#444", textColor: "#fff" },
    { name: "Mongoose", icon: "MG", color: "#800000", textColor: "#fff" },
  ],
  "Data Engineering": [
    { name: "PySpark", icon: "Spark", color: "#E25A1B", textColor: "#fff" },
    { name: "Databricks", icon: "DB", color: "#FF3621", textColor: "#fff" },
    { name: "Apache Airflow", icon: "💨", color: "#017A8A", textColor: "#fff" },
    { name: "ETL Pipelines", icon: "⚙️", color: "#2980b9", textColor: "#fff" },
    { name: "Delta Lake", icon: "🌊", color: "#008080", textColor: "#fff" },
    {
      name: "Data Quality Monitoring",
      icon: "📊",
      color: "#27ae60",
      textColor: "#fff",
    },
  ],
  "Cloud & Platforms": [
    { name: "AWS S3", icon: "S3", color: "#FF9900", textColor: "#000" },
    {
      name: "Amazon WorkSpaces",
      icon: "AWS",
      color: "#232F3E",
      textColor: "#fff",
    },
    { name: "Vercel", icon: "▲", color: "#000000", textColor: "#fff" },
    { name: "Netlify", icon: "◈", color: "#00C7B7", textColor: "#fff" },
  ],
  Databases: [
    { name: "MongoDB", icon: "🍃", color: "#13aa52", textColor: "#fff" },
    { name: "MySQL", icon: "🐬", color: "#4479A1", textColor: "#fff" },
  ],
  "Developer Tools": [
    { name: "Git", icon: "Git", color: "#f34f29", textColor: "#fff" },
    { name: "GitHub", icon: "GH", color: "#171515", textColor: "#fff" },
    { name: "VS Code", icon: "VS", color: "#007acc", textColor: "#fff" },
    { name: "Postman", icon: "📬", color: "#ff6c37", textColor: "#fff" },
    { name: "Thunder Client", icon: "⚡", color: "#7f8c8d", textColor: "#fff" },
  ],
  "APIs & Technologies": [
    { name: "Gemini API", icon: "♊", color: "#1a73e8", textColor: "#fff" },
    { name: "Twilio", icon: "📡", color: "#F22F46", textColor: "#fff" },
    { name: "WebSockets", icon: "🔌", color: "#2C3E50", textColor: "#fff" },
    { name: "Webhooks", icon: "🔄", color: "#8E44AD", textColor: "#fff" },
    { name: "ngrok", icon: "🌐", color: "#1F1F1F", textColor: "#fff" },
  ],
  "Soft Skills": [
    {
      name: "Problem Solving",
      icon: "🧩",
      color: "#2980b9",
      textColor: "#fff",
    },
    {
      name: "Team Collaboration",
      icon: "🤝",
      color: "#27ae60",
      textColor: "#fff",
    },
    { name: "Communication", icon: "💬", color: "#8e44ad", textColor: "#fff" },
    { name: "Leadership", icon: "🧭", color: "#c0392b", textColor: "#fff" },
  ],
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  hover: {
    y: -6,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
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
                  viewport={{ amount: 0.2, once: true }}
                  className="skill-item group"
                >
                  <div className="skill-card">
                    <div className="corner-br-h"></div>
                    <div className="corner-br-v"></div>

                    <motion.div
                      className="skill-icon"
                      style={{
                        backgroundColor: skill.color,
                        color: skill.textColor,
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
