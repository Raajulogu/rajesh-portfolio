import React from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import HeroVisual from "@/components/HeroVisual";
import CircularProjectReel from "@/components/CircularProjectReel";
import ServicesShowcase from "@/components/ServicesShowcase";
import InternalSystemMockup from "@/components/InternalSystemMockup";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechWorkbench from "@/components/TechWorkbench";
import InteractiveProcess from "@/components/InteractiveProcess";
import DeveloperProfileSnippet from "@/components/DeveloperProfileSnippet";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24">
      {/* SECTION 1: HERO */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[#d4f933]/5 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141822] border border-white/10 text-xs font-mono text-zinc-300 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#d4f933] animate-pulse" />
                <span className="font-semibold text-white">Full-Stack Developer &amp; Tech Lead</span>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-zinc-400">Pondicherry, India</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
                I build digital products that solve{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4f933] via-lime-200 to-white">
                  real business problems.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-zinc-300 max-w-xl mb-8 leading-relaxed font-sans">
                {SITE_CONFIG.subheadline} From client-facing commercial websites to internal operational CRMs and admin dispatch panels.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d4f933] text-[#090a0c] font-semibold text-sm hover:bg-[#c4eb22] transition-all shadow-lg shadow-[#d4f933]/20 active:scale-98"
                >
                  <span>Discuss a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#featured-work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141822] border border-white/10 text-white font-medium text-sm hover:border-white/30 hover:bg-white/5 transition-all"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </Link>
              </div>

              {/* Verified Proof Metrics */}
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 w-full max-w-lg">
                <div>
                  <div className="text-2xl font-bold font-mono text-white">9+</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Freelance Public Builds</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[#d4f933]">4</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Internal CRM &amp; Admin Panels</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-white">500+</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Algorithmic Problems Solved</div>
                </div>
              </div>
            </div>

            {/* Right Architectural System Visual */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CREDIBILITY STRIP */}
      <section className="border-y border-white/10 bg-[#0c0e12]/80 py-8 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-semibold shrink-0">
              Core Capabilities:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {SITE_CONFIG.credibilityCapabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#151922] border border-white/5 text-xs text-zinc-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4f933] shrink-0" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3D CIRCULAR PROJECT REEL */}
      <section id="featured-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CircularProjectReel />
      </section>

      {/* SECTION 4: ENGINEERING DISCIPLINES & CRAFTSMANSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Focus"
          title="Core Disciplines &amp; Problem Solving"
          description="Every system is engineered through a commercial lens — structured to eliminate manual operational friction, automate business workflows, or capture high-intent client revenue."
        />

        <ServicesShowcase />
      </section>

      {/* SECTION 5: BEYOND WEBSITES (CRITICAL DIFFERENTIATOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#11141c] to-[#0d0f14] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
                Strategic Differentiator
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Beyond Public Websites: Internal Business Software
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
              Anyone can publish an attractive landing page. What sets my engineering apart is the ability to architect the internal engines businesses rely on every day — custom CRMs, dispatch boards, inventory systems, and operational dashboards.
            </p>
          </div>

          {/* Interactive Internal Systems Demonstrator */}
          <InternalSystemMockup />
        </div>
      </section>

      {/* SECTION 6: TECHNICAL WORKBENCH (INTERACTIVE SKILL LAB) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Stack"
          title="Interactive Engineering Workbench"
          description="Production-verified technologies tested across commercial client builds and full-stack enterprise systems. Filter by layer to view production applications."
        />

        <TechWorkbench />
      </section>

      {/* SECTION 7: PROFESSIONAL EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Employment History"
          title="Professional Experience &amp; Leadership"
          description="Full-time engineering roles separate from freelance/client work. Demonstrating technical leadership, team onboarding, and scalable MERN platform development."
        />

        <ExperienceTimeline />
      </section>

      {/* SECTION 8: ENGINEERING METHODOLOGY & FLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Flow"
          title="How I Build — 6-Phase Delivery Lifecycle"
          description="A structured, predictable framework ensuring requirements are understood upfront, edge cases are caught early, and delivery dates are met with zero surprises."
        />

        <InteractiveProcess />
      </section>

      {/* SECTION 9: PERSONAL DEVELOPER PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DeveloperProfileSnippet />
      </section>

      {/* SECTION 10: CONTACT CTA */}
      <section id="contact-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
              Start a Conversation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Have a business problem that software could solve?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            Tell me what you&apos;re trying to improve. Let&apos;s discuss the right approach, scope, and next steps.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
