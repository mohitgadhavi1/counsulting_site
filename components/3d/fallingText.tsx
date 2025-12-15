
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
    { className,  },
    letters.map((letter: string, index: number) => (
      <motion.span
        key={index}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: index * 0.05,
        }}
     className={className}
      >
        {letter}
      </motion.span>
    ))
  );
};

export default FallingText;
// Example Usage:
// <FallingText text="Hello World" as="h1" className="text-4xl" />
