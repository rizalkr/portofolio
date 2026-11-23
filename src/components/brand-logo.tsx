import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
  showText?: boolean;
  className?: string;
};

const ICON_SIZES: Record<NonNullable<BrandLogoProps["size"]>, number> = {
  sm: 28,
  md: 36,
  lg: 48,
};

export function BrandLogo({
  size = "md",
  theme = "light",
  showText = false,
  className,
}: BrandLogoProps) {
  const uid = useId().replace(/:/g, "");
  const bgId = `rk-bg-${uid}`;
  const borderId = `rk-border-${uid}`;
  const indigoId = `rk-indigo-${uid}`;
  const px = ICON_SIZES[size];
  const isDark = theme === "dark";

  const bgStart = isDark ? "#141428" : "#FDFCF8";
  const bgEnd = isDark ? "#0A0A14" : "#EAE5DA";
  const borderStop1 = isDark
    ? { color: "#6366F1", opacity: "0.65" }
    : { color: "#4338CA", opacity: "0.42" };
  const borderStop2 = isDark
    ? { color: "#312E81", opacity: "0.45" }
    : { color: "#C8C0B0", opacity: "0.85" };
  const borderStop3 = isDark
    ? { color: "#1E1E38", opacity: "0.85" }
    : { color: "#B8AFA0", opacity: "0.95" };
  const indigoStart = isDark ? "#818CF8" : "#4F46E5";
  const indigoEnd = isDark ? "#6366F1" : "#3730A3";
  const statusPillFill = isDark ? "#6366F1" : "#4338CA";
  const glyphFill = isDark ? "#F8FAFC" : "#1C1A17";

  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200"
      >
        <defs>
          <linearGradient
            id={bgId}
            x1="16"
            y1="16"
            x2="496"
            y2="496"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={bgStart} />
            <stop offset="100%" stopColor={bgEnd} />
          </linearGradient>
          <linearGradient
            id={borderId}
            x1="20"
            y1="20"
            x2="492"
            y2="492"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor={borderStop1.color}
              stopOpacity={borderStop1.opacity}
            />
            <stop
              offset="50%"
              stopColor={borderStop2.color}
              stopOpacity={borderStop2.opacity}
            />
            <stop
              offset="100%"
              stopColor={borderStop3.color}
              stopOpacity={borderStop3.opacity}
            />
          </linearGradient>
          <linearGradient
            id={indigoId}
            x1="320"
            y1="236"
            x2="432"
            y2="432"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={indigoStart} />
            <stop offset="100%" stopColor={indigoEnd} />
          </linearGradient>
        </defs>

        <rect x="16" y="16" width="480" height="480" rx="108" fill={`url(#${bgId})`} />
        <rect
          x="20"
          y="20"
          width="472"
          height="472"
          rx="104"
          stroke={`url(#${borderId})`}
          strokeWidth={isDark ? "8" : "12"}
        />

        <rect x="92" y="84" width="56" height="14" rx="7" fill={statusPillFill} />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M92 128H208L244 164V240L208 276H140V384H92V128ZM140 172V232H196V172H140Z"
          fill={glyphFill}
        />
        <path d="M164 264H212L248 384H200L164 264Z" fill={glyphFill} />

        <path
          d="M316 236H356L424 384H374L316 264V236Z"
          fill={`url(#${indigoId})`}
        />

        <rect x="268" y="128" width="48" height="256" fill={glyphFill} />
        <path d="M316 218L374 128H424L344 252H316V218Z" fill={glyphFill} />

        <rect x="368" y="412" width="64" height="20" rx="6" fill={`url(#${indigoId})`} />
      </svg>

      {showText && (
        <span
          className={cn(
            "font-mono text-xs font-medium tracking-wider transition-colors",
            isDark ? "text-zinc-200" : "text-[#1C1A17]"
          )}
        >
          <span className={isDark ? "text-indigo-400" : "text-[#4338CA]"}>~/</span>
          <span>rizalkr</span>
          <span className={cn("animate-pulse", isDark ? "text-indigo-400" : "text-[#4338CA]")}>
            _
          </span>
        </span>
      )}
    </span>
  );
}
