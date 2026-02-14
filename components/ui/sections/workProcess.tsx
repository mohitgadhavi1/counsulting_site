"use client";

import { Card } from "@/components/ui/card";
import * as motion from "motion/react-client";
import Link from "next/link";
import WorkProcessMindMap from "../mindmap";
import { useRef } from "react";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";

const processSteps = [
  {
    number: "01",
    title: "Brainstorming",
    description:
      "Be it a development project or a marketing campaign we brainstorm and create a roadmap to do the same. Ideas are let loose and we strive to have the perfect view.",
  },
  {
    number: "02",
    title: "Documentation",
    description:
      "This is essential as a detailed documentation of the project doesn't allow any misunderstanding between us. Also this helps us chart out a road map plan milestones along the project.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Execution of plan is where we shine. Timely delivery, regular updates , a dedicated project manager at your aid to handle deviations or breakouts all the same.",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    description:
      "Every functionality, every page is tested internally before handing over the project to the client for final confirmation. The deployment process is pretty straightforward where we go live and then move towards optimizing brand value and generating leads for your business.",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group h-full "
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="h-full "
      >
        <Card className="relative p-8 h-full  rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow group-hover:shadow-md">
          <div className="relative z-10">
            {/* Number */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
            >
              <span className="text-7xl font-bold text-blue-600/10">
                {step.number}
              </span>
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
            >
              {step.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-slate-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
            >
              {step.description}
            </motion.p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function WorkProcess() {


  return (
    <section
      id="work-process"
      className="py-20 px-4 sm:px-6 lg:px-8 snap-start relative overflow-hidden z-10 w-full"
    >
      {/* Section Background with 50% Opacity */}
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 md:inset-6 md:rounded-3xl rounded-3xl bg-card/30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-center items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-16 text-slate-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Strategic Approach
        </motion.h2>

        {/* Content based on screen size */}
       
          <div className="w-full">
            {/* Mobile: Show step cards only */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 auto-rows-fr"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              {processSteps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </motion.div>

            {/* Link to full mindmap page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/mindmap"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
              >
                View Full Process Flow
              </Link>
            </motion.div>
          </div>
        
      </div>
    </section>
  );
}

export default WorkProcess;
