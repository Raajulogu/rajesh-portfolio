"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight, ShieldCheck } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function HeroVisual() {
  const [activeProjectSlug, setActiveProjectSlug] = useState<string>("singapore-maxi-cabs");

  const activeProject = PROJECTS.find((p) => p.slug === activeProjectSlug) || PROJECTS[2];
  const companionProject1 = PROJECTS.find((p) => p.slug === "ranji-textiles")!;
  const companionProject2 = PROJECTS.find((p) => p.slug === "zenith-automations")!;

  // Interactive 3D mouse parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto lg:max-w-none [perspective:1200px]"
    >
      {/* Ambient background volumetric glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#d4f933]/15 via-emerald-500/10 to-cyan-500/15 rounded-3xl blur-3xl opacity-70 pointer-events-none -z-10" />

      {/* 3D Motion Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative transition-transform duration-200 ease-out"
      >
        {/* BACKGROUND COMPANION CARD: Zenith Luxury Smart Living (Tilted Left) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-60 sm:w-72 rounded-2xl border border-white/10 bg-[#090b0f]/80 backdrop-blur-xl p-3 shadow-2xl overflow-hidden -z-10 [transform:translateZ(-40px)_rotate(-5deg)] hidden sm:block"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {companionProject2.title}
            </span>
            <span>IoT Platform</span>
          </div>
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-black/60">
            <Image
              src={companionProject2.heroImage}
              alt="Zenith Automations preview"
              fill
              unoptimized
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-300">
              Interactive Living Scenes
            </span>
          </div>
        </motion.div>

        {/* BACKGROUND COMPANION CARD: Ranji Textiles B2B (Tilted Right) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-60 sm:w-72 rounded-2xl border border-amber-500/20 bg-[#090b0f]/85 backdrop-blur-xl p-3 shadow-2xl overflow-hidden -z-10 [transform:translateZ(-30px)_rotate(4deg)] hidden sm:block"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {companionProject1.title}
            </span>
            <span>B2B Catalogue</span>
          </div>
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-black/60">
            <Image
              src={companionProject1.heroImage}
              alt="Ranji Textiles catalogue preview"
              fill
              unoptimized
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-300">
              Wholesale Apparel + Admin
            </span>
          </div>
        </motion.div>

        {/* MAIN FOREGROUND SPOTLIGHT: Interactive Project Browser Frame */}
        <div className="relative rounded-2xl border border-white/15 bg-[#0b0e14]/95 backdrop-blur-2xl shadow-2xl overflow-hidden [transform:translateZ(20px)] transition-all duration-300 group">
          {/* Top Browser Bar */}
          <div className="bg-[#121620] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-zinc-400 ml-2 truncate max-w-[150px] sm:max-w-none">
                https://{activeProject.liveDomain}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-0.5 rounded-full border border-[#d4f933]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933] animate-pulse" />
                Live Production
              </span>
            </div>
          </div>

          {/* Featured Visual Image Viewport */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-black/50">
            <Image
              src={activeProject.heroImage}
              alt={`${activeProject.title} flagship project visual`}
              fill
              priority
              unoptimized
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
            />
            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent opacity-60" />

            {/* Bottom floating details inside image viewport */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
              <div className="space-y-1 bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 max-w-[260px] sm:max-w-xs">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white truncate">
                    {activeProject.title}
                  </span>
                  {activeProject.hasInternalSystem && (
                    <span className="text-[9px] font-mono text-[#d4f933] bg-[#d4f933]/15 px-1.5 py-0.2 rounded border border-[#d4f933]/20">
                      + CRM
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-zinc-300 font-mono truncate">
                  {activeProject.tagline}
                </p>
              </div>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d4f933] text-black font-semibold text-xs px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-1.5 hover:bg-[#bde322] transition-colors shrink-0"
                >
                  <span className="hidden sm:inline">Visit Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Showcase Switcher Pills */}
          <div className="p-3 sm:p-4 bg-[#0e1219] border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              {[
                { slug: "singapore-maxi-cabs", label: "Maxi Cabs" },
                { slug: "zenith-automations", label: "Zenith IoT" },
                { slug: "ranji-textiles", label: "Ranji B2B" },
                { slug: "lumos-digital-media", label: "Lumos Agency" }
              ].map((item) => (
                <button
                  key={item.slug}
                  onClick={() => setActiveProjectSlug(item.slug)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-all ${
                    activeProjectSlug === item.slug
                      ? "bg-[#d4f933] text-black font-bold shadow-md shadow-[#d4f933]/20"
                      : "text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Link
              href={`/work/${activeProject.slug}`}
              className="text-[11px] font-mono text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d4f933]" />
            </Link>
          </div>
        </div>

        {/* Floating Verified Trust Pill */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 left-6 bg-[#121620]/95 backdrop-blur-xl border border-white/15 px-3 py-1.5 rounded-full text-[10px] font-mono text-zinc-300 flex items-center gap-2 shadow-2xl hidden sm:flex"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4f933]" />
          <span>Independent Freelance Deployments</span>
          <span className="text-zinc-600">&bull;</span>
          <span className="text-emerald-400">9 Active Sites</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
