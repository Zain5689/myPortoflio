import type { LucideIcon } from "lucide-react";

export type SkillLevel = "Proficient" | "Intermediate" | "Learning";

export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
    id: string;
    skillName: string;
    Icon: LucideIcon;
    color: string;
    category: SkillCategory;
    level: SkillLevel;
}

export interface SkillCategoryFilter {
    id: "all" | SkillCategory;
    label: string;
}