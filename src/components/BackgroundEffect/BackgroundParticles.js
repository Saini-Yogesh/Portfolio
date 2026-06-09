import React from "react";
import "./BackgroundParticlesCSS.css";

const BackgroundParticles = () => {
  return (
    <div className="bg-mesh">
      {/* Animated gradient orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      {/* Dot grid overlay */}
      <div className="bg-grid" />

      {/* Soft vignette edges */}
      <div className="bg-vignette" />
    </div>
  );
};

export default BackgroundParticles;
