import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowUpRight
} from "lucide-react";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechWorkbench from "@/components/TechWorkbench";

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
        <p className="text-base text-zinc-300 leading-relaxed font-sans">
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
      <div className="mb-20">
        <ExperienceTimeline />
      </div>

      {/* Skills Summary Grid (Tech Workbench) */}
      <section className="mb-20">
        <div className="mb-8">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold inline-block mb-2">
            Tooling &amp; Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            Technical Strengths &amp; Engineering Workbench
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300">
            The engineering stack applied across full-time employment and freelance software architecture.
          </p>
        </div>

        <TechWorkbench />
      </section>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12151b] via-[#161a22] to-[#12151b] border border-white/10 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Looking for a Full-Stack Developer or Tech Lead?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-md mb-6">
          I am available for select contract work, consulting, and end-to-end web product development.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#d4f933] text-[#090a0c] font-semibold text-sm hover:bg-[#c4eb22] transition-colors shadow-lg shadow-[#d4f933]/15"
        >
          <span>Discuss Opportunities</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
