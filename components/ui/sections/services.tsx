"use client";

import { useState, useEffect } from "react";
import {
  Code, Layers, Cloud, Rocket, Zap, Palette, ArrowRight,
  ShieldCheck, Database, GitBranch, Terminal, Settings,
  Smartphone, BarChart3, Globe
} from "lucide-react";
import * as motion from "motion/react-client";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";

import { Card } from "@/components/ui/card";

interface ServiceCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard = ({ category }: { category: ServiceCategory }) => {
  const { isMobile } = useBreakpoint();
  const [isFlipped, setIsFlipped] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isMobile && isFlipped) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsFlipped(false);
            return 10;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setTimeLeft(10);
    }

    return () => clearInterval(interval);
  }, [isMobile, isFlipped]);

  const handleFlip = () => {
    if (isMobile) {
      if (!isFlipped) {
        setTimeLeft(10);
      }
      setIsFlipped(!isFlipped);
    }
  };

  if (!isMobile) {
    return (
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
      </Card>
    );
  }

  return (
    <div
      className="relative h-[200px] w-full [perspective:1000px] cursor-pointer"
      onClick={handleFlip}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
          <div className="p-4 bg-blue-50 rounded-2xl text-primary ">
            {category.icon}
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            {category.title}
          </h3>
          <div className="text-[8px] font-semibold text-blue-600 uppercase tracking-wider">
            Tap to see details
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 rounded-2xl border border-blue-100 bg-blue-50/50 p-2 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-center">
          <p className="text-slate-700 text-sm leading-relaxed font-medium">
            {category.description}
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px]">
              {timeLeft}
            </span>

          </div>
        </Card>
      </motion.div>
    </div>
  );
};

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
              <ServiceCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
