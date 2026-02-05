import { Code, Briefcase } from "lucide-react";
export interface educationData {
  date: string;
  icon: string;
  title: string;
  company: string;
}
export const educationData = [
  {
    date: "Jan 2021 - Jan 2025",
    icon: Code,
    title: "Faculty of Computer and Artificial Intelligence ",
    company: "FCAI",
  },
  {
    date: "2024 – Oct 2024",
    icon: Briefcase,
    title: " Front-End Development -( 1 month)",
    company: "ITI",
  },
  {
    date: "2024 – Oct 2024",
    icon: Code,
    title: "Big Data & Data Management",
    company: "BD",
  },
];
