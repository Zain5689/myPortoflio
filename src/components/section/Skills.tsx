"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Heading } from "@components/index";
import { skills, skillCategories } from "@data/skills";

type SkillLevel = "Proficient" | "Intermediate" | "Learning";
type SkillCategory = "frontend" | "backend" | "tools";

interface Skill {
  id: string;
  skillName: string;
  Icon: LucideIcon;
  color: string;
  category: SkillCategory;
  level: SkillLevel;
}

interface SkillCategoryFilter {
  id: "all" | SkillCategory;
  label: string;
}

const LEVEL_STYLES: Record<SkillLevel, string> = {
  Proficient: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
  Intermediate: "text-indigo-300 border-indigo-400/40 bg-indigo-500/10",
  Learning: "text-amber-400 border-amber-500/40 bg-amber-500/10",
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<
    SkillCategoryFilter["id"]
  >("all");

  const filteredSkills: Skill[] =
    activeCategory === "all"
      ? skills
      : skills.filter((skill: Skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Heading title="Programming Skills" />

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {skillCategories.map(({ id, label }: SkillCategoryFilter) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveCategory(id)}
                className={`
                  px-5 py-2
                  rounded-full
                  text-sm font-medium
                  border
                  transition-all duration-300
                  ${isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-gray-600 dark:text-text-main border-gray-300 dark:border-white/15 hover:border-primary hover:text-primary"
                  }
                `}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {filteredSkills.map(({ id, skillName, Icon, color, level }: Skill) => (
            <div
              key={id}
              className="
                flex flex-col items-start
                text-left
                p-6
                rounded-2xl
                border border-gray-200 dark:border-white/10
                bg-gray-50 dark:bg-white/[0.02]
                transition-all duration-300
                hover:border-primary
                hover:-translate-y-1
              "
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon size={20} className={color} />
                <span className="text-base font-semibold text-gray-900 dark:text-white">
                  {skillName}
                </span>
              </div>

              <span
                className={`
                  text-[11px] font-bold uppercase tracking-wider
                  px-2.5 py-1
                  rounded-md
                  border
                  ${LEVEL_STYLES[level] || LEVEL_STYLES.Intermediate}
                `}
              >
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;