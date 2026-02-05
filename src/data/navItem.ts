import { Home, User, GraduationCap, Cpu, Code2, Send } from "lucide-react";
export interface navData {
  id: string | number;
  name: string;
  path: string;
  Home: string;
}
export const navData = [
  { id: 1, name: "Home", path: "/hero", icon: Home },
  { id: 2, name: "About", path: "/about", icon: User },
  { id: 3, name: "Education", path: "/education", icon: GraduationCap },
  { id: 4, name: "Skills", path: "/skills", icon: Cpu },
  { id: 5, name: "Projects", path: "/projects", icon: Code2 },
  { id: 6, name: "Contact", path: "/contact", icon: Send },
];
