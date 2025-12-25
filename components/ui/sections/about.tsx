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
      {/* About Section with liquid-glass background */}
      <section
        id="about"
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 w-full snap-start"
      >
        {/* Section Background with 50% Opacity */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/section_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-6 rounded-3xl bg-card/30" />
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <filter
                id="blur-about"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="60" />
              </filter>
            </defs>
            <g filter="url(#blur-about)" opacity="0.14">
              <circle cx="180" cy="140" r="200" fill="var(--primary)" />
              <circle cx="900" cy="380" r="260" fill="var(--secondary)" />
              <circle cx="650" cy="100" r="160" fill="var(--background)" />
            </g>
          </svg>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto"
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
                <>
                  We’re a{" "}
                  <strong className="font-bold">
                    skilled team of developers
                  </strong>{" "}
                  based in <strong className="font-bold">Navi Mumbai</strong>,
                  focused on building{" "}
                  <strong className="font-bold">
                    modern, scalable web solutions
                  </strong>
                  . Our <strong className="font-bold">agile workflow</strong>{" "}
                  lets us <strong className="font-bold">move fast</strong>,{" "}
                  <strong className="font-bold">adapt quickly</strong>, and
                  deliver{" "}
                  <strong className="font-bold">high-quality results</strong>{" "}
                  without cutting corners.
                  <br />
                  <br />
                  By working remotely, we offer{" "}
                  <strong className="font-bold">
                    flexible and cost-effective engagement
                  </strong>{" "}
                  while keeping{" "}
                  <strong className="font-bold">
                    communication clear, structured, and reliable
                  </strong>
                  . You get the{" "}
                  <strong className="font-bold">
                    efficiency of a lean team
                  </strong>{" "}
                  with the{" "}
                  <strong className="font-bold">
                    professionalism of an enterprise setup
                  </strong>
                  .
                </>
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
                      Priority support
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
