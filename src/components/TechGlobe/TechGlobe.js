import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./TechGlobeCSS.css";

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
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(375, 375);
    canvas.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const loader = new THREE.TextureLoader();
    const sprites = [];
    const radius = 27;
    const size = 6;
    let loadedCount = 0;

    function fibonacciSpherePoints(samples, radius) {
      const points = [];
      const offset = 2 / samples;
      const increment = Math.PI * (3 - Math.sqrt(5));  // golden angle in radians

      for (let i = 0; i < samples; i++) {
        const y = i * offset - 1 + offset / 2;
        const r = Math.sqrt(1 - y * y);
        const phi = i * increment;

        const x = Math.cos(phi) * r;
        const z = Math.sin(phi) * r;

        points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
      }
      return points;
    }

    const points = fibonacciSpherePoints(iconTextures.length, radius);

    const connectIconsWithLines = () => {
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.3,
      });

      for (let i = 0; i < sprites.length; i++) {
        for (let j = i + 1; j < sprites.length; j++) {
          const pos1 = sprites[i].position;
          const pos2 = sprites[j].position;
          const distance = pos1.distanceTo(pos2);

          // Adjust threshold based on density and radius
          if (distance < radius * 1) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              pos1.clone(),
              pos2.clone(),
            ]);
            const line = new THREE.Line(geometry, lineMaterial);
            group.add(line);

            // 🌟 Add glow sphere at the origin
            // const glow = new THREE.Mesh(
            //   new THREE.SphereGeometry(0.3, 8, 8),
            //   new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.4 })
            // );
            // glow.position.copy(origin);
            // group.add(glow);
          }
        }
      }
    };


    iconTextures.forEach((url, i) => {
      loader.load(url, (texture) => {
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;

        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture }));
        const aspect = texture.image.width / texture.image.height;
        sprite.scale.set(size * aspect, size, 1);
        sprite.position.copy(points[i]);

        group.add(sprite);
        sprites.push(sprite);

        loadedCount++;
        if (loadedCount === iconTextures.length) {
          connectIconsWithLines();
        }
      });
    });

    scene.add(group);
    camera.position.z = 50;

    // 🌟 Add subtle glowing background sphere
    const glowGeometry = new THREE.SphereGeometry(radius + 3.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide
    });
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowSphere);


    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let rotationSpeed = { x: 0, y: 0 };

    const updateCanvasRect = () => {
      renderer.domElement.getBoundingClientRect(); // placeholder for future
    };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => (isDragging = false);

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      rotationSpeed.y = dx * 0.005;
      rotationSpeed.x = dy * 0.005;
      group.rotation.y += rotationSpeed.y;
      group.rotation.x += rotationSpeed.x;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDragging) group.rotation.y += 0.005;
      group.children.forEach((obj) => {
        if (obj instanceof THREE.Sprite) obj.lookAt(camera.position);
      });
      renderer.render(scene, camera);
    };
    animate();

    // Listeners
    window.addEventListener("scroll", updateCanvasRect);
    window.addEventListener("resize", updateCanvasRect);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      canvas.removeChild(renderer.domElement);
      window.removeEventListener("scroll", updateCanvasRect);
      window.removeEventListener("resize", updateCanvasRect);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="iconssphear-section fade-in">
      <div className="iconssphear-tag-cloud" ref={containerRef}></div>
    </div>
  );

};

export default SkillTagCloud;
