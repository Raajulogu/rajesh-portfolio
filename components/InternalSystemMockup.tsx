"use client";

import React, { useState } from "react";
import { 
  Users, 
  Package, 
  Car, 
  Sliders, 
  Lock
} from "lucide-react";

type SystemTab = "lumos-crm" | "zenith-crm" | "smc-admin" | "ranji-admin";

export default function InternalSystemMockup() {
  const [activeTab, setActiveTab] = useState<SystemTab>("lumos-crm");

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0f14] overflow-hidden shadow-2xl">
      {/* Top Banner Notice */}
      <div className="bg-[#141720] border-b border-white/10 px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-zinc-300 font-mono text-[11px]">
          <Lock className="w-3.5 h-3.5 text-[#d4f933]" />
          <span>Internal Business Systems &bull; Private Operational Software</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            Demonstration UI &bull; Anonymised Data
          </span>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="bg-[#101319] p-2 border-b border-white/10 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab("lumos-crm")}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === "lumos-crm"
              ? "bg-[#d4f933] text-[#090a0c] font-semibold shadow-md"
              : "bg-white/5 text-zinc-300 hover:bg-white/10"
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Lumos CRM (Lead Pipeline)</span>
        </button>

        <button
          onClick={() => setActiveTab("zenith-crm")}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === "zenith-crm"
              ? "bg-[#d4f933] text-[#090a0c] font-semibold shadow-md"
              : "bg-white/5 text-zinc-300 hover:bg-white/10"
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Zenith CRM (Spec Tracker)</span>
        </button>

        <button
          onClick={() => setActiveTab("smc-admin")}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === "smc-admin"
              ? "bg-[#d4f933] text-[#090a0c] font-semibold shadow-md"
              : "bg-white/5 text-zinc-300 hover:bg-white/10"
          }`}
        >
          <Car className="w-3.5 h-3.5" />
          <span>Singapore Maxi Cabs Admin (Dispatch)</span>
        </button>

        <button
          onClick={() => setActiveTab("ranji-admin")}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === "ranji-admin"
              ? "bg-[#d4f933] text-[#090a0c] font-semibold shadow-md"
              : "bg-white/5 text-zinc-300 hover:bg-white/10"
          }`}
        >
          <Package className="w-3.5 h-3.5" />
          <span>Ranji Textiles Admin (Catalogue)</span>
        </button>
      </div>

      {/* Interface Demonstration Panels */}
      <div className="p-5 sm:p-6">
        {/* Lumos CRM */}
        {activeTab === "lumos-crm" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">Lumos Agency Lead Pipeline &amp; Inbound CRM</h4>
                <p className="text-xs text-zinc-400">Tracks inbound web inquiries through discovery, proposal submission, and onboarding.</p>
              </div>
              <span className="text-[11px] font-mono text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded border border-violet-500/20 shrink-0">
                Workflow: Lead &rarr; Retainer
              </span>
            </div>

            {/* Pipeline Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {/* Column 1 */}
              <div className="bg-[#141822] rounded-lg p-3 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-zinc-300">1. New Inbound</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-zinc-400">4 Leads</span>
                </div>
                <div className="bg-[#0e1118] p-2.5 rounded border border-white/5 text-xs space-y-1">
                  <div className="font-medium text-white truncate">Acme Retail Chain</div>
                  <div className="text-[10px] text-zinc-400">Req: Performance Ads + Local SEO</div>
                  <div className="text-[9px] font-mono text-violet-400">Recvd: 2 hrs ago</div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="bg-[#141822] rounded-lg p-3 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-zinc-300">2. Discovery Call</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-zinc-400">2 Leads</span>
                </div>
                <div className="bg-[#0e1118] p-2.5 rounded border border-white/5 text-xs space-y-1">
                  <div className="font-medium text-white truncate">Dr. V. Aesthetic Clinic</div>
                  <div className="text-[10px] text-zinc-400">Audit notes logged &bull; 45 min call</div>
                  <div className="text-[9px] font-mono text-amber-300">Scheduled: Tomorrow</div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="bg-[#141822] rounded-lg p-3 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-zinc-300">3. Proposal Sent</span>
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-zinc-400">3 Leads</span>
                </div>
                <div className="bg-[#0e1118] p-2.5 rounded border border-white/5 text-xs space-y-1">
                  <div className="font-medium text-white truncate">Nexus Coworking Spaces</div>
                  <div className="text-[10px] text-zinc-400">Tier 2 Retainer Proposal Sent</div>
                  <div className="text-[9px] font-mono text-sky-400">Awaiting Sign-off</div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="bg-[#141822] rounded-lg p-3 border border-emerald-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-emerald-400">4. Won / Retained</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">Active</span>
                </div>
                <div className="bg-[#0e1118] p-2.5 rounded border border-white/5 text-xs space-y-1">
                  <div className="font-medium text-white truncate">Apex Luxury Real Estate</div>
                  <div className="text-[10px] text-zinc-400">6-Month Retainer Onboarded</div>
                  <div className="text-[9px] font-mono text-emerald-400">Kickoff Complete</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Zenith CRM */}
        {activeTab === "zenith-crm" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">Zenith Smart Home Project &amp; Room Spec CRM</h4>
                <p className="text-xs text-zinc-400">Manages residential automation blueprints, room-by-room hardware quotas, and site surveys.</p>
              </div>
              <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded border border-sky-500/20 shrink-0">
                Workflow: Survey &rarr; Specification
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                <span className="text-zinc-400 text-[10px] font-mono uppercase block mb-1">Project Spec</span>
                <div className="font-semibold text-white text-sm">East Coast Villa #14</div>
                <div className="text-zinc-400 text-[11px] mt-1">4,200 sq.ft &bull; 4 Bed + Home Theatre</div>
                <div className="mt-3 text-[10px] font-mono text-sky-400">Stage: Wiring Assessment</div>
              </div>

              <div className="bg-[#141822] p-3 rounded-lg border border-white/5">
                <span className="text-zinc-400 text-[10px] font-mono uppercase block mb-1">Room Hardware Modules</span>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between text-zinc-300">
                    <span>Living Room</span>
                    <span className="font-mono text-zinc-400">8 Dimmers + 2 Shading Motors</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Master Suite</span>
                    <span className="font-mono text-zinc-400">Climate + Dual Scene Keypad</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>Acoustic Cinema</span>
                    <span className="font-mono text-zinc-400">Dolby 7.1 Relay + Blackout</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#141822] p-3 rounded-lg border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-zinc-400 text-[10px] font-mono uppercase block mb-1">Next Action</span>
                  <div className="text-zinc-200 font-medium">Architect Plan Review</div>
                  <p className="text-[10px] text-zinc-400 mt-1">Verify conduit depths with electrical contractor before drywall install.</p>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded mt-2">
                  Site Visit Scheduled
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Singapore Maxi Cabs Admin */}
        {activeTab === "smc-admin" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">Singapore Maxi Cabs Operations &amp; Dispatch Console</h4>
                <p className="text-xs text-zinc-400">Centralized flight arrival monitoring, vehicle allocation, and booking status controls.</p>
              </div>
              <span className="text-[11px] font-mono text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/20 shrink-0">
                Operations: Changi Dispatch
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-400 font-mono text-[10px] uppercase">
                    <th className="py-2 px-3">Booking ID</th>
                    <th className="py-2 px-3">Service / Route</th>
                    <th className="py-2 px-3">Vehicle</th>
                    <th className="py-2 px-3">Flight / Time</th>
                    <th className="py-2 px-3">Dispatch Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr>
                    <td className="py-2 px-3 font-mono text-[#d4f933]">#SMC-9102</td>
                    <td className="py-2 px-3 font-medium text-white">Changi T3 &rarr; Marina Bay Sands</td>
                    <td className="py-2 px-3">7-Seater Maxi</td>
                    <td className="py-2 px-3 font-mono text-zinc-400">SQ321 &bull; 14:15 Landed</td>
                    <td className="py-2 px-3">
                      <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">
                        Driver At Belt 42
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-mono text-[#d4f933]">#SMC-9105</td>
                    <td className="py-2 px-3 font-medium text-white">Sentosa Cove &rarr; Changi T1</td>
                    <td className="py-2 px-3">9-Seater Executive</td>
                    <td className="py-2 px-3 font-mono text-zinc-400">Departure &bull; 16:30</td>
                    <td className="py-2 px-3">
                      <span className="text-[10px] font-mono bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded">
                        Vehicle Assigned
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-mono text-[#d4f933]">#SMC-9108</td>
                    <td className="py-2 px-3 font-medium text-white">Suntec City &bull; 4-Hour Hourly Charter</td>
                    <td className="py-2 px-3">13-Seater Minibus</td>
                    <td className="py-2 px-3 font-mono text-zinc-400">Corporate &bull; 18:00</td>
                    <td className="py-2 px-3">
                      <span className="text-[10px] font-mono bg-white/10 text-zinc-300 px-2 py-0.5 rounded">
                        Confirmed Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Ranji Textiles Admin */}
        {activeTab === "ranji-admin" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">Ranji Textiles Catalogue &amp; Wholesale Inventory Admin</h4>
                <p className="text-xs text-zinc-400">Manage garment SKU listings, minimum order quantities, and wholesale discount structures.</p>
              </div>
              <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 shrink-0">
                Operations: Wholesale Catalogue
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-[#141822] p-3 rounded-lg border border-white/5 space-y-1">
                <span className="text-zinc-400 text-[10px] font-mono uppercase block">Active Product SKUs</span>
                <div className="text-lg font-bold text-white font-mono">148 Lines</div>
                <div className="text-[10px] text-zinc-400">Double-gauze muslin, rompers, towels</div>
              </div>

              <div className="bg-[#141822] p-3 rounded-lg border border-white/5 space-y-1">
                <span className="text-zinc-400 text-[10px] font-mono uppercase block">Wholesale Price Tier</span>
                <div className="text-sm font-semibold text-amber-300 font-mono">Tier 1: 50-200 pcs</div>
                <div className="text-[10px] text-zinc-400">Tier 2: 201-500 pcs (12% margin disc)</div>
              </div>

              <div className="bg-[#141822] p-3 rounded-lg border border-white/5 space-y-1">
                <span className="text-zinc-400 text-[10px] font-mono uppercase block">Custom-Print Requests</span>
                <div className="text-sm font-semibold text-emerald-400 font-mono">6 Pending Specs</div>
                <div className="text-[10px] text-zinc-400">Pantone color matching requested</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Security Note */}
      <div className="bg-[#101319] border-t border-white/5 px-4 py-3 flex items-center justify-between text-[11px] text-zinc-400">
        <span>Confidentiality Protected: No actual customer records, live URLs, or private credentials are published.</span>
        <span className="font-mono text-zinc-400">Demonstration Model</span>
      </div>
    </div>
  );
}
