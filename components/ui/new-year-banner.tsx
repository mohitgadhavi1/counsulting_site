"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function NewYearBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const bannerText =
    "🎉 NEW YEAR OFFER: Free Website Development - T&C Apply 🎉";
  const duplicatedText = Array(8).fill(bannerText);

  return (
    <div className="relative w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white overflow-hidden">
      
      <style>{`
        @keyframes banner-marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-marquee-track { animation: none !important; transform: translateX(0) !important; }
        }
      `}</style>

      <div className="relative py-3">
        <div className="flex items-center">
          <div className="flex-1 overflow-hidden">
            <div
              className="banner-marquee-track flex whitespace-nowrap"
              style={{
                animation: "banner-marquee 20s linear infinite",
              }}
            >
              {duplicatedText.map((text, idx) => (
                <span key={idx} className="text-sm sm:text-base font-bold px-8">
                  {text}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
