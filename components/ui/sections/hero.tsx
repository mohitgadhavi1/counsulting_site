"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

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
      className="min-h-screen flex items-center justify-center overflow-hidden pt-16 z-10"
    >
      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Critical LCP element - no animation delay */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Modern Web Development
        </h1>

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
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
          <Button
            onClick={() => handleScroll("services")}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-lg transition-all duration-300 cursor-pointer"
          >
            Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
