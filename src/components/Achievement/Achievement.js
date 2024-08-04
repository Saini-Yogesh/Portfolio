import React from "react";
import "./AchievementCSS.css";

const Achievement = () => {
  const achievementsData = [
    {
      text: "Received T-Shirt from GeeksforGeeks for solving 100 ”Problem of the Day” challenges on GeeksforGeeks.",
      link: "https://drive.google.com/file/d/1Sh4zaZrIoVNTQWBh-VdDWCR-Tf4u_UDh/view?usp=sharing",
    },
    {
      text: "Achieved a global rank of 982 out of 34,698 participants in LeetCode Biweekly Contest 135.",
      link: "https://leetcode.com/contest/biweekly-contest-135/ranking",
    },
    {
      text: "Solved 1,000+ DSA problems on LeetCode, GFG, Codeforces, and CodeChef.",
      link: "/",
    },
    {
      text: "LeetCode 1750+ maximum contest rating, top 10% globally.",
      link: "https://leetcode.com/u/yogesh_1___/",
    },
    {
      text: "CodeChef 1540+ maximum contest rating.",
      link: "https://www.codechef.com/users/yogesh_1_saini",
    },
    {
      text: "Codeforces 1200+ maximum contest rating.",
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
