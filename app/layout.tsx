import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NewYearBanner from "@/components/ui/new-year-banner";
import Header from "@/components/ui/sections/header";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import {
  OrganizationSchema,
  WebsiteSchema,
} from "@/components/seo/structured-data";
import { generateMetadata } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload critical fonts
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://consulting.zidbit.com";

const generatedMetadata = generateMetadata({
  title: "ZidBit - Modern Web Development Services",
  description:
    "Building next-generation web applications with cutting-edge technologies. Expert web development services for startups and businesses.",
  keywords: [
    "web development",
    "React",
    "Next.js",
    "TypeScript",
    "consulting",
    "startup",
    "business solutions",
  ],
  openGraph: {
    title: "ZidBit - Modern Web Development Services",
    description:
      "Building next-generation web applications with cutting-edge technologies.",
    type: "website",
    image: "/og-image.png",
  },
  twitter: {
    title: "ZidBit - Modern Web Development Services",
    description: "Expert web development services for modern businesses.",
    image: "/twitter-image.png",
  },
});

export const metadata: Metadata = {
  ...generatedMetadata,
  metadataBase: new URL(baseUrl), // Explicitly set again if needed, or rely on generateMetadata
  authors: [{ name: "ZidBit Team", url: baseUrl }],
  creator: "ZidBit Technologies",
  publisher: "ZidBit Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Analytics />
        <OrganizationSchema
          name="ZidBit Technologies"
          url={baseUrl}
          logo={`${baseUrl}/ZidBit_logo-transparent.png`}
          description="Expert web development and consulting services for modern businesses"
          contactPoint={{
            contactType: "customer service",
            email: "contact@zidbit.com",
          }}
        />

        <WebsiteSchema
          name="ZidBit"
          url={baseUrl}
          description="Modern web development services and business solutions"
        />

        <NewYearBanner />
        <Header />
        {children}
      </body>
    </html>
  );
}
