"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/projects";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="space-y-2 border-b border-[#DFD9CE] pb-5 dark:border-zinc-800/80">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-[#1C1A17] dark:text-zinc-100">
            {project.title}
          </h1>
          <Badge
            variant="outline"
            className="border-[#DDD7CA] bg-[#EFECE4] font-mono text-[10px] uppercase tracking-widest text-[#57534A] dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-400"
          >
            {project.status}
          </Badge>
        </div>
        <p className="font-mono text-xs text-[#7A7468] dark:text-zinc-400">
          {project.role} · {project.year}
        </p>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#7A7468] dark:text-zinc-500">
          Overview
        </h2>
        <p className="text-sm leading-relaxed text-[#3F3B34] dark:text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Metrics */}
      <div className="space-y-2">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#7A7468] dark:text-zinc-500">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-[#E2DDD0] bg-[#EFECE4]/75 p-3 shadow-[0_1px_1px_rgba(28,25,23,0.02)_inset] dark:border-zinc-800 dark:bg-zinc-950/50 dark:shadow-none"
            >
              <p className="font-mono text-base font-semibold tabular-nums text-[#1C1A17] dark:text-zinc-100">
                {metric.value}
              </p>
              <p className="text-[11px] text-[#7A7468] dark:text-zinc-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#7A7468] dark:text-zinc-500">
          Stack
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="rounded-md border-[#DDD7CA] bg-[#EFECE4]/90 font-mono text-[11px] text-[#4A463E] dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300"
            >
              {t}
            </Badge>
          ))}
        </div>
      </div>

      {/* Engineering Series & Links */}
      {(project.blogLink || project.repoUrl) && (
        <div className="space-y-2 border-t border-[#DFD9CE] pt-5 dark:border-zinc-800/80">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#7A7468] dark:text-zinc-500">
            Resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.blogLink && (
              <Link
                href={project.blogLink.href}
                className="inline-flex items-center gap-2 rounded-lg border border-indigo-600/25 bg-indigo-500/[0.08] px-4 py-2.5 font-mono text-xs text-[#4338CA] transition-colors hover:border-indigo-600/45 hover:bg-indigo-500/[0.14] dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:border-indigo-400/60 dark:hover:bg-indigo-500/15 dark:hover:text-indigo-200"
              >
                <span>{project.blogLink.label}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#DAD3C6] bg-[#EFECE4]/80 px-4 py-2.5 font-mono text-xs text-[#3F3B34] transition-colors hover:border-[#C8C0B0] hover:bg-[#FDFCF9] hover:text-[#1C1A17] dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
              >
                <span>GitHub Repository</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-75" />
              </a>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
