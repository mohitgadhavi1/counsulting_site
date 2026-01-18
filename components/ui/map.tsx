"use client";

import { MapPin } from "lucide-react";
import * as motion from "motion/react-client";
import { colorClasses } from "@/lib/colors";

interface MapProps {
  address?: string;
  title?: string;
  height?: number;
}

export default function Map({
  address = "22.7314846,71.6126362",
  title = "Find Us Here",
  height = 400,
}: MapProps) {
  const embedUrl = `https://www.google.com/maps?q=${address}&output=embed`;
  const directUrl = `https://www.google.com/maps/place/%E0%AA%A7%E0%AB%8D%E0%AA%B0%E0%AB%81%E0%AA%B5%E0%AA%B0%E0%AA%BE%E0%AA%9C+%E0%AA%AE%E0%AB%8B%E0%AA%AC%E0%AA%BE%E0%AA%87%E0%AA%B2+%E0%AA%B6%E0%AB%8B%E0%AA%AA/@22.7314023,71.6128392,21z/`;

  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h3
        className={`text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent ${colorClasses.gradients.about}`}
      >
        {title}
      </motion.h3>

      <div className="relative rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src={embedUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          loading="lazy"
          title="Our Location"
          allowFullScreen
        />
        <div className="absolute top-4 right-4 z-20">
          <a
            href={directUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary bg-opacity-70 rounded-md hover:bg-opacity-90 transition-all duration-200"
            aria-label="Open location in Google Maps"
          >
            <MapPin className="w-4 h-4 mr-1" />
            Open in Maps
          </a>
        </div>
      </div>
    </motion.div>
  );
}
