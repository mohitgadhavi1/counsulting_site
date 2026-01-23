
import React from "react";
import { motion } from "framer-motion";

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

type FallingTextProps = {
  text: string;
  /** Element tag to render the whole text in (defaults to 'span') */
  as?: Tag;
  /** Optional className applied to the wrapper element */
  className?: string;
  /** Optional per-letter style overrides */
  letterStyle?: React.CSSProperties;
};

const FallingText: React.FC<FallingTextProps> = ({
  text,
  as = "span",
  className,

}) => {
  const letters = text.split(""); // Split text into individual letters



  // Render the chosen wrapper tag and keep per-letter animations
  return React.createElement(
    as,
    { className },
    letters.map((letter: string, index: number) => (
      <motion.span
        key={index}
        initial={{ y: -100, opacity: 0, color: "#0f172a" }}
        animate={{ 
          y: 0, 
          opacity: 1,
          color: ["#0f172a", "#2563eb", "#0f172a"] 
        }}
        transition={{
          y: {
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: index * 0.05,
          },
          opacity: {
            duration: 0.8,
            delay: index * 0.05,
          },
          color: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 1.5 + (index * 0.08),
            ease: "easeInOut",
          }
        }}
        className="inline-block"
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))
  );
};

export default FallingText;
// Example Usage:
// <FallingText text="Hello World" as="h1" className="text-4xl" />
