'use client';
import React from 'react';
import * as motion from "motion/react-client";
import { colors } from './colors';

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", 
  "Tailwind CSS", "Three.js", "GraphQL", "PostgreSQL"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const techVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15
    }
  }
};

function TechStack() {
  return (
    <>
      {/* Tech Stack Section Overlay */}
      <section id="tech-stack" className=" py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent ${colors.gradients.techStack}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Technology Stack
          </motion.h2>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={techVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`px-6 py-3 ${colors.gradients.cardIndigo} border ${colors.border.indigo} rounded-full backdrop-blur-lg transition-transform duration-300`}
              >
                <span className={`text-lg font-semibold ${colors.text.primary}`}>{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TechStack

