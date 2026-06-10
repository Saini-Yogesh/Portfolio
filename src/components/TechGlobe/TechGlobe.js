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

const disposeObject = (object) => {
  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose();

    const materials = child.material
      ? Array.isArray(child.material)
        ? child.material
        : [child.material]
      : [];

    materials.forEach((material) => {
      if (material.map) material.map.dispose();
      material.dispose();
    });
  });
};

const SkillTagCloud = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const canvas = containerRef.current;
    const section = sectionRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(375, 375);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    canvas.appendChild(renderer.domElement);

    const domElement = renderer.domElement;
    const group = new THREE.Group();
    const sprites = [];
    const radius = 27;
    const size = 6;
    let loadedCount = 0;
    let rafId = null;
    let isInView = true;
    let isPageVisible = !document.hidden;

    function fibonacciSpherePoints(samples, sphereRadius) {
      const points = [];
      const offset = 2 / samples;
      const increment = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < samples; i++) {
        const y = i * offset - 1 + offset / 2;
        const r = Math.sqrt(1 - y * y);
        const phi = i * increment;
        const x = Math.cos(phi) * r;
        const z = Math.sin(phi) * r;
        points.push(
          new THREE.Vector3(x * sphereRadius, y * sphereRadius, z * sphereRadius),
        );
      }
      return points;
    }

    const points = fibonacciSpherePoints(iconTextures.length, radius);

    const connectIconsWithLines = () => {
      if (isMobile || prefersReducedMotion) return;

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

          if (distance < radius * 0.75) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              pos1.clone(),
              pos2.clone(),
            ]);
            group.add(new THREE.Line(geometry, lineMaterial));
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
        const textureCanvas = document.createElement("canvas");
        textureCanvas.width = 128;
        textureCanvas.height = 128;
        const ctx = textureCanvas.getContext("2d");

        ctx.clearRect(0, 0, 128, 128);
        ctx.drawImage(img, 0, 0, 128, 128);

        const texture = new THREE.CanvasTexture(textureCanvas);
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
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === iconTextures.length) {
          connectIconsWithLines();
        }
      };

      img.src = loadPath;
    });

    scene.add(group);
    camera.position.z = 50;

    const glowGeometry = new THREE.SphereGeometry(radius + 3.5, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(glowGeometry, glowMaterial));

    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      group.rotation.y += dx * 0.005;
      group.rotation.x += dy * 0.005;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const shouldAnimate = () =>
      isInView && isPageVisible && !prefersReducedMotion;

    const animate = () => {
      if (!shouldAnimate()) {
        rafId = null;
        return;
      }

      rafId = requestAnimationFrame(animate);

      if (!isDragging) group.rotation.y += 0.005;

      for (let i = 0; i < group.children.length; i++) {
        const obj = group.children[i];
        if (obj instanceof THREE.Sprite) obj.lookAt(camera.position);
      }

      renderer.render(scene, camera);
    };

    const startAnimation = () => {
      if (!rafId && shouldAnimate()) animate();
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) startAnimation();
      },
      { threshold: 0.05 },
    );

    if (section) visibilityObserver.observe(section);

    const onVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) startAnimation();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    domElement.addEventListener("mousemove", onMouseMove);

    if (!prefersReducedMotion) {
      renderer.render(scene, camera);
      startAnimation();
    } else {
      renderer.render(scene, camera);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      domElement.removeEventListener("mousemove", onMouseMove);

      disposeObject(scene);
      renderer.dispose();

      if (canvas.contains(domElement)) {
        canvas.removeChild(domElement);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="iconssphear-section fade-in">
      <div className="iconssphear-tag-cloud" ref={containerRef}></div>
    </div>
  );
};

export default SkillTagCloud;
