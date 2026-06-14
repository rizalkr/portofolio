"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        id={`project-card-${project.slug}`}
        className="group block rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-900"
      >
        <div className="space-y-3">
          {/* Title row */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-mono text-base font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <Badge
              variant="outline"
              className="shrink-0 border-zinc-700 text-zinc-500 font-mono text-[10px] uppercase tracking-widest"
            >
              {project.year}
            </Badge>
          </div>

          {/* Summary */}
          <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
            {project.summary}
          </p>

          {/* Metrics row */}
          <div className="flex items-center gap-4 pt-1">
            {project.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="flex items-baseline gap-1.5">
                <span className="font-mono text-sm font-medium text-zinc-200">
                  {metric.value}
                </span>
                <span className="text-[11px] text-zinc-600">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1 pt-1">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded border border-zinc-800/50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="rounded px-1.5 py-0.5 font-mono text-[10px] text-zinc-600">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
