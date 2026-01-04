"use client";
import { useState } from "react";
import { Code, Github, Linkedin, Instagram } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import EnquiryForm from "@/components/ui/enquiry-form";
import JoinForm from "@/components/ui/join-form";
import { handleScroll } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
  const [isJoinFormOpen, setIsJoinFormOpen] = useState(false);

  const menuItems = [
    "Why Us",
    "Projects",
    "Expertise",
    "Features",
    "Join Us",
    "Contact",
  ];

  // Map menu labels to section IDs (anchors)
  const menuAnchors: Record<string, string> = {
    "Why Us": "about",
    Projects: "projects",
    Expertise: "services",
    "Join Us": "join-us",
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
    <div>
      <div className="fixed z-50 pt-8  w-full">
        <div className="flex justify-between items-center px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <motion.span
              className="text-3xl font-bold text-primary drop-shadow-xl inline-block"
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                textShadow: [
                  "0 0 0px rgba(0,0,0,0)",
                  "0 0 18px rgba(99,102,241,0.35)",
                  "0 0 0px rgba(0,0,0,0)",
                ],
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                textShadow: "0px 6px 20px rgba(0,0,0,0.25)",
              }}
            >
              ZidBit
            </motion.span>
          </div>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer  bg-primary hover:bg-white/30 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full shadow-lg transition-colors border border-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MENU
          </motion.button>
        </div>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-9998"
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
            className="fixed  top-0 right-0 h-full w-full sm:w-[500px] bg-menu shadow-2xl z-9999 flex flex-col"
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
            <nav className="flex-1 px-12 py-8">
              <ul className="space-y-6">
                {menuItems.map((item, i) => {
                  console.log(item);

                  return (
                    <motion.li
                      key={item}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      {item === "Contact" ? (
                        <button
                          className="text-5xl cursor-pointer sm:text-6xl font-bold text-menu-foreground hover:opacity-70 transition-opacity block text-left w-full"
                          onClick={() => {
                            setIsOpen(false);
                            setIsEnquiryFormOpen(true);
                          }}
                        >
                          {item}
                        </button>
                      ) : item === "Join Us" || item === "join-us" ? (
                        <button
                          className="text-5xl cursor-pointer sm:text-6xl font-bold text-menu-foreground hover:opacity-70 transition-opacity block text-left w-full"
                          onClick={() => {
                            console.log(item);
                            setIsOpen(false);
                            setIsJoinFormOpen(true);
                          }}
                        >
                          {item}
                        </button>
                      ) : item === "Features" ? (
                        <a
                          href="/features"
                          className="text-5xl sm:text-6xl font-bold text-menu-foreground hover:opacity-70 transition-opacity block"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </a>
                      ) : (
                        <a
                          // href={`#${
                          //   menuAnchors[item] ??
                          //   item.toLowerCase().replace(/\s+/g, "-")
                          // }`}
                          className="text-5xl sm:text-6xl font-bold text-menu-foreground hover:opacity-70 transition-opacity block"
                          onClick={() => {
                            setIsOpen(false);
                            handleScroll(menuAnchors[item]);
                          }}
                        >
                          {item}
                        </a>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Social Links */}
            <motion.div
              variants={socialVariants}
              initial="closed"
              animate="open"
              className="px-12 pb-12"
            >
              <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xl font-medium text-menu-foreground hover:opacity-70 transition-opacity group"
                    >
                      <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
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
      <JoinForm
        isOpen={isJoinFormOpen}
        onClose={() => setIsJoinFormOpen(false)}
      />
    </div>
  );
}
