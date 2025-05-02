import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './BackgroundParticlesCSS.css';

const PARTICLE_COUNT = 100;

const BackgroundParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: PARTICLE_COUNT }, () => ({
            id: Math.random(),
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 3 + 2, // 2-5px
            directionX: (Math.random() - 0.5) * 10, // Random horizontal direction
            directionY: (Math.random() - 0.5) * 10, // Random vertical direction
            duration: Math.random() * 3 + 12, // 12s - 15s
            delay: Math.random() * 2, // Random delay for staggered explosions
        }));

        setParticles(newParticles);
    }, []);

    return (
        <div className="particle-background">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="particle"
                    initial={{ opacity: 1 }}
                    animate={{
                        x: [`0vw`, `${p.directionX * 10}vw`], // Move in X direction
                        y: [`0vh`, `${p.directionY * 10}vh`], // Move in Y direction
                        opacity: [1, 0], // Fade out as it goes
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity, // Repeat infinitely
                        ease: 'easeOut',
                        delay: p.delay,
                    }}
                    style={{
                        top: `${p.top}vh`,
                        left: `${p.left}vw`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        backgroundColor: 'var(--particle-color)', // Use the theme color
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundParticles;
