"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Code, Github, Linkedin, Instagram, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import FallingText from "@/components/3d/fallingText";
import EnquiryForm from "@/components/ui/enquiry-form";
import { handleScroll } from "@/lib/utils";
import Lottie from "lottie-react";
import saasAnimation from "@/public/saas_animation.json";
import { getCalApi } from "@calcom/embed-react";

function Hero() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    // Mark content as ready immediately (text renders first)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsContentReady(true);

    // Lazy load background images after content is ready
    const bgImg = new Image();
    bgImg.src = "/bg_counsulting.png";
    bgImg.onload = () => setBgLoaded(true);

    const heroImg = new Image();
    heroImg.src = "/hero_image_2.png";
    heroImg.onload = () => setHeroLoaded(true);
        (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const menuItems = [
    "Why Us",
    "Projects",
    "Features",
    "Expertise",
    "Join Us",
    "Contact",
  ];

  const menuAnchors: Record<string, string> = {
    "Why Us": "#about",
    Projects: "#projects",
    Expertise: "#services",
    Features: "features",
    "Join Us": "contact",
    Contact: "#contact",
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

  if (!isContentReady) {
    return (
      <section className="min-h-screen flex flex-col w-full relative bg-primary-foreground">
        <div className="flex-1 flex items-center w-1/2 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Skeleton className="h-16 w-full max-w-2xl" />
            <Skeleton className="h-16 w-4/5 max-w-xl" />
            <Skeleton className="h-8 w-3/4 max-w-lg mt-8" />
            <div className="flex gap-4 mt-8">
              <Skeleton className="h-14 w-40 rounded-lg" />
              <Skeleton className="h-14 w-40 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="home"
        className="h-screen flex flex-col text-wrap w-full relative bg-primary-foreground"
      >
        {/* Background Image with Lazy Loading - Desktop Only */}
        <div
          className={`absolute inset-0 z-5 transition-opacity duration-700 block ${
            bgLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: bgLoaded ? "url('/bg_counsulting.png')" : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Second Hero Background Image with Lazy Loading - Desktop Only */}
        <div
          className={`absolute inset-0 z-5 transition-opacity duration-700 block ${
            heroLoaded ? "opacity-70" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url('/hero_image_2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-10"></div>

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
              <filter
                id="blur-hero"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
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
        <div className=" flex  md:flex-row flex-col h-full  relative w-full justify-between  z-20 px-4 sm:px-6 lg:px-8 ">
          <div className="flex-1   h-full  flex flex-col justify-around  items-center md:w-1/2 relative  text-center ">
            {/* Surgeon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="my-4"
            >
              <span className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-bold tracking-wide border border-blue-100 uppercase">
                Best Software Agency in the Town
              </span>
            </motion.div>
<div className="w-full    flex items-center justify-center px-2 md:px-6 lg:px-8">
  {/* Animated falling h1 element */}
  <FallingText
    text="From idea to production-ready web applications"
    as="h1"
    className="text-4xl  md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-slate-900 drop-shadow-sm text-center"
  />
</div>
            <motion.p
              className="text-xl md:text-2xl my-4 text-slate-600 max-w-3xl mx-auto drop-shadow-none font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              We design and develop fast, secure, and maintainable web applications
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <Button
                data-cal-namespace="15min"
                data-cal-link="mohitgadhavi1/15min"
                data-cal-config='{"layout":"month_view"}'
                className="bg-primary hover:bg-blue-700 text-white px-5 py-4 md:px-10 md:py-7 text-sm md:text-lg rounded-full transition-all duration-300 hover:scale-105 cursor-pointer shadow-xl"
              >
                Schedule Meeting <ArrowRight className="ml-2" />
              </Button>
              <EnquiryForm
                isOpen={isEnquiryFormOpen}
                onClose={() => setIsEnquiryFormOpen(false)}
              />
              <Button
                onClick={() => handleScroll("services")}
                variant="outline"
                className="bg-white/10 text-primary border-primary hover:bg-white hover:text-primary px-5 py-4 md:px-10 md:py-7 text-sm md:text-lg rounded-full transition-all duration-300 cursor-pointer backdrop-blur-sm shadow-xl"
              >
                Our Services
              </Button>
            </motion.div>

            {/* Reviews & Happy client Section */}
            <motion.div
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex flex-col items-center sm:items-end">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 font-semibold text-sm">30+ Verified Reviews</p>
              </div>

              <div className="hidden sm:block w-px h-12 bg-slate-200" />

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h4 className="text-3xl font-extrabold text-slate-900">50+</h4>
                <p className="text-slate-600 font-semibold text-sm">projects completed</p>
              </div>
            </motion.div>
          </div>
          <div className="hidden  md:w-1/2 h-full opacity-50  justify-center items-center  md:flex ">
            <Lottie animationData={saasAnimation} loop autoplay />
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
              className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-menu shadow-2xl z-9999 flex flex-col"
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
                          className="text-5xl cursor-pointer sm:text-6xl font-bold text-menu-foreground hover:opacity-70 transition-opacity block text-left w-full"
                          onClick={() => {
                            setIsOpen(false);
                            setIsEnquiryFormOpen(true);
                          }}
                        >
                          {item}
                        </button>
                      ) : (
                        <a
                          href={`${
                            menuAnchors[item] ??
                            item.toLowerCase().replace(/\s+/g, "-")
                          }`}
                          className="text-5xl sm:text-6xl font-bold text-menu-foreground hover:opacity-70 transition-opacity block"
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
      </section>

      {/* Enquiry Form Popup */}
      <EnquiryForm
        isOpen={isEnquiryFormOpen}
        onClose={() => setIsEnquiryFormOpen(false)}
      />
    </>
  );
}

export default Hero;
