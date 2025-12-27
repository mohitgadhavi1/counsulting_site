"use client";
import { Suspense, lazy } from "react";
import Hero from "@/components/ui/sections/hero";
import FloatingActions from "@/components/ui/floating-actions";
import AnimatedBanner from "../components/ui/sections/banner";

// Lazy load heavy components to improve initial load
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
    <div className="min-h-screen text-foreground relative overflow-x-hidden w-full max-w-full ">
      {/* Global Background Image */}
      <div
        className="fixed inset-0 w-full h-full -z-20"
        style={{
          backgroundImage: "url('/bg_counsulting_page.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      />

      {/* Background Color Layer */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-background/80 scroll-smooth snap-y snap-mandatory" />

      {/* Particle Base Layer - Fixed background behind everything */}
      <Suspense
        fallback={
          <div className="fixed inset-0 w-full h-full -z-10 bg-background" />
        }
      >
        {/* <div className="fixed inset-0 w-full h-full -z-10">
          <Particle />
        </div> */}
      </Suspense>

      {/* All content layers - positioned above background */}
      <div className="relative z-10 w-full ">
        {/* Critical above-the-fold content - loaded immediately */}
        <Hero />

        {/* Below-the-fold content - lazy loaded */}
        <Suspense fallback={<div className="py-20 bg-black/20" />}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="py-20 bg-black/20" />}>
          <Projects />
        </Suspense>
             <Suspense fallback={<div className="py-20 bg-black/20" />}>
         <AnimatedBanner/>
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

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
};

export default ConsultingWebsite;
