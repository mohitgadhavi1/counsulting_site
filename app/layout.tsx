import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "ZidBit - Modern Web Development Services",
  description:
    "Building next-generation web applications with cutting-edge technologies. Expert web development services for startups and businesses.",
  keywords: ["web development", "React", "Next.js", "TypeScript", "consulting"],
  authors: [{ name: "ZidBit Technologies" }],
  openGraph: {
    title: "ZidBit - Modern Web Development Services",
    description:
      "Building next-generation web applications with cutting-edge technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
