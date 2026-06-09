import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./TechGlobeCSS.css";

const iconTextures = [
  "/images/techGlobeIcons/c-original.svg",
  "/images/techGlobeIcons/cplusplus-original.svg",
  "/images/techGlobeIcons/css3-original.svg",
  "/images/techGlobeIcons/express-original-wordmark.svg",
  "/images/techGlobeIcons/git-original.svg",
  "/images/techGlobeIcons/github-original-wordmark.svg",
  "/images/techGlobeIcons/html5-original.svg",
  "/images/techGlobeIcons/javascript-original.svg",
  "/images/techGlobeIcons/json-original.svg",
  "/images/techGlobeIcons/mongoose-original-wordmark.svg",
  "/images/techGlobeIcons/mongodb-original.svg",
  "/images/techGlobeIcons/nextjs-original.svg",
  "/images/techGlobeIcons/nodejs-original.svg",
  "/images/techGlobeIcons/nodemon-original.svg",
  "/images/techGlobeIcons/npm-original-wordmark.svg",
  "/images/techGlobeIcons/fastapi-original.svg",
  "/images/techGlobeIcons/postman-original.svg",
  "/images/techGlobeIcons/react-original.svg",
  "/images/techGlobeIcons/redux-original.svg",
  "/images/techGlobeIcons/tailwindcss-original.svg",
  "/images/techGlobeIcons/vscode-original.svg",
  "/images/techGlobeIcons/bootstrap-original.svg",
  "/images/techGlobeIcons/typescript-original.svg",
  "/images/techGlobeIcons/vercel-original-wordmark.svg",
  "/images/techGlobeIcons/d3js-original.svg",
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
    const sprites = [];
    const radius = 27;
    const size = 6;
    let loadedCount = 0;

    function fibonacciSpherePoints(samples, radius) {
      const points = [];
      const offset = 2 / samples;
      const increment = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

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
      const loadPath = url.startsWith("http")
        ? url
        : (process.env.PUBLIC_URL || "") + url;

      const img = new Image(128, 128);
      if (loadPath.startsWith("http")) {
        img.crossOrigin = "anonymous";
      }

      const handleImageLoaded = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, 128, 128);
        ctx.drawImage(img, 0, 0, 128, 128);

        const texture = new THREE.CanvasTexture(canvas);
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        texture.needsUpdate = true;

        const sprite = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            depthTest: true,
          }),
        );
        sprite.scale.set(size, size, 1);
        sprite.position.copy(points[i]);

        group.add(sprite);
        sprites.push(sprite);

        loadedCount++;
        if (loadedCount === iconTextures.length) {
          connectIconsWithLines();
        }
      };

      img.onload = handleImageLoaded;

      img.onerror = (err) => {
        console.error("Error loading SVG:", loadPath, err);
        loadedCount++;
        if (loadedCount === iconTextures.length) {
          connectIconsWithLines();
        }
      };

      img.src = loadPath;
    });

    scene.add(group);
    camera.position.z = 50;

    // 🌟 Add subtle glowing background sphere
    const glowGeometry = new THREE.SphereGeometry(radius + 3.5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
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
