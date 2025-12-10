"use client";
import { Code, TrendingUp } from "lucide-react";
import * as motion from "motion/react-client";
import { colors } from "./colors";

const serviceCategories = [
  {
    title: "Development",
    icon: <Code className="w-8 h-8" />,
    items: [
      "Static Websites",
      "Dynamic Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Web Apps",
      "Portals",
      "Mobile Applications",
    ],
  },
  {
    title: "Marketing",
    icon: <TrendingUp className="w-8 h-8" />,
    items: [
      "SEO",
      "PPC Ads",
      "SMM",
      "Video Ads",
      "Video Production",
      "GBP Boost",
      "Content Marketing",
      "Logo Design & Branding",
    ],
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

function Services() {
  return (
    <>
      {/* Services Section Overlay */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent ${colors.gradients.services}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-card/50 backdrop-blur-lg border border-white/10 rounded-lg p-8 hover:bg-card/70 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start gap-3 text-lg text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Services;
