"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";
import { colors } from "./colors";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    description: "hello@ZidBit.dev",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+91 98765 43210",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Navi Mumbai, India",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Contact() {
  return (
    <>
      {/* Contact Section with liquid-glass background */}
      <section id="contact" className="py-20 px-4 w-full sm:px-6 lg:px-8 relative overflow-hidden z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-6 rounded-3xl bg-card/30 border border-border backdrop-blur-2xl shadow-2xl" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <filter id="blur-contact" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="60" />
              </filter>
            </defs>
            <g filter="url(#blur-contact)" opacity="0.16">
              <circle cx="220" cy="160" r="220" fill="var(--primary)" />
              <circle cx="980" cy="420" r="280" fill="var(--secondary)" />
              <circle cx="700" cy="140" r="160" fill="var(--background)" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent ${colors.gradients.contact}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s Build Something Amazing
          </motion.h2>
          <motion.p
            className={`text-xl ${colors.text.secondary} mb-12`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform your digital presence? Get in touch with our team
            today.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contactCards.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div key={index} variants={cardVariants}>
                  <Card
                    className={`${colors.background.card} backdrop-blur-lg ${colors.border.white} ${colors.background.cardHover} transition-all duration-300`}
                  >
                    <CardHeader>
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="mx-auto mb-2"
                      >
                        <IconComponent
                          className={`w-8 h-8 ${colors.indigo.dark}`}
                        />
                      </motion.div>
                      <CardTitle className={colors.text.primary}>
                        {contact.title}
                      </CardTitle>
                      <CardDescription className={colors.text.secondary}>
                        {contact.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className={`${colors.gradients.button} ${colors.gradients.buttonHover} ${colors.text.white} px-12 py-6 text-lg rounded-lg transition-all duration-300 cursor-pointer`}
            >
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
