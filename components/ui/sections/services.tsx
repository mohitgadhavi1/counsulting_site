"use client";

import { Code, Layers } from "lucide-react";
import * as motion from "motion/react-client";

import { Card } from "@/components/ui/card";
import { colorClasses } from "@/lib/colors";

const serviceCategories = [
  {
    title: "Web Development",
    icon: <Code className="w-8 h-8" />,
    items: [
      "Custom Web Applications",
      "Business & SaaS Platforms",
      "Frontend Development (React / Next.js)",
      "Backend Development & APIs",
      "MVP Development for Startups",
      "E-commerce & Dashboard Systems",
    ],
  },
  {
    title: "Engineering & Scale",
    icon: <Layers className="w-8 h-8" />,
    items: [
      "Cloud Deployment (AWS / Vercel / Cloudflare / GCP)",
      "CI/CD & Automated Deployments",
      "Database Design & Optimization",
      "Authentication & Role Management",
      "Third-Party API Integrations",
      "Performance & Speed Optimization",
      "Refactoring & Legacy Code Cleanup",
      "Ongoing Maintenance & Support",
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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
    <section
      id="services"
      className="py-20 px-4 snap-start sm:px-6 lg:px-8 w-full relative overflow-hidden z-10"
    >
        {/* Bottom Gradient Blur */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background via-background/90 to-transparent pointer-events-none z-10"></div>
  {/* Bottom Gradient Blur */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-t from-background via-background/90 to-transparent pointer-events-none z-10"></div>

      {/* Background */}
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

      {/* Liquid glass layer */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="60" />
            </filter>
          </defs>
          <g filter="url(#blur)" opacity="0.18">
            <circle cx="200" cy="150" r="220" fill="#A4BE7B" />
            <circle cx="950" cy="420" r="300" fill="#5F8D4E" />
            <circle cx="700" cy="120" r="180" fill="#E5D9B6" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent ${colorClasses.gradients.services}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Deliver
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}  animate="active">
              <Card className="rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start gap-3 text-lg text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + itemIndex * 0.05,
                      }}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
