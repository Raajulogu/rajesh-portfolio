"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Car, 
  Lock
} from "lucide-react";

type FilterCategory = "all" | "featured" | "internal" | "commercial";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [zenithMode, setZenithMode] = useState<"day" | "evening" | "movie" | "night">("evening");
  const [ranjiActiveTab, setRanjiActiveTab] = useState<"catalogue" | "admin">("catalogue");
  const [lumosActiveView, setLumosActiveView] = useState<"website" | "crm">("website");

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Category Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              activeFilter === "all"
                ? "bg-[#d4f933] text-[#090a0c] font-bold shadow-md shadow-[#d4f933]/20"
                : "bg-[#141822] text-zinc-300 hover:text-white border border-white/5 hover:border-white/20"
            }`}
          >
            All 9 Client Projects (9)
          </button>
          <button
            onClick={() => setActiveFilter("featured")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              activeFilter === "featured"
                ? "bg-[#d4f933] text-[#090a0c] font-bold shadow-md shadow-[#d4f933]/20"
                : "bg-[#141822] text-zinc-300 hover:text-white border border-white/5 hover:border-white/20"
            }`}
          >
            Featured Flagships (4)
          </button>
          <button
            onClick={() => setActiveFilter("internal")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              activeFilter === "internal"
                ? "bg-[#d4f933] text-[#090a0c] font-bold shadow-md shadow-[#d4f933]/20"
                : "bg-[#141822] text-zinc-300 hover:text-white border border-white/5 hover:border-white/20"
            }`}
          >
            With Internal CRM / Admin (4)
          </button>
          <button
            onClick={() => setActiveFilter("commercial")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              activeFilter === "commercial"
                ? "bg-[#d4f933] text-[#090a0c] font-bold shadow-md shadow-[#d4f933]/20"
                : "bg-[#141822] text-zinc-300 hover:text-white border border-white/5 hover:border-white/20"
            }`}
          >
            Commercial Websites (5)
          </button>
        </div>

        <div className="text-xs font-mono text-zinc-400 hidden sm:block">
          All projects are independent freelance engagements
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* PROJECT 01: RANJI TEXTILES — FULL-WIDTH ASYMMETRIC SHOWCASE */}
      {/* ------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "featured" || activeFilter === "internal") && (
        <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#12161f] via-[#0e1117] to-[#0a0c10] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300 hover:border-amber-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Left Showcase */}
            <div className="lg:col-span-7 space-y-4">
              {/* Browser Mockup */}
              <div className="rounded-2xl border border-white/10 bg-[#090a0c] overflow-hidden shadow-2xl">
                {/* Browser Top Bar */}
                <div className="bg-[#141822] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="bg-[#090a0c] px-3 py-0.5 rounded text-[10px] font-mono text-zinc-400 border border-white/5 truncate max-w-xs">
                    https://ranji-textiles.vercel.app/
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setRanjiActiveTab("catalogue")}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                        ranjiActiveTab === "catalogue"
                          ? "bg-amber-400 text-black font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Catalogue View
                    </button>
                    <button
                      onClick={() => setRanjiActiveTab("admin")}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                        ranjiActiveTab === "admin"
                          ? "bg-amber-400 text-black font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Admin Panel
                    </button>
                  </div>
                </div>

                {/* Viewport Content */}
                {ranjiActiveTab === "catalogue" ? (
                  <div className="p-5 sm:p-6 bg-[#0c0e14] space-y-4">
                    {/* Live Website Header Replica */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="font-bold text-white text-base tracking-tight">RANJI TEXTILES</div>
                        <div className="text-[10px] font-mono text-amber-300">Wholesale Muslin Baby Clothing &amp; Essentials</div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        B2B Minimum Order: 50 Pcs
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-zinc-200">
                      Thoughtfully Crafted Muslin Essentials for Little Ones.
                    </div>

                    {/* Product Cards Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#141822] border border-white/5 space-y-2 group/card">
                        <div className="h-20 rounded-lg bg-amber-950/30 border border-amber-500/20 flex items-center justify-center text-amber-300 text-[10px] font-mono">
                          Double-Gauze Swaddle
                        </div>
                        <div className="font-medium text-white text-xs truncate">Organic Sleep Swaddles</div>
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-amber-300 font-bold">$3.80 / pc</span>
                          <span className="text-zinc-500 text-[9px]">MOQ 50</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#141822] border border-white/5 space-y-2">
                        <div className="h-20 rounded-lg bg-amber-950/30 border border-amber-500/20 flex items-center justify-center text-amber-300 text-[10px] font-mono">
                          Snap Romper Set
                        </div>
                        <div className="font-medium text-white text-xs truncate">Kimono Newborn Romper</div>
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-amber-300 font-bold">$5.20 / set</span>
                          <span className="text-zinc-500 text-[9px]">MOQ 60</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#141822] border border-white/5 space-y-2 hidden sm:block">
                        <div className="h-20 rounded-lg bg-amber-950/30 border border-amber-500/20 flex items-center justify-center text-amber-300 text-[10px] font-mono">
                          6-Layer Wash Cloths
                        </div>
                        <div className="font-medium text-white text-xs truncate">Ultra-Absorbent Cloths</div>
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-amber-300 font-bold">$1.40 / pc</span>
                          <span className="text-zinc-500 text-[9px]">MOQ 100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Recreated Admin View */
                  <div className="p-5 sm:p-6 bg-[#0c0e14] space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        <span className="font-bold text-white text-xs font-mono">RANJI OPERATIONS BACK-OFFICE</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                        Illustrative Demo
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-[#141822] border border-white/5">
                        <span className="text-[9px] text-zinc-400 font-mono uppercase block">Active Product SKUs</span>
                        <span className="text-base font-bold font-mono text-white">148 Lines</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#141822] border border-white/5">
                        <span className="text-[9px] text-zinc-400 font-mono uppercase block">Wholesale Margin</span>
                        <span className="text-base font-bold font-mono text-amber-300">Tier 1 &amp; Tier 2</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#141822] border border-white/5">
                        <span className="text-[9px] text-zinc-400 font-mono uppercase block">Custom-Print Queue</span>
                        <span className="text-base font-bold font-mono text-emerald-400">6 Active Specs</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#121620] border border-amber-500/20 text-xs text-zinc-300 flex items-center justify-between">
                      <span>Tiered Wholesale Pricing Engine: Automated volume discounts for global retail buyers</span>
                      <span className="font-mono text-[10px] text-amber-300">Live Backend Control</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Info Right Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-amber-400">01</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Textiles &bull; B2B
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Ranji Textiles
                </h3>
                <p className="text-xs font-mono text-amber-300 mb-4">
                  Wholesale Muslin Babywear Catalogue + Private Admin Operations
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Engineered an intuitive wholesale catalogue for international distributors, eliminating manual catalogue messaging with instant category filtering, tiered pricing breakdowns, and a private back-office admin system.
                </p>

                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Real-time B2B product filtering by garment category &amp; age tier</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Tiered wholesale volume pricing &amp; custom-print private-label specs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Private operations dashboard for stock status &amp; B2B enquiry management</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                <Link
                  href="/work/ranji-textiles"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 text-black font-semibold text-xs hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="https://ranji-textiles.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
                >
                  <span>Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* PROJECT 02: LUMOS DIGITAL MEDIA — DUAL-LAYERED AGENCY & CRM */}
      {/* ------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "featured" || activeFilter === "internal") && (
        <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#161324] via-[#100e1b] to-[#0a0912] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300 hover:border-violet-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-violet-400">02</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Digital Agency &bull; CRM
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Lumos Digital Media
                </h3>
                <p className="text-xs font-mono text-violet-300 mb-4">
                  High-Converting Growth Agency Website + Private Inbound CRM
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Paired an editorial agency website showcasing multi-channel performance marketing with an internal CRM specifically built to manage client discovery calls, proposal stages, and retainers.
                </p>

                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>H1: &ldquo;Smart Marketing. Real Growth.&rdquo;</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>Inbound lead qualification pipeline from initial click to closed retainer</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>Custom private CRM removing reliance on high-cost per-seat SaaS tools</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                <Link
                  href="/work/lumos-digital-media"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500 text-white font-semibold text-xs hover:bg-violet-400 transition-colors shadow-lg shadow-violet-500/20"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="https://www.lumosdigitalmedia.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
                >
                  <span>Live Agency Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Visual Right Showcase (Overlapping Website & CRM) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#090a0c] overflow-hidden shadow-2xl">
                {/* Browser Bar */}
                <div className="bg-[#141822] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="bg-[#090a0c] px-3 py-0.5 rounded text-[10px] font-mono text-zinc-400 border border-white/5 truncate max-w-xs">
                    https://www.lumosdigitalmedia.in/
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLumosActiveView("website")}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                        lumosActiveView === "website"
                          ? "bg-violet-500 text-white font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Website View
                    </button>
                    <button
                      onClick={() => setLumosActiveView("crm")}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                        lumosActiveView === "crm"
                          ? "bg-violet-500 text-white font-bold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      CRM Pipeline
                    </button>
                  </div>
                </div>

                {/* Content View */}
                {lumosActiveView === "website" ? (
                  <div className="p-6 bg-[#0c0a14] space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="font-bold text-white text-base tracking-wide flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-violet-600 flex items-center justify-center text-white text-xs font-bold">L</span>
                        <span>LUMOS DIGITAL MEDIA</span>
                      </div>
                      <span className="text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                        Growth Marketing Agency
                      </span>
                    </div>

                    <div className="text-xl sm:text-2xl font-bold text-white">
                      Smart Marketing. Real Growth.
                    </div>
                    <p className="text-xs text-zinc-300">
                      We craft data-informed paid media funnels, performance branding, and local search presence for visionary brands.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-[#171426] border border-violet-500/20">
                        <span className="text-[10px] font-mono text-violet-300 block mb-1">01 / Paid Campaigns</span>
                        <div className="font-semibold text-white text-xs">Meta &amp; Google Ads</div>
                        <div className="text-[10px] text-zinc-400 mt-1">High-intent client acquisition funnels</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#171426] border border-violet-500/20">
                        <span className="text-[10px] font-mono text-violet-300 block mb-1">02 / Local SEO</span>
                        <div className="font-semibold text-white text-xs">Search Optimization</div>
                        <div className="text-[10px] text-zinc-400 mt-1">Regional dominance in competitive maps</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Recreated CRM View */
                  <div className="p-6 bg-[#0c0a14] space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-violet-400" />
                        <span className="font-bold text-white text-xs font-mono">LUMOS PRIVATE CRM ENGINE</span>
                      </div>
                      <span className="text-[10px] font-mono text-violet-300 bg-violet-950 px-2 py-0.5 rounded">
                        Lead &rarr; Retainer Pipeline
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-xs">
                      <div className="p-2.5 rounded-lg bg-[#151224] border border-white/5">
                        <div className="text-[9px] font-mono text-zinc-400 uppercase mb-1">New Inquiry</div>
                        <div className="font-medium text-white truncate text-[11px]">Apex Real Estate</div>
                        <div className="text-[9px] font-mono text-violet-400 mt-1">Status: Discovery Call</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#151224] border border-white/5">
                        <div className="text-[9px] font-mono text-zinc-400 uppercase mb-1">Proposal Stage</div>
                        <div className="font-medium text-white truncate text-[11px]">Dr. V. Aesthetics</div>
                        <div className="text-[9px] font-mono text-amber-300 mt-1">Proposal Sent</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#151224] border border-emerald-500/20">
                        <div className="text-[9px] font-mono text-emerald-400 uppercase mb-1">Retainer Won</div>
                        <div className="font-medium text-white truncate text-[11px]">Nexus Coworking</div>
                        <div className="text-[9px] font-mono text-emerald-400 mt-1">Onboarded 6M</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* PROJECT 03: SINGAPORE MAXI CABS — LUXURY TRANSPORT & DISPATCH */}
      {/* ------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "featured" || activeFilter === "internal") && (
        <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#12161f] via-[#0d1017] to-[#08090d] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300 hover:border-[#d4f933]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Browser Mockup with Floating Mobile Pass */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#090a0c] overflow-hidden shadow-2xl">
                {/* Browser Bar */}
                <div className="bg-[#141822] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="bg-[#090a0c] px-3 py-0.5 rounded text-[10px] font-mono text-zinc-400 border border-white/5 truncate max-w-xs">
                    https://smc-sigma-six.vercel.app/
                  </div>
                  <span className="text-[10px] font-mono text-[#d4f933]">
                    Changi 24/7 Service
                  </span>
                </div>

                {/* Viewport UI */}
                <div className="p-6 bg-[#0a0c10] space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#d4f933] text-black font-bold text-xs flex items-center justify-center">S</span>
                      <span className="font-bold text-white tracking-wide text-sm">SINGAPORE MAXICABS</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Fixed Fares &bull; No Surges
                    </span>
                  </div>

                  <div className="text-xl sm:text-2xl font-bold text-white">
                    Comfortable Rides. Fixed Fares.
                  </div>
                  <p className="text-xs text-zinc-300">
                    Premium maxi cab and chauffeur service for Singapore airport transfers, corporate delegations, and family city travel.
                  </p>

                  {/* Fleet Grid */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2">
                    <div className="p-3 rounded-xl bg-[#141822] border border-[#d4f933]/30">
                      <div className="text-[#d4f933] font-bold text-xs">7-Seater Maxi</div>
                      <div className="text-[10px] text-zinc-400 mt-1">From $65 SGD</div>
                      <div className="text-[9px] font-mono text-zinc-500 mt-1">7 Pax &bull; 5 Luggage</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#141822] border border-white/5">
                      <div className="text-white font-bold text-xs">9-Seater Executive</div>
                      <div className="text-[10px] text-zinc-400 mt-1">From $75 SGD</div>
                      <div className="text-[9px] font-mono text-zinc-500 mt-1">9 Pax &bull; 7 Luggage</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#141822] border border-white/5">
                      <div className="text-white font-bold text-xs">13-Seater Minibus</div>
                      <div className="text-[10px] text-zinc-400 mt-1">From $85 SGD</div>
                      <div className="text-[9px] font-mono text-zinc-500 mt-1">13 Pax &bull; 10 Bags</div>
                    </div>
                  </div>

                  {/* Booking Trigger Bar */}
                  <div className="p-3 rounded-xl bg-[#121620] border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-[#d4f933]" />
                      <span className="text-white font-medium">Changi Arrival Pickup &bull; Flight SQ321</span>
                    </div>
                    <span className="text-[10px] font-bold bg-[#d4f933] text-black px-3 py-1 rounded">
                      WhatsApp Dispatch
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#d4f933]">03</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Chauffeur &bull; Dispatch
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Singapore Maxi Cabs
                </h3>
                <p className="text-xs font-mono text-[#d4f933] mb-4">
                  Transportation Booking Experience + Private Dispatch Console
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  Engineered a luxury transport booking experience tailored for travelers at Changi Airport, with fleet capacity selection, flight number tracking, and an internal back-office dispatch panel.
                </p>

                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933]" />
                    <span>H1: &ldquo;Comfortable Rides. Fixed Fares.&rdquo;</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933]" />
                    <span>Fleet selector covering 7, 9, and 13-seater passenger &amp; luggage tolerance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933]" />
                    <span>Private operations admin console for live driver allocation &amp; ride logging</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                <Link
                  href="/work/singapore-maxi-cabs"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4f933] text-black font-semibold text-xs hover:bg-[#c4eb22] transition-colors shadow-lg shadow-[#d4f933]/20"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="https://smc-sigma-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
                >
                  <span>Live Booking Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* PROJECT 04: ZENITH AUTOMATIONS — INTERACTIVE PRODUCT SHOWCASE */}
      {/* ------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "featured" || activeFilter === "internal") && (
        <section className="relative rounded-3xl border border-sky-500/20 bg-gradient-to-br from-[#0c1422] via-[#090f18] to-[#06080d] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-sky-400">04</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    Smart Home &bull; IoT
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  Zenith Automations
                </h3>
                <p className="text-xs font-mono text-sky-300 mb-4">
                  Interactive Smart Home Simulation + Specification CRM
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  An interactive residential IoT experience where homeowners and architects toggle real-time day/evening/movie/night environmental scenes, paired with an internal project specification CRM.
                </p>

                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>H1: &ldquo;Intelligence, seamlessly integrated.&rdquo;</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Interactive scene simulator adjusting ambiance, shading, and temperature</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Private specification CRM tracking room-by-room architectural hardware</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                <Link
                  href="/work/zenith-automations"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-black font-semibold text-xs hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="https://www.zenithautomations.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-colors"
                >
                  <span>Live Interactive Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Visual Right Interactive Scene Simulator */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="rounded-2xl border border-white/15 bg-[#080b11] overflow-hidden shadow-2xl">
                {/* Browser Top */}
                <div className="bg-[#10141d] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="bg-[#080b11] px-3 py-0.5 rounded text-[10px] font-mono text-zinc-400 border border-white/5 truncate max-w-xs">
                    https://www.zenithautomations.in/
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 font-bold uppercase">
                    {zenithMode} Ambiance
                  </span>
                </div>

                {/* Simulated Room Canvas with Dynamic Lighting Filter */}
                <div 
                  className={`p-6 transition-all duration-700 ${
                    zenithMode === "day"
                      ? "bg-gradient-to-b from-[#182638] to-[#0f1722]"
                      : zenithMode === "evening"
                      ? "bg-gradient-to-b from-[#241a1a] to-[#141014]"
                      : zenithMode === "movie"
                      ? "bg-gradient-to-b from-[#160c20] to-[#09050d]"
                      : "bg-gradient-to-b from-[#0a0d14] to-[#040608]"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="font-bold tracking-wider text-white text-sm">ZENITH // SMART HOME</span>
                    <span className="text-[10px] font-mono text-zinc-300">
                      Intelligence, seamlessly integrated.
                    </span>
                  </div>

                  {/* Interactive Scene Mode Buttons */}
                  <div className="bg-[#0b0e14]/80 backdrop-blur-md p-3 rounded-xl border border-white/10 mb-4">
                    <div className="text-[10px] font-mono text-zinc-400 mb-2 uppercase flex items-center justify-between">
                      <span>Click to Test Live Ambiance Switch:</span>
                      <span className="text-sky-300 font-semibold">{zenithMode.toUpperCase()} MODE ACTIVE</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {(["day", "evening", "movie", "night"] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setZenithMode(mode)}
                          className={`py-2 px-2 rounded-lg text-xs font-semibold uppercase font-mono transition-all ${
                            zenithMode === mode
                              ? "bg-sky-400 text-black shadow-lg shadow-sky-400/25 scale-[1.02]"
                              : "bg-white/5 text-zinc-300 hover:bg-white/15"
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry Dials */}
                  <div className="grid grid-cols-3 gap-2.5 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-[#090c12]/90 border border-white/5">
                      <span className="text-[9px] text-zinc-400 block mb-1">LIGHTING LEVEL</span>
                      <span className="font-bold text-sky-300">
                        {zenithMode === "day" ? "100% Daylight" : zenithMode === "evening" ? "65% Warm 2700K" : zenithMode === "movie" ? "15% Accent Gold" : "5% Eco Night"}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#090c12]/90 border border-white/5">
                      <span className="text-[9px] text-zinc-400 block mb-1">SHADING MOTORS</span>
                      <span className="font-bold text-sky-300">
                        {zenithMode === "day" ? "Open (Solar Track)" : zenithMode === "evening" ? "40% Sheer" : zenithMode === "movie" ? "100% Blackout" : "100% Privacy"}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#090c12]/90 border border-white/5">
                      <span className="text-[9px] text-zinc-400 block mb-1">CLIMATE &amp; AUDIO</span>
                      <span className="font-bold text-sky-300">
                        {zenithMode === "day" ? "24°C Comfort" : zenithMode === "evening" ? "22°C Lounge" : zenithMode === "movie" ? "21°C Dolby Atmos" : "23°C Silent"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECONDARY ROW: 5 MORE SELECTED PROJECTS AS LARGE VISUAL CARDS */}
      {/* ------------------------------------------------------------- */}
      {(activeFilter === "all" || activeFilter === "commercial") && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {/* 05: CIRCLEDOT DESIGN STUDIO */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#181119] to-[#0e0a10] border border-pink-500/20 hover:border-pink-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                <span className="text-pink-400 font-bold">05 // STUDIO</span>
                <span className="bg-white/5 px-2 py-0.5 rounded">Freelance Project</span>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                CircleDot Design Studio
              </h4>
              <p className="text-xs text-pink-300 font-mono mt-1">
                Design &amp; Growth Studio
              </p>
              <div className="my-4 p-4 rounded-xl bg-[#120c14] border border-white/5 space-y-2">
                <div className="text-sm font-semibold text-white">
                  Brand Strategy, Visual Systems &amp; Digital Builds
                </div>
                <p className="text-xs text-zinc-400">
                  Crafting distinct digital presence for ambitious startups and creative brands.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
              <Link href="/work/circledot-design-studio" className="text-white hover:text-pink-300 inline-flex items-center gap-1">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a href="https://www.circledotdesign.in/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white font-mono text-[11px] inline-flex items-center gap-1">
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 06: LUMIWAVES */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101915] to-[#0a100d] border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                <span className="text-emerald-400 font-bold">06 // CLEAN TECH</span>
                <span className="bg-white/5 px-2 py-0.5 rounded">Freelance Project</span>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Lumiwaves
              </h4>
              <p className="text-xs text-emerald-300 font-mono mt-1">
                Smart Home &amp; Solar Solutions
              </p>
              <div className="my-4 p-4 rounded-xl bg-[#0b120e] border border-white/5 space-y-2">
                <div className="text-sm font-semibold text-white">
                  Rooftop Solar &amp; Automated Water Telemetry
                </div>
                <p className="text-xs text-zinc-400">
                  Explaining technical energy savings and automated water tank controllers for residential clients.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
              <Link href="/work/lumiwaves" className="text-white hover:text-emerald-300 inline-flex items-center gap-1">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a href="https://lumiwaves.in/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white font-mono text-[11px] inline-flex items-center gap-1">
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 07: VILVAM FOUNDATION */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101822] to-[#0a0f16] border border-cyan-500/20 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                <span className="text-cyan-400 font-bold">07 // COMMUNITY</span>
                <span className="bg-white/5 px-2 py-0.5 rounded">Freelance Project</span>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Vilvam Foundation
              </h4>
              <p className="text-xs text-cyan-300 font-mono mt-1">
                Social Service in Tamil Nadu &amp; Puducherry
              </p>
              <div className="my-4 p-4 rounded-xl bg-[#0c121a] border border-white/5 space-y-2">
                <div className="text-sm font-semibold text-white">
                  Together We Build Stronger Communities
                </div>
                <p className="text-xs text-zinc-400">
                  Food drives, student educational aid, healthcare relief, and verified humanitarian support.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
              <Link href="/work/vilvam-foundation" className="text-white hover:text-cyan-300 inline-flex items-center gap-1">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a href="https://www.vilvamfoundation.in/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white font-mono text-[11px] inline-flex items-center gap-1">
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 08: MANGAI CLINIC */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1e1216] to-[#120a0d] border border-rose-500/20 hover:border-rose-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                <span className="text-rose-400 font-bold">08 // HEALTHCARE</span>
                <span className="bg-white/5 px-2 py-0.5 rounded">Freelance Project</span>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                Mangai Clinic
              </h4>
              <p className="text-xs text-rose-300 font-mono mt-1">
                Compassionate Women&apos;s Healthcare
              </p>
              <div className="my-4 p-4 rounded-xl bg-[#140b0e] border border-white/5 space-y-2">
                <div className="text-sm font-semibold text-white">
                  Compassionate Care for Every Stage of Womanhood
                </div>
                <p className="text-xs text-zinc-400">
                  Obstetrics, antenatal guidance, gynaecology, fertility services, and clinical appointment booking.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
              <Link href="/work/mangai-clinic" className="text-white hover:text-rose-300 inline-flex items-center gap-1">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a href="https://mangai-clinic.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white font-mono text-[11px] inline-flex items-center gap-1">
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 09: PRIYA WOODLAND */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1e1510] to-[#110c08] border border-amber-600/20 hover:border-amber-600/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                <span className="text-amber-500 font-bold">09 // CRAFTSMANSHIP</span>
                <span className="bg-white/5 px-2 py-0.5 rounded">Freelance Project</span>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Priya Woodland
              </h4>
              <p className="text-xs text-amber-400 font-mono mt-1">
                Antique Wooden Furniture &bull; Auroville
              </p>
              <div className="my-4 p-4 rounded-xl bg-[#140e0a] border border-white/5 space-y-2">
                <div className="text-sm font-semibold text-white">
                  Timeless Wood. Natural Character.
                </div>
                <p className="text-xs text-zinc-400">
                  Solid teak dining tables, carved heirloom doors, antique restorations, and custom woodworking.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
              <Link href="/work/priya-woodland" className="text-white hover:text-amber-300 inline-flex items-center gap-1">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a href="https://priya-woodland.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white font-mono text-[11px] inline-flex items-center gap-1">
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
