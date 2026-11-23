"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, FileText, Mail } from "lucide-react";
import {
  PageAtmosphere,
  SiteFooter,
  SiteNavbar,
  usePortfolioTheme,
} from "@/components/theme-toggle";
import type { ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";

export interface PortfolioProjectItem {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  role: string;
  year: string;
  status: "production" | "in-progress" | "archived";
  metrics: { label: string; value: string }[];
  tech: string[];
  repoUrl?: string;
  blogLink?: { label: string; href: string };
}

export interface PortfolioBlogItem {
  slug: string;
  title: string;
  excerpt: string;
  formattedDate: string;
  series?: string;
  part?: number;
}

interface PortfolioMonolithProps {
  projects: PortfolioProjectItem[];
  posts: PortfolioBlogItem[];
  totalPosts: number;
}

type CategoryFilter = "all" | ProjectCategory;

const CORE_STACK = [
  "Python",
  "TypeScript",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "Drizzle ORM",
  "Docker",
];

const SPRING_TAUT = {
  type: "spring" as const,
  stiffness: 400,
  damping: 32,
};

export function PortfolioMonolith({
  projects,
  posts,
  totalPosts,
}: PortfolioMonolithProps) {
  const theme = usePortfolioTheme();
  const isDark = theme === "dark";

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  const backendCount = projects.filter((p) => p.category === "web-backend").length;
  const dataCount = projects.filter((p) => p.category === "data-analytics").length;

  const tabs: { id: CategoryFilter; label: string; count: number }[] = [
    { id: "all", label: "All", count: projects.length },
    { id: "web-backend", label: "Backend & AI", count: backendCount },
    { id: "data-analytics", label: "Data Analytics", count: dataCount },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div
      className={cn(
        "relative min-h-screen overflow-x-clip transition-colors duration-300",
        isDark
          ? "bg-zinc-950 text-zinc-100"
          : "bg-[#F4F1EA] text-[#1C1A17] selection:bg-indigo-600/15 selection:text-indigo-900"
      )}
    >
      <PageAtmosphere isDark={isDark} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-0 pb-24 sm:px-8">
        {/* Top Navigation Bar */}
        <SiteNavbar isDark={isDark} />

        {/* 12-Column Desktop Split: Sticky Left Profile + Right Content Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Sticky Profile Rail */}
          <aside className="lg:col-span-4 lg:sticky lg:top-20">
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "space-y-6 rounded-2xl border p-6 transition-colors duration-300",
                isDark
                  ? "border-zinc-800/80 bg-zinc-900/40"
                  : "border-[#DFD9CE] bg-[#FAF8F3]/95 shadow-[0_1px_3px_rgba(28,25,23,0.04),0_1px_0_rgba(255,255,255,0.85)_inset]"
              )}
            >
              {/* Avatar + Name + Tagline */}
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "group relative h-15 w-15 shrink-0 overflow-hidden rounded-xl border transition-all duration-300",
                    isDark
                      ? "border-zinc-800 bg-zinc-900 ring-1 ring-white/5"
                      : "border-[#DAD3C6] bg-[#FAF8F3] shadow-[0_2px_6px_rgba(28,25,23,0.06)]"
                  )}
                >
                  <Image
                    src="/profile.jpeg"
                    alt="Rizal Kurnia"
                    width={60}
                    height={60}
                    priority
                    className={cn(
                      "h-full w-full object-cover transition-all duration-500",
                      isDark
                        ? "grayscale contrast-110 brightness-95 group-hover:grayscale-0"
                        : ""
                    )}
                  />
                </div>

                <div className="min-w-0 space-y-1">
                  <h1 className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
                    Rizal Kurnia
                  </h1>
                  <p
                    className={cn(
                      "font-mono text-xs font-medium",
                      isDark ? "text-indigo-400" : "text-[#4338CA]"
                    )}
                  >
                    &gt; Backend, AI Systems &amp; Data Engineer
                  </p>
                </div>
              </div>

              {/* Availability Pill */}
              <div
                className={cn(
                  "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px]",
                  isDark
                    ? "border-zinc-800 bg-zinc-950/60 text-zinc-300"
                    : "border-[#DAD3C6] bg-[#EFECE4]/90 text-[#3F3B34] shadow-[0_1px_1px_rgba(28,25,23,0.02)_inset]"
                )}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Open to Backend, AI &amp; Data Roles</span>
              </div>

              {/* Concise Engineering Bio */}
              <p
                className={cn(
                  "text-sm leading-relaxed",
                  isDark ? "text-zinc-400" : "text-[#57534A]"
                )}
              >
                Building backend services, semantic search pipelines, and statistical risk
                engines in Python and TypeScript. I ship systems that cut token and memory
                overhead while keeping latency and recall measurable.
              </p>

              {/* 3-Column Portfolio Telemetry Strip */}
              <div className="grid grid-cols-3 gap-2">
                <div
                  className={cn(
                    "rounded-lg border px-2.5 py-2",
                    isDark
                      ? "border-zinc-800/80 bg-zinc-950/50"
                      : "border-[#E2DDD0] bg-[#EFECE4]/75 shadow-[0_1px_1px_rgba(28,25,23,0.02)_inset]"
                  )}
                >
                  <p
                    className={cn(
                      "font-mono text-sm font-semibold tabular-nums",
                      isDark ? "text-zinc-100" : "text-[#1C1A17]"
                    )}
                  >
                    {projects.length}
                  </p>
                  <p
                    className={cn(
                      "truncate font-mono text-[10px]",
                      isDark ? "text-zinc-500" : "text-[#7A7468]"
                    )}
                  >
                    Case Studies
                  </p>
                </div>
                <div
                  className={cn(
                    "rounded-lg border px-2.5 py-2",
                    isDark
                      ? "border-zinc-800/80 bg-zinc-950/50"
                      : "border-[#E2DDD0] bg-[#EFECE4]/75 shadow-[0_1px_1px_rgba(28,25,23,0.02)_inset]"
                  )}
                >
                  <p
                    className={cn(
                      "font-mono text-sm font-semibold tabular-nums",
                      isDark ? "text-zinc-100" : "text-[#1C1A17]"
                    )}
                  >
                    {totalPosts}
                  </p>
                  <p
                    className={cn(
                      "truncate font-mono text-[10px]",
                      isDark ? "text-zinc-500" : "text-[#7A7468]"
                    )}
                  >
                    Articles
                  </p>
                </div>
                <div
                  className={cn(
                    "rounded-lg border px-2.5 py-2",
                    isDark
                      ? "border-zinc-800/80 bg-zinc-950/50"
                      : "border-[#E2DDD0] bg-[#EFECE4]/75 shadow-[0_1px_1px_rgba(28,25,23,0.02)_inset]"
                  )}
                >
                  <p
                    className={cn(
                      "font-mono text-sm font-semibold tabular-nums",
                      isDark ? "text-zinc-100" : "text-[#1C1A17]"
                    )}
                  >
                    100%
                  </p>
                  <p
                    className={cn(
                      "truncate font-mono text-[10px]",
                      isDark ? "text-zinc-500" : "text-[#7A7468]"
                    )}
                  >
                    Open Source
                  </p>
                </div>
              </div>

              {/* Core Stack */}
              <div className="space-y-2">
                <p
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-widest",
                    isDark ? "text-zinc-500" : "text-[#7A7468]"
                  )}
                >
                  Core Stack
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {CORE_STACK.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "rounded-md border px-2 py-0.5 font-mono text-[11px] transition-colors",
                        isDark
                          ? "border-zinc-800/80 bg-zinc-950/50 text-zinc-400"
                          : "border-[#DDD7CA] bg-[#EFECE4]/90 text-[#4A463E]"
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tactile Action Buttons */}
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                <a
                  href="mailto:rizalkurnia.me@gmail.com"
                  className={cn(
                    "inline-flex items-center justify-center gap-1.5 rounded-lg border px-2.5 py-2 transition-all active:scale-[0.98]",
                    isDark
                      ? "border-indigo-500/40 bg-indigo-500/15 text-indigo-300 hover:bg-indigo-500/25"
                      : "border-indigo-600/30 bg-indigo-600 text-[#FDFCF9] shadow-[0_1px_2px_rgba(67,56,202,0.2)] hover:bg-[#4338CA]"
                  )}
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email Me</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-1.5 rounded-lg border px-2.5 py-2 transition-all active:scale-[0.98]",
                    isDark
                      ? "border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100"
                      : "border-[#DAD3C6] bg-[#EFECE4]/80 text-[#3F3B34] hover:border-[#C8C0B0] hover:bg-[#FDFCF9] hover:text-[#1C1A17]"
                  )}
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Resume</span>
                </a>
                <a
                  href="https://github.com/rizalkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-1 rounded-lg border px-2.5 py-2 transition-all active:scale-[0.98]",
                    isDark
                      ? "border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100"
                      : "border-[#DAD3C6] bg-[#EFECE4]/80 text-[#3F3B34] hover:border-[#C8C0B0] hover:bg-[#FDFCF9] hover:text-[#1C1A17]"
                  )}
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 opacity-70" />
                </a>
              </div>

              {/* Desktop Section Jump Navigation */}
              <div
                className={cn(
                  "hidden border-t pt-4 font-mono text-xs lg:flex lg:flex-col lg:gap-1.5",
                  isDark ? "border-zinc-800/80" : "border-[#DFD9CE]"
                )}
              >
                <a
                  href="#projects"
                  className={cn(
                    "flex items-center justify-between rounded-lg px-2.5 py-1.5 transition-colors",
                    isDark
                      ? "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                      : "text-[#57534A] hover:bg-[#EFECE4] hover:text-[#1C1A17]"
                  )}
                >
                  <span>01 // Selected Work</span>
                  <span
                    className={cn(
                      "text-[11px] tabular-nums",
                      isDark ? "text-indigo-400" : "text-[#4338CA]"
                    )}
                  >
                    {projects.length}
                  </span>
                </a>
                <a
                  href="#writing"
                  className={cn(
                    "flex items-center justify-between rounded-lg px-2.5 py-1.5 transition-colors",
                    isDark
                      ? "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                      : "text-[#57534A] hover:bg-[#EFECE4] hover:text-[#1C1A17]"
                  )}
                >
                  <span>02 // Engineering Writing</span>
                  <span
                    className={cn(
                      "text-[11px] tabular-nums",
                      isDark ? "text-indigo-400" : "text-[#4338CA]"
                    )}
                  >
                    {totalPosts}
                  </span>
                </a>
              </div>
            </motion.section>
          </aside>

          {/* Right Scrollable Content Column */}
          <main className="lg:col-span-8 space-y-16">
            {/* Selected Projects Section */}
            <section id="projects" className="scroll-mt-20 space-y-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2
                    className={cn(
                      "font-mono text-xs uppercase tracking-widest",
                      isDark ? "text-zinc-500" : "text-[#7A7468]"
                    )}
                  >
                    01 // Selected Work
                  </h2>
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      isDark ? "text-zinc-400" : "text-[#57534A]"
                    )}
                  >
                    Select any project to inspect its 4-slide architecture, trade-offs, and production metrics.
                  </p>
                </div>

                {/* Spring-Animated Category Switcher */}
                <div
                  role="tablist"
                  aria-label="Filter projects by category"
                  className={cn(
                    "inline-flex w-fit items-center rounded-lg border p-1",
                    isDark
                      ? "border-zinc-800/80 bg-zinc-900/50"
                      : "border-[#DDD7CA] bg-[#EAE5DB]/90 shadow-[0_1px_2px_rgba(28,25,23,0.04)_inset]"
                  )}
                >
                  {tabs.map((tab) => {
                    const isActive = activeCategory === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveCategory(tab.id)}
                        className={cn(
                          "relative rounded-md px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                          isActive
                            ? isDark
                              ? "text-zinc-100"
                              : "font-medium text-[#1C1A17]"
                            : isDark
                              ? "text-zinc-400 hover:text-zinc-200"
                              : "text-[#6B655B] hover:text-[#1C1A17]"
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="category-pill"
                            transition={SPRING_TAUT}
                            className={cn(
                              "absolute inset-0 rounded-md border",
                              isDark
                                ? "border-zinc-700/80 bg-zinc-800/90 shadow-xs"
                                : "border-[#D5CFC2] bg-[#FAF8F3] shadow-[0_1px_3px_rgba(28,25,23,0.07),0_1px_0_rgba(255,255,255,0.9)_inset]"
                            )}
                          />
                        )}
                        <span className="relative z-10 inline-flex items-center gap-1.5">
                          <span>{tab.label}</span>
                          <span
                            className={cn(
                              "text-[10px] tabular-nums",
                              isActive
                                ? isDark
                                  ? "text-indigo-400"
                                  : "text-[#4338CA]"
                                : "opacity-60"
                            )}
                          >
                            {tab.count}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scannable Project List with Focus-on-Hover Dimming */}
              <div className="grid grid-cols-1 gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, index) => {
                    const isDimmed =
                      hoveredProject !== null && hoveredProject !== project.slug;
                    const isFocused = hoveredProject === project.slug;

                    return (
                      <motion.div
                        key={project.slug}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{
                          opacity: isDimmed ? 0.45 : 1,
                          scale: isDimmed ? 0.995 : 1,
                          y: 0,
                        }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{
                          opacity: { duration: 0.16 },
                          scale: { duration: 0.16 },
                          y: {
                            duration: 0.28,
                            delay: Math.min(index * 0.04, 0.2),
                            ease: [0.22, 1, 0.36, 1],
                          },
                          layout: SPRING_TAUT,
                        }}
                        onMouseEnter={() => setHoveredProject(project.slug)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <Link
                          href={`/projects/${project.slug}`}
                          className={cn(
                            "group block rounded-xl border p-5 transition-colors duration-150 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                            isDark
                              ? isFocused
                                ? "border-indigo-500/45 bg-zinc-900/75"
                                : "border-zinc-800/80 bg-zinc-900/35 hover:border-zinc-700"
                              : isFocused
                                ? "border-indigo-600/45 bg-[#FDFCF9] shadow-[0_8px_24px_-8px_rgba(67,56,202,0.12),0_1px_0_rgba(255,255,255,0.95)_inset]"
                                : "border-[#DFD9CE] bg-[#FAF8F3]/95 shadow-[0_1px_3px_rgba(28,25,23,0.04),0_1px_0_rgba(255,255,255,0.8)_inset] hover:border-[#C8C0B0]"
                          )}
                        >
                          <div className="space-y-4">
                            {/* Header row */}
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3
                                    className={cn(
                                      "font-heading text-base font-semibold tracking-tight transition-colors",
                                      isDark
                                        ? "text-zinc-100 group-hover:text-indigo-300"
                                        : "text-[#1C1A17] group-hover:text-[#4338CA]"
                                    )}
                                  >
                                    {project.title}
                                  </h3>
                                  <span
                                    className={cn(
                                      "rounded border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                                      isDark
                                        ? "border-zinc-800 bg-zinc-950/60 text-zinc-400"
                                        : "border-[#DDD7CA] bg-[#EFECE4] text-[#57534A]"
                                    )}
                                  >
                                    {project.year}
                                  </span>
                                </div>
                                <p
                                  className={cn(
                                    "font-mono text-[11px]",
                                    isDark ? "text-zinc-500" : "text-[#7A7468]"
                                  )}
                                >
                                  {project.role}
                                </p>
                              </div>

                              <span
                                className={cn(
                                  "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-transform duration-150 group-hover:translate-x-0.5",
                                  isDark
                                    ? "border-zinc-800 bg-zinc-950/50 text-zinc-400 group-hover:border-indigo-500/40 group-hover:text-indigo-300"
                                    : "border-[#DDD7CA] bg-[#EFECE4]/80 text-[#57534A] group-hover:border-indigo-600/40 group-hover:bg-indigo-50/70 group-hover:text-[#4338CA]"
                                )}
                              >
                                <ArrowRight className="h-3.5 w-3.5" />
                              </span>
                            </div>

                            {/* Summary */}
                            <p
                              className={cn(
                                "text-sm leading-relaxed",
                                isDark ? "text-zinc-400" : "text-[#57534A]"
                              )}
                            >
                              {project.summary}
                            </p>

                            {/* 3-Column Metrics Strip */}
                            <div className="grid grid-cols-3 gap-2.5">
                              {project.metrics.slice(0, 3).map((metric) => (
                                <div
                                  key={metric.label}
                                  className={cn(
                                    "rounded-lg border px-3 py-2",
                                    isDark
                                      ? "border-zinc-800/80 bg-zinc-950/50"
                                      : "border-[#E2DDD0] bg-[#EFECE4]/75 shadow-[0_1px_1px_rgba(28,25,23,0.02)_inset]"
                                  )}
                                >
                                  <p
                                    className={cn(
                                      "font-mono text-sm font-semibold tabular-nums",
                                      isDark ? "text-zinc-100" : "text-[#1C1A17]"
                                    )}
                                  >
                                    {metric.value}
                                  </p>
                                  <p
                                    className={cn(
                                      "truncate text-[11px]",
                                      isDark ? "text-zinc-500" : "text-[#7A7468]"
                                    )}
                                  >
                                    {metric.label}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Tech badges */}
                            <div className="flex flex-wrap items-center gap-1.5">
                              {project.tech.slice(0, 6).map((item) => (
                                <span
                                  key={item}
                                  className={cn(
                                    "rounded border px-2 py-0.5 font-mono text-[10px]",
                                    isDark
                                      ? "border-zinc-800/80 bg-zinc-950/40 text-zinc-400"
                                      : "border-[#DDD7CA] bg-[#EFECE4]/90 text-[#4A463E]"
                                  )}
                                >
                                  {item}
                                </span>
                              ))}
                              {project.tech.length > 6 && (
                                <span
                                  className={cn(
                                    "px-1 font-mono text-[10px]",
                                    isDark ? "text-zinc-500" : "text-[#7A7468]"
                                  )}
                                >
                                  +{project.tech.length - 6}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </section>

            {/* Engineering Writing Section */}
            <section id="writing" className="scroll-mt-20 space-y-6">
              <div
                className={cn(
                  "flex items-end justify-between gap-4 border-b pb-3",
                  isDark ? "border-zinc-800/80" : "border-[#DFD9CE]"
                )}
              >
                <div>
                  <h2
                    className={cn(
                      "font-mono text-xs uppercase tracking-widest",
                      isDark ? "text-zinc-500" : "text-[#7A7468]"
                    )}
                  >
                    02 // Engineering Writing
                  </h2>
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      isDark ? "text-zinc-400" : "text-[#57534A]"
                    )}
                  >
                    Architecture post-mortems, QLoRA benchmark failures, and token-budget engineering.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1 font-mono text-xs transition-colors",
                    isDark
                      ? "text-indigo-400 hover:text-indigo-300"
                      : "text-[#4338CA] hover:text-indigo-600"
                  )}
                >
                  <span>Browse all {totalPosts} articles</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
                {posts.map((post) => {
                  const isDimmed = hoveredPost !== null && hoveredPost !== post.slug;
                  const isFocused = hoveredPost === post.slug;

                  return (
                    <motion.div
                      key={post.slug}
                      animate={{
                        opacity: isDimmed ? 0.45 : 1,
                        scale: isDimmed ? 0.995 : 1,
                      }}
                      transition={{ duration: 0.16 }}
                      onMouseEnter={() => setHoveredPost(post.slug)}
                      onMouseLeave={() => setHoveredPost(null)}
                      className="h-full"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className={cn(
                          "group flex h-full flex-col justify-between rounded-xl border p-4 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                          isDark
                            ? isFocused
                              ? "border-indigo-500/45 bg-zinc-900/70"
                              : "border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700"
                            : isFocused
                              ? "border-indigo-600/45 bg-[#FDFCF9] shadow-[0_8px_24px_-8px_rgba(67,56,202,0.12),0_1px_0_rgba(255,255,255,0.95)_inset]"
                              : "border-[#DFD9CE] bg-[#FAF8F3]/95 shadow-[0_1px_3px_rgba(28,25,23,0.04),0_1px_0_rgba(255,255,255,0.8)_inset] hover:border-[#C8C0B0]"
                        )}
                      >
                        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                          {post.series ? (
                            <span
                              className={cn(
                                "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px]",
                                isDark
                                  ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                                  : "border-indigo-600/20 bg-indigo-500/[0.07] text-[#4338CA]"
                              )}
                            >
                              <span>{post.series}</span>
                              {typeof post.part === "number" && (
                                <>
                                  <span aria-hidden className="opacity-50">
                                    ·
                                  </span>
                                  <span>Part {post.part}</span>
                                </>
                              )}
                            </span>
                          ) : (
                            <span />
                          )}

                          {post.formattedDate && (
                            <span
                              className={cn(
                                "font-mono text-xs tabular-nums",
                                isDark ? "text-zinc-500" : "text-[#7A7468]"
                              )}
                            >
                              {post.formattedDate}
                            </span>
                          )}
                        </div>

                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1.5">
                            <h3
                              className={cn(
                                "font-heading text-base font-semibold tracking-tight transition-colors",
                                isDark
                                  ? "text-zinc-100 group-hover:text-indigo-300"
                                  : "text-[#1C1A17] group-hover:text-[#4338CA]"
                              )}
                            >
                              {post.title}
                            </h3>
                            {post.excerpt && (
                              <p
                                className={cn(
                                  "line-clamp-2 text-sm leading-relaxed",
                                  isDark ? "text-zinc-400" : "text-[#57534A]"
                                )}
                              >
                                {post.excerpt}
                              </p>
                            )}
                          </div>

                          <ArrowRight
                            className={cn(
                              "mt-1 h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5",
                              isDark
                                ? "text-zinc-500 group-hover:text-indigo-400"
                                : "text-[#7A7468] group-hover:text-[#4338CA]"
                            )}
                          />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </main>
        </div>

        <SiteFooter isDark={isDark} />
      </div>
    </div>
  );
}
