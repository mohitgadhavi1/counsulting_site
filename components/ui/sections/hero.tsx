"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import FallingText from "@/components/3d/fallingText";

interface HeroProps {
  scrollToSection?: (sectionId: string) => void;
}

function Hero({ scrollToSection }: HeroProps) {
  const handleScroll = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center overflow-hidden text-wrap w-full mx-10 relative"
    >
      <div className="absolute w-full inset-0 pointer-events-none">
        <div className="w-full " />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <filter id="blur-hero" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="60" />
            </filter>
          </defs>
          <g filter="url(#blur-hero)" opacity="0.12">
            <circle cx="220" cy="180" r="260" fill="var(--primary)" />
            <circle cx="900" cy="420" r="300" fill="var(--secondary)" />
            <circle cx="680" cy="120" r="160" fill="var(--background)" />
          </g>
        </svg>
      </div>

      <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated falling h1 element */}
        <FallingText
          text="Modern Web Development"
          as="h1"
          className="text-8xl font-bold"
        />

        <motion.p
          className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          Building next-generation web applications with cutting-edge
          technologies
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Button
            onClick={() => handleScroll("contact")}
            className="bg-secondary hover:bg-secondary text-primary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
          <Button
            onClick={() => handleScroll("services")}
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-primary/10 hover:text-secondary px-8 py-6 text-lg rounded-lg transition-all duration-300 cursor-pointer"
          >
            Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
