import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./AchievementCSS.css";

const Achievement = () => {
  const achievementsData = [
    {
      text: (
        <>
          Achieved a global rank of <span className="highlight">982</span> out of <span className="highlight">34,698</span> participants in LeetCode Biweekly Contest 135.
        </>
      ),
      link: "https://leetcode.com/contest/biweekly-contest-135/ranking",
    },
    {
      text: (
        <>
          Solved <span className="highlight">1,200+</span> DSA problems on LeetCode, GFG, Codeforces, and CodeChef.
        </>
      ),
      link: "/",
    },
    {
      text: (
        <>
          LeetCode <span className="highlight">1790+</span> maximum contest rating, top <span className="highlight">8%</span> globally.
        </>
      ),
      link: "https://leetcode.com/u/yogesh_1___/",
    },
    {
      text: (
        <>
          <span className="highlight">3-star</span> on CodeChef with a maximum contest rating of <span className="highlight">1630+</span>.
        </>
      ),
      link: "https://www.codechef.com/users/yogesh_1_saini",
    },
    {
      text: (
        <>
          <span className="highlight">Pupil</span> on Codeforces with a maximum rating of <span className="highlight">1360+</span>.
        </>
      ),
      link: "https://codeforces.com/profile/yogesh_1___",
    },
  ];

  return (
    <div id="Achievement" className="achievements-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-medal section-icon"></i> Achievements
      </motion.h2>

      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            initial={{ opacity: 0, x: -30 }} // Start from the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Move into place with full opacity
            transition={{
              duration: 0.6, // Shortened duration for a smoother animation
              type: "spring",
              stiffness: 100, // Increased stiffness for quicker spring movement
              damping: 25, // Slightly reduced damping for smoother motion
              delay: 0.15 * index, // Reduced delay between items
            }}
          >
            <i className="fa-solid fa-award achievement-icon"></i>
            <p className="achievement-text">
              {achievement.text}
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

export default Achievement;
