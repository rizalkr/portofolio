"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/projects";
import { motion } from "framer-motion";

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
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h2 className="font-mono text-xl font-semibold tracking-tight text-zinc-100">
            {project.title}
          </h2>
          <Badge
            variant="outline"
            className="border-zinc-700 text-zinc-400 font-mono text-[10px] uppercase tracking-widest"
          >
            {project.status}
          </Badge>
        </div>
        <p className="text-sm text-zinc-400">
          {project.role} · {project.year}
        </p>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Overview
        </h3>
        <p className="text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Metrics */}
      <div className="space-y-2">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Key Metrics
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3"
            >
              <p className="font-mono text-lg font-semibold text-zinc-100">
                {metric.value}
              </p>
              <p className="text-[11px] text-zinc-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-2">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Stack
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="border-zinc-800 bg-zinc-900/50 text-zinc-300 font-mono text-[11px]"
            >
              {t}
            </Badge>
          ))}
        </div>
      </div>

      {/* Engineering Series & Links */}
      {(project.blogLink || project.repoUrl) && (
        <div className="space-y-2 border-t border-zinc-800/80 pt-5">
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Resources
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.blogLink && (
              <Link
                href={project.blogLink.href}
                className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2.5 font-mono text-xs text-indigo-300 transition-colors hover:border-indigo-400/60 hover:bg-indigo-500/15 hover:text-indigo-200"
              >
                <span>{project.blogLink.label}</span>
                <span aria-hidden>→</span>
              </Link>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/60 px-4 py-2.5 font-mono text-xs text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
              >
                <span>GitHub Repository</span>
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
