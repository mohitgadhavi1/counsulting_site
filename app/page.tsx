"use client";
import { Suspense, lazy } from "react";
import Header from "@/components/ui/sections/header";
import Hero from "@/components/ui/sections/hero";

// Lazy load heavy components to improve initial load
const Particle = lazy(() => import("@/components/3d/particles"));
const Services = lazy(() => import("@/components/ui/sections/services"));
const WorkProcess = lazy(() => import("@/components/ui/sections/workProcess"));
const Testimonials = lazy(
  () => import("@/components/ui/sections/testimonials")
);
const About = lazy(() => import("@/components/ui/sections/about"));
const Footer = lazy(() => import("@/components/ui/sections/footer"));

const ConsultingWebsite = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Particle Base Layer - Lazy loaded */}
      <Suspense
        fallback={
          <div className="fixed inset-0 w-full h-full z-0 bg-background" />
        }
      >
        <div className="fixed inset-0 w-full h-full z-0">
          <Particle />
        </div>
      </Suspense>

      {/* Critical above-the-fold content - loaded immediately */}
      <Header />
      <Hero />

      {/* Below-the-fold content - lazy loaded */}
      <Suspense fallback={<div className="py-20 bg-black/20" />}>
        <Services />
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
  );
};

export default ConsultingWebsite;
