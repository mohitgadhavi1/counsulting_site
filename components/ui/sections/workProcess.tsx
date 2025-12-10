"use client";
import React from "react";
import * as motion from "motion/react-client";

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
  const ref = React.useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm overflow-hidden hover:bg-card/70"
      >
        <div className="relative z-10">
          {/* Number */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
          >
            <span className="text-7xl font-bold text-muted-foreground/30">
              {step.number}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-3xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
          >
            {step.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
          >
            {step.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function WorkProcess() {
  return (
    <section
      id="work-process"
      className="py-20 px-4 sm:px-6 lg:px-8  relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Work Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
