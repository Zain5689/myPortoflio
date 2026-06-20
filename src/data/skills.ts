import {
  Code2,
  Layout,
  FileJson,
  Palette,
  Cpu,
  Terminal,
  Layers,
  GitBranch,
  Figma,
  Globe,
  Database,
  Cloud,
  Server,
  Package,
  Component,
} from "lucide-react";

// category: "frontend" | "backend" | "tools"
// level:    "Proficient" | "Intermediate" | "Learning"
export const skills = [
  { id: "4", skillName: "Bootstrap", Icon: Palette, color: "text-purple-600", category: "frontend", level: "Intermediate" },
  { id: "5", skillName: "Tailwind CSS", Icon: Cpu, color: "text-sky-400", category: "frontend", level: "Proficient" },
  { id: "6", skillName: "TypeScript", Icon: Terminal, color: "text-blue-600", category: "frontend", level: "Intermediate" },
  { id: "7", skillName: "React", Icon: Layers, color: "text-cyan-400", category: "frontend", level: "Proficient" },
  { id: "8", skillName: "Git", Icon: GitBranch, color: "text-red-500", category: "tools", level: "Proficient" },
  { id: "9", skillName: "Figma", Icon: Figma, color: "text-pink-500", category: "tools", level: "Intermediate" },
  { id: "10", skillName: "Next.js", Icon: Globe, color: "text-gray-800 dark:text-white", category: "frontend", level: "Proficient" },
  { id: "11", skillName: "Node.js", Icon: Server, color: "text-green-600", category: "backend", level: "Intermediate" },
  { id: "13", skillName: "Redux Toolkit", Icon: Layers, color: "text-purple-500", category: "frontend", level: "Intermediate" },
  { id: "18", skillName: "MongoDB", Icon: Database, color: "text-green-500", category: "backend", level: "Intermediate" },
  { id: "21", skillName: "Material UI", Icon: Package, color: "text-blue-400", category: "frontend", level: "Intermediate" },
  { id: "22", skillName: "ShadCN UI", Icon: Component, color: "text-violet-500", category: "frontend", level: "Intermediate" },
  { id: "23", skillName: "Nest.js", Icon: Terminal, color: "text-green-400", category: "backend", level: "Learning" },
];

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];