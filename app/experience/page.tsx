import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowUpRight, 
  Calendar
} from "lucide-react";
import { EXPERIENCES, SKILL_CATEGORIES } from "@/data/experience";

export const metadata: Metadata = {
  title: "Professional Experience | Full-Stack Developer & Tech Lead",
  description:
    "Explore professional experience in full-stack development, technical planning, application development, integrations, and team collaboration.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
            Career Timeline
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Professional Employment &amp; Technical Ownership
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed">
          A dedicated overview of full-time software engineering and technical leadership roles.
        </p>

        {/* Clear Classification Alert */}
        <div className="mt-6 p-4 rounded-xl bg-[#141822] border border-white/10 flex items-start gap-3 text-xs text-zinc-300">
          <ShieldCheck className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Employment vs. Freelance Classification: </span>
            This page represents full-time professional employment history. All 9 public client websites (such as Ranji Textiles, Singapore Maxi Cabs, Lumos, Zenith, etc.) were independently completed as freelance engagements and are showcased under{" "}
            <Link href="/work" className="text-[#d4f933] underline hover:text-white">
              Selected Work
            </Link>.
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8 mb-20">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className={`rounded-2xl border p-6 sm:p-8 lg:p-10 transition-all ${
              exp.isCurrent
                ? "bg-[#11141c] border-[#d4f933]/30 shadow-xl shadow-[#d4f933]/5"
                : "bg-[#0f1217] border-white/10"
            }`}
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h2>
                  {exp.isCurrent && (
                    <span className="text-[10px] font-mono uppercase bg-[#d4f933] text-[#090a0c] font-bold px-2 py-0.5 rounded">
                      Current Role
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="font-semibold text-white">{exp.companyOrContext}</span>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="font-mono text-xs text-zinc-400">{exp.location}</span>
                  <span className="text-zinc-600">&bull;</span>
                  <span className="text-xs text-emerald-400 font-mono">{exp.employmentType}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto shrink-0">
                <Calendar className="w-3.5 h-3.5 text-[#d4f933]" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              {exp.summary}
            </p>

            {/* Responsibilities */}
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                Core Engineering Deliverables:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#141822] border border-white/5 flex items-start gap-2.5 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Lead Responsibilities (if current) */}
            {exp.techLeadResponsibilities && (
              <div className="p-5 rounded-xl bg-[#151922] border border-[#d4f933]/20 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d4f933] font-semibold block mb-3">
                  Technical Leadership &amp; Team Ownership:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                  {exp.techLeadResponsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933] mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Badges */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-zinc-400 mr-2">Technologies:</span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-zinc-300 bg-white/5 px-2.5 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
          Technical Strengths &amp; Capabilities
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-8">
          The engineering stack applied across full-time employment and freelance software architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-[#0f1217] border border-white/10"
            >
              <h3 className="text-base font-bold text-white mb-1">{cat.category}</h3>
              <p className="text-xs text-zinc-400 mb-4">{cat.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="text-xs font-mono text-zinc-300 bg-[#161a22] px-2 py-1 rounded border border-white/5"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12151b] via-[#161a22] to-[#12151b] border border-white/10 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Looking for a Full-Stack Developer or Tech Lead?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mb-6">
          I am available for select contract work, consulting, and end-to-end web product development.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d4f933] text-[#090a0c] font-semibold text-xs sm:text-sm hover:bg-[#c4eb22] transition-colors shadow-lg shadow-[#d4f933]/15"
        >
          <span>Discuss Opportunities</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
