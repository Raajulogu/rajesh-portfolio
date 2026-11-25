import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectShowcase from "@/components/ProjectShowcase";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Projects | Rajeshkumar R.",
  description:
    "Explore business websites, custom CRM systems, admin dashboards, and custom web application projects across multiple industries.",
};

export default function WorkPage() {
  const allProjects = getAllProjects();

  const scopedProject = allProjects.find(
    (p) => p.classification === "Platform Planning & Technical Scope"
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
            Visual Portfolio
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Client Projects &amp; Digital Products
        </h1>
        <p className="mt-4 text-base text-zinc-300 leading-relaxed">
          Explore 9 client websites across transport, manufacturing, smart home automation, healthcare, creative studios, and community impact — featuring integrated private CRM systems and operational admin panels.
        </p>

        {/* Clear Classification Notice */}
        <div className="mt-6 p-4 rounded-xl bg-[#141822] border border-white/10 flex items-start gap-3 text-xs text-zinc-300">
          <ShieldCheck className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Important Classification: </span>
            All 9 public websites displayed below are freelance/client projects completed independently. They are separate from my full-time employment history at SeedataMD. Private CRM and admin panel URLs are protected and not publicly indexed.
          </div>
        </div>
      </div>

      {/* Flagship Showcases & Visual Gallery */}
      <div className="mb-20">
        <ProjectShowcase />
      </div>

      {/* Additional Scoped Software Project Section */}
      {scopedProject && (
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20 font-semibold">
                Architecture Blueprint
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Platform Planning &amp; Technical Scope
            </h2>
            <p className="text-sm text-zinc-300 max-w-2xl mt-2">
              Complex software systems require extensive technical planning, multi-role access mapping, and phased milestone scoping before implementation begins.
            </p>
          </div>

          <div className="max-w-3xl">
            <ProjectCard project={scopedProject} />
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12151b] via-[#161a22] to-[#12151b] border border-white/10 text-center flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
          Have a similar project in mind?
        </h3>
        <p className="text-sm text-zinc-300 max-w-lg mb-6">
          Whether you need an authoritative business website, an internal CRM to organise customer workflows, or an operational admin dashboard — let&apos;s discuss the right approach.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#d4f933] text-[#090a0c] font-semibold text-sm hover:bg-[#c4eb22] transition-colors shadow-lg shadow-[#d4f933]/15"
        >
          <span>Discuss Your Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
