"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  priority?: boolean;
}

export default function ProjectCard({ project, featured = false, priority = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl border border-white/10 bg-[#0d1015]/90 backdrop-blur-md transition-all duration-500 hover:border-white/25 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between overflow-hidden shimmer-card ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Visual Reference Image Container with Browser Frame */}
      <div className="p-3 sm:p-4 pb-0">
        <div className="rounded-xl border border-white/10 bg-[#090b0e] overflow-hidden shadow-lg">
          {/* Browser Chrome Header */}
          <div className="bg-[#12161f] px-3.5 py-2 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80 group-hover:bg-[#ef4444] transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80 group-hover:bg-[#f59e0b] transition-colors" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80 group-hover:bg-[#10b981] transition-colors" />
            </div>

            {/* Live Domain Bar */}
            <div className="flex items-center gap-1.5 bg-[#090b0e] px-2.5 py-1 rounded text-[10px] font-mono text-zinc-400 border border-white/5 truncate max-w-[220px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="truncate">{project.liveDomain}</span>
            </div>

            {/* Classification Indicator */}
            <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-300 hidden sm:inline">
              {project.classification === "Freelance / Client Project" ? "Client Work" : "Architecture"}
            </span>
          </div>

          {/* Reference Image Viewport */}
          <Link href={`/work/${project.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-black/40">
            <Image
              src={project.heroImage}
              alt={`${project.title} live website reference visual`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              unoptimized
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            
            {/* Floating Internal System Pill if applicable */}
            {project.hasInternalSystem && (
              <div className="absolute bottom-3 left-3 bg-[#090b0e]/90 backdrop-blur-md border border-[#d4f933]/30 text-[#d4f933] text-[10px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-3 h-3" />
                <span>+ {project.internalSystemType}</span>
              </div>
            )}
          </Link>
        </div>
      </div>

      {/* Content & Action Bar */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Badges & Industry */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-mono uppercase bg-white/5 text-zinc-300 px-2.5 py-0.5 rounded-md border border-white/10">
              {project.industry}
            </span>
            <span className="text-[10px] font-mono text-zinc-300">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#d4f933] transition-colors">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          {/* Tagline */}
          <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
            {project.tagline}
          </p>

          {/* Quick Technology Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-zinc-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#d4f933] transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#d4f933] hover:underline"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-[10px] font-mono text-zinc-400 italic">
              Internal Architecture
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
