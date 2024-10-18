import React from "react";
import "./CodingProfileCSS.css";

const CodingProfilesSection = () => {
  const codingProfiles = [
    {
      link: "https://leetcode.com/u/yogesh_1___/",
      icon: "https://cdn-1.webcatalog.io/catalog/leetcode/leetcode-social-preview.png?v=1714774949349",
    },
    {
      link: "https://www.codechef.com/users/yogesh_1_saini",
      icon: "https://pbs.twimg.com/profile_images/1477930785537605633/ROTVNVz7_400x400.jpg",
    },
    {
      link: "https://codeforces.com/profile/yogesh_1___",
      icon: "https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-social-preview.png?v=1714773964567",
    },
    {
      link: "https://www.geeksforgeeks.org/user/yogesh_1___/?ref=header_profile",
      icon: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
    },
    {
      link: "https://atcoder.jp/users/yogesh_1___",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOKfQMWgupGFJsJbrlHLt3oea4hmgg6Qq-g&s",
    },
  ];

  return (
    <div className="coding-profiles-section">
      <h2>
        <i className="fa-solid fa-code"></i> My Programming Profiles
      </h2>
      <div className="coding-profiles-container">
        {codingProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-profile-link"
          >
            <img
              src={profile.icon}
              alt={`${profile.platform} icon`}
              className="coding-profile-icon"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CodingProfilesSection;
