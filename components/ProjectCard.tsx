import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import ProjectMockup from "./ProjectMockup";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  priority?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`group rounded-2xl border border-white/10 bg-[#0f1217] transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between overflow-hidden ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Visual Component Preview */}
      <div className="p-4 sm:p-5 pb-0 bg-gradient-to-b from-white/[0.03] to-transparent">
        <ProjectMockup slug={project.slug} />
      </div>

      {/* Content & Metadata */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div>
          {/* Top category & classification badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] font-mono uppercase bg-white/5 text-zinc-300 px-2 py-0.5 rounded border border-white/10">
              {project.industry}
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                project.classification === "Freelance / Client Project"
                  ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                  : "bg-amber-500/10 text-amber-300 border-amber-500/20"
              }`}
            >
              {project.classification}
            </span>
            {project.hasInternalSystem && (
              <span className="text-[10px] font-mono bg-[#d4f933]/10 text-[#d4f933] px-2 py-0.5 rounded border border-[#d4f933]/20">
                + {project.internalSystemType}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#d4f933] transition-colors">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs font-mono text-zinc-400 mt-1">
            {project.tagline}
          </p>

          {/* Short Description */}
          <p className="text-sm text-zinc-300 mt-3 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key capability pills */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
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
              className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-[10px] font-mono text-zinc-400 italic">
              Private Architecture
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
