"use client";
import { Suspense, lazy } from "react";
import Header from "@/components/ui/sections/header";
import Hero from "@/components/ui/sections/hero";

// Lazy load heavy components to improve initial load
const Particle = lazy(() => import("@/components/3d/particles"));
const Services = lazy(() => import("@/components/ui/sections/services"));
const Projects = lazy(() => import("@/components/ui/sections/projects"));
const WorkProcess = lazy(() => import("@/components/ui/sections/workProcess"));
const Testimonials = lazy(
  () => import("@/components/ui/sections/testimonials")
);
const About = lazy(() => import("@/components/ui/sections/about"));
const Footer = lazy(() => import("@/components/ui/sections/footer"));

const ConsultingWebsite = () => {
  return (
    <div className="min-h-screen text-foreground relative">
      {/* Particle Base Layer - Fixed background behind everything */}
      <Suspense
        fallback={
          <div className="fixed inset-0 w-full h-full -z-10 bg-background" />
        }
      >
        <div className="fixed inset-0 w-full h-full -z-10">
          <Particle />
        </div>
      </Suspense>

      {/* All content layers - positioned above background */}
      <div className="relative z-10 flex flex-col justify-between align-middle items-center">
        {/* Critical above-the-fold content - loaded immediately */}
        <Header />
        <Hero />

        {/* Below-the-fold content - lazy loaded */}
        <Suspense fallback={<div className="py-20 bg-black/20" />}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-black/20" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-black/20" />}>
          <WorkProcess />
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-black/20" />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-black/20" />}>
          <About />
        </Suspense>

        <Suspense fallback={<div className="py-8 bg-black/30" />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default ConsultingWebsite;
