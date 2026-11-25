import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS, getProjectBySlug, getAllProjects } from "@/data/projects";
import CaseStudyHero from "@/components/CaseStudyHero";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  ArrowRight
} from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.seoTitle,
    description: project.metaDescription,
    openGraph: {
      title: project.seoTitle,
      description: project.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.metaDescription,
    },
  };
}

export default async function ProjectCaseStudyPage(
  props: PageProps<"/work/[slug]">
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const relatedProjects = allProjects
    .filter((p) => p.slug !== project.slug && p.classification === project.classification)
    .slice(0, 2);

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-8 border-b border-white/10 pb-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors p-1 -ml-1 rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Classification:</span>
          <span className="text-emerald-400 font-semibold">{project.classification}</span>
        </div>
      </div>

      {/* Visual Header Block */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono uppercase bg-white/5 text-zinc-300 px-3 py-1 rounded-full border border-white/10">
            {project.industry}
          </span>
          {project.hasInternalSystem && (
            <span className="text-xs font-mono bg-[#d4f933]/15 text-[#d4f933] px-3 py-1 rounded-full border border-[#d4f933]/30 font-semibold">
              Includes {project.internalSystemType}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#d4f933] font-medium leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Quick Action Bar */}
        <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4f933] text-[#090a0c] font-semibold text-xs hover:bg-[#c4eb22] transition-colors shadow-lg shadow-[#d4f933]/20"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white font-medium text-xs hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            <span>Discuss Similar Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>
        </div>
      </div>

      {/* Hero Visual Reference Mockup */}
      <div className="mb-14">
        <CaseStudyHero project={project} />
      </div>

      {/* Compact Specifications Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl bg-[#0d0f14] border border-white/10 mb-14 text-xs font-mono">
        <div className="p-3 rounded-xl bg-[#12151d] border border-white/5">
          <span className="text-zinc-500 text-[10px] uppercase block mb-1">Category</span>
          <span className="font-semibold text-white">{project.category}</span>
        </div>
        <div className="p-3 rounded-xl bg-[#12151d] border border-white/5">
          <span className="text-zinc-500 text-[10px] uppercase block mb-1">Industry</span>
          <span className="font-semibold text-white">{project.industry}</span>
        </div>
        <div className="p-3 rounded-xl bg-[#12151d] border border-white/5">
          <span className="text-zinc-500 text-[10px] uppercase block mb-1">Engineering Scope</span>
          <span className="font-semibold text-emerald-400">Full-Stack Freelance</span>
        </div>
        <div className="p-3 rounded-xl bg-[#12151d] border border-white/5">
          <span className="text-zinc-500 text-[10px] uppercase block mb-1">Live Status</span>
          <span className="font-semibold text-[#d4f933]">
            {project.liveUrl ? "Verified Production" : "Technical Scope"}
          </span>
        </div>
      </div>

      {/* Visual Challenge vs Solution Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-[#181114] to-[#0f0b0d] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-red-400 bg-red-500/10 px-2.5 py-1 rounded border border-red-500/20 mb-3">
              <span>The Business Challenge</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Operational Friction
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.businessChallenge}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#d4f933]/20 bg-gradient-to-br from-[#151c14] to-[#0e130d] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#d4f933] bg-[#d4f933]/10 px-2.5 py-1 rounded border border-[#d4f933]/20 mb-3">
              <span>The Architectural Solution</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Engineered Outcome
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Key Feature Cards Grid */}
      <section className="mb-14">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
          System Features &amp; Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#0f1217] border border-white/5 text-xs text-zinc-200"
            >
              <CheckCircle2 className="w-4 h-4 text-[#d4f933] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Internal System Highlight (if applicable) */}
      {project.hasInternalSystem && project.internalSystemDescription && (
        <section className="rounded-3xl border border-[#d4f933]/20 bg-gradient-to-b from-[#121620] to-[#0d0f14] p-6 sm:p-10 mb-14 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#d4f933]" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {project.internalSystemType}
              </h2>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
              Private Back-Office System
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
            {project.internalSystemDescription}
          </p>

          {project.internalSystemHighlights && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              {project.internalSystemHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-xl bg-[#090b10] border border-white/5 text-xs text-zinc-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4f933]" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            <span>Confidentiality Notice: Real credentials and private customer records are protected.</span>
          </div>
        </section>
      )}

      {/* Verified Stack Strip */}
      <section className="mb-14 p-6 rounded-2xl bg-[#0f1217] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
            Verified Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-[#151922] border border-white/5 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#d4f933] hover:underline shrink-0"
          >
            <span>Open Public Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </section>

      {/* Related Projects Gallery */}
      {relatedProjects.length > 0 && (
        <div className="mt-16 pt-10 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">
            Explore Related Client Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                href={`/work/${rel.slug}`}
                className="p-5 rounded-2xl border border-white/10 bg-[#0f1217] hover:border-white/20 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
                    <span>{rel.industry}</span>
                    <span className="text-[#d4f933]">Case Study</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#d4f933] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#d4f933]">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12151b] via-[#161a22] to-[#12151b] border border-white/10 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Interested in building a solution like {project.title}?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mb-6">
          Let&apos;s evaluate your requirements, design the technical architecture, and plan the development milestones.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d4f933] text-[#090a0c] font-semibold text-xs sm:text-sm hover:bg-[#c4eb22] transition-colors shadow-lg shadow-[#d4f933]/15"
        >
          <span>Discuss Your Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
