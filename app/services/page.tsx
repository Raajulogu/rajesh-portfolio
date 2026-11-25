import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck
} from "lucide-react";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Website & Custom Software Development Services | Rajeshkumar R.",
  description:
    "Explore business website development, custom CRM systems, admin dashboards, and full-stack application development services.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
            Services &amp; Offerings
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Engineered for Business Outcomes
        </h1>
        <p className="text-base text-zinc-300 leading-relaxed">
          I partner with founders, agencies, and businesses to build websites that command authority and internal systems that eliminate operational bottlenecks.
        </p>

        {/* Realistic Expectations Banner */}
        <div className="mt-6 p-4 rounded-xl bg-[#141822] border border-white/10 text-xs text-zinc-400 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Pragmatic Guarantee: </span>
            I promise high-quality technical architecture, clean code, rapid page loads, responsive design, and dependable communication. I do not make artificial guarantees of overnight Google rankings, viral traffic, or inflated revenue multipliers.
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-16 mb-20">
        {SERVICES.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-24 p-6 sm:p-10 rounded-3xl bg-[#0f1217] border border-white/10 hover:border-white/20 transition-all"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="text-xs font-mono text-[#d4f933] uppercase tracking-wider block mb-1">
                  0{index + 1} &bull; {service.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.title}
                </h2>
              </div>
              <Link
                href={`/contact?type=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d4f933] text-[#090a0c] font-semibold text-xs hover:bg-[#c4eb22] transition-colors self-start sm:self-auto shrink-0 shadow-md shadow-[#d4f933]/15"
              >
                <span>Discuss This Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed mb-6">
              {service.tagline}
            </p>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-[#141822] border border-white/5">
                <span className="text-xs font-mono uppercase text-red-400 block mb-2 font-semibold">
                  The Problem It Solves
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {service.problemItSolves}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#141822] border border-white/5">
                <span className="text-xs font-mono uppercase text-[#d4f933] block mb-2 font-semibold">
                  Business Value
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {service.businessValue}
                </p>
              </div>
            </div>

            {/* Who Needs This */}
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                Who Needs This:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.whoNeedsThis.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#161a22] border border-white/5 flex items-start gap-2.5 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4f933] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Can Be Built */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                What Can Be Built:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                {service.whatCanBeBuilt.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded bg-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12151b] via-[#161a22] to-[#12151b] border border-white/10 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Unsure which service matches your current stage?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mb-6">
          Tell me about your business goals and current operational friction. I will recommend the leanest, most effective technical approach.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d4f933] text-[#090a0c] font-semibold text-xs sm:text-sm hover:bg-[#c4eb22] transition-colors shadow-lg shadow-[#d4f933]/15"
        >
          <span>Schedule a Discussion</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
