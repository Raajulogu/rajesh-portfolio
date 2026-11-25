"use client";

import React, { useState } from "react";
import { 
  Database, 
  ShieldCheck, 
  Zap, 
  Workflow
} from "lucide-react";

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState<"client" | "internal" | "realtime">("client");
  const [systemMode, setSystemMode] = useState<"architecture" | "telemetry">("architecture");

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow behind visual */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#d4f933]/20 via-lime-500/10 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Console Box */}
      <div className="relative rounded-2xl border border-white/15 bg-[#0b0d12]/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300">
        {/* Top Console Bar */}
        <div className="bg-[#12151d] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-zinc-400 ml-2 hidden sm:inline">
              rajeshkumar-system-engine v2.6
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#090a0c] p-1 rounded-lg border border-white/10 text-[10px] font-mono">
            <button
              onClick={() => setSystemMode("architecture")}
              className={`px-2.5 py-1 rounded transition-colors ${
                systemMode === "architecture"
                  ? "bg-[#d4f933] text-[#090a0c] font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Architecture
            </button>
            <button
              onClick={() => setSystemMode("telemetry")}
              className={`px-2.5 py-1 rounded transition-colors ${
                systemMode === "telemetry"
                  ? "bg-[#d4f933] text-[#090a0c] font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Live Telemetry
            </button>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {systemMode === "architecture" ? (
            <>
              {/* Interactive Node Tabs */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveNode("client")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeNode === "client"
                      ? "bg-[#151922] border-[#d4f933] shadow-md shadow-[#d4f933]/10"
                      : "bg-[#10131a] border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-zinc-400">01 &bull; LAYER</span>
                    <span className="w-2 h-2 rounded-full bg-[#d4f933]" />
                  </div>
                  <div className="font-semibold text-xs text-white">Client Touchpoints</div>
                  <div className="text-[10px] text-zinc-400 truncate mt-0.5">Websites &amp; Catalogues</div>
                </button>

                <button
                  onClick={() => setActiveNode("internal")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeNode === "internal"
                      ? "bg-[#151922] border-[#d4f933] shadow-md shadow-[#d4f933]/10"
                      : "bg-[#10131a] border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-zinc-400">02 &bull; LAYER</span>
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                  </div>
                  <div className="font-semibold text-xs text-white">Business Engine</div>
                  <div className="text-[10px] text-zinc-400 truncate mt-0.5">CRMs &amp; Admin Panels</div>
                </button>

                <button
                  onClick={() => setActiveNode("realtime")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeNode === "realtime"
                      ? "bg-[#151922] border-[#d4f933] shadow-md shadow-[#d4f933]/10"
                      : "bg-[#10131a] border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-zinc-400">03 &bull; LAYER</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <div className="font-semibold text-xs text-white">APIs &amp; Data</div>
                  <div className="text-[10px] text-zinc-400 truncate mt-0.5">Sockets &bull; Twilio &bull; DB</div>
                </button>
              </div>

              {/* Dynamic Interactive Node Details */}
              <div className="rounded-xl border border-white/10 bg-[#0e1117] p-4 text-xs font-mono">
                {activeNode === "client" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-[#d4f933] font-semibold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" /> High-Performance Frontend Tier
                      </span>
                      <span className="text-[10px] text-zinc-500">React 19 &bull; Next.js 16</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-300">
                      <div className="p-2 rounded bg-white/5 flex items-center justify-between">
                        <span>Speed Index:</span>
                        <span className="text-emerald-400 font-bold">&lt; 0.8s</span>
                      </div>
                      <div className="p-2 rounded bg-white/5 flex items-center justify-between">
                        <span>Core Web Vitals:</span>
                        <span className="text-emerald-400 font-bold">100 / 100</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                      Engineered for high conversion: Singapore Maxi Cabs booking flow, Ranji Textiles B2B catalogue, and Zenith interactive simulation.
                    </p>
                  </div>
                )}

                {activeNode === "internal" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-violet-400 font-semibold flex items-center gap-1.5">
                        <Workflow className="w-3.5 h-3.5" /> Private Operations &amp; Back-Office
                      </span>
                      <span className="text-[10px] text-zinc-500">Role-Based Access Control</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-300">
                      <div className="p-2 rounded bg-white/5 flex items-center justify-between">
                        <span>Lumos Agency CRM:</span>
                        <span className="text-violet-300 font-bold">Inbound Pipeline</span>
                      </div>
                      <div className="p-2 rounded bg-white/5 flex items-center justify-between">
                        <span>Maxi Cabs Dispatch:</span>
                        <span className="text-[#d4f933] font-bold">Live Flight Sync</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                      Custom internal systems developed to streamline business operations, lead tracking, and administrative dispatch without expensive SaaS subscriptions.
                    </p>
                  </div>
                )}

                {activeNode === "realtime" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5" /> Resilient Data &amp; Real-Time Tier
                      </span>
                      <span className="text-[10px] text-zinc-500">Node.js &bull; MongoDB</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-300">
                      <div className="p-2 rounded bg-white/5 flex items-center justify-between">
                        <span>Socket.IO Engine:</span>
                        <span className="text-cyan-300 font-bold">Bi-directional</span>
                      </div>
                      <div className="p-2 rounded bg-white/5 flex items-center justify-between">
                        <span>Twilio SMS/Comm:</span>
                        <span className="text-emerald-400 font-bold">Connected</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                      Real-time communication, automated notification webhooks, structured RESTful endpoints, and relational/document database schemas.
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Live Telemetry View */
            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-lg bg-[#121620] border border-white/5">
                  <span className="text-[9px] text-zinc-400 block mb-0.5">SYSTEM HEALTH</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    99.98%
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#121620] border border-white/5">
                  <span className="text-[9px] text-zinc-400 block mb-0.5">AVG LATENCY</span>
                  <span className="font-bold text-[#d4f933]">14ms Global</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#121620] border border-white/5">
                  <span className="text-[9px] text-zinc-400 block mb-0.5">DEPLOYMENTS</span>
                  <span className="font-bold text-white">9 Verified Sites</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#121620] border border-white/5 space-y-1.5 text-[11px]">
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-400">Pondicherry Development Hub:</span>
                  <span className="text-emerald-400">ONLINE</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-400">Salem Technical Ownership:</span>
                  <span className="text-emerald-400">ACTIVE (SeedataMD)</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-400">Security Architecture:</span>
                  <span className="text-[#d4f933]">Zero Private Data Exposed</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Connectivity Bar */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4f933]" />
              <span>Full-Stack Engineering &amp; Technical Leadership</span>
            </div>
            <span className="text-[#d4f933] font-semibold">Available for Q1 2027</span>
          </div>
        </div>
      </div>
    </div>
  );
}
