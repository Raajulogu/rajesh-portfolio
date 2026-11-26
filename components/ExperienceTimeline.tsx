"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, Award } from "lucide-react";
import { EXPERIENCES } from "@/data/experience";
import SpotlightCard from "./SpotlightCard";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      {EXPERIENCES.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: index * 0.1 }}
        >
          <SpotlightCard
            className={`p-6 sm:p-8 transition-all ${
              exp.isCurrent
                ? "border-[#d4f933]/30 shadow-lg shadow-[#d4f933]/5 ring-1 ring-[#d4f933]/15"
                : "border-white/10"
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Briefcase className="w-3.5 h-3.5 text-[#d4f933]" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  {exp.isCurrent && (
                    <span className="text-[10px] font-mono uppercase bg-[#d4f933] text-[#090a0c] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold text-zinc-300">
                  {exp.companyOrContext} &bull;{" "}
                  <span className="font-mono text-zinc-400 font-normal">
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="text-xs font-mono text-[#d4f933] bg-[#d4f933]/10 px-3 py-1.5 rounded-lg border border-[#d4f933]/20 self-start sm:self-auto font-semibold">
                {exp.period}
              </div>
            </div>

            <p className="text-sm text-zinc-300 mb-6 leading-relaxed font-sans">
              {exp.summary}
            </p>

            {/* Core Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {exp.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>

            {/* Tech Lead Ownership section */}
            {exp.techLeadResponsibilities && (
              <div className="bg-[#141822] p-4 sm:p-5 rounded-xl border border-white/5 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4f933] font-semibold flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4" />
                  <span>Technical Leadership &amp; Ownership Highlights:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                  {exp.techLeadResponsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933] shrink-0 mt-1.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/5">
              <span className="text-[11px] font-mono text-zinc-400 mr-2">Core Tech:</span>
              {exp.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-zinc-300 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/5 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}
