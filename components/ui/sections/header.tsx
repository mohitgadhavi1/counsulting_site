"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [comingSoon, setComingSoon] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Why Us",
    // "Projects",
    "Expertise",
    "Features",
    "Join Us",
    "Contact",
  ];

  // Map menu labels to section IDs (anchors)
  const menuAnchors: Record<string, string> = {
    "Why Us": "about",
    // Projects: "projects",
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
      url: "https://github.com/zidbit-llp",
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
      <div className={` z-50 py-2 w-full transition-all duration-300 bg-white shadow-sm border-b border-slate-100`}>
        <div className="flex justify-between items-center px-8">
          {/* Logo */}
          <Link href="/">
            <motion.img
              src="/logo.png"
              alt="ZidBit Technologies Logo"
              className="h-16 w-auto object-contain cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${menuAnchors[item] ?? item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-bold text-slate-600 hover:text-primary transition-colors"
                onClick={(e) => {
                  if (item === "Join Us") {
                    e.preventDefault();
                    setIsJoinFormOpen(true);
                  } else if (item === "Contact") {
                    e.preventDefault();
                    setIsEnquiryFormOpen(true);
                  } else if (menuAnchors[item]) {
                    e.preventDefault();
                    handleScroll(menuAnchors[item]);
                  }
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA & Menu Button Toggle */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setIsEnquiryFormOpen(true)}
              className="hidden md:block cursor-pointer font-bold px-8 py-3 rounded-full shadow-lg bg-primary text-white hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="lg:hidden cursor-pointer font-bold px-6 py-2.5 rounded-full shadow-md bg-primary text-white hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MENU
            </motion.button>
          </div>
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
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-9999 flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center p-8 border-b border-slate-50">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="ZidBit Logo" className="h-8 w-auto object-contain" />
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-900 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                  <span className="text-2xl">×</span>
                </div>
              </motion.button>
            </div>

            <nav className="flex-1 px-12 py-12">
              <ul className="space-y-4">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <a
                      href={`#${menuAnchors[item] ?? item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-4xl font-bold text-slate-900 hover:text-primary transition-colors block py-2"
                      onClick={(e) => {
                        setIsOpen(false);
                        if (item === "Join Us") {
                          e.preventDefault();
                          setIsJoinFormOpen(true);
                        } else if (item === "Contact") {
                          e.preventDefault();
                          setIsEnquiryFormOpen(true);
                        } else if (menuAnchors[item]) {
                          e.preventDefault();
                          handleScroll(menuAnchors[item]);
                        }
                      }}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <motion.div
              variants={socialVariants}
              initial="closed"
              animate="open"
              className="px-12 pb-12"
            >
              <div className="grid grid-cols-2 gap-x-16 gap-y-6 border-t border-slate-50 pt-12">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  const isComingSoon = comingSoon === link.name;
                  return (
                    <a
                      key={link.name}
                      href={isComingSoon ? "#" : link.url}
                      target={isComingSoon ? undefined : "_blank"}
                      rel={isComingSoon ? undefined : "noopener noreferrer"}
                      onClick={(e) => {
                        if (link.name === "LinkedIn" || link.name === "Instagram") {
                          e.preventDefault();
                          setComingSoon(link.name);
                          setTimeout(() => setComingSoon(null), 3000);
                        }
                      }}
                      className="flex items-center gap-3 text-lg font-semibold text-slate-600 hover:text-primary transition-colors group min-h-[40px]"
                    >
                      <AnimatePresence mode="wait">
                        {isComingSoon ? (
                          <motion.span
                            key="coming-soon"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-bold whitespace-nowrap"
                          >
                            Coming Soon
                          </motion.span>
                        ) : (
                          <motion.div
                            key="normal"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-3"
                          >
                            <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            {link.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
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
