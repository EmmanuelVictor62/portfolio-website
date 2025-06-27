import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedLogo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const text = "RoyalManuel";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: "1.5rem",
        fontWeight: "700",
      }}
    >
      <div className="relative z-10">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="inline-block text-accent"
          >
            {char}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent)`,
          transition: "background 0.1s",
        }}
      />
    </motion.div>
  );
};

export default AnimatedLogo;
