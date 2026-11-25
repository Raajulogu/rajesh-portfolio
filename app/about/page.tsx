import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  MapPin, 
  Terminal
} from "lucide-react";
import { ACHIEVEMENTS, EDUCATION, SKILL_CATEGORIES } from "@/data/experience";

export const metadata: Metadata = {
  title: "About Rajeshkumar R. | Full-Stack Developer",
  description:
    "Learn about Rajeshkumar's full-stack development experience, technical leadership, skills, and approach to building practical digital products.",
};

export default function AboutPage() {
  const workingPrinciples = [
    {
      title: "Understand the business before writing code",
      description: "Software is an investment. I clarify the core commercial bottleneck, user journey, and success criteria before writing a single line of backend logic."
    },
    {
      title: "Keep user experience simple and practical",
      description: "A system is only as good as the ease with which users complete their tasks. I prioritize clarity, zero-lag interactions, and intuitive information architecture over decorative complexity."
    },
    {
      title: "Build maintainable, modular solutions",
      description: "Clean component boundaries, strict TypeScript typings, and semantic APIs ensure that your codebase can grow effortlessly as your team or operations scale."
    },
    {
      title: "Communicate clearly & take ownership",
      description: "Transparent updates, proactive risk mitigation, and end-to-end technical ownership from initial sprint planning to production monitoring."
    },
    {
      title: "Learn continuously & embrace rigor",
      description: "Staying at the cutting edge of modern web platforms, real-time protocols, and database patterns to build resilient products that last."
    },
    {
      title: "Focus on solving the actual problem",
      description: "I avoid technology for technology's sake. If a simpler, more robust architecture solves the business challenge with less operational friction, that is what I choose."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Introduction Header */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
            About Me
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
          Architecting digital solutions that simplify business operations.
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-4">
          I&apos;m <span className="text-white font-semibold">Rajeshkumar R.</span>, a Full-Stack Developer and Tech Lead based in India. I enjoy building useful digital products that combine thoughtful design with reliable engineering.
        </p>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          My experience includes developing business websites, full-stack applications, custom CRM systems, admin dashboards, and real-time features. I work across frontend and backend development, with a focus on understanding the problem before deciding how to build the solution. Alongside development, I take technical ownership, support team collaboration, and enjoy solving challenging problems.
        </p>
      </div>

      {/* Snapshot Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        <div className="p-5 rounded-2xl bg-[#0f1217] border border-white/10">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase mb-1">
            <MapPin className="w-4 h-4 text-[#d4f933]" />
            <span>Location</span>
          </div>
          <div className="font-semibold text-white text-base">Pondicherry, India</div>
          <p className="text-xs text-zinc-400 mt-1">Available for remote contracts worldwide</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1217] border border-white/10">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase mb-1">
            <Terminal className="w-4 h-4 text-[#d4f933]" />
            <span>Current Role</span>
          </div>
          <div className="font-semibold text-white text-base">Full-Stack Dev &amp; Tech Lead</div>
          <p className="text-xs text-zinc-400 mt-1">SeedataMD &bull; Salem, India</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1217] border border-white/10">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase mb-1">
            <GraduationCap className="w-4 h-4 text-[#d4f933]" />
            <span>Academic Background</span>
          </div>
          <div className="font-semibold text-white text-base">B.Sc. Statistics</div>
          <p className="text-xs text-zinc-400 mt-1">Indira Gandhi College (2022–2026)</p>
        </div>
      </div>

      {/* Section: Technical Leadership & Ownership */}
      <section className="mb-16 p-8 rounded-3xl bg-[#11141c] border border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
              Leadership in Action
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Hands-on Engineering Combined with Technical Ownership
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed mb-6">
            In my current role at SeedataMD, technical leadership means active architectural planning and mentorship alongside hands-on code development:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-200">
            <div className="p-3 rounded-xl bg-[#161a22] border border-white/5 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
              <span>Breaking down ambiguous product requirements into clear engineering tasks.</span>
            </div>
            <div className="p-3 rounded-xl bg-[#161a22] border border-white/5 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
              <span>Evaluating architecture, database schemas, and performance trade-offs.</span>
            </div>
            <div className="p-3 rounded-xl bg-[#161a22] border border-white/5 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
              <span>Mentoring junior developers through the BuddyUp onboarding programme.</span>
            </div>
            <div className="p-3 rounded-xl bg-[#161a22] border border-white/5 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
              <span>Maintaining code review rigor, security hygiene, and clean deployment standards.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Working Principles */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          Core Working Principles
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-8">
          The values and habits that govern how I plan, design, and deliver software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workingPrinciples.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0f1217] border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-xs font-mono text-[#d4f933] mb-2 font-bold">
                0{idx + 1} &bull; PRINCIPLE
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Algorithmic Problem Solving & Achievements */}
      <section className="mb-16 p-8 rounded-3xl bg-[#0f1217] border border-white/10">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
          Verified Problem-Solving Achievements
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-6">
          Proof of computational logic, disciplined edge-case thinking, and data structure proficiency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.title}
              className="p-5 rounded-2xl bg-[#141822] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono text-[#d4f933] bg-[#d4f933]/10 border border-[#d4f933]/20 mb-3">
                  <Award className="w-3 h-3" />
                  <span>{ach.badge}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {ach.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-2">
                  {ach.subtitle}
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Technical Stack & Core Tooling */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
          Technical Strengths &amp; Engineering Tooling
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-8">
          The verified MERN &amp; Next.js full-stack capabilities applied across client products and production architecture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-[#0f1217] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-white mb-1 font-mono uppercase text-[#d4f933]">
                  {cat.category}
                </h3>
                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-[#141822] text-zinc-300 border border-white/5"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Education */}
      <section className="mb-16 p-6 rounded-2xl bg-[#0f1217] border border-white/10">
        <h2 className="text-xl font-bold text-white mb-3">Education</h2>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/5 pt-4">
          <div>
            <div className="text-base font-semibold text-white">{EDUCATION.degree}</div>
            <div className="text-xs text-zinc-400">{EDUCATION.institution}</div>
            <p className="text-xs text-zinc-500 mt-1 max-w-lg">{EDUCATION.focus}</p>
          </div>
          <div className="text-xs font-mono text-zinc-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 self-start sm:self-auto">
            {EDUCATION.duration} &bull; {EDUCATION.status}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12151b] via-[#161a22] to-[#12151b] border border-white/10 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Want to discuss how we could work together?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mb-6">
          I am available for select freelance client projects, web applications, and technical consulting.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d4f933] text-[#090a0c] font-semibold text-xs sm:text-sm hover:bg-[#c4eb22] transition-colors shadow-lg shadow-[#d4f933]/15"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
