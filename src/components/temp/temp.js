import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./temp.css";

const iconTextures = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/railway/railway-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg",
];

const SkillTagCloud = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = containerRef.current;
    const scn = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(75, 1, 1, 1000);
    const rndr = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const grp = new THREE.Group();
    const ldr = new THREE.TextureLoader();

    const icons = iconTextures;
    const sps = [];
    const r = 27, s = 6;

    rndr.setSize(375, 375);
    canvas.appendChild(rndr.domElement);

    icons.forEach((p, i) => {
      ldr.load(p, (t) => {
        t.magFilter = THREE.NearestFilter;
        t.minFilter = THREE.NearestFilter;
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t }));
        const phi = Math.acos(-1 + (2 * i) / icons.length);
        const theta = Math.sqrt(icons.length * Math.PI) * phi;
        const aspect = t.image.width / t.image.height;
        sp.scale.set(s * aspect, s, 1);

        sp.position.set(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        );
        grp.add(sp);
        sps.push(sp);
      });
    });

    scn.add(grp);
    cam.position.z = 50;

    const ry = new THREE.Raycaster();
    let canvasRect = rndr.domElement.getBoundingClientRect();

    const updateCanvasRect = () => {
      canvasRect = rndr.domElement.getBoundingClientRect();
    };

    const handleClick = (e) => {
      if (
        e.clientX >= canvasRect.left &&
        e.clientX <= canvasRect.right &&
        e.clientY >= canvasRect.top &&
        e.clientY <= canvasRect.bottom
      ) {
        ry.setFromCamera(
          {
            x: (2 * (e.clientX - canvasRect.left)) / 375 - 1,
            y: (2 * -(e.clientY - canvasRect.top)) / 375 + 1,
          },
          cam
        );
        const it = ry.intersectObjects(sps)[0];
        if (it) grp.attach(it.object);
      }
    };

    // Cursor rotation
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let rotationSpeed = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseMove = (e) => {
      if (
        e.clientX >= canvasRect.left &&
        e.clientX <= canvasRect.right &&
        e.clientY >= canvasRect.top &&
        e.clientY <= canvasRect.bottom
      ) {
        if (isDragging) {
          const dx = e.clientX - prevMouse.x;
          const dy = e.clientY - prevMouse.y;
          rotationSpeed.y = dx * 0.005;
          rotationSpeed.x = dy * 0.005;
          grp.rotation.y += rotationSpeed.y;
          grp.rotation.x += rotationSpeed.x;
          prevMouse = { x: e.clientX, y: e.clientY };
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging) {
        grp.rotation.y += 0.005;
      }
      grp.children.forEach((s) => s.lookAt(cam.position));
      rndr.render(scn, cam);
    };
    animate();

    // Listeners
    window.addEventListener("scroll", updateCanvasRect);
    window.addEventListener("resize", updateCanvasRect);
    window.addEventListener("click", handleClick);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeChild(rndr.domElement);
      window.removeEventListener("scroll", updateCanvasRect);
      window.removeEventListener("resize", updateCanvasRect);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="iconssphear-section fade-in">
      <div className="iconssphear-tag-cloud" ref={containerRef}></div>
    </div>
  );

};

export default SkillTagCloud;
