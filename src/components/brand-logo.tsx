import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
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
  showText = false,
  className,
}: BrandLogoProps) {
  const uid = useId().replace(/:/g, "");
  const bgId = `rk-bg-${uid}`;
  const borderId = `rk-border-${uid}`;
  const indigoId = `rk-indigo-${uid}`;
  const px = ICON_SIZES[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
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
            <stop offset="0%" stopColor="#141428" />
            <stop offset="100%" stopColor="#0A0A14" />
          </linearGradient>
          <linearGradient
            id={borderId}
            x1="20"
            y1="20"
            x2="492"
            y2="492"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#312E81" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1E1E38" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient
            id={indigoId}
            x1="320"
            y1="236"
            x2="432"
            y2="432"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#6366F1" />
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
          strokeWidth="8"
        />

        <rect x="92" y="84" width="56" height="14" rx="7" fill="#6366F1" />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M92 128H208L244 164V240L208 276H140V384H92V128ZM140 172V232H196V172H140Z"
          fill="#F8FAFC"
        />
        <path d="M164 264H212L248 384H200L164 264Z" fill="#F8FAFC" />

        <path
          d="M316 236H356L424 384H374L316 264V236Z"
          fill={`url(#${indigoId})`}
        />

        <rect x="268" y="128" width="48" height="256" fill="#F8FAFC" />
        <path d="M316 218L374 128H424L344 252H316V218Z" fill="#F8FAFC" />

        <rect x="368" y="412" width="64" height="20" rx="6" fill={`url(#${indigoId})`} />
      </svg>

      {showText && (
        <span className="font-mono text-xs font-medium tracking-wider text-slate-300">
          <span className="text-indigo-400">~/</span>
          <span>rizalkr</span>
          <span className="text-indigo-400 animate-pulse">_</span>
        </span>
      )}
    </span>
  );
}
