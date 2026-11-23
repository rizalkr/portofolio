"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUp, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
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

function toneClass(
  isDark: boolean | undefined,
  light: string,
  dark: string,
  auto: string
) {
  if (isDark === undefined) return auto;
  return isDark ? dark : light;
}

function MobileMenuButton({
  open,
  onToggle,
  isDark,
}: {
  open: boolean;
  onToggle: () => void;
  isDark?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-label="Toggle navigation menu"
      className={cn(
        "relative inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:hidden",
        toneClass(
          isDark,
          "border-[#DAD3C6] bg-[#FAF8F3] text-[#3F3B34] hover:border-[#C8C0B0] hover:bg-[#FDFCF9] hover:text-[#1C1A17] shadow-[0_1px_2px_rgba(28,25,23,0.05),0_1px_0_rgba(255,255,255,0.8)_inset]",
          "border-zinc-800 bg-zinc-900/70 text-zinc-300 shadow-none hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100",
          "border-[#DAD3C6] bg-[#FAF8F3] text-[#3F3B34] hover:border-[#C8C0B0] hover:bg-[#FDFCF9] hover:text-[#1C1A17] shadow-[0_1px_2px_rgba(28,25,23,0.05),0_1px_0_rgba(255,255,255,0.8)_inset] dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:shadow-none dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
        )
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={open ? "close" : "menu"}
          initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 35, scale: 0.7 }}
          transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center"
        >
          {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function MobileMenuDrawer({
  open,
  onClose,
  projectsHref,
  writingHref,
  isDark,
}: {
  open: boolean;
  onClose: () => void;
  projectsHref: string;
  writingHref: string;
  isDark?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const panelClass = toneClass(
    isDark,
    "border-[#DFD9CE] bg-[#FAF8F3] text-[#1C1A17] shadow-sm",
    "border-zinc-800 bg-zinc-900/95 text-zinc-100 shadow-lg",
    "border-[#DFD9CE] bg-[#FAF8F3] text-[#1C1A17] shadow-sm dark:border-zinc-800 dark:bg-zinc-900/95 dark:text-zinc-100 dark:shadow-lg"
  );
  const itemClass = toneClass(
    isDark,
    "text-[#3F3B34] hover:bg-[#EFECE4] hover:text-[#1C1A17]",
    "text-zinc-300 hover:bg-zinc-800/70 hover:text-zinc-100",
    "text-[#3F3B34] hover:bg-[#EFECE4] hover:text-[#1C1A17] dark:text-zinc-300 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-100"
  );
  const dividerClass = toneClass(
    isDark,
    "border-[#DFD9CE]",
    "border-zinc-800/80",
    "border-[#DFD9CE] dark:border-zinc-800/80"
  );
  const mutedClass = toneClass(
    isDark,
    "text-[#7A7468]",
    "text-zinc-400",
    "text-[#7A7468] dark:text-zinc-400"
  );

  const navItems: {
    label: string;
    href: string;
    external?: boolean;
    hint?: string;
  }[] = [
    { label: "Projects", href: projectsHref, hint: "01" },
    { label: "Writing", href: writingHref, hint: "02" },
    { label: "Resume", href: "/resume.pdf", external: true },
    { label: "GitHub", href: "https://github.com/rizalkr", external: true },
  ];

  return (
    <AnimatePresence initial={false}>
      {open && (
        <>
          <div
            aria-hidden="true"
            onClick={onClose}
            className="fixed inset-0 top-[57px] z-30 sm:hidden"
          />
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -6, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-40 overflow-hidden sm:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className={cn("mt-3 rounded-xl border p-2", panelClass)}
            >
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => {
                const classes = cn(
                  "flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-xs transition-colors",
                  itemClass
                );

                if (item.external) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className={classes}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  );
                }

                if (item.href.startsWith("#")) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className={classes}
                    >
                      <span>{item.label}</span>
                      <span className={cn("text-[10px] tabular-nums", mutedClass)}>
                        {item.hint}
                      </span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className={classes}
                  >
                    <span>{item.label}</span>
                    <span className={cn("text-[10px] tabular-nums", mutedClass)}>
                      {item.hint}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div
              className={cn(
                "mt-2 flex flex-wrap items-center justify-between gap-2 border-t px-3 pt-2.5 pb-1 font-mono text-[11px]",
                dividerClass,
                mutedClass
              )}
            >
              <a
                href="mailto:rizalkurnia.me@gmail.com"
                onClick={onClose}
                className="truncate transition-colors hover:text-[#4338CA] dark:hover:text-indigo-400"
              >
                rizalkurnia.me@gmail.com
              </a>
              <span className="inline-flex items-center gap-1.5 shrink-0">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span>Open to roles</span>
              </span>
            </div>
          </nav>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function SiteNavbar({ isDark }: { isDark?: boolean }) {
  const subscribedTheme = usePortfolioTheme();
  const theme: PortfolioTheme =
    isDark === undefined ? subscribedTheme : isDark ? "dark" : "light";
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = toneClass(
    isDark,
    "text-[#57534A] hover:text-[#1C1A17]",
    "text-zinc-400 hover:text-zinc-100",
    "text-[#57534A] hover:text-[#1C1A17] dark:text-zinc-400 dark:hover:text-zinc-100"
  );
  const headerSurfaceClass = toneClass(
    isDark,
    "border-[#DFD9CE]/90 bg-[#F4F1EA]/88",
    "border-zinc-800/80 bg-zinc-950/85",
    "border-[#DFD9CE]/90 bg-[#F4F1EA]/88 dark:border-zinc-800/80 dark:bg-zinc-950/85"
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 -mx-6 mb-8 border-b px-6 py-3.5 backdrop-blur-md transition-colors duration-300 sm:-mx-8 sm:mb-10 sm:px-8 sm:py-4",
        headerSurfaceClass
      )}
    >
      <div className="relative z-40 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Rizal Kurnia — Home"
          className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          <BrandLogo size="sm" theme={theme} showText />
        </Link>

        <div className="flex items-center gap-2 sm:gap-5">
          <nav className="hidden sm:flex items-center gap-5">
            <a
              href="#projects"
              className={cn("font-mono text-xs transition-colors", linkClass)}
            >
              Projects
            </a>
            <a
              href="#writing"
              className={cn("font-mono text-xs transition-colors", linkClass)}
            >
              Writing
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1 font-mono text-xs transition-colors",
                linkClass
              )}
            >
              <span>Resume</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
            <a
              href="https://github.com/rizalkr"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1 font-mono text-xs transition-colors",
                linkClass
              )}
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
          </nav>

          <ThemeToggle />
          <MobileMenuButton
            open={menuOpen}
            onToggle={() => setMenuOpen((prev) => !prev)}
            isDark={isDark}
          />
        </div>
      </div>

      <MobileMenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        projectsHref="#projects"
        writingHref="#writing"
        isDark={isDark}
      />
    </header>
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 -mx-6 mb-8 border-b border-[#DFD9CE]/90 bg-[#F4F1EA]/88 px-6 py-3.5 backdrop-blur-md transition-colors duration-300 sm:-mx-8 sm:px-8 sm:py-4 dark:border-zinc-800/80 dark:bg-zinc-950/85">
      <div className="relative z-40 flex items-center justify-between gap-4">
        <Link
          href={backHref}
          className="inline-flex min-w-0 items-center gap-1.5 font-mono text-xs text-[#57534A] transition-colors hover:text-[#1C1A17] dark:text-zinc-500 dark:hover:text-zinc-200"
        >
          <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{backLabel}</span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <nav className="hidden md:flex items-center gap-5 font-mono text-xs text-[#57534A] dark:text-zinc-400">
            <Link
              href="/#projects"
              className="transition-colors hover:text-[#1C1A17] dark:hover:text-zinc-100"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-[#1C1A17] dark:hover:text-zinc-100"
            >
              Writing
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-[#1C1A17] dark:hover:text-zinc-100"
            >
              <span>Resume</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </a>
          </nav>

          <Link
            href="/"
            aria-label="Rizal Kurnia — Home"
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <BrandLogo size="sm" theme={theme} className="sm:hidden" />
            <BrandLogo size="sm" theme={theme} showText className="hidden sm:inline-flex" />
          </Link>
          <ThemeToggle />
          <MobileMenuButton
            open={menuOpen}
            onToggle={() => setMenuOpen((prev) => !prev)}
          />
        </div>
      </div>

      <MobileMenuDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        projectsHref="/#projects"
        writingHref="/blog"
      />
    </header>
  );
}

export function SiteFooter({
  isDark,
  variant = "full",
}: {
  isDark?: boolean;
  variant?: "full" | "compact";
}) {
  const subscribedTheme = usePortfolioTheme();
  const logoTheme: PortfolioTheme =
    isDark === undefined ? subscribedTheme : isDark ? "dark" : "light";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const borderClass = toneClass(
    isDark,
    "border-[#DFD9CE]",
    "border-zinc-800/80",
    "border-[#DFD9CE] dark:border-zinc-800/80"
  );
  const headingClass = toneClass(
    isDark,
    "text-[#7A7468]",
    "text-zinc-500",
    "text-[#7A7468] dark:text-zinc-500"
  );
  const bodyClass = toneClass(
    isDark,
    "text-[#57534A]",
    "text-zinc-400",
    "text-[#57534A] dark:text-zinc-400"
  );
  const linkClass = toneClass(
    isDark,
    "text-[#3F3B34] hover:text-[#4338CA]",
    "text-zinc-300 hover:text-indigo-400",
    "text-[#3F3B34] hover:text-[#4338CA] dark:text-zinc-300 dark:hover:text-indigo-400"
  );
  const pillClass = toneClass(
    isDark,
    "border-[#DAD3C6] bg-[#EFECE4]/90 text-[#3F3B34]",
    "border-zinc-800 bg-zinc-950/60 text-zinc-300",
    "border-[#DAD3C6] bg-[#EFECE4]/90 text-[#3F3B34] dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-300"
  );

  return (
    <footer
      className={cn(
        "mt-20 border-t pt-10 transition-colors duration-300",
        borderClass
      )}
    >
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
        {/* Identity & Availability */}
        <div className="max-w-sm space-y-3">
          <Link
            href="/"
            aria-label="Rizal Kurnia — Home"
            className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            <BrandLogo size="sm" theme={logoTheme} showText />
          </Link>

          {variant === "full" && (
            <>
              <p className={cn("font-mono text-xs leading-relaxed", bodyClass)}>
                Backend, AI Systems &amp; Data Engineer
              </p>

              <div
                className={cn(
                  "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px]",
                  pillClass
                )}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Open to Backend, AI &amp; Data Roles</span>
              </div>
            </>
          )}
        </div>

        {/* Navigation & Contact Link Groups */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 font-mono text-xs">
          <div className="space-y-2.5">
            <p className={cn("text-[10px] uppercase tracking-widest", headingClass)}>
              Navigation
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/#projects" className={cn("transition-colors", linkClass)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className={cn("transition-colors", linkClass)}>
                  Writing
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("inline-flex items-center gap-1 transition-colors", linkClass)}
                >
                  <span>Resume</span>
                  <ArrowUpRight className="h-3 w-3 opacity-65" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <p className={cn("text-[10px] uppercase tracking-widest", headingClass)}>
              Connect
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:rizalkurnia.me@gmail.com"
                  className={cn("break-all transition-colors", linkClass)}
                >
                  rizalkurnia.me@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rizalkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("inline-flex items-center gap-1 transition-colors", linkClass)}
                >
                  <span>github.com/rizalkr</span>
                  <ArrowUpRight className="h-3 w-3 opacity-65" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Colophon Bar */}
      <div
        className={cn(
          "mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6 font-mono text-xs",
          borderClass,
          headingClass
        )}
      >
        <span>© 2026 Rizal Kurnia. All rights reserved.</span>

        <div className="flex items-center gap-4">
          <span>Indonesia · UTC+7</span>
          <button
            type="button"
            onClick={scrollToTop}
            className={cn(
              "inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded",
              linkClass
            )}
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
