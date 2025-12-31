"use client";
import React, { useCallback, useState } from "react";
import { Card } from "@/components/ui/card";
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
        <div className="absolute inset-6 rounded-3xl bg-card/30 " />
        
      </div>

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
<WorkProcessMindMap/>
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



import { applyEdgeChanges, applyNodeChanges, Background ,EdgeChange,NodeChange,ReactFlow} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { addEdge } from "reactflow";


const centerStyle = {
  background: "#4b4f63",
  color: "#fff",
  borderRadius: 20,
  padding: "18px 24px",
  fontWeight: 600,
};

const mainStyle = (color: string) => ({
  background: "#fff",
  border: `2px solid ${color}`,
  borderRadius: 18,
  padding: "12px 16px",
  fontWeight: 500,
});

const subStyle = (color: string) => ({
  background: "transparent",
  color: "#333",
  border: `2px solid ${color}`,
  borderRadius: 12,
  padding: "6px 10px",
  fontSize: 13,
});

const initialNodes = [
  // CENTER
  {
    id: "center",
    data: { label: "Work Process" },
    position: { x: 400, y: 250 },
    style: centerStyle,
  },

  // MAIN NODES
  {
    id: "01",
    data: { label: "01 Brainstorming" },
    position: { x: 700, y: 120 },
    style: mainStyle("#e57373"),
  },
  {
    id: "02",
    data: { label: "02 Documentation" },
    position: { x: 700, y: 360 },
    style: mainStyle("#f06292"),
  },
  {
    id: "03",
    data: { label: "03 Implementation" },
    position: { x: 100, y: 360 },
    style: mainStyle("#7c4dff"),
  },
  {
    id: "04",
    data: { label: "04 Testing & Deployment" },
    position: { x: 100, y: 120 },
    style: mainStyle("#ef5350"),
  },

  // --- Brainstorming sub-nodes
  {
    id: "01-1",
    data: { label: "Create Roadmap" },
    position: { x: 930, y: 80 },
    style: subStyle("#e57373"),
  },
  {
    id: "01-2",
    data: { label: "Generate Ideas Freely" },
    position: { x: 930, y: 120 },
    style: subStyle("#e57373"),
  },
  {
    id: "01-3",
    data: { label: "Strive for Perfect View" },
    position: { x: 930, y: 160 },
    style: subStyle("#e57373"),
  },

  // --- Documentation sub-nodes
  {
    id: "02-1",
    data: { label: "Prevent Misunderstandings" },
    position: { x: 930, y: 330 },
    style: subStyle("#f06292"),
  },
  {
    id: "02-2",
    data: { label: "Chart Roadmap & Milestones" },
    position: { x: 930, y: 370 },
    style: subStyle("#f06292"),
  },

  // --- Implementation sub-nodes
  {
    id: "03-1",
    data: { label: "Timely Delivery" },
    position: { x: -150, y: 310 },
    style: subStyle("#7c4dff"),
  },
  {
    id: "03-2",
    data: { label: "Regular Updates" },
    position: { x: -150, y: 350 },
    style: subStyle("#7c4dff"),
  },
  {
    id: "03-3",
    data: { label: "Dedicated Project Manager" },
    position: { x: -150, y: 390 },
    style: subStyle("#7c4dff"),
  },
  {
    id: "03-4",
    data: { label: "Handle Deviations" },
    position: { x: -150, y: 430 },
    style: subStyle("#7c4dff"),
  },

  // --- Testing & Deployment sub-nodes
  {
    id: "04-1",
    data: { label: "Internal Testing" },
    position: { x: -150, y: 80 },
    style: subStyle("#ef5350"),
  },
  {
    id: "04-2",
    data: { label: "Client Final Confirmation" },
    position: { x: -150, y: 120 },
    style: subStyle("#ef5350"),
  },
  {
    id: "04-3",
    data: { label: "Go Live" },
    position: { x: -150, y: 160 },
    style: subStyle("#ef5350"),
  },
  {
    id: "04-4",
    data: { label: "Optimize Brand Value" },
    position: { x: -150, y: 200 },
    style: subStyle("#ef5350"),
  },
  {
    id: "04-5",
    data: { label: "Generate Leads" },
    position: { x: -150, y: 240 },
    style: subStyle("#ef5350"),
  },
];




const initialEdges = [
  // Center connections
  connect("center", "01", "#e57373"),
  connect("center", "02", "#f06292"),
  connect("center", "03", "#7c4dff"),
  connect("center", "04", "#ef5350"),

  // Brainstorming
  connect("01", "01-1", "#e57373"),
  connect("01", "01-2", "#e57373"),
  connect("01", "01-3", "#e57373"),

  // Documentation
  connect("02", "02-1", "#f06292"),
  connect("02", "02-2", "#f06292"),

  // Implementation
  connect("03", "03-1", "#7c4dff"),
  connect("03", "03-2", "#7c4dff"),
  connect("03", "03-3", "#7c4dff"),
  connect("03", "03-4", "#7c4dff"),

  // Testing & Deployment
  connect("04", "04-1", "#ef5350"),
  connect("04", "04-2", "#ef5350"),
  connect("04", "04-3", "#ef5350"),
  connect("04", "04-4", "#ef5350"),
  connect("04", "04-5", "#ef5350"),
];




export function WorkProcessMindMap() {
    const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
    const onNodesChange = useCallback(
    (changes: NodeChange<{ id: string; data: { label: string; }; position: { x: number; y: number; }; style: { background: string; color: string; borderRadius: number; padding: string; fontWeight: number; }; } | { id: string; data: { label: string; }; position: { x: number; y: number; }; style: { background: string; border: string; borderRadius: number; padding: string; fontWeight: number; }; } | { id: string; data: { label: string; }; position: { x: number; y: number; }; style: { background: string; color: string; border: string; borderRadius: number; padding: string; fontSize: number; }; }>[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<{ id: string; source: string; target: string; type: string; style: { stroke: string; strokeWidth: number; }; }>[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );


  return(
       <div className="w-100vw h-196" >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
    
        fitView
      />
    </div>

  );
}



function connect(source: string, target: string, color: string) {
  return {
    id: `${source}-${target}`,
    source,
    target,
    type: "smoothstep",
    style: { stroke: color, strokeWidth: 2 },
  };
}

