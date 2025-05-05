import { motion } from "framer-motion";
import "./LoadingScreenCSS.css";
import Logo from "../../images/logo.png";

const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <motion.img
                src={Logo} // adjust path if needed
                alt="Logo"
                className="loading-logo"
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
        </div>
    );
};

export default LoadingScreen;
