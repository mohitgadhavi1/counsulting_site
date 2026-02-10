"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5, x: -20 }}
                    className="fixed bottom-6 left-6 z-50"
                >
                    <Button
                        onClick={scrollToTop}
                        size="icon"
                        className="w-6 h-6 cursor-pointer rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-xl hover:shadow-2xl hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 group"
                        title="Scroll to top"
                    >
                        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
