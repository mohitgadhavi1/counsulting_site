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

export const metadata: Metadata = generateMetadata({
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
    card: "summary_large_image",
    title: "ZidBit - Modern Web Development Services",
    description: "Expert web development services for modern businesses.",
    image: "/twitter-image.png",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zidbit.com";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="canonical" href={baseUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />

        <OrganizationSchema
          name="ZidBit Technologies"
          url={baseUrl}
          logo={`${baseUrl}/icon.png`}
          description="Expert web development and consulting services for modern businesses"
          contactPoint={{
            telephone: "+1-XXX-XXX-XXXX",
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
