"use client";
import React from "react";
import { MapPin } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";
import { colors } from "./colors";

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 30, rotateY: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function About() {
  return (
    <>
      {/* About Section Overlay */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8  z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent ${colors.gradients.about}`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Agile & Remote
              </motion.h2>
              <motion.p
                className={`text-lg ${colors.text.secondary} mb-6`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We&apos;re a dynamic team of developers based in Navi Mumbai,
                specializing in modern web technologies. Our agile approach
                ensures rapid delivery without compromising quality.
              </motion.p>
              <motion.p
                className={`text-lg ${colors.text.secondary} mb-6`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Working remotely allows us to provide flexible, cost-effective
                solutions while maintaining the highest standards of
                communication and collaboration.
              </motion.p>
              <motion.div
                className={`flex items-center space-x-2 ${colors.indigo.dark}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Based in Navi Mumbai, India</span>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={statCardVariants}>
                <Card
                  className={`${colors.gradients.cardIndigo} ${colors.border.white}`}
                >
                  <CardHeader>
                    <CardTitle className={`text-4xl ${colors.indigo.dark}`}>
                      50+
                    </CardTitle>
                    <CardDescription className={colors.text.tertiary}>
                      Projects Delivered
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              <motion.div variants={statCardVariants}>
                <Card
                  className={`${colors.gradients.cardPurple} ${colors.border.white}`}
                >
                  <CardHeader>
                    <CardTitle className={`text-4xl ${colors.purple.dark}`}>
                      100%
                    </CardTitle>
                    <CardDescription className={colors.text.tertiary}>
                      Client Satisfaction
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              <motion.div variants={statCardVariants}>
                <Card
                  className={`${colors.gradients.cardPink} ${colors.border.white}`}
                >
                  <CardHeader>
                    <CardTitle className={`text-4xl ${colors.pink.dark}`}>
                      24/7
                    </CardTitle>
                    <CardDescription className={colors.text.tertiary}>
                      Support Available
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
              <motion.div variants={statCardVariants}>
                <Card
                  className={`${colors.gradients.cardIndigo} ${colors.border.white}`}
                >
                  <CardHeader>
                    <CardTitle className={`text-4xl ${colors.indigo.dark}`}>
                      5+
                    </CardTitle>
                    <CardDescription className={colors.text.tertiary}>
                      Years Experience
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default About;
