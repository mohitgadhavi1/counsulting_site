"use client";

import { 
  Code, Layers, Cloud, Rocket, Zap, Palette, ArrowRight, 
  ShieldCheck, Database, GitBranch, Terminal, Settings, 
  Smartphone, BarChart3, Globe 
} from "lucide-react";
import * as motion from "motion/react-client";

import { Card } from "@/components/ui/card";

const serviceCategories = [
  {
    title: "Custom Web Applications",
    icon: <Globe className="w-5 h-5" />,
    description: "Tailored web solutions built from scratch to meet your unique business requirements.",
  },
  {
    title: "SaaS Platforms",
    icon: <Layers className="w-5 h-5" />,
    description: "Scalable, secure, and multi-tenant software-as-a-service platforms for any industry.",
  },
  {
    title: "Frontend Development",
    icon: <Palette className="w-5 h-5" />,
    description: "High-performance interfaces using modern frameworks like React and Next.js.",
  },
  {
    title: "Backend Development",
    icon: <Terminal className="w-5 h-5" />,
    description: "Robust, secure, and efficient server-side architectures and API development.",
  },
  {
    title: "MVP for Startups",
    icon: <Rocket className="w-5 h-5" />,
    description: "Fast-track your product launch with high-quality Minimum Viable Product development.",
  },
  {
    title: "E-commerce Solutions",
    icon: <Smartphone className="w-5 h-5" />,
    description: "Seamless shopping experiences with integrated payments and inventory management.",
  },
  {
    title: "Cloud Deployment",
    icon: <Cloud className="w-5 h-5" />,
    description: "Expert setup and management on AWS, Vercel, Cloudflare, and other cloud providers.",
  },
  {
    title: "CI/CD Automation",
    icon: <GitBranch className="w-5 h-5" />,
    description: "Streamlined development workflows with automated testing and deployment pipelines.",
  },
  {
    title: "Database Optimization",
    icon: <Database className="w-5 h-5" />,
    description: "Designing and scaling high-performance database systems for data-heavy apps.",
  },
  {
    title: "Auth & Security",
    icon: <ShieldCheck className="w-5 h-5" />,
    description: "Implementing enterprise-grade security, RBAC, and protected user authentication.",
  },
  {
    title: "API Integrations",
    icon: <Code className="w-5 h-5" />,
    description: "Connecting your platform with third-party services and complex external APIs.",
  },
  {
    title: "Performance Tuning",
    icon: <Zap className="w-5 h-5" />,
    description: "Optimizing load speeds and core web vitals for the best possible user experience.",
  },
  {
    title: "Legacy Code Cleanup",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "Refactoring and modernizing legacy systems to improve maintainability.",
  },
  {
    title: "Ongoing Maintenance",
    icon: <Settings className="w-5 h-5" />,
    description: "24/7 support and regular updates to keep your application running smoothly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 snap-start sm:px-6 lg:px-8 w-full relative overflow-hidden z-10"
    >
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background via-background/90 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-t from-background via-background/90 to-transparent pointer-events-none z-10"></div>

      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/section_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-slate-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Expertise & Specializations
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="rounded-2xl border border-slate-100 bg-white p-8 h-full shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-blue-50 rounded-xl text-primary w-fit mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>
                <div className="flex items-center text-primary font-semibold text-sm cursor-pointer group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
