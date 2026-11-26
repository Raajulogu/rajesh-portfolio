"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  LifeBuoy,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
  techFocus: string;
}

const STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Deconstruct & Scope",
    subtitle: "Understanding Business Bottlenecks",
    description:
      "Before writing a single line of code, I map out your operational workflows, user journeys, and data handoffs. We define the concrete business outcome we need to achieve rather than jumping to assumptions.",
    icon: <Search className="w-5 h-5 text-[#d4f933]" />,
    deliverables: ["User Flow Diagrams", "Technical Scope Document", "Milestone Timeline"],
    techFocus: "Business Requirements Analysis & Architecture Blueprint"
  },
  {
    step: "02",
    title: "Data & Schema Architecture",
    subtitle: "Solid Foundations First",
    description:
      "I design relational models, MongoDB collections, and API contracts. Data structure choices dictate system speed and future scalability. This phase locks in clean RBAC security and validation rules.",
    icon: <Cpu className="w-5 h-5 text-sky-400" />,
    deliverables: ["Database Schema Models", "REST / WebSocket API Contracts", "RBAC Permission Matrix"],
    techFocus: "MongoDB Schema Design & Scalable Data Structures"
  },
  {
    step: "03",
    title: "Full-Stack Development",
    subtitle: "Modern, Component-Driven Code",
    description:
      "Engineering the system with clean Next.js/React frontend components and robust Node.js backend endpoints. Every feature is built with TypeScript rigor, modular state management, and modern CSS layout systems.",
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    deliverables: ["Interactive Responsive Frontend", "Optimized Backend APIs", "Operational Admin Views"],
    techFocus: "Next.js App Router, React 19, TypeScript, Node.js"
  },
  {
    step: "04",
    title: "Rigorous Edge Testing",
    subtitle: "Zero Surprises in Production",
    description:
      "Testing against dirty data, slow networks, mobile screens, and boundary conditions. Form validation, auth token lifecycles, and database query latency are all profiled and hardened.",
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    deliverables: ["Cross-Device Responsive QA", "Performance Profiling", "Security Auditing"],
    techFocus: "Core Web Vitals Optimization & Fault-Tolerant UX"
  },
  {
    step: "05",
    title: "Production Deployment",
    subtitle: "Live Telemetry & Fast CDN",
    description:
      "Deploying to high-performance cloud infrastructure with automated CI/CD, SSL encryption, custom domain DNS routing, and search engine metadata verification.",
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    deliverables: ["Vercel / Cloud CDN Deployment", "SSL & Domain Setup", "SEO Metadata & Sitemap"],
    techFocus: "Production Release & Live Domain Handshake"
  },
  {
    step: "06",
    title: "Handover & Technical Ownership",
    subtitle: "Enduring Value",
    description:
      "I don't disappear after launch. I provide clear onboarding for your staff, operational documentation, and agreed support to ensure your team operates the software with complete confidence.",
    icon: <LifeBuoy className="w-5 h-5 text-rose-400" />,
    deliverables: ["Admin Operational Guide", "Source Code Handover", "Post-Launch Support Period"],
    techFocus: "Technical Documentation & Operational Support"
  }
];

export default function InteractiveProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <div className="space-y-8">
      {/* Step Selector Pills / Timeline Track */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-[#090b0e] p-2 rounded-2xl border border-white/10">
        {STEPS.map((s, index) => {
          const isActive = index === activeStepIndex;
          return (
            <button
              key={s.step}
              onClick={() => setActiveStepIndex(index)}
              className={`p-3 rounded-xl text-left transition-all duration-200 relative ${
                isActive
                  ? "bg-[#141822] border border-[#d4f933]/30 shadow-lg"
                  : "hover:bg-white/5 border border-transparent"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold ${
                  isActive ? "text-[#d4f933]" : "text-zinc-500"
                }`}>
                  STEP {s.step}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933] animate-pulse" />
                )}
              </div>
              <div className={`text-xs font-semibold truncate ${
                isActive ? "text-white" : "text-zinc-400"
              }`}>
                {s.title.split(" ")[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Showcase Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <SpotlightCard className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Description & Philosophy */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {activeStep.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4f933]">
                      Phase {activeStep.step} of 06
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-mono text-zinc-400">
                  {activeStep.subtitle}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {activeStep.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="text-white font-semibold">Focus:</span>
                  <span className="text-[#d4f933]">{activeStep.techFocus}</span>
                </div>
              </div>

              {/* Right Column: Tangible Deliverables Card */}
              <div className="lg:col-span-5 bg-[#141822] p-5 sm:p-6 rounded-2xl border border-white/5 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block border-b border-white/10 pb-2">
                  Concrete Deliverables
                </span>

                <div className="space-y-3">
                  {activeStep.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Next Step Shortcut Button */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500">
                    Step {activeStepIndex + 1} / {STEPS.length}
                  </span>
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % STEPS.length)}
                    className="text-xs font-mono text-[#d4f933] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>{activeStepIndex === STEPS.length - 1 ? "Back to Step 1" : "Next Phase"}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
