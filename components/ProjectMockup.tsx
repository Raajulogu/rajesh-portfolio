"use client";

import React, { useState } from "react";
import { 
  Car, 
  Sparkles, 
  Sun, 
  Package, 
  Heart, 
  Stethoscope, 
  Shield, 
  Sliders, 
  Calendar
} from "lucide-react";

interface ProjectMockupProps {
  slug: string;
  className?: string;
  interactive?: boolean;
}

export default function ProjectMockup({ slug, className = "", interactive = true }: ProjectMockupProps) {
  // State for Zenith interactive simulation
  const [zenithScene, setZenithScene] = useState<"day" | "evening" | "movie" | "night">("evening");
  
  // State for Laundry SaaS multi-role preview
  const [laundryPortal, setLaundryPortal] = useState<"admin" | "staff" | "customer">("admin");

  // Render project-specific UI preview
  const renderContent = () => {
    switch (slug) {
      case "singapore-maxi-cabs":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-4 font-sans text-xs">
            {/* Top Navigation bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#d4f933] text-[#090a0c] flex items-center justify-center font-bold text-[10px]">
                  S
                </div>
                <span className="font-semibold tracking-wide text-zinc-100">SINGAPORE MAXI CABS</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                <span className="hidden sm:inline">Changi Airport Pickup</span>
                <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  24/7 Dispatch
                </span>
              </div>
            </div>

            {/* Vehicle Fleet Cards */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-[#151921] border border-[#d4f933]/30 p-2.5 rounded-lg">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">7-Seater Maxi</span>
                  <span className="text-[10px] font-mono text-[#d4f933]">From $65 SGD</span>
                </div>
                <p className="text-[10px] text-zinc-400 mb-2">Ideal for small families with 5 large luggage bags</p>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-300">
                  <span className="bg-white/5 px-1.5 py-0.5 rounded">7 Pax</span>
                  <span className="bg-white/5 px-1.5 py-0.5 rounded">5 Luggage</span>
                </div>
              </div>

              <div className="bg-[#151921] border border-white/5 p-2.5 rounded-lg">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">9-Seater Executive</span>
                  <span className="text-[10px] font-mono text-zinc-300">From $75 SGD</span>
                </div>
                <p className="text-[10px] text-zinc-400 mb-2">Corporate transfers &amp; extended family airport runs</p>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-300">
                  <span className="bg-white/5 px-1.5 py-0.5 rounded">9 Pax</span>
                  <span className="bg-white/5 px-1.5 py-0.5 rounded">7 Luggage</span>
                </div>
              </div>

              <div className="bg-[#151921] border border-white/5 p-2.5 rounded-lg hidden sm:block">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white">13-Seater Minibus</span>
                  <span className="text-[10px] font-mono text-zinc-300">From $85 SGD</span>
                </div>
                <p className="text-[10px] text-zinc-400 mb-2">Large event delegations &amp; wedding guest logistics</p>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-300">
                  <span className="bg-white/5 px-1.5 py-0.5 rounded">13 Pax</span>
                  <span className="bg-white/5 px-1.5 py-0.5 rounded">10 Luggage</span>
                </div>
              </div>
            </div>

            {/* Ride Enquiry Panel */}
            <div className="bg-[#13161c] border border-white/10 rounded-lg p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-8 h-8 rounded-lg bg-[#d4f933]/10 text-[#d4f933] flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-white text-xs">Airport Transfer &bull; Changi Arrival</div>
                  <div className="text-[10px] text-zinc-400">Flight number tracking + 60 min complimentary wait time</div>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  WhatsApp Direct
                </span>
                <span className="text-[10px] font-semibold bg-[#d4f933] text-[#090a0c] px-3 py-1 rounded">
                  Book Ride
                </span>
              </div>
            </div>
          </div>
        );

      case "ranji-textiles":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-4 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm tracking-tight">RANJI TEXTILES</span>
                <span className="text-[10px] font-mono bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  Wholesale B2B
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                <span>Filter: Muslin Babywear</span>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-zinc-300">MOQ: 50 Pcs</span>
              </div>
            </div>

            {/* Catalogue Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#151921] border border-white/10 p-3 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">Muslin Sleep Swaddles</span>
                    <span className="text-[9px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-zinc-300">100% Cotton</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 mb-2">Double-gauze breathable weave for infant sleep safety.</p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-amber-300 font-semibold">$3.80 / pc</span>
                  <span className="text-[9px] text-zinc-400">Custom Prints Available</span>
                </div>
              </div>

              <div className="bg-[#151921] border border-white/10 p-3 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">Kimono Romper Sets</span>
                    <span className="text-[9px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-zinc-300">0 - 12M</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 mb-2">Nickel-free snap closures with gentle organic dye wash.</p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-amber-300 font-semibold">$5.20 / set</span>
                  <span className="text-[9px] text-zinc-400">MOQ 60 Sets</span>
                </div>
              </div>

              <div className="bg-[#151921] border border-white/10 p-3 rounded-lg flex flex-col justify-between hidden sm:flex">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">Nursery Wash Cloths</span>
                    <span className="text-[9px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-zinc-300">6-Layer</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 mb-2">Ultra-absorbent 6-ply muslin for sensitive newborn skin.</p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-amber-300 font-semibold">$1.40 / pc</span>
                  <span className="text-[9px] text-zinc-400">Pack of 5 or 10</span>
                </div>
              </div>
            </div>

            {/* Admin & Enquiry Banner */}
            <div className="bg-[#12161f] border border-amber-500/20 rounded-lg p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-[11px] text-zinc-300">Private Operations Panel: Real-time stock status &amp; tiered pricing engine</span>
              </div>
              <span className="text-[10px] font-mono text-amber-300">Admin Managed</span>
            </div>
          </div>
        );

      case "lumos-digital-media":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-4 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-violet-600 flex items-center justify-center font-bold text-white text-[10px]">
                  L
                </div>
                <span className="font-bold text-white tracking-wide">LUMOS DIGITAL MEDIA</span>
              </div>
              <span className="text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                Digital Growth &amp; Strategy
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="bg-[#161421] border border-violet-500/30 p-3 rounded-lg">
                <div className="text-violet-400 font-mono text-[10px] mb-1">01 / Paid Advertising</div>
                <div className="font-semibold text-white mb-1">Performance Ad Campaigns</div>
                <p className="text-[10px] text-zinc-400">Meta, Google &amp; LinkedIn ad funnels focused on verified client acquisition.</p>
              </div>

              <div className="bg-[#161421] border border-white/5 p-3 rounded-lg">
                <div className="text-violet-400 font-mono text-[10px] mb-1">02 / Local Growth</div>
                <div className="font-semibold text-white mb-1">Regional Search &amp; SEO</div>
                <p className="text-[10px] text-zinc-400">Hyper-targeted local business visibility and high-converting map rankings.</p>
              </div>

              <div className="bg-[#161421] border border-white/5 p-3 rounded-lg hidden sm:block">
                <div className="text-violet-400 font-mono text-[10px] mb-1">03 / Studio Creative</div>
                <div className="font-semibold text-white mb-1">Creative Brand Assets</div>
                <p className="text-[10px] text-zinc-400">Short-form video, motion graphics, and high-impact identity collateral.</p>
              </div>
            </div>

            <div className="bg-[#13131c] border border-white/10 rounded-lg p-2.5 flex items-center justify-between">
              <span className="text-[11px] text-zinc-300 font-medium">Inbound Growth Pipeline paired with custom lead CRM</span>
              <span className="text-[10px] font-semibold bg-violet-600 hover:bg-violet-500 text-white px-3 py-1 rounded">
                Request Audit
              </span>
            </div>
          </div>
        );

      case "zenith-automations":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-4 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-wide">ZENITH AUTOMATIONS</span>
                <span className="text-[10px] font-mono bg-sky-500/15 text-sky-300 px-2 py-0.5 rounded border border-sky-500/30">
                  Interactive Showcase
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                Residential IoT Simulation
              </span>
            </div>

            {/* Interactive Scene Switcher */}
            {interactive && (
              <div className="bg-[#141822] border border-white/10 p-2.5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-zinc-400">Toggle Interactive Scene:</span>
                  <span className="text-[10px] font-mono text-sky-400 font-semibold uppercase">
                    Active: {zenithScene} Mode
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {(["day", "evening", "movie", "night"] as const).map((scene) => (
                    <button
                      key={scene}
                      onClick={() => setZenithScene(scene)}
                      className={`text-[10px] font-semibold py-1.5 px-2 rounded capitalize transition-all ${
                        zenithScene === scene
                          ? "bg-sky-500 text-black shadow-md shadow-sky-500/20"
                          : "bg-white/5 text-zinc-300 hover:bg-white/10"
                      }`}
                    >
                      {scene}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Scene Status Meters */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#121620] border border-white/5 p-2 rounded">
                <span className="text-[9px] font-mono text-zinc-400 block mb-0.5">Lighting Ambiance</span>
                <span className="font-mono text-sky-300 font-semibold">
                  {zenithScene === "day" ? "100% Cool White" : zenithScene === "evening" ? "65% Warm 2700K" : zenithScene === "movie" ? "15% Accent Gold" : "5% Night Glow"}
                </span>
              </div>
              <div className="bg-[#121620] border border-white/5 p-2 rounded">
                <span className="text-[9px] font-mono text-zinc-400 block mb-0.5">Motorised Shading</span>
                <span className="font-mono text-sky-300 font-semibold">
                  {zenithScene === "day" ? "Open (Solar Track)" : zenithScene === "evening" ? "40% Sheer" : zenithScene === "movie" ? "100% Blackout" : "100% Closed"}
                </span>
              </div>
              <div className="bg-[#121620] border border-white/5 p-2 rounded">
                <span className="text-[9px] font-mono text-zinc-400 block mb-0.5">Climate &amp; Audio</span>
                <span className="font-mono text-sky-300 font-semibold">
                  {zenithScene === "day" ? "24°C Comfort" : zenithScene === "evening" ? "22°C Lounge" : zenithScene === "movie" ? "21°C Dolby 7.1" : "23°C Eco Silence"}
                </span>
              </div>
            </div>
          </div>
        );

      case "laundry-management-saas":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-4 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-wide">LAUNDRY OPERATIONS PLATFORM</span>
                <span className="text-[10px] font-mono bg-cyan-500/15 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                  Technical Architecture
                </span>
              </div>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
                9-Week Scoped Roadmap
              </span>
            </div>

            {/* Portal Tab Switcher */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <button
                onClick={() => setLaundryPortal("admin")}
                className={`text-[10px] font-mono px-2.5 py-1 rounded transition-colors ${
                  laundryPortal === "admin"
                    ? "bg-cyan-500 text-black font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Admin Cockpit
              </button>
              <button
                onClick={() => setLaundryPortal("staff")}
                className={`text-[10px] font-mono px-2.5 py-1 rounded transition-colors ${
                  laundryPortal === "staff"
                    ? "bg-cyan-500 text-black font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Staff Intake &amp; Wash Flow
              </button>
              <button
                onClick={() => setLaundryPortal("customer")}
                className={`text-[10px] font-mono px-2.5 py-1 rounded transition-colors ${
                  laundryPortal === "customer"
                    ? "bg-cyan-500 text-black font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Customer Portal
              </button>
            </div>

            {/* Portal Content */}
            {laundryPortal === "admin" && (
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#131720] p-2.5 rounded border border-white/5">
                  <span className="text-[9px] text-zinc-400 block">Active Batch Orders</span>
                  <span className="font-mono text-white text-sm font-bold">142 Batches</span>
                </div>
                <div className="bg-[#131720] p-2.5 rounded border border-white/5">
                  <span className="text-[9px] text-zinc-400 block">Chemical Dosage Burn</span>
                  <span className="font-mono text-cyan-300 text-sm font-bold">94% Optimum</span>
                </div>
                <div className="bg-[#131720] p-2.5 rounded border border-white/5">
                  <span className="text-[9px] text-zinc-400 block">Turnaround Average</span>
                  <span className="font-mono text-emerald-400 text-sm font-bold">18.4 Hours</span>
                </div>
              </div>
            )}

            {laundryPortal === "staff" && (
              <div className="bg-[#131720] p-3 rounded border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="text-[11px] text-zinc-200">Garment Tagging &bull; Batch #LAUN-8492</span>
                </div>
                <span className="font-mono text-[10px] text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded">
                  Status: Sorting &rarr; Washing
                </span>
              </div>
            )}

            {laundryPortal === "customer" && (
              <div className="bg-[#131720] p-3 rounded border border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-[11px]">Pickup Requested &bull; 4 Items Dry Clean</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Invoice #INV-2026-08 &bull; SMS Tracking Active</div>
                </div>
                <span className="text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded">
                  Scheduled 2:00 PM
                </span>
              </div>
            )}
          </div>
        );

      case "lumiwaves":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-3 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold tracking-wide text-white">LUMIWAVES &bull; SMART SOLAR &amp; AUTOMATION</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Sustainable Tech
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#131916] border border-emerald-500/20 p-2.5 rounded">
                <Sun className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                <span className="font-semibold text-white block">Rooftop Solar</span>
                <span className="text-[10px] text-zinc-400">On-grid &amp; hybrid energy systems</span>
              </div>
              <div className="bg-[#131916] border border-white/5 p-2.5 rounded">
                <Sliders className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                <span className="font-semibold text-white block">Water Level Auto</span>
                <span className="text-[10px] text-zinc-400">Smart tank sensor automation</span>
              </div>
              <div className="bg-[#131916] border border-white/5 p-2.5 rounded">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                <span className="font-semibold text-white block">Home Cinema</span>
                <span className="text-[10px] text-zinc-400">Dolby Atmos acoustic design</span>
              </div>
            </div>
          </div>
        );

      case "circledot-design-studio":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-3 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold tracking-wide text-white font-mono">CIRCLEDOT // STUDIO</span>
              <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded">
                Design &amp; Build
              </span>
            </div>
            <div className="p-4 bg-[#18131a] border border-pink-500/20 rounded-lg flex flex-col gap-2">
              <div className="text-sm font-semibold tracking-tight text-white">
                Brand Strategy, Visual Systems &amp; High-Fidelity Web Builds
              </div>
              <p className="text-[11px] text-zinc-400">
                Crafting distinct digital presence for ambitious businesses and visionary creators.
              </p>
            </div>
          </div>
        );

      case "vilvam-foundation":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-3 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold tracking-wide text-white">VILVAM FOUNDATION</span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                Community Outreach
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#121921] p-2.5 rounded border border-white/5">
                <Heart className="w-3.5 h-3.5 text-cyan-400 mb-1" />
                <span className="font-semibold text-white block">Food Drives</span>
                <span className="text-[9px] text-zinc-400">Nutritional relief across rural areas</span>
              </div>
              <div className="bg-[#121921] p-2.5 rounded border border-white/5">
                <Package className="w-3.5 h-3.5 text-cyan-400 mb-1" />
                <span className="font-semibold text-white block">Education Aid</span>
                <span className="text-[9px] text-zinc-400">Student scholarship kits</span>
              </div>
              <div className="bg-[#121921] p-2.5 rounded border border-white/5">
                <Shield className="w-3.5 h-3.5 text-cyan-400 mb-1" />
                <span className="font-semibold text-white block">Medical Aid</span>
                <span className="text-[9px] text-zinc-400">Critical healthcare assistance</span>
              </div>
            </div>
          </div>
        );

      case "mangai-clinic":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-3 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold tracking-wide text-white">MANGAI CLINIC</span>
              <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                Women&apos;s Healthcare
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#1f1317] p-2.5 rounded border border-rose-500/20">
                <Stethoscope className="w-3.5 h-3.5 text-rose-400 mb-1" />
                <span className="font-semibold text-white block">Obstetrics &amp; Antenatal</span>
                <span className="text-[9px] text-zinc-400">Comprehensive pregnancy care &amp; ultrasound</span>
              </div>
              <div className="bg-[#1f1317] p-2.5 rounded border border-rose-500/20">
                <Calendar className="w-3.5 h-3.5 text-rose-400 mb-1" />
                <span className="font-semibold text-white block">Fertility &amp; Gynaecology</span>
                <span className="text-[9px] text-zinc-400">Confidential clinical consultations</span>
              </div>
            </div>
          </div>
        );

      case "priya-woodland":
        return (
          <div className="bg-[#0e1014] text-white p-5 rounded-b-xl flex flex-col gap-3 font-sans text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold tracking-wide text-white">PRIYA WOODLAND &bull; SOLID WOOD</span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                Teak &amp; Rosewood
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#1f1712] p-2.5 rounded border border-amber-500/20">
                <span className="font-semibold text-white block">Handcrafted Dining Tables</span>
                <span className="text-[10px] text-zinc-400">Solid teak live-edge and carved heirloom furniture.</span>
              </div>
              <div className="bg-[#1f1712] p-2.5 rounded border border-amber-500/20">
                <span className="font-semibold text-white block">Custom Temple Doors</span>
                <span className="text-[10px] text-zinc-400">Intricate artisanal wood relief and antique restoration.</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-[#0e1014] text-zinc-400 p-6 rounded-b-xl text-center text-xs">
            Interactive Project Interface
          </div>
        );
    }
  };

  return (
    <div className={`rounded-xl border border-white/10 bg-[#090a0c] shadow-2xl overflow-hidden ${className}`}>
      {/* Browser Window Header */}
      <div className="bg-[#14171d] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="bg-[#090a0c] px-3 py-1 rounded text-[11px] font-mono text-zinc-400 border border-white/5 truncate max-w-[200px] sm:max-w-xs">
          app://portfolio/{slug}
        </div>
        <div className="flex items-center gap-1 text-zinc-500">
          <span className="text-[10px] font-mono">Live Preview</span>
        </div>
      </div>

      {/* Dynamic Content */}
      {renderContent()}
    </div>
  );
}
