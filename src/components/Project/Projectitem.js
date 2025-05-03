import { motion } from "framer-motion";
import "./ProjectItemCSS.css";

const Projectitem = (props) => {
  const { sourceCodeLink, deployedLink, name, description, languages, image, index, projectType } = props;
  const isImageLeft = index % 2 !== 0;

  return (
    <motion.div
      className={`project-card ${isImageLeft ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }}
    >
      <div className="project-content">
        <div className="project-details">
          <p style={{ color: "#ff0050" }}>— {projectType}</p>
          <h3 className="project-title">{name}</h3>
          <p>{description}</p>
          <div className="tech-tags">
            {languages.split("|").map((lang, tagIndex) => (
              <motion.span
                key={lang.trim()}
                className="tech-tag"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + tagIndex * 0.05 }}
              >
                {lang.trim()}
              </motion.span>
            ))}
          </div>
          <motion.a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn shine-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub ↗
          </motion.a>
          <motion.a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn shine-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo ↗
          </motion.a>
        </div>
        <div className="project-image">
          <div className="image-wrapper">
            <img src={image} alt={`${name} Screenshot`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projectitem;
