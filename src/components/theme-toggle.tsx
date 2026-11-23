"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";

export type PortfolioTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "rk-theme-v2";
const THEME_EVENT = "rk-theme-change";

const subscribeTheme = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
};

const getThemeSnapshot = (): PortfolioTheme => {
  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  return saved === "dark" ? "dark" : "light";
};

const getServerThemeSnapshot = (): PortfolioTheme => "light";

export function togglePortfolioTheme(currentTheme?: PortfolioTheme) {
  const active = currentTheme ?? getThemeSnapshot();
  const next: PortfolioTheme = active === "dark" ? "light" : "dark";
  window.localStorage.setItem(THEME_STORAGE_KEY, next);
  document.documentElement.classList.toggle("dark", next === "dark");
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function usePortfolioTheme(): PortfolioTheme {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return theme;
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = usePortfolioTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => togglePortfolioTheme(theme)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
        "border-[#DAD3C6] bg-[#FAF8F3] text-[#3F3B34] hover:border-[#C8C0B0] hover:bg-[#FDFCF9] hover:text-[#1C1A17] shadow-[0_1px_2px_rgba(28,25,23,0.05),0_1px_0_rgba(255,255,255,0.8)_inset]",
        "dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:shadow-none dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 35, scale: 0.7 }}
          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center"
        >
          {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function PageAtmosphere({ isDark }: { isDark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isDark === undefined
            ? "bg-[radial-gradient(ellipse_85%_45%_at_50%_-8%,rgba(79,70,229,0.065),rgba(214,203,181,0.22),transparent_72%)] dark:bg-[radial-gradient(ellipse_80%_40%_at_50%_-10%,rgba(99,102,241,0.08),transparent_70%)]"
            : isDark
              ? "bg-[radial-gradient(ellipse_80%_40%_at_50%_-10%,rgba(99,102,241,0.08),transparent_70%)]"
              : "bg-[radial-gradient(ellipse_85%_45%_at_50%_-8%,rgba(79,70,229,0.065),rgba(214,203,181,0.22),transparent_72%)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 [background-size:22px_22px] [mask-image:radial-gradient(ellipse_85%_80%_at_50%_30%,black_40%,transparent_100%)]",
          isDark === undefined
            ? "bg-[radial-gradient(#C8C0B0_1px,transparent_1px)] opacity-55 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:opacity-45"
            : isDark
              ? "bg-[radial-gradient(#27272a_1px,transparent_1px)] opacity-45"
              : "bg-[radial-gradient(#C8C0B0_1px,transparent_1px)] opacity-55"
        )}
      />
      <svg
        aria-hidden="true"
        className={cn(
          "h-full w-full",
          isDark === undefined
            ? "opacity-[0.028] dark:opacity-[0.018]"
            : isDark
              ? "opacity-[0.018]"
              : "opacity-[0.028]"
        )}
      >
        <filter id="rk-paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#rk-paper-noise)" />
      </svg>
    </div>
  );
}

export function SubpageHeader({
  backHref,
  backLabel,
}: {
  backHref: string;
  backLabel: string;
}) {
  const theme = usePortfolioTheme();

  return (
    <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#DFD9CE] pb-4 dark:border-zinc-800/80">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#57534A] transition-colors hover:text-[#1C1A17] dark:text-zinc-500 dark:hover:text-zinc-200"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>{backLabel}</span>
      </Link>

      <div className="flex items-center gap-3">
        <Link
          href="/"
          aria-label="Rizal Kurnia — Home"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          <BrandLogo size="sm" theme={theme} showText />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
