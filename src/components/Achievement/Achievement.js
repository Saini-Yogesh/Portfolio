import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./AchievementCSS.css";

const achievementsData = [
  {
    text: (
      <>
        <span className="highlight2">Specialist</span> on Codeforces with a maximum rating of <span className="highlight1">1410+</span>.
      </>
    ),
    link: "https://codeforces.com/profile/yogesh_1___",
  },
  {
    text: (
      <>
        <span className="highlight2">Knight</span> at LeetCode with a maximum contest rating of <span className="highlight1">1874</span>, ranked in the top <span className="highlight1">5%</span> globally.
      </>
    ),
    link: "https://leetcode.com/u/yogesh_1___/",
  },
  {
    text: (
      <>
        <span className="highlight2">3-star(⭐)</span> on CodeChef with a maximum contest rating of <span className="highlight1">1660+</span>.
      </>
    ),
    link: "https://www.codechef.com/users/yogesh_1_saini",
  },
  {
    text: (
      <>
        Achieved a global rank of <span className="highlight1">982</span> out of <span className="highlight1">34,698</span> participants in LeetCode Biweekly Contest 135.
      </>
    ),
    link: "https://leetcode.com/contest/biweekly-contest-135/ranking/40/?region=global_v2",
  },
  {
    text: (
      <>
        Secured <span className="highlight1">50<sup>th</sup> place</span> globally in CodeChef Starters 185, among thousands of participants.
      </>
    ),
    link: "https://www.codechef.com/rankings/START185C?itemsPerPage=100&order=asc&page=1&search=yogesh_1_saini&sortBy=rank",
  },
  {
    text: (
      <>
        Solved <span className="highlight1">1,500+</span> DSA problems on LeetCode, GFG, Codeforces, and CodeChef.
      </>
    ),
    link: "https://codolio.com/profile/yogesh_1___",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Achievements = () => {
  return (
    <div id="Achievement" className="achievements-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-medal section-icon"></i> Achievements
      </motion.h2>

      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <i className="fa-solid fa-award achievement-icon"></i>
            <p className="achievement-text">
              {achievement.text}{" "}
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                [Link]
              </a>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;