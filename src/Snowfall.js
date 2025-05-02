// Snowfall.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Snowfall.css'; // Your CSS for snowflakes

const Snowfall = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSnowflakes((prevSnowflakes) => [
                ...prevSnowflakes,
                { id: Math.random(), left: Math.random() * 100, size: Math.random() * 10 + 5 },
            ]);
        }, 100);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="snow-container">
            {snowflakes.map((snowflake) => (
                <motion.div
                    key={snowflake.id}
                    className="snowflake"
                    initial={{ y: -10, opacity: 0.8 }}
                    animate={{
                        y: '100vh', // Falling animation
                        opacity: [0.8, 1, 0.8], // Opacity change for realism
                        transition: {
                            duration: Math.random() * 3 + 5, // Random fall duration
                            delay: Math.random() * 10, // Random delay for each snowflake
                            repeat: Infinity, // Infinite loop of falling snowflakes
                        },
                    }}
                    style={{
                        left: `${snowflake.left}vw`, // Random horizontal position
                        width: `${snowflake.size}px`, // Snowflake size
                        height: `${snowflake.size}px`,
                    }}
                />
            ))}
        </div>
    );
};

export default Snowfall;
