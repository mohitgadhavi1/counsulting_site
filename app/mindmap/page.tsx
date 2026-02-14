import type { Metadata } from "next";
import { Suspense } from "react";

import FloatingActions from "@/components/ui/floating-actions";
import ScrollToTop from "@/components/ui/scroll-to-top";
import WorkProcessMindMap from "@/components/ui/mindmap";
import Footer from "@/components/ui/sections/footer";
import { generateMetadata } from "@/lib/seo";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://consulting.zidbit.com";

export const metadata: Metadata = generateMetadata({
  title: "Our Process - ZidBit | Strategic Workflow & Mindmap",
  description:
    "Explore ZidBit's strategic workflow and process mindmap. Learn how we deliver exceptional results through our proven methodology.",
  keywords: [
    "work process",
    "strategic approach",
    "workflow",
    "project methodology",
    "development process",
    "consulting process",
  ],
  canonical: `${baseUrl}/mindmap`,
  openGraph: {
    title: "Our Process - ZidBit Strategic Approach",
    description:
      "Discover our proven methodology and workflow that ensures successful project delivery.",
    type: "website",
    image: "/og-image.png",
  },
  twitter: {
    title: "Our Process - ZidBit",
    description: "Strategic workflow and project methodology.",
    image: "/twitter-image.png",
  },
});

export default function MindmapPage() {
  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden w-full max-w-full">
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

  

      {/* All content layers - positioned above background */}
      <div className="relative z-10 w-full pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-slate-900 to-slate-700">
              Our Strategic Approach
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Discover the proven methodology and workflow that drives our success in delivering exceptional results for every project.
            </p>
          </div>
        </section>

        {/* Mindmap Component */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <WorkProcessMindMap />
          </div>
        </section>

        {/* Footer */}
        <Suspense fallback={<div className="py-8 bg-black/30" />}>
          <Footer />
        </Suspense>
      </div>

      {/* Floating Action Buttons */}
      <FloatingActions />
      <ScrollToTop />
    </div>
  );
}
