"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import EnquiryForm from "@/components/ui/enquiry-form";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { colorClasses } from "@/lib/colors";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product catalog, shopping cart, and payment processing.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://shopify.com",
    githubUrl: "https://github.com/shopify/shopify",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
    liveUrl: "https://trello.com",
    githubUrl: "https://github.com/atlassian/trello",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Interactive weather application with location-based forecasts, historical data visualization, and severe weather alerts.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    liveUrl: "https://weather.com",
    githubUrl: "https://github.com/weather/weather-app",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Comprehensive social media analytics platform with engagement tracking, audience insights, and automated reporting features.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["Angular", "Python", "PostgreSQL", "D3.js"],
    liveUrl: "https://hootsuite.com",
    githubUrl: "https://github.com/hootsuite/analytics",
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Educational platform with course creation tools, student progress tracking, interactive quizzes, and video streaming capabilities.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
    technologies: ["Next.js", "Prisma", "AWS", "WebRTC"],
    liveUrl: "https://coursera.org",
    githubUrl: "https://github.com/coursera/lms",
  },
  {
    id: 6,
    title: "Cryptocurrency Tracker",
    description:
      "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, and trading simulation features.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
    technologies: ["React Native", "Redux", "CoinGecko API", "SQLite"],
    liveUrl: "https://coinbase.com",
    githubUrl: "https://github.com/coinbase/crypto-tracker",
  },
];

const Projects = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <>
        <EnquiryForm 
            isOpen={isEnquiryOpen} 
            onClose={() => setIsEnquiryOpen(false)} 
          />
    
    <section id="projects" className="py-20 snap-start px-4 relative overflow-hidden w-full">
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
      {/* Liquid glass background layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-6 rounded-3xl " />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <filter
              id="blur-projects"
              x="-20%"
              y="-10%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="60" />
            </filter>
          </defs>
          <g filter="url(#blur-projects)" opacity="0.14">
            <circle cx="220" cy="160" r="220" fill="var(--primary)" />
            <circle cx="920" cy="420" r="300" fill="var(--secondary)" />
            <circle cx="680" cy="120" r="160" fill="var(--background)" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent ${colorClasses.gradients.hero}`}
          >
            Featured Projects
          </h2>
          <p className={`text-xl ${colorClasses.text.secondary} max-w-3xl mx-auto`}>
            Explore a selection of my recent work showcasing innovative
            solutions and cutting-edge technologies across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={192}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  style={{ width: "100%", height: "12rem" }}
                  unoptimized
                  priority={project.id === 1}
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--foreground)/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colorClasses">
                  {project.title}
                </h3>

                <p
                  className={`mb-4 text-sm leading-relaxed ${colorClasses.text.secondary}`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-(--primary)/20 text-secondary-foreground rounded-full border border-(--primary)/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className=" cursor-pointer flex-1 border-primary text-secondary hover:bg-primary/10"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>

                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border text-foreground/80 hover:bg-(--foreground)/10"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <GitHub className="w-4 h-4 mr-2" />
                    Code
                  </Button> */}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`${colorClasses.text.secondary} mb-6`}>
            Interested in working together on your next project?
          </p>
          <Button
            size="lg"
            className={`${colorClasses.gradients.button} text-primary-foreground px-8 py-3 cursor-pointer`}
            onClick={() => setIsEnquiryOpen(true)}
          >
            Let&apos;s Collaborate
          </Button>
          
      
        </div>
      </div>
    </section></>
  );
};

export default Projects;
