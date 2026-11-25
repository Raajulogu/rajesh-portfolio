import React from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Award
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { EXPERIENCES, SKILL_CATEGORIES } from "@/data/experience";
import { SERVICES } from "@/data/services";
import SectionHeading from "@/components/SectionHeading";
import HeroVisual from "@/components/HeroVisual";
import ProjectShowcase from "@/components/ProjectShowcase";
import InternalSystemMockup from "@/components/InternalSystemMockup";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24">
      {/* SECTION 1: HERO */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 overflow-hidden">
        {/* Subtle background tech glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#d4f933]/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141822] border border-white/10 text-xs font-mono text-zinc-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#d4f933] animate-pulse" />
                <span>Full-Stack Developer &amp; Tech Lead</span>
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
              <p className="text-base sm:text-lg text-zinc-300 max-w-xl mb-8 leading-relaxed">
                {SITE_CONFIG.subheadline} From client-facing commercial websites to internal operational CRMs and admin dispatch panels.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d4f933] text-[#090a0c] font-semibold text-sm hover:bg-[#c4eb22] transition-all shadow-lg shadow-[#d4f933]/20"
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

      {/* SECTION 3: VISUAL PROJECT SHOWCASE */}
      <section id="featured-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
                Visual Work Showcase
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-white">
              Selected Client Projects
            </h2>
            <p className="mt-2 text-sm text-zinc-300 max-w-2xl">
              Nine verified freelance client platforms across transport, manufacturing, IoT automation, healthcare, creative studios, and community outreach.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#d4f933] hover:underline"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Varied Visual Showcases with Interactive Switchers */}
        <ProjectShowcase />
      </section>

      {/* SECTION 4: WHAT I BUILD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Expertise"
          title="What I Build — Delivered as Business Solutions"
          description="I look at software through a commercial lens. Every line of code is structured to solve a bottleneck, reduce team overhead, or capture client revenue."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="rounded-2xl border border-white/10 bg-[#0f1217] p-6 flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#d4f933] bg-[#d4f933]/10 px-2 py-0.5 rounded border border-[#d4f933]/20">
                    0{index + 1} &bull; {service.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#d4f933] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="pt-3 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 block mb-1">
                    Business Value:
                  </span>
                  <p className="text-xs text-zinc-300 italic">
                    &ldquo;{service.businessValue}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/services#${service.id}`}
                  className="text-xs font-semibold text-white group-hover:text-[#d4f933] transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Service Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: BEYOND WEBSITES (CRITICAL DIFFERENTIATOR) */}
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
            <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
              Anyone can publish an attractive landing page. What sets my engineering apart is the ability to architect the internal engines businesses rely on every day — custom CRMs, dispatch boards, inventory systems, and operational dashboards.
            </p>
          </div>

          {/* Interactive Internal Systems Demonstrator */}
          <InternalSystemMockup />
        </div>
      </section>

      {/* SECTION 7: PROFESSIONAL EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Employment History"
          title="Professional Experience"
          description="Full-time engineering roles separate from freelance/client work. Demonstrating technical leadership, team onboarding, and scalable MERN platform development."
        />

        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className={`rounded-2xl border p-6 sm:p-8 transition-all ${
                exp.isCurrent
                  ? "bg-[#11141c] border-[#d4f933]/30 shadow-lg shadow-[#d4f933]/5"
                  : "bg-[#0f1217] border-white/10"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    {exp.isCurrent && (
                      <span className="text-[10px] font-mono uppercase bg-[#d4f933] text-[#090a0c] font-bold px-2 py-0.5 rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-zinc-300">
                    {exp.companyOrContext} &bull; <span className="font-mono text-zinc-400 font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto">
                  {exp.period}
                </div>
              </div>

              <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4f933] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Lead section if current */}
              {exp.techLeadResponsibilities && (
                <div className="bg-[#151922] p-4 rounded-xl border border-white/5 mb-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d4f933] font-semibold block mb-2">
                    Technical Leadership &amp; Ownership Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                    {exp.techLeadResponsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933]"></span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech stack tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
                <span className="text-[11px] font-mono text-zinc-400 mr-2">Core Tech:</span>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-zinc-300 bg-white/5 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: TECHNICAL SKILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technology Stack"
          title="Technical Skills &amp; Engineering Tooling"
          description="Curated around production reliability. No vanity badge walls — strictly technologies verified through hands-on full-stack development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-white/10 bg-[#0f1217] p-6 hover:border-white/20 transition-all"
            >
              <h3 className="text-base font-bold text-white mb-1">
                {cat.category}
              </h3>
              <p className="text-xs text-zinc-300 mb-4">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#151922] border border-white/5 text-xs font-mono text-zinc-200"
                  >
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: DEVELOPMENT PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Methodology"
          title="My 6-Step Development Process"
          description="A structured, predictable framework ensuring requirements are understood upfront, edge cases are caught early, and delivery dates are met."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.developmentProcess.map((proc) => (
            <div
              key={proc.step}
              className="rounded-2xl border border-white/10 bg-[#0f1217] p-6 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div>
                <span className="text-2xl font-bold font-mono text-[#d4f933] block mb-2">
                  {proc.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {proc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0f1217] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
                  About Rajeshkumar R.
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Turning complex business requirements into simple, useful digital experiences.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                I&apos;m a Full-Stack Developer and Tech Lead who enjoys turning complex business requirements into simple, useful digital experiences. I work across frontend, backend, and internal business systems, with a focus on building software that solves practical problems.
              </p>

              {/* Achievements & Academic proof */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#d4f933]/10 text-[#d4f933] flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">3rd Place Podium Finish</div>
                    <div className="text-[11px] text-zinc-400">Guru&apos;s Codekata Algorithmic Challenge</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#d4f933]/10 text-[#d4f933] flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">500+ Algorithmic Problems</div>
                    <div className="text-[11px] text-zinc-400">Consistent logical problem solving</div>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4f933] hover:underline"
              >
                <span>Read Full Background &amp; Philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-4 bg-[#141822] p-6 rounded-2xl border border-white/5 font-mono text-xs text-zinc-300 space-y-3">
              <div className="text-white font-semibold text-sm border-b border-white/10 pb-2">
                Quick Profile Snapshot
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Education:</span>
                <span className="text-zinc-200">B.Sc. Statistics &bull; 2022–2026</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Location:</span>
                <span className="text-zinc-200">Pondicherry &amp; Salem, India</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Specialisation:</span>
                <span className="text-[#d4f933]">B2B Websites &bull; CRMs &bull; Admin Panels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: CONTACT CTA */}
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
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
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
