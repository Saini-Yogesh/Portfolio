import React, { useState } from "react";
import "./ExperienceCSS.css";

const Experience = () => {
  const experiences = [
    {
      role: "🧑‍💻 Technical Member",
      organization: "Algorithmic and Programming Society, NIT Rourkela",
      duration: "Nov 2022 - Present",
      details:
        "As a campus ambassador at Unstop, I have had the privilege of working in a collaborative team environment, dedicated to creating opportunities for students across various colleges. My role involves fostering a thriving student community, organizing workshops, and planning impactful events. This position has sharpened my leadership, organizational, and communication skills while instilling a deep sense of purpose in helping others succeed. In parallel, as a team member of the Algorithmic and Programming Society at NIT Rourkela, I actively contribute to the professional and technical growth of students. My responsibilities include coaching a group of aspiring programmers, guiding their progress, and ensuring they stay on track. Additionally, as a core event management team member, I play a vital role in organizing events that enhance learning and collaboration within the society. These experiences have been transformative, allowing me to blend technical expertise with leadership and community-building efforts to make a meaningful impact.",
    },
    {
      role: "🎓 Campus Ambassador",
      organization: "Unstop",
      duration: "Oct 2024 - Present",
      details:
        "Working as a campus ambassador at Unstop has been an incredible journey of learning and collaboration. Being part of a team dedicated to creating opportunities for students in our respective colleges has taught me the value of outreach and community-building. Our responsibilities range from organizing events and workshops to providing a supportive platform for students to grow and connect. The teamwork involved in planning and executing these initiatives has been an enriching experience, enhancing my organizational, communication, and leadership skills. At Unstop, I've realized the power of creating a community that empowers students to explore, learn, and excel. This role has not only allowed me to contribute to my college but also to develop a sense of purpose and fulfillment in helping others succeed.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="Experience" className="experience-section">
      <h2 className="section-title">
        <i className="fa-solid fa-business-time"></i> Experience
      </h2>
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{experience.role}</h3>
              <p className="organization">{experience.organization}</p>
              <span className="duration">{experience.duration}</span>
              <p className="details">
                {expanded[index]
                  ? experience.details
                  : `${experience.details.substring(0, 250)}...`}{" "}
                <span
                  className="toggle-button"
                  onClick={() => toggleExpanded(index)}
                  style={{ color: "#0078d4", cursor: "pointer" }}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
