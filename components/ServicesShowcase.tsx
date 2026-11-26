"use client";

import React from "react";
import Link from "next/link";
import { 
  Globe, 
  Database, 
  LayoutDashboard, 
  Layers, 
  ShoppingBag, 
  Cpu, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { SERVICES } from "@/data/services";
import SpotlightCard from "./SpotlightCard";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "business-websites": <Globe className="w-5 h-5 text-[#d4f933]" />,
  "custom-crm": <Database className="w-5 h-5 text-sky-400" />,
  "admin-dashboards": <LayoutDashboard className="w-5 h-5 text-emerald-400" />,
  "full-stack-web-apps": <Layers className="w-5 h-5 text-amber-400" />,
  "product-catalogues": <ShoppingBag className="w-5 h-5 text-purple-400" />,
  "backend-api-integrations": <Cpu className="w-5 h-5 text-rose-400" />
};

export default function ServicesShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service, index) => (
        <SpotlightCard
          key={service.id}
          className="p-6 sm:p-7 flex flex-col justify-between group"
        >
          <div>
            {/* Top Indicator */}
            <div className="flex items-center justify-between gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#d4f933]/40 group-hover:bg-[#d4f933]/5 transition-all">
                {SERVICE_ICONS[service.id] || <Globe className="w-5 h-5 text-[#d4f933]" />}
              </div>
              <span className="text-[10px] font-mono text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-0.5 rounded-full border border-[#d4f933]/25 font-semibold">
                0{index + 1} &bull; {service.badge}
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="text-lg font-bold text-white group-hover:text-[#d4f933] transition-colors mb-2 tracking-tight">
              {service.title}
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed mb-5 font-sans">
              {service.shortDescription}
            </p>

            {/* Practical What Can Be Built bullets */}
            <div className="pt-4 border-t border-white/5 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                Key Deliverables:
              </span>
              {service.whatCanBeBuilt.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4f933] shrink-0 mt-0.5" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <Link
              href={`/services#${service.id}`}
              className="text-xs font-semibold text-white group-hover:text-[#d4f933] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[10px] font-mono text-zinc-500">
              Custom Built
            </span>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
}
