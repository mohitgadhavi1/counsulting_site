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
  letterStyle,
}) => {
  // Split by spaces, but keep hyphenated words together
  const words = text.split(" ");

  return React.createElement(
    as,
    { 
      className: `${className || ''}`,
      style: { 
        display: 'inline-block',
        maxWidth: '100%',
      }
    },
    words.map((word: string, wordIndex: number) => {
      // Calculate the starting index for this word's letters
      const letterOffset = words
        .slice(0, wordIndex)
        .reduce((acc, w) => acc + w.length + 1, 0);

      return (
        <React.Fragment key={wordIndex}>
          <span 
            className="inline-block"
            style={{ 
              whiteSpace: 'nowrap',
            }}
          >
            {word.split("").map((letter: string, letterIndex: number) => {
              const globalIndex = letterOffset + letterIndex;
              
              return (
                <motion.span
                  key={letterIndex}
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
                      delay: globalIndex * 0.05,
                    },
                    opacity: {
                      duration: 0.8,
                      delay: globalIndex * 0.05,
                    },
                    color: {
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: 1.5 + (globalIndex * 0.08),
                      ease: "easeInOut",
                    }
                  }}
                  style={letterStyle}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
          {wordIndex < words.length - 1 && " "}
        </React.Fragment>
      );
    })
  );
};

export default FallingText;