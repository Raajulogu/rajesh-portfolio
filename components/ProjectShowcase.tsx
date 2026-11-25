"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Eye, 
  Database,
  Lock,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type FilterCategory = "all" | "featured" | "internal" | "commercial";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  
  // Interactive view toggles for flagship projects
  const [ranjiView, setRanjiView] = useState<"website" | "admin">("website");
  const [lumosView, setLumosView] = useState<"website" | "crm">("website");
  const [zenithView, setZenithView] = useState<"website" | "crm">("website");
  const [smcView, setSmcView] = useState<"website" | "dispatch">("website");

  // Get project data
  const ranji = PROJECTS.find(p => p.slug === "ranji-textiles")!;
  const lumos = PROJECTS.find(p => p.slug === "lumos-digital-media")!;
  const zenith = PROJECTS.find(p => p.slug === "zenith-automations")!;
  const smc = PROJECTS.find(p => p.slug === "singapore-maxi-cabs")!;

  const commercialProjects = PROJECTS.filter(p => 
    !["ranji-textiles", "lumos-digital-media", "zenith-automations", "singapore-maxi-cabs", "laundry-management-saas"].includes(p.slug)
  );

  const laundry = PROJECTS.find(p => p.slug === "laundry-management-saas")!;

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* ---------------------------------------------------------------- */}
      {/* Category Filter Bar with Animated Active Pill */}
      {/* ---------------------------------------------------------------- */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All 9 Client Projects", count: 9 },
            { id: "featured", label: "Featured Flagships", count: 4 },
            { id: "internal", label: "With Internal CRM / Admin", count: 4 },
            { id: "commercial", label: "Commercial Showcase", count: 5 }
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as FilterCategory)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#08090b] font-bold"
                    : "text-zinc-400 hover:text-white bg-white/[0.03] border border-white/5 hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-[#d4f933] rounded-full shadow-lg shadow-[#d4f933]/20"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"}`}>
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-[#d4f933] animate-ping" />
          <span>9 Verified Freelance Client Deployments</span>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* FLAGSHIP 01: RANJI TEXTILES — VISUAL-FIRST SHOWCASE */}
      {/* ---------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "featured" || activeFilter === "internal") && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#121620]/90 via-[#0e1118]/90 to-[#090b0e]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-amber-500/30 transition-all duration-500 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Left: Large Reference Browser Frame with Toggle */}
            <div className="lg:col-span-7 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-[#08090b] overflow-hidden shadow-2xl">
                {/* Browser Top Bar */}
                <div className="bg-[#141822] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  
                  {/* Real Domain URL Bar */}
                  <div className="flex items-center gap-2 bg-[#08090b] px-3 py-1 rounded-md text-[11px] font-mono text-zinc-400 border border-white/5 truncate max-w-xs">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="text-zinc-300">https://{ranji.liveDomain}</span>
                  </div>

                  {/* Dual Mode Switcher */}
                  <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10">
                    <button
                      onClick={() => setRanjiView("website")}
                      className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        ranjiView === "website"
                          ? "bg-amber-400 text-black font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>Live Site</span>
                    </button>
                    <button
                      onClick={() => setRanjiView("admin")}
                      className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        ranjiView === "admin"
                          ? "bg-amber-400 text-black font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Database className="w-3 h-3" />
                      <span>Admin Ops</span>
                    </button>
                  </div>
                </div>

                {/* Viewport Content */}
                <AnimatePresence mode="wait">
                  {ranjiView === "website" ? (
                    <motion.div
                      key="ranji-site"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-[16/10] overflow-hidden bg-black/40 group/img"
                    >
                      <Image
                        src={ranji.heroImage}
                        alt="Ranji Textiles live website reference"
                        fill
                        unoptimized
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                        <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-mono text-[11px]">
                          Wholesale Babywear • Pure Muslin Collections
                        </span>
                        <a
                          href={ranji.liveUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-amber-400 text-black font-semibold px-3 py-1 rounded-full flex items-center gap-1 text-[11px] shadow-lg hover:bg-amber-300 transition-colors"
                        >
                          <span>Open Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="ranji-admin"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 sm:p-6 bg-[#0c0e14] space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                          <span className="text-xs font-mono font-semibold text-white">Private Admin Back-Office Panel</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-300">Confidential Client Architecture</span>
                      </div>
                      
                      {/* Metric widgets */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Total Products</span>
                          <p className="text-lg font-bold text-white mt-1">42 Lines</p>
                        </div>
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Tier Pricing</span>
                          <p className="text-lg font-bold text-amber-400 mt-1">Active</p>
                        </div>
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">B2B Enquiries</span>
                          <p className="text-lg font-bold text-emerald-400 mt-1">Live Sync</p>
                        </div>
                      </div>

                      <div className="bg-[#141822] p-4 rounded-xl border border-white/5 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">Stock &amp; Catalogue Maintenance</span>
                          <span className="text-emerald-400 text-[10px] font-mono">Synchronized</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Internal operations portal for updating wholesale bulk pricing, managing MOQ constraints, archiving seasonal lines, and tracking distributor purchase queries.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Content Right: Clean Editorial Presentation */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-white/20">01</span>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    B2B Catalogue + Admin
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  <Link href={`/work/${ranji.slug}`}>
                    {ranji.title}
                  </Link>
                </h3>
                <p className="text-sm font-mono text-zinc-400">
                  {ranji.tagline}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5 pt-2">
                {[
                  "Wholesale muslin garment catalogue with instant category filtering",
                  "High-resolution product inspect modals with custom printing guides",
                  "Private internal back-office admin system for catalogue & price tier management"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {ranji.technologies.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-zinc-300 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  href={`/work/${ranji.slug}`}
                  className="inline-flex items-center gap-2 bg-amber-400 text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/10"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={ranji.liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* FLAGSHIP 02: LUMOS DIGITAL MEDIA — VISUAL-FIRST SHOWCASE */}
      {/* ---------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "featured" || activeFilter === "internal") && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#151222]/90 via-[#0e1019]/90 to-[#090b0e]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-violet-500/30 transition-all duration-500 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Left: Large Reference Browser Frame with Toggle */}
            <div className="lg:col-span-7 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-[#08090b] overflow-hidden shadow-2xl">
                {/* Browser Top Bar */}
                <div className="bg-[#141822] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  
                  {/* Real Domain URL Bar */}
                  <div className="flex items-center gap-2 bg-[#08090b] px-3 py-1 rounded-md text-[11px] font-mono text-zinc-400 border border-white/5 truncate max-w-xs">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="text-zinc-300">https://{lumos.liveDomain}</span>
                  </div>

                  {/* Dual Mode Switcher */}
                  <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10">
                    <button
                      onClick={() => setLumosView("website")}
                      className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        lumosView === "website"
                          ? "bg-violet-400 text-black font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>Agency Site</span>
                    </button>
                    <button
                      onClick={() => setLumosView("crm")}
                      className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        lumosView === "crm"
                          ? "bg-violet-400 text-black font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Database className="w-3 h-3" />
                      <span>Inbound CRM</span>
                    </button>
                  </div>
                </div>

                {/* Viewport Content */}
                <AnimatePresence mode="wait">
                  {lumosView === "website" ? (
                    <motion.div
                      key="lumos-site"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-[16/10] overflow-hidden bg-black/40 group/img"
                    >
                      <Image
                        src={lumos.heroImage}
                        alt="Lumos Digital Media live studio reference"
                        fill
                        unoptimized
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                        <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-mono text-[11px]">
                          Digital Growth Agency • Performance &amp; Creative
                        </span>
                        <a
                          href={lumos.liveUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-violet-400 text-black font-semibold px-3 py-1 rounded-full flex items-center gap-1 text-[11px] shadow-lg hover:bg-violet-300 transition-colors"
                        >
                          <span>Open Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="lumos-crm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 sm:p-6 bg-[#0c0e14] space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                          <span className="text-xs font-mono font-semibold text-white">Private Lead Intake &amp; Pipeline CRM</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-300">Confidential Internal System</span>
                      </div>
                      
                      {/* Metric widgets */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Total Leads</span>
                          <p className="text-lg font-bold text-white mt-1">128 Prospects</p>
                        </div>
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">In Discovery</span>
                          <p className="text-lg font-bold text-violet-400 mt-1">14 Calls</p>
                        </div>
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Proposals Won</span>
                          <p className="text-lg font-bold text-emerald-400 mt-1">32 Retainers</p>
                        </div>
                      </div>

                      <div className="bg-[#141822] p-4 rounded-xl border border-white/5 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">Inbound Lead Pipeline Management</span>
                          <span className="text-emerald-400 text-[10px] font-mono">Live CRM Workflow</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Custom internal CRM tracking client consultations from initial website form submission to discovery call notes, proposal generation, and signed marketing retainers.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-white/20">02</span>
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-wider bg-violet-400/10 px-2.5 py-1 rounded-full border border-violet-400/20">
                    Agency Web + Custom CRM
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-violet-400 transition-colors">
                  <Link href={`/work/${lumos.slug}`}>
                    {lumos.title}
                  </Link>
                </h3>
                <p className="text-sm font-mono text-zinc-400">
                  {lumos.tagline}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5 pt-2">
                {[
                  "Editorial agency website showcasing paid media, creative branding & SEO",
                  "Structured high-intent consultation booking funnel",
                  "Custom internal CRM system organizing prospective inquiries into active pipelines"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {lumos.technologies.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-zinc-300 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  href={`/work/${lumos.slug}`}
                  className="inline-flex items-center gap-2 bg-violet-400 text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-violet-300 transition-colors shadow-lg shadow-violet-400/10"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={lumos.liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-violet-400" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* FLAGSHIP 03: ZENITH AUTOMATIONS — VISUAL-FIRST SHOWCASE */}
      {/* ---------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "featured" || activeFilter === "internal") && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#101826]/90 via-[#0e121a]/90 to-[#090b0e]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-cyan-500/30 transition-all duration-500 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Left */}
            <div className="lg:col-span-7 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-[#08090b] overflow-hidden shadow-2xl">
                {/* Browser Top Bar */}
                <div className="bg-[#141822] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  
                  {/* Real Domain URL Bar */}
                  <div className="flex items-center gap-2 bg-[#08090b] px-3 py-1 rounded-md text-[11px] font-mono text-zinc-400 border border-white/5 truncate max-w-xs">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="text-zinc-300">https://{zenith.liveDomain}</span>
                  </div>

                  {/* Dual Mode Switcher */}
                  <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10">
                    <button
                      onClick={() => setZenithView("website")}
                      className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        zenithView === "website"
                          ? "bg-cyan-400 text-black font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>Smart Home</span>
                    </button>
                    <button
                      onClick={() => setZenithView("crm")}
                      className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        zenithView === "crm"
                          ? "bg-cyan-400 text-black font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Database className="w-3 h-3" />
                      <span>Spec CRM</span>
                    </button>
                  </div>
                </div>

                {/* Viewport Content */}
                <AnimatePresence mode="wait">
                  {zenithView === "website" ? (
                    <motion.div
                      key="zenith-site"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-[16/10] overflow-hidden bg-black/40 group/img"
                    >
                      <Image
                        src={zenith.heroImage}
                        alt="Zenith Automations luxury architectural smart home"
                        fill
                        unoptimized
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                        <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-mono text-[11px]">
                          Luxury Smart Home Automation • Lumiwaves
                        </span>
                        <a
                          href={zenith.liveUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-400 text-black font-semibold px-3 py-1 rounded-full flex items-center gap-1 text-[11px] shadow-lg hover:bg-cyan-300 transition-colors"
                        >
                          <span>Open Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="zenith-crm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 sm:p-6 bg-[#0c0e14] space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span className="text-xs font-mono font-semibold text-white">Project Specification &amp; Proposal CRM</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-300">Confidential Internal System</span>
                      </div>
                      
                      {/* Metric widgets */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Villa Specs</span>
                          <p className="text-lg font-bold text-white mt-1">28 Projects</p>
                        </div>
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Room Modules</span>
                          <p className="text-lg font-bold text-cyan-400 mt-1">HVAC + Light</p>
                        </div>
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Proposals</span>
                          <p className="text-lg font-bold text-emerald-400 mt-1">Ready</p>
                        </div>
                      </div>

                      <div className="bg-[#141822] p-4 rounded-xl border border-white/5 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">Homeowner Automation Spec Tracker</span>
                          <span className="text-emerald-400 text-[10px] font-mono">Bespoke Proposal Flow</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Internal CRM managing multi-room lighting, smart shading, audio-video zones, and proposal scheduling for architects and villa clients.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-white/20">03</span>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20">
                    Interactive IoT Experience + CRM
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  <Link href={`/work/${zenith.slug}`}>
                    {zenith.title}
                  </Link>
                </h3>
                <p className="text-sm font-mono text-zinc-400">
                  {zenith.tagline}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5 pt-2">
                {[
                  "Interactive multi-scene living simulation (Day, Evening, Movie, Night)",
                  "Architectural smart living walkthrough across shading, lighting & climate",
                  "Private specification CRM managing complex multi-week automation proposals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {zenith.technologies.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-zinc-300 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  href={`/work/${zenith.slug}`}
                  className="inline-flex items-center gap-2 bg-cyan-400 text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/10"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={zenith.liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* FLAGSHIP 04: SINGAPORE MAXI CABS — VISUAL-FIRST SHOWCASE */}
      {/* ---------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "featured" || activeFilter === "internal") && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#141b12]/90 via-[#0e120f]/90 to-[#090b0e]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-[#d4f933]/30 transition-all duration-500 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Left */}
            <div className="lg:col-span-7 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-[#08090b] overflow-hidden shadow-2xl">
                {/* Browser Top Bar */}
                <div className="bg-[#141822] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  
                  {/* Real Domain URL Bar */}
                  <div className="flex items-center gap-2 bg-[#08090b] px-3 py-1 rounded-md text-[11px] font-mono text-zinc-400 border border-white/5 truncate max-w-xs">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="text-zinc-300">https://{smc.liveDomain}</span>
                  </div>

                  {/* Dual Mode Switcher */}
                  <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10">
                    <button
                      onClick={() => setSmcView("website")}
                      className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        smcView === "website"
                          ? "bg-[#d4f933] text-black font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Eye className="w-3 h-3" />
                      <span>Booking Web</span>
                    </button>
                    <button
                      onClick={() => setSmcView("dispatch")}
                      className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        smcView === "dispatch"
                          ? "bg-[#d4f933] text-black font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Database className="w-3 h-3" />
                      <span>Admin Ops</span>
                    </button>
                  </div>
                </div>

                {/* Viewport Content */}
                <AnimatePresence mode="wait">
                  {smcView === "website" ? (
                    <motion.div
                      key="smc-site"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative aspect-[16/10] overflow-hidden bg-black/40 group/img"
                    >
                      <Image
                        src={smc.heroImage}
                        alt="Singapore Maxi Cabs luxury transport portal"
                        fill
                        unoptimized
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                        <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-mono text-[11px]">
                          Changi Airport Transfers • 7 to 13-Seater Maxi Fleet
                        </span>
                        <a
                          href={smc.liveUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#d4f933] text-black font-semibold px-3 py-1 rounded-full flex items-center gap-1 text-[11px] shadow-lg hover:bg-[#bce022] transition-colors"
                        >
                          <span>Open Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="smc-dispatch"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 sm:p-6 bg-[#0c0e14] space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#d4f933] animate-pulse" />
                          <span className="text-xs font-mono font-semibold text-white">Private Fleet Dispatch &amp; Operations Admin</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-300">Confidential Internal System</span>
                      </div>
                      
                      {/* Metric widgets */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Active Bookings</span>
                          <p className="text-lg font-bold text-white mt-1">48 Today</p>
                        </div>
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Maxi Fleet</span>
                          <p className="text-lg font-bold text-[#d4f933] mt-1">7, 9, 13 Pax</p>
                        </div>
                        <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                          <span className="text-[10px] font-mono text-zinc-400">Driver Status</span>
                          <p className="text-lg font-bold text-emerald-400 mt-1">Dispatched</p>
                        </div>
                      </div>

                      <div className="bg-[#141822] p-4 rounded-xl border border-white/5 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">Airport Ride Request Dispatch Console</span>
                          <span className="text-emerald-400 text-[10px] font-mono">Live Dispatch Logging</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          Operations dispatch console for tracking incoming passenger rides, flight numbers, vehicle allocations, and WhatsApp booking confirmations.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-white/20">04</span>
                  <span className="text-xs font-mono text-[#d4f933] uppercase tracking-wider bg-[#d4f933]/10 px-2.5 py-1 rounded-full border border-[#d4f933]/20">
                    Transport Platform + Admin
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#d4f933] transition-colors">
                  <Link href={`/work/${smc.slug}`}>
                    {smc.title}
                  </Link>
                </h3>
                <p className="text-sm font-mono text-zinc-400">
                  {smc.tagline}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5 pt-2">
                {[
                  "Luxury maxi-cab fleet selector with accurate luggage & passenger tolerance",
                  "Structured Changi Airport pickup booking form with flight parameter integration",
                  "Private administrative back-office system for fleet dispatch and driver logs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {smc.technologies.map((t) => (
                  <span key={t} className="text-[11px] font-mono text-zinc-300 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  href={`/work/${smc.slug}`}
                  className="inline-flex items-center gap-2 bg-[#d4f933] text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#bce022] transition-colors shadow-lg shadow-[#d4f933]/10"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={smc.liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#d4f933]" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* COMMERCIAL CLIENT SHOWCASES (Lumiwaves, CircleDot, Vilvam, Mangai, Priya) */}
      {/* ---------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "commercial") && (
        <div className="space-y-8 pt-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#d4f933]" />
                <span>Commercial Web Deployments</span>
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                High-performance freelance client solutions across clean energy, design, healthcare, charity, and craftsmanship
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-300 hidden sm:inline">
              5 Production Websites
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx < 2} />
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* PLATFORM PLANNING & ARCHITECTURE SCOPE (Laundry Management SaaS) */}
      {/* ---------------------------------------------------------------- */}
      {activeFilter === "all" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-[#0c1420]/90 to-[#090b0e]/95 p-6 sm:p-8 lg:p-10 backdrop-blur-xl space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-sky-400 bg-sky-400/10 px-2.5 py-0.5 rounded-full border border-sky-400/20">
                  {laundry.classification}
                </span>
                <span className="text-xs font-mono text-zinc-300">
                  9-Week Phased Blueprint
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {laundry.title}
              </h3>
            </div>

            <Link
              href={`/work/${laundry.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 bg-sky-400/10 px-3 py-1.5 rounded-lg border border-sky-400/20 transition-colors"
            >
              <span>View Technical Specification</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Blueprint image */}
            <div className="lg:col-span-8 rounded-2xl border border-white/10 overflow-hidden bg-black/60 shadow-xl">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={laundry.heroImage}
                  alt="Laundry SaaS multi-role platform architecture blueprint"
                  fill
                  unoptimized
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Scope Summary */}
            <div className="lg:col-span-4 space-y-4 text-xs">
              <div className="bg-[#121824] p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-semibold text-white block">Multi-Role Architecture</span>
                <p className="text-zinc-400 leading-relaxed">
                  Dedicated RBAC user interfaces for Central Admin (governance &amp; revenue), Floor Staff (barcode garment tagging &amp; wash cycles), and Customers (order tracking &amp; receipts).
                </p>
              </div>

              <div className="bg-[#121824] p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-semibold text-white block">Modular Chemical Scope</span>
                <p className="text-zinc-400 leading-relaxed">
                  2-week optional module planned for detergent replenishment tracking, liquid injector calibration, and machine burn-rate alerts.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {laundry.technologies.map(t => (
                  <span key={t} className="text-[10px] font-mono text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
