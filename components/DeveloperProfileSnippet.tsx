"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Copy, 
  Check, 
  Award, 
  Code2, 
  ArrowRight
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const CODE_SNIPPET = `// rajesh.config.ts
export const developer = {
  name: "Rajeshkumar R.",
  role: "Full-Stack Developer & Tech Lead",
  location: "Pondicherry, India",
  education: "B.Sc. Statistics (2022–2026)",
  
  specialisations: [
    "High-Performance Business Websites",
    "Custom CRM & Admin Dispatch Boards",
    "Scalable MERN Architectures",
    "Bespoke Internal Operations Software"
  ],

  metrics: {
    clientProjectsShipped: 9,
    internalSystemsBuilt: 4,
    algorithmicProblemsSolved: "500+",
    codekataChallenge: "3rd Place Podium Finish"
  },

  status: "Available for select freelance & contract work"
};`;

const PHILOSOPHY_SNIPPET = `# Engineering Philosophy

1. Business Value First
   Every line of code must directly reduce operational friction, 
   automate tedious tasks, or convert prospective clients.

2. Architecture Over Band-Aids
   Proper schema design, RBAC security, and clean API contracts
   prevent technical debt before it starts.

3. Complete Ownership
   From the first discovery call to production CI/CD deployment
   and team onboarding, I own the entire delivery lifecycle.`;

export default function DeveloperProfileSnippet() {
  const [activeTab, setActiveTab] = useState<"ts" | "md">("ts");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = activeTab === "ts" ? CODE_SNIPPET : PHILOSOPHY_SNIPPET;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SpotlightCard className="p-6 sm:p-10 lg:p-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Personal Story & Credentials */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/25 font-semibold">
              Personal Engineering Profile
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            Engineering software that solves practical business problems.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            I am a Full-Stack Developer and Tech Lead who bridges the gap between commercial strategy and rigorous full-stack execution. My background in Statistics gives me a natural affinity for data models, logic optimization, and structured systems.
          </p>

          {/* Key Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="p-3.5 rounded-xl bg-[#141822] border border-white/5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#d4f933]/10 text-[#d4f933] flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">3rd Place Podium</div>
                <div className="text-[11px] text-zinc-400">Guru&apos;s Codekata Challenge</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141822] border border-white/5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#d4f933]/10 text-[#d4f933] flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">500+ Algorithmic Logic</div>
                <div className="text-[11px] text-zinc-400">Competitive programming</div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4f933] hover:underline"
            >
              <span>Explore My Background &amp; Approach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-[#090b0e] border border-white/15 overflow-hidden shadow-2xl">
            {/* Terminal Window Header */}
            <div className="bg-[#12151c] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400 ml-1">
                  rajesh@system:~
                </span>
              </div>

              {/* Tabs & Copy Button */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10 text-[10px] font-mono">
                  <button
                    onClick={() => setActiveTab("ts")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeTab === "ts"
                        ? "bg-[#d4f933] text-black font-bold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    config.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("md")}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeTab === "md"
                        ? "bg-[#d4f933] text-black font-bold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    philosophy.md
                  </button>
                </div>

                <button
                  onClick={handleCopy}
                  aria-label="Copy code"
                  className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Terminal Code Body */}
            <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto max-h-[360px] text-zinc-300">
              <pre className="text-zinc-300 selection:bg-[#d4f933]/30">
                <code>{activeTab === "ts" ? CODE_SNIPPET : PHILOSOPHY_SNIPPET}</code>
              </pre>
            </div>

            {/* Terminal Status Footer */}
            <div className="bg-[#0c0e14] px-4 py-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933] animate-pulse" />
                <span>TypeScript 5.8 &bull; Node 22</span>
              </span>
              <span>UTF-8 &bull; LF</span>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
