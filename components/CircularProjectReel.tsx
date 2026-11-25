"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  ExternalLink, 
  Lock, 
  ShieldCheck, 
  Eye, 
  Database,
  LayoutGrid,
  RotateCcw,
  MoveHorizontal
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function CircularProjectReel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"circle" | "grid">("circle");
  const [activeTab, setActiveTab] = useState<"website" | "admin">("website");
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(1280);
  const dragStartX = useRef<number | null>(null);

  // All 9 public client projects
  const clientProjects = PROJECTS.filter(
    (p) => p.classification === "Freelance / Client Project"
  );
  const total = clientProjects.length;

  // Track window resize for responsive 3D radius calculation
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Rotate functions
  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
    setActiveTab("website");
  }, [total]);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setActiveTab("website");
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "circle") return;
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject, viewMode]);

  // Pointer drag gestures for horizontal swipe (without capturing vertical scroll)
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 10) {
      setIsDragging(true);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (diff < -50) {
      nextProject();
    } else if (diff > 50) {
      prevProject();
    }
    dragStartX.current = null;
    setTimeout(() => setIsDragging(false), 50);
  };

  // Calculate Responsive 3D Geometry for Expansive Big-Screen Radius
  const getCircleTransforms = (offset: number) => {
    if (offset === 0) {
      return {
        x: 0,
        z: 0,
        rotY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 40
      };
    }

    // Dynamic horizontal spread, depth step, and rotation angle by screen size
    let spread = 220;
    let depthStep = 110;
    let angleStep = 22;

    if (windowWidth >= 1536) {
      // 2XL / Ultrawide Displays: Vast Grand Rotunda
      spread = 640;
      depthStep = 300;
      angleStep = 38;
    } else if (windowWidth >= 1280) {
      // XL Big Desktop: Generous Wide Radius
      spread = 560;
      depthStep = 260;
      angleStep = 35;
    } else if (windowWidth >= 1024) {
      // Laptop / Desktop
      spread = 460;
      depthStep = 220;
      angleStep = 32;
    } else if (windowWidth >= 768) {
      // Tablet Landscape
      spread = 360;
      depthStep = 170;
      angleStep = 28;
    } else if (windowWidth >= 640) {
      // Tablet Portrait
      spread = 280;
      depthStep = 140;
      angleStep = 25;
    }

    const isAdjacent = Math.abs(offset) === 1;

    if (isAdjacent) {
      return {
        x: offset * spread,
        z: -depthStep,
        rotY: offset * -angleStep,
        scale: windowWidth >= 1024 ? 0.88 : 0.82,
        opacity: 0.72,
        zIndex: 30
      };
    }

    // Outer ring cards (offset = ±2)
    return {
      x: offset * (spread * 1.58),
      z: -(depthStep * 1.85),
      rotY: offset * (-angleStep * 1.4),
      scale: windowWidth >= 1024 ? 0.72 : 0.64,
      opacity: 0.32,
      zIndex: 20
    };
  };

  return (
    <div className="space-y-8 select-none">
      {/* Top Header & View Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-0.5 rounded-full border border-[#d4f933]/25 font-semibold">
              Interactive 3D Carousel
            </span>
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-[#d4f933]" />
              <span>Drag horizontally or click cards to roll</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>Client Projects</span>
            <span className="text-sm font-mono font-normal text-zinc-400">
              ({String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")})
            </span>
          </h2>
        </div>

        {/* View Switcher & Navigation Arrows */}
        <div className="flex items-center gap-3">
          {/* 3D Circle vs Grid Toggle */}
          <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-mono">
            <button
              onClick={() => setViewMode("circle")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "circle"
                  ? "bg-[#d4f933] text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>3D Reel</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-[#d4f933] text-black font-bold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>

          {/* Previous / Next Arrow Controls */}
          {viewMode === "circle" && (
            <div className="flex items-center gap-2">
              <button
                onClick={prevProject}
                aria-label="Previous project"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all hover:bg-white/10 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextProject}
                aria-label="Next project"
                className="w-10 h-10 rounded-xl bg-[#d4f933] text-black font-bold flex items-center justify-center transition-all hover:bg-[#bde322] active:scale-95 shadow-lg shadow-[#d4f933]/15"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3D EXPANSIVE CIRCULAR CAROUSEL REEL STAGE */}
      {/* ------------------------------------------------------------- */}
      {viewMode === "circle" ? (
        <div className="relative py-4 sm:py-8 overflow-hidden">
          {/* Panoramic Ambient Stage Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-[#d4f933]/6 rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* 3D Circular Arena Stage with Wide Perspective */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative h-[520px] sm:h-[600px] lg:h-[680px] xl:h-[720px] w-full flex items-center justify-center [perspective:1800px] sm:[perspective:2200px] lg:[perspective:2600px] cursor-grab active:cursor-grabbing touch-pan-y"
          >
            {clientProjects.map((project, index) => {
              // Calculate shortest circular offset from activeIndex
              let offset = index - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCenter = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              const { x, z, rotY, scale, opacity, zIndex } = getCircleTransforms(offset);

              return (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    if (!isDragging && !isCenter) {
                      setActiveIndex(index);
                      setActiveTab("website");
                    }
                  }}
                  animate={{
                    x,
                    z,
                    rotateY: rotY,
                    scale,
                    opacity
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 26,
                    mass: 0.8
                  }}
                  style={{
                    position: "absolute",
                    zIndex,
                    transformStyle: "preserve-3d"
                  }}
                  className={`w-[88%] max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[680px] xl:max-w-[760px] rounded-3xl border transition-colors duration-300 ${
                    isCenter
                      ? "border-white/20 bg-[#0c0f16]/95 backdrop-blur-2xl shadow-2xl shadow-black/85 cursor-default ring-1 ring-white/10"
                      : "border-white/10 bg-[#090b10]/80 backdrop-blur-md cursor-pointer hover:border-white/30 hover:brightness-110"
                  }`}
                >
                  {/* Browser Mockup Chrome Header */}
                  <div className="bg-[#131722] px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between rounded-t-3xl">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#090b0e] px-3 py-1 rounded-md text-[11px] font-mono text-zinc-300 border border-white/5 truncate max-w-[170px] sm:max-w-xs">
                        <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">https://{project.liveDomain}</span>
                      </div>
                    </div>

                    {/* Dual Mode Switcher for Center Card (Website vs Admin if applicable) */}
                    {isCenter && project.hasInternalSystem ? (
                      <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10 text-[10px] font-mono">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("website");
                          }}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                            activeTab === "website"
                              ? "bg-[#d4f933] text-black font-bold shadow-sm"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Eye className="w-3 h-3" />
                          <span>Live Site</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("admin");
                          }}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all ${
                            activeTab === "admin"
                              ? "bg-[#d4f933] text-black font-bold shadow-sm"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Database className="w-3 h-3" />
                          <span>Admin/CRM</span>
                        </button>
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline">
                        {project.category}
                      </span>
                    )}
                  </div>

                  {/* Card Body / Visual Viewport */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-black/60 group">
                    <AnimatePresence mode="wait">
                      {isCenter && activeTab === "admin" && project.hasInternalSystem ? (
                        <motion.div
                          key="admin-view"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="p-5 sm:p-7 bg-[#0c0e14] h-full flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <span className="text-xs sm:text-sm font-mono font-bold text-white flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#d4f933] animate-pulse" />
                              {project.internalSystemType}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">
                              Confidential Architecture
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-3 my-4">
                            <div className="bg-[#141822] p-3 rounded-xl border border-white/5 text-center">
                              <span className="text-[10px] font-mono text-zinc-400 block">Status</span>
                              <span className="text-xs sm:text-sm font-bold text-emerald-400">Operational</span>
                            </div>
                            <div className="bg-[#141822] p-3 rounded-xl border border-white/5 text-center">
                              <span className="text-[10px] font-mono text-zinc-400 block">Access</span>
                              <span className="text-xs sm:text-sm font-bold text-[#d4f933]">Role-Based</span>
                            </div>
                            <div className="bg-[#141822] p-3 rounded-xl border border-white/5 text-center">
                              <span className="text-[10px] font-mono text-zinc-400 block">Security</span>
                              <span className="text-xs sm:text-sm font-bold text-sky-400">Isolated</span>
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans line-clamp-3">
                            {project.internalSystemDescription}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="website-view"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="relative w-full h-full"
                        >
                          <Image
                            src={project.heroImage}
                            alt={`${project.title} live reference image`}
                            fill
                            priority={isCenter}
                            unoptimized
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f16] via-transparent to-transparent opacity-60" />

                          {/* Floating Badges */}
                          <div className="absolute top-3 right-3 flex items-center gap-1.5">
                            {project.hasInternalSystem && (
                              <span className="bg-[#090b0e]/90 backdrop-blur-md border border-[#d4f933]/30 text-[#d4f933] text-[9px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                                <ShieldCheck className="w-2.5 h-2.5" />
                                <span>+ {project.internalSystemType}</span>
                              </span>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Bottom Content & CTAs */}
                  <div className="p-4 sm:p-6 bg-[#0c0f16] rounded-b-3xl space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-zinc-400 uppercase">
                            {project.industry}
                          </span>
                          <span className="text-zinc-600">&bull;</span>
                          <span className="text-xs font-mono text-emerald-400">
                            Freelance Project
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                          <Link href={`/work/${project.slug}`}>
                            {project.title}
                          </Link>
                        </h3>
                      </div>

                      {/* Live Link Button */}
                      {project.liveUrl && isCenter && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#d4f933] text-black font-bold text-xs px-4 py-2 rounded-xl shadow-lg hover:bg-[#bce022] transition-colors"
                        >
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Footer Actions */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-zinc-300 bg-white/5 px-2.5 py-0.5 rounded border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#d4f933] transition-colors shrink-0"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Circular Project Navigation Track */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl px-4">
              {clientProjects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveIndex(i);
                    setActiveTab("website");
                  }}
                  className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    activeIndex === i
                      ? "bg-[#d4f933] text-black font-bold shadow-md shadow-[#d4f933]/25 scale-105"
                      : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <span className="text-[10px] opacity-75">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p.title.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            <span className="text-[11px] font-mono text-zinc-500">
              Drag left or right to roll cylinder &bull; Click adjacent cards &bull; Use &larr; &rarr; arrow keys
            </span>
          </div>
        </div>
      ) : (
        /* ------------------------------------------------------------- */
        /* ALTERNATIVE EDITORIAL GRID VIEW (When toggled) */
        /* ------------------------------------------------------------- */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {clientProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
