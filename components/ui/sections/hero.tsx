"use client";
import { useState } from "react";
import { ArrowRight, Code, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import FallingText from "@/components/3d/fallingText";
import EnquiryForm from "@/components/ui/enquiry-form";

interface HeroProps {
  scrollToSection?: (sectionId: string) => void;
}

function Hero({ scrollToSection }: HeroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);

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

  const menuItems = ["Why Us", "Projects", "Expertise", "Join Us", "Contact"];

  // Map menu labels to section IDs (anchors)
  const menuAnchors: Record<string, string> = {
    "Why Us": "about",
    Projects: "projects",
    Expertise: "services",
    "Join Us": "contact",
    Contact: "contact",
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/zidbit",
      col: 1,
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/zidbit",
      col: 1,
    },
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/zidbit",
      col: 2,
    },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const socialVariants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col w-full relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg_counsulting.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Second Hero Background Image with 70% Opacity */}
      <div
        className="absolute inset-0 z-5"
        style={{
          backgroundImage: "url('/hero_image_2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-10"></div>
      {/* Header Elements */}
      <div className="relative z-50 pt-4 sm:pt-8">
        <div className="flex justify-between items-center px-4 sm:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
              ZidBit
            </span>
          </div>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg transition-colors border border-white/30 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MENU
          </motion.button>
        </div>
      </div>

      {/* Bottom Gradient Blur */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background via-background/90 to-transparent pointer-events-none z-10"></div>

      {/* Additional decorative elements */}
      <div className="absolute w-full inset-0 pointer-events-none">
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
          <g filter="url(#blur-hero)" opacity="0.08">
            <circle cx="220" cy="180" r="260" fill="var(--primary)" />
            <circle cx="900" cy="420" r="300" fill="var(--secondary)" />
            <circle cx="680" cy="120" r="160" fill="var(--background)" />
          </g>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full max-w-4xl mx-auto">
          {/* Animated falling h1 element */}
          <FallingText
            text="Modern Web Development"
            as="h1"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-secondary drop-shadow-2xl leading-tight"
          />

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-secondary/90 max-w-3xl mx-auto drop-shadow-lg px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Building next-generation web applications with cutting-edge
            technologies
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Button
              onClick={() => handleScroll("contact")}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer shadow-xl backdrop-blur-sm"
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              onClick={() => handleScroll("services")}
              variant="outline"
              className="w-full sm:w-auto border border-secondary/50 bg-primary/5 text-white hover:bg-white/20 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg transition-all duration-300 cursor-pointer backdrop-blur-sm shadow-xl"
            >
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-menu shadow-2xl z-[9999] flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-8">
              <motion.button
                onClick={() => setIsOpen(false)}
                className="bg-menu-close-button cursor-pointer hover:bg-menu-close-button-hover text-menu-close-button-foreground font-medium px-6 py-3 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CLOSE
              </motion.button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-6 sm:px-12 py-4 sm:py-8">
              <ul className="space-y-4 sm:space-y-6">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    {item === "Contact" || item === "Join Us" ? (
                      <button
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer font-bold text-menu-foreground hover:opacity-70 transition-opacity block text-left w-full"
                        onClick={() => {
                          setIsOpen(false);
                          setIsEnquiryFormOpen(true);
                        }}
                      >
                        {item}
                      </button>
                    ) : (
                      <a
                        href={`#${
                          menuAnchors[item] ??
                          item.toLowerCase().replace(/\s+/g, "-")
                        }`}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-menu-foreground hover:opacity-70 transition-opacity block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <motion.div
              variants={socialVariants}
              initial="closed"
              animate="open"
              className="px-6 sm:px-12 pb-8 sm:pb-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-16 sm:gap-y-6">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg sm:text-xl font-medium text-menu-foreground hover:opacity-70 transition-opacity group"
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enquiry Form Popup */}
      <EnquiryForm
        isOpen={isEnquiryFormOpen}
        onClose={() => setIsEnquiryFormOpen(false)}
      />
    </section>
  );
}

export default Hero;
