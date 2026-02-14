import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import FloatingActions from "@/components/ui/floating-actions";
import ScrollToTop from "@/components/ui/scroll-to-top";
import BusinessPackage from "@/components/ui/local-business-package";
import Footer from "@/components/ui/sections/footer";
import { generateMetadata } from "@/lib/seo";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://consulting.zidbit.com";

export const metadata: Metadata = generateMetadata({
  title: "Local Business Packages - ZidBit | Grow Your Local Presence",
  description:
    "Transform your local business with tailored packages. From starter presence to market domination. Fast, affordable web solutions for local businesses.",
  keywords: [
    "local business packages",
    "local seo",
    "small business website",
    "local presence",
    "business growth",
    "local business solutions",
    "dentist website",
    "real estate website",
    "clinic website",
    "law firm website",
  ],
  canonical: `${baseUrl}/local-business`,
  openGraph: {
    title: "Local Business Packages - Grow Faster with ZidBit",
    description:
      "Choose the perfect package to establish or expand your local presence. Sites starting at affordable prices.",
    type: "website",
    image: "/og-image.png",
  },
  twitter: {
    title: "Local Business Packages - ZidBit",
    description:
      "Transform your local presence with tailored packages designed for your business stage.",
    image: "/twitter-image.png",
  },
});

export default function LocalBusinessPage() {
  const businessPackageSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Local Business Packages",
        item: `${baseUrl}/local-business`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ZidBit Local Business Services",
    url: `${baseUrl}/local-business`,
    description:
      "Comprehensive web solutions for local businesses including SEO, website design, and lead generation.",
    image: "/ZidBit_logo-transparent.png",
    areaServed: {
      "@type": "Place",
      name: "Canada, India, United States",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Starter Package - Local Presence",
        description:
          "5-page website with mobile-first design, Google Business Profile setup, basic SEO, and WhatsApp integration.",
        price: "800-1500",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Growth Package - Local Lead Engine",
        description:
          "Everything in Starter plus booking system, reviews automation, landing pages, conversion-focused design, and monthly reports.",
        price: "2000-3500",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Authority Package - Dominate Local Market",
        description:
          "Everything above plus multi-location support, advanced local SEO, content strategy, CRM integration, and 3 months optimization.",
        price: "4000+",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      },
    ],
    priceRange: "800-9999+",
    telephone: "+1-800-ZIDBIT-0",
    email: "contact@zidbit.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Starter Package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Starter Package includes a 5-page website, mobile-first design, Google Business Profile optimization, basic SEO, WhatsApp integration, contact forms, and analytics setup.",
        },
      },
      {
        "@type": "Question",
        name: "Which package is best for my local business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose Starter for basic online presence, Growth for lead generation and sales, or Authority for competitive markets like dentistry, real estate, clinics, and law firms.",
        },
      },
      {
        "@type": "Question",
        name: "Are there hidden fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, all our packages are transparent with no hidden fees. You get exactly what you see in your chosen package.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can you deliver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in fast delivery. Most basic packages can be launched within 2-4 weeks depending on your content readiness.",
        },
      },
    ],
  };
  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden w-full max-w-full">
      {/* Schema.org Structured Data */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessPackageSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

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
      <div className="relative z-10 w-full">
        {/* Business Package Component */}
        <BusinessPackage />

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
