"use client";

import { MapPin } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "motion/react-client";
import { colorClasses } from "@/lib/colors";

interface AboutClientProps {
  title: string;
  content: {
    paragraphs: string[];
    lists: string[][];
  } | null;
}

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 30, rotateY: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { duration: 0.5 },
  },
};

const statColors = [
  { card: colorClasses.gradients.cardIndigo, text: colorClasses.indigo.dark },
  { card: colorClasses.gradients.cardPurple, text: colorClasses.purple.dark },
  { card: colorClasses.gradients.cardPink, text: colorClasses.pink.dark },
  { card: colorClasses.gradients.cardIndigo, text: colorClasses.indigo.dark },
];

export default function AboutClient({ title, content }: AboutClientProps) {
  const description = content?.paragraphs.join(" ") ?? "";

  console.log(content,title)

  const stats =
    content?.lists?.[0] ?? null

  const statsData = stats && stats
    .map(stat => {
      const match = stat.match(/^(.+?)\s+(.+)$/);
      if (!match) return null;
      const [, value, label] = match;
      return { value: value.replace(/[📍\s]/g, ""), label };
    })
    .filter(Boolean);

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 w-full snap-start"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/section_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
        }}
      />

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent ${colorClasses.gradients.about}`}
            >
              {title}
            </motion.h2>

            <motion.p
              className={`text-lg ${colorClasses.text.primary} mb-6`}
            >
              {description}
            </motion.p>

            <div className={`flex items-center space-x-2 ${colorClasses.indigo.dark}`}>
              <MapPin className="w-5 h-5" />
              <span className="text-lg">
                {stats && stats.find(s => s.includes("📍"))?.replace("📍 ", "")}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {statsData &&  statsData.slice(1, 5).map((stat, index) => (
              <motion.div key={index} variants={statCardVariants}>
                <Card className={`${statColors[index].card}`}>
                  <CardHeader>
                    <CardTitle className={`text-4xl ${statColors[index].text}`}>
                      {stat!.value}
                    </CardTitle>
                    <CardDescription>
                      {stat!.label}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}