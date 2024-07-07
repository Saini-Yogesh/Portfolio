import React from "react";
import "./AchievementCSS.css";

const Achievement = () => {
  const achievementsData = [
    {
      text: "Received T-Shirt from GeeksforGeeks for solving 100 ”Problem of the Day” challenges on GeeksforGeeks.",
      link: "https://drive.google.com/file/d/1Sh4zaZrIoVNTQWBh-VdDWCR-Tf4u_UDh/view?usp=sharing",
    },
    {
      text: "Global Rank: 786 in March 2024, Div 3, organised by CodeChef.",
      link: "https://drive.google.com/file/d/1X81t_d-zGJZBzDO2p2UHqqxiJWlhFfmL/view?usp=sharing",
    },
    {
      text: "LeetCode 1610+ maximum contest rating, top 20% globally.",
      link: "https://leetcode.com/u/yogesh_1___/",
    },
    {
      text: "CodeChef 1540+ maximum contest rating.",
      link: "https://www.codechef.com/users/yogesh_1_saini",
    },
    {
      text: "Codeforces 1160+ maximum contest rating.",
      link: "https://codeforces.com/profile/yogesh_1___",
    },
  ];

  return (
    <>
      <div id="Achievement" className="achievements-section">
        <h2>
          <i className="fa-solid fa-medal section-icon"></i> Achievements
        </h2>
        <div className="achievements-container">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="achievement-item">
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievement;
