'use client';
import React from 'react';
import * as motion from "motion/react-client";
import { colorClasses } from '@/lib/colors';


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
      {/* Tech Stack with liquid-glass background */}
      <section id="tech-stack" className="py-20 snap-start px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10 w-full">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-6 rounded-3xl bg-card/30 border border-border backdrop-blur-2xl shadow-2xl" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <filter id="blur-tech" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="60" />
              </filter>
            </defs>
            <g filter="url(#blur-tech)" opacity="0.14">
              <circle cx="200" cy="150" r="220" fill="var(--primary)" />
              <circle cx="950" cy="420" r="300" fill="var(--secondary)" />
              <circle cx="700" cy="120" r="180" fill="var(--background)" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent ${colorClasses.gradients.techStack}`}
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
                className={`px-6 py-3 ${colorClasses.gradients.cardIndigo} border ${colorClasses.border.indigo} rounded-full backdrop-blur-lg transition-transform duration-300`}
              >
                <span className={`text-lg font-semibold ${colorClasses.text.primary}`}>{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TechStack

