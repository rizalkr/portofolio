import type { ProjectOrigin, ProjectOriginType } from "@/lib/projects";
import { formatProjectOrigin } from "@/lib/projects";
import { cn } from "@/lib/utils";

type OriginBadgeVariant = "compact" | "detail" | "slide";

const ORIGIN_TONES: Record<ProjectOriginType, string> = {
  hackathon:
    "border-indigo-600/20 bg-indigo-500/[0.07] text-[#4338CA] dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300",
  "open-source":
    "border-emerald-700/20 bg-emerald-600/[0.07] text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300",
  research:
    "border-sky-700/20 bg-sky-600/[0.07] text-sky-800 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300",
  product:
    "border-amber-700/20 bg-amber-600/[0.08] text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300",
  "case-study":
    "border-[#D5CFC2] bg-[#EAE5DB]/85 text-[#57534A] dark:border-zinc-700/80 dark:bg-zinc-800/70 dark:text-zinc-300",
};

const ORIGIN_VARIANTS: Record<OriginBadgeVariant, string> = {
  compact:
    "inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
  detail:
    "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest",
  slide:
    "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium",
};

export function ProjectOriginBadge({
  origin,
  variant = "compact",
  className,
}: {
  origin: ProjectOrigin;
  variant?: OriginBadgeVariant;
  className?: string;
}) {
  return (
    <span className={cn(ORIGIN_VARIANTS[variant], ORIGIN_TONES[origin.type], className)}>
      {formatProjectOrigin(origin)}
    </span>
  );
}
