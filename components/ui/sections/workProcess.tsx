"use client";

import { Card } from "@/components/ui/card";
import * as motion from "motion/react-client";
import WorkProcessMindMap from "../mindmap";
import { useRef, useState } from "react";
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

const TabButton = ({
  tab,
  label,
  isActive,
  onClick,
}: {
  tab: "mindmap" | "steps";
  label: string;
  isActive: boolean;
  onClick: (tab: "mindmap" | "steps") => void;
}) => (
  <button
    onClick={() => onClick(tab)}
    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "bg-accent text-accent-foreground shadow-md"
        : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground"
    }`}
  >
    {label}
  </button>
);

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
      className="relative group "
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="relative p-8 overflow-hidden">
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
        </Card>
      </motion.div>
    </motion.div>
  );
}

function WorkProcess() {
  const { isMobile } = useBreakpoint();
  const [activeTab, setActiveTab] = useState<"mindmap" | "steps">("mindmap");

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
          className="text-4xl md:text-5xl font-bold mb-16 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Approach to Project Management
        </motion.h2>

        {/* Mobile Tab Interface */}
        {isMobile && (
          <motion.div
            className="flex gap-2 mb-8 p-2 bg-background/80 backdrop-blur-sm rounded-xl border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabButton
              tab="mindmap"
              label="Process Flow"
              isActive={activeTab === "mindmap"}
              onClick={setActiveTab}
            />
            <TabButton
              tab="steps"
              label="Step Details"
              isActive={activeTab === "steps"}
              onClick={setActiveTab}
            />
          </motion.div>
        )}

        {/* Content based on screen size and active tab */}
        {isMobile ? (
          <div className="w-full">
            {activeTab === "mindmap" && (
              <motion.div
                key="mindmap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <WorkProcessMindMap />
              </motion.div>
            )}

            {activeTab === "steps" && (
              <motion.div
                key="steps"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-6"
              >
                {processSteps.map((step, index) => (
                  <StepCard key={index} step={step} index={index} />
                ))}
              </motion.div>
            )}
          </div>
        ) : (
          // Desktop layout - show both mindmap and cards
          <>
            <WorkProcessMindMap />
            <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {processSteps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default WorkProcess;
