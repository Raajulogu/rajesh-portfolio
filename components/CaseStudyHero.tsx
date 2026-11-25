"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { Lock, ExternalLink, Eye, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InternalSystemMockup from "./InternalSystemMockup";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const [activeTab, setActiveTab] = useState<"website" | "system">("website");

  return (
    <div className="rounded-3xl border border-white/10 bg-[#090b0e] overflow-hidden shadow-2xl">
      {/* Browser Chrome Header */}
      <div className="bg-[#131722] px-4 sm:px-6 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-zinc-500 text-xs font-mono ml-2 hidden sm:inline">
            production_preview.tsx
          </span>
        </div>

        {/* Live URL Pill */}
        <div className="flex items-center gap-2 bg-[#090b0e] px-3.5 py-1.5 rounded-lg text-xs font-mono text-zinc-300 border border-white/5 truncate max-w-sm">
          <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">https://{project.liveDomain}</span>
        </div>

        {/* Dual Tab Controls if project has internal system */}
        <div className="flex items-center gap-2">
          {project.hasInternalSystem ? (
            <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10">
              <button
                onClick={() => setActiveTab("website")}
                className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-md transition-all ${
                  activeTab === "website"
                    ? "bg-[#d4f933] text-black font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Live Site</span>
              </button>
              <button
                onClick={() => setActiveTab("system")}
                className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-md transition-all ${
                  activeTab === "system"
                    ? "bg-[#d4f933] text-black font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>Internal System</span>
              </button>
            </div>
          ) : (
            project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#d4f933] text-black font-semibold text-xs px-3.5 py-1.5 rounded-lg hover:bg-[#bce022] transition-colors"
              >
                <span>Open Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )
          )}
        </div>
      </div>

      {/* Viewport Area */}
      <AnimatePresence mode="wait">
        {activeTab === "website" ? (
          <motion.div
            key="website-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black/60 group"
          >
            <Image
              src={project.heroImage}
              alt={`${project.title} live website reference imagery`}
              fill
              priority
              unoptimized
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
            />
            {/* Ambient Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-transparent opacity-40" />

            {/* Floating Live Badge at bottom */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Reference Visual &bull; {project.category}</span>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d4f933] text-black font-bold px-4 py-1.5 rounded-full text-xs flex items-center gap-1.5 shadow-xl hover:bg-[#c3e622] transition-all"
                >
                  <span>Launch Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="system-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-6 bg-[#0c0e14]"
          >
            <InternalSystemMockup />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
