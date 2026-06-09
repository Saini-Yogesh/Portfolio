import React from "react";
import { motion } from "framer-motion";
import "./CodingProfileCSS.css";

const CodingProfilesSection = () => {
  const codingProfiles = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/yogesh_1___/",
      icon: "https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png",
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/yogesh_1_saini",
      icon: "https://pbs.twimg.com/profile_images/1477930785537605633/ROTVNVz7_400x400.jpg",
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/yogesh_1___",
      icon: "https://play-lh.googleusercontent.com/_5YUQ0J5whp3KQ_ofkcjeB3nm-Si5GHEm1Xq37w3h7-BKA5iSzG2tLLgS7SKfOsf9EC2noGXgho9JLMMY__f=w240-h480-rw",
    },
    {
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/yogesh_1___/?ref=header_profile",
      icon: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
    },
    {
      name: "AtCoder",
      link: "https://atcoder.jp/users/yogesh_1___",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOKfQMWgupGFJsJbrlHLt3oea4hmgg6Qq-g&s",
    },
  ];

  return (
    <div id="Coding-profiles" className="coding-profiles-section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <i className="fa-solid fa-code"></i> My Programming Profiles
      </motion.h2>

      <motion.div
        className="coding-profiles-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "linear",
        }}
      >
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-profile-link"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1 * index,
            }}
          >
            <img
              draggable="false"
              src={profile.icon}
              alt={profile.name}
              className="coding-profile-icon"
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default CodingProfilesSection;
