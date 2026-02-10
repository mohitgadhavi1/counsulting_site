import { useState, useCallback } from "react";
import {
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlow,
  Background,
  NodeChange,
  EdgeChange,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useBreakpoint } from "@/app/hooks/useBreakpoint";

// Color palette from your config
const colors = {
  background: "#ffffff", // --background
  foreground: "#2563eb", // --foreground
  card: "#f8fafc",       // --muted
  accent: "#2563eb",     // --primary
  border: "#e2e8f0",     // --border
};

// Using blue variations palette
const color1 = "#2563eb"; // Blue 600
const color2 = "#3b82f6"; // Blue 500
const color3 = "#60a5fa"; // Blue 400
const color4 = "#93c5fd"; // Blue 300

function connect(source: string, target: string, color: string) {
  return {
    id: `${source}-${target}`,
    source,
    target,
    type: "smoothstep",
    style: { stroke: color, strokeWidth: 2 },
    animated: true,
    pathOptions: {
      style: {
        strokeDasharray: "5, 5",
      },
    },
  };
}

// Function to generate nodes based on screen size
const getNodes = (isMobile: boolean, isTablet: boolean) => {
  const centerStyle = {
    background: colors.foreground,
    color: colors.background,
    borderRadius: isMobile ? 12 : 20,
    padding: isMobile ? "12px 16px" : "18px 24px",
    fontWeight: 600,
    fontSize: isMobile ? 14 : 16,
  };

  const mainStyle = (color: string) => ({
    background: colors.background,
    border: `2px solid ${color}`,
    borderRadius: isMobile ? 12 : 18,
    padding: isMobile ? "8px 12px" : "12px 16px",
    fontWeight: 500,
    color: colors.foreground,
    fontSize: isMobile ? 12 : 14,
  });

  const subStyle = (color: string) => ({
    background: colors.card,
    color: colors.foreground,
    border: `2px solid ${color}`,
    borderRadius: isMobile ? 8 : 12,
    padding: isMobile ? "4px 8px" : "6px 10px",
    fontSize: isMobile ? 10 : 13,
  });

  // Mobile layout (vertical stacking)
  if (isMobile) {
    return [
      {
        id: "center",
        data: { label: "Our Strategic Approach" },
        position: { x: 150, y: 50 },
        style: centerStyle,
      },
      // Main nodes in vertical layout
      {
        id: "01",
        data: { label: "01 Brainstorming & Strategy" },
        position: { x: 120, y: 150 },
        style: mainStyle(color1),
      },
      {
        id: "01-1",
        data: { label: "Requirement Discovery" },
        position: { x: 80, y: 220 },
        style: subStyle(color1),
      },
      {
        id: "01-2",
        data: { label: "Technical Roadmap" },
        position: { x: 80, y: 270 },
        style: subStyle(color1),
      },
      {
        id: "01-3",
        data: { label: "Scope Finalization" },
        position: { x: 80, y: 320 },
        style: subStyle(color1),
      },
      {
        id: "02",
        data: { label: "02 Documentation & Architecture" },
        position: { x: 110, y: 400 },
        style: mainStyle(color2),
      },
      {
        id: "02-1",
        data: { label: "System Architecture" },
        position: { x: 80, y: 470 },
        style: subStyle(color2),
      },
      {
        id: "02-2",
        data: { label: "API Design & Specs" },
        position: { x: 80, y: 520 },
        style: subStyle(color2),
      },
      {
        id: "03",
        data: { label: "03 Implementation & Dev" },
        position: { x: 100, y: 600 },
        style: mainStyle(color3),
      },
      {
        id: "03-1",
        data: { label: "Agile Sprints" },
        position: { x: 80, y: 670 },
        style: subStyle(color3),
      },
      {
        id: "03-2",
        data: { label: "Interactive Demos" },
        position: { x: 80, y: 720 },
        style: subStyle(color3),
      },
      {
        id: "03-3",
        data: { label: "Continuous Feedback" },
        position: { x: 80, y: 770 },
        style: subStyle(color3),
      },
      {
        id: "03-4",
        data: { label: "Production Readiness" },
        position: { x: 80, y: 820 },
        style: subStyle(color3),
      },
      {
        id: "04",
        data: { label: "04 QA & GTM Strategy" },
        position: { x: 130, y: 900 },
        style: mainStyle(color4),
      },
      {
        id: "04-1",
        data: { label: "End-to-End Testing" },
        position: { x: 80, y: 970 },
        style: subStyle(color4),
      },
      {
        id: "04-2",
        data: { label: "Security Audits" },
        position: { x: 80, y: 1020 },
        style: subStyle(color4),
      },
      {
        id: "04-3",
        data: { label: "Performance Tuning" },
        position: { x: 80, y: 1070 },
        style: subStyle(color4),
      },
      {
        id: "04-4",
        data: { label: "Deployment & Launch" },
        position: { x: 80, y: 1120 },
        style: subStyle(color4),
      },
      {
        id: "04-5",
        data: { label: "Brand Growth" },
        position: { x: 80, y: 1170 },
        style: subStyle(color4),
      },
    ];
  }

  // Tablet layout (compact)
  if (isTablet) {
    return [
      {
        id: "center",
        data: { label: "Our Strategic Approach" },
        position: { x: 300, y: 200 },
        style: centerStyle,
      },
      {
        id: "01",
        data: { label: "01 Brainstorming & Strategy" },
        position: { x: 500, y: 100 },
        style: mainStyle(color1),
      },
      {
        id: "01-1",
        data: { label: "Req. Discovery" },
        position: { x: 680, y: 70 },
        style: subStyle(color1),
      },
      {
        id: "01-2",
        data: { label: "Tech Roadmap" },
        position: { x: 680, y: 110 },
        style: subStyle(color1),
      },
      {
        id: "01-3",
        data: { label: "Scope Finalization" },
        position: { x: 680, y: 150 },
        style: subStyle(color1),
      },
      {
        id: "02",
        data: { label: "02 Doc & Architecture" },
        position: { x: 500, y: 280 },
        style: mainStyle(color2),
      },
      {
        id: "02-1",
        data: { label: "System Arch" },
        position: { x: 680, y: 260 },
        style: subStyle(color2),
      },
      {
        id: "02-2",
        data: { label: "API Design" },
        position: { x: 680, y: 300 },
        style: subStyle(color2),
      },
      {
        id: "03",
        data: { label: "03 Implementation" },
        position: { x: 80, y: 280 },
        style: mainStyle(color3),
      },
      {
        id: "03-1",
        data: { label: "Agile Sprints" },
        position: { x: -100, y: 240 },
        style: subStyle(color3),
      },
      {
        id: "03-2",
        data: { label: "Interactive Demos" },
        position: { x: -100, y: 280 },
        style: subStyle(color3),
      },
      {
        id: "03-3",
        data: { label: "Continuous Feedback" },
        position: { x: -100, y: 320 },
        style: subStyle(color3),
      },
      {
        id: "03-4",
        data: { label: "Prod Readiness" },
        position: { x: -100, y: 360 },
        style: subStyle(color3),
      },
      {
        id: "04",
        data: { label: "04 QA & GTM" },
        position: { x: 80, y: 100 },
        style: mainStyle(color4),
      },
      {
        id: "04-1",
        data: { label: "E2E Testing" },
        position: { x: -100, y: 60 },
        style: subStyle(color4),
      },
      {
        id: "04-2",
        data: { label: "Security Audits" },
        position: { x: -100, y: 100 },
        style: subStyle(color4),
      },
      {
        id: "04-3",
        data: { label: "Performance" },
        position: { x: -100, y: 160 },
        style: subStyle(color4),
      },
      {
        id: "04-4",
        data: { label: "Launch" },
        position: { x: -100, y: 200 },
        style: subStyle(color4),
      },
      {
        id: "04-5",
        data: { label: "Brand Growth" },
        position: { x: -100, y: 220 },
        style: subStyle(color4),
      },
    ];
  }

  // Desktop layout (original)
  return [
    {
      id: "center",
      data: { label: "Our Strategic Approach" },
      position: { x: 400, y: 250 },
      style: centerStyle,
    },
    {
      id: "01",
      data: { label: "01 Brainstorming & Strategy" },
      position: { x: 700, y: 120 },
      style: mainStyle(color1),
    },
    {
      id: "01-1",
      data: { label: "Requirement Discovery" },
      position: { x: 930, y: 85 },
      style: subStyle(color1),
    },
    {
      id: "01-2",
      data: { label: "Technical Roadmap" },
      position: { x: 940, y: 140 },
      style: subStyle(color1),
    },
    {
      id: "01-3",
      data: { label: "Scope Finalization" },
      position: { x: 930, y: 200 },
      style: subStyle(color1),
    },
    {
      id: "02",
      data: { label: "02 Documentation & Architecture" },
      position: { x: 700, y: 360 },
      style: mainStyle(color2),
    },
    {
      id: "02-1",
      data: { label: "System Architecture" },
      position: { x: 930, y: 330 },
      style: subStyle(color2),
    },
    {
      id: "02-2",
      data: { label: "API Design & Specs" },
      position: { x: 930, y: 400 },
      style: subStyle(color2),
    },
    {
      id: "03",
      data: { label: "03 Implementation & Development" },
      position: { x: 100, y: 360 },
      style: mainStyle(color3),
    },
    {
      id: "03-1",
      data: { label: "Agile Sprints" },
      position: { x: -150, y: 310 },
      style: subStyle(color3),
    },
    {
      id: "03-2",
      data: { label: "Interactive Demos" },
      position: { x: -150, y: 350 },
      style: subStyle(color3),
    },
    {
      id: "03-3",
      data: { label: "Continuous Feedback" },
      position: { x: -150, y: 390 },
      style: subStyle(color3),
    },
    {
      id: "03-4",
      data: { label: "Production Readiness" },
      position: { x: -150, y: 550 },
      style: subStyle(color3),
    },
    {
      id: "04",
      data: { label: "04 QA & GTM Strategy" },
      position: { x: 100, y: 120 },
      style: mainStyle(color4),
    },
    {
      id: "04-1",
      data: { label: "End-to-End Testing" },
      position: { x: -150, y: 80 },
      style: subStyle(color4),
    },
    {
      id: "04-2",
      data: { label: "Security Audits" },
      position: { x: -150, y: 120 },
      style: subStyle(color4),
    },
    {
      id: "04-3",
      data: { label: "Performance Tuning" },
      position: { x: -150, y: 180 },
      style: subStyle(color4),
    },
    {
      id: "04-4",
      data: { label: "Deployment & Launch" },
      position: { x: -150, y: 220 },
      style: subStyle(color4),
    },
    {
      id: "04-5",
      data: { label: "Brand Growth" },
      position: { x: -150, y: 260 },
      style: subStyle(color4),
    },
  ];
};

