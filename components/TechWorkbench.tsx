"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Radio, 
  Layers, 
  Wrench,
  CheckCircle2,
  Terminal
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/experience";
import SpotlightCard from "./SpotlightCard";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Frontend Development": <Code2 className="w-4 h-4 text-[#d4f933]" />,
  "Backend & Systems": <Server className="w-4 h-4 text-sky-400" />,
  "Databases & Storage": <Database className="w-4 h-4 text-emerald-400" />,
  "Real-Time & Communications": <Radio className="w-4 h-4 text-amber-400" />,
  "CMS & Platforms": <Layers className="w-4 h-4 text-purple-400" />,
  "Tooling & Collaboration": <Wrench className="w-4 h-4 text-rose-400" />
};

// Real-world project references to demonstrate authentic production usage
const SKILL_PROJECT_MAP: Record<string, string> = {
  "React.js": "Singapore Maxi Cabs & Lumos",
  "Next.js (App Router)": "Current Portfolio & Client Apps",
  "TypeScript": "SeedataMD & Enterprise CRMs",
  "Tailwind CSS": "Ranji Textiles & CircleDot",
  "Node.js": "Maxi Cabs Dispatch & Lumos CRM",
  "Python": "Algorithms & Automation Scripts",
  "RESTful API Design": "Multi-Tenant CRM Systems",
  "MongoDB": "Lumos CRM & Booking Engines",
  "Mongoose ODM": "B2B Relational Data Modelling",
  "Socket.IO": "Real-Time Telemetry & Status Sync",
  "Twilio API": "Automated Booking Notifications",
  "Prismic CMS": "CircleDot Headless Editorial",
  "Git & GitHub": "SeedataMD Team Lead & Freelance",
  "Technical Planning": "Full Architectural Scoping"
};

export default function TechWorkbench() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  const displayedCategories = activeCategory === "All"
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#090c10] border border-white/10 max-w-fit">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                isSelected
                  ? "text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-[#d4f933] rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat !== "All" && CATEGORY_ICONS[cat]}
              <span>{cat === "All" ? "Full Workbench" : cat.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Interactive Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedCategories.map((category) => (
            <motion.div
              key={category.category}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        {CATEGORY_ICONS[category.category] || <Code2 className="w-4 h-4 text-[#d4f933]" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-tight">
                          {category.category}
                        </h3>
                        <span className="text-[10px] font-mono text-zinc-400">
                          Production Ready
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#d4f933] bg-[#d4f933]/10 px-2 py-0.5 rounded border border-[#d4f933]/20">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-5 font-sans">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => {
                      const projectRef = SKILL_PROJECT_MAP[skill.name];
                      return (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-xl bg-[#141822] border border-white/5 hover:border-white/20 transition-all flex items-center justify-between gap-3 group"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#d4f933] shrink-0" />
                            <div className="truncate">
                              <span className="text-xs font-mono font-medium text-white group-hover:text-[#d4f933] transition-colors">
                                {skill.name}
                              </span>
                              {projectRef && (
                                <span className="text-[10px] text-zinc-400 block truncate font-sans">
                                  {projectRef}
                                </span>
                              )}
                            </div>
                          </div>

                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5 shrink-0">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-[#d4f933]" />
                    <span>Tested in production</span>
                  </span>
                  <span className="text-emerald-400">&bull; Verified</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