const getEdges = () => [
  connect("center", "01", color1),
  connect("center", "02", color2),
  connect("center", "03", color3),
  connect("center", "04", color4),
  connect("01", "01-1", color1),
  connect("01", "01-2", color1),
  connect("01", "01-3", color1),
  connect("02", "02-1", color2),
  connect("02", "02-2", color2),
  connect("03", "03-1", color3),
  connect("03", "03-2", color3),
  connect("03", "03-3", color3),
  connect("03", "03-4", color3),
  connect("04", "04-1", color4),
  connect("04", "04-2", color4),
  connect("04", "04-3", color4),
  connect("04", "04-4", color4),
  connect("04", "04-5", color4),
];

export default function WorkProcessMindMap() {
  const { isMobile, isTablet } = useBreakpoint();

  const [nodes, setNodes] = useState<Node[]>(getNodes(isMobile, isTablet));
  const [edges, setEdges] = useState<Edge[]>(getEdges());

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div
      className="w-full rounded-lg overflow-hidden shadow-lg border-2"
      style={{
        height: isMobile ? "1300px" : isTablet ? "500px" : "600px",
        borderColor: colors.border,
        background: colors.background,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        minZoom={0.9}

        maxZoom={1.5}
        attributionPosition="bottom-left"
        panOnScroll={false}

      >
        <Background color={colors.accent} gap={16} />
      </ReactFlow>
    </div>
  );
}
