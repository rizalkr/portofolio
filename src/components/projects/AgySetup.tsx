import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const SLIDE_COUNT = 4;

export function AgySetupSlides({
  project,
  activeSlide,
}: {
  project: { title: string };
  activeSlide: number;
}) {
  return (
    <div className="p-8 md:p-12">
      {activeSlide === 0 && (
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-heading font-extrabold text-primary mb-4">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="font-mono">Plan-Execute (6 Presets)</Badge>
              <Badge variant="secondary" className="font-mono">Context Guardian FSM</Badge>
              <Badge variant="secondary" className="font-mono">Lazy Skill Router (19)</Badge>
              <Badge variant="secondary" className="font-mono">Graphify AST</Badge>
              <Badge variant="secondary" className="font-mono">Project-Scoped MCP</Badge>
              <Badge variant="secondary" className="font-mono">Python 3</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Long agentic coding sessions stall when silent token leaks drain the
            context window. Built for Google Antigravity across Windows, macOS,
            and Linux,{" "}
            <strong className="text-primary">agy-setup</strong> enforces token
            discipline across three core pillars: splitting{" "}
            <strong className="text-primary">Argon/Neon</strong> planners from{" "}
            <strong className="text-primary">Hydrogen</strong> executors across
            6 presets, blocking mistimed compactions via a stateful{" "}
            <code className="font-mono text-xs text-primary">context-guardian.py</code>{" "}
            PreInvocation FSM, and routing 5 core + 19 domain skills lazily
            alongside Graphify AST subgraphs and project-scoped MCP (0 global tax).
          </p>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">
            Runtime Architecture
          </h3>
          <div className="w-full bg-muted/30 rounded-xl flex flex-col items-center justify-center border border-border relative shadow-inner p-8">
            <div className="absolute inset-0 opacity-10 rounded-xl bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_70%)]" />
            <div className="z-10 w-full max-w-md space-y-3">
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  PreInvocation Hook (context-guardian.py)
                </span>
                <span className="text-xs text-muted-foreground">
                  PreInvocation FSM parses transcript.jsonl, detects /compact drops &amp; enforces Never Compact Mid-Task
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-xs">
                ↓ Yellow / Red Zone Advisory + Cooldown FSM ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Plan-Execute Orchestrator (6 Presets)
                </span>
                <span className="text-xs text-muted-foreground">
                  Argon/Neon Planner + Hydrogen Executor split
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-xs">
                ↓ On-Demand Context Loading ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Lazy Skill Router + Project-Scoped MCP
                </span>
                <span className="text-xs text-muted-foreground">
                  5 Core + 19 Domain Skills (7 Categories) · 0 Global MCP Overhead
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-xs">
                ↓ Codebase Lookup ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Graphify AST Subgraphs &amp; Research Subagent
                </span>
                <span className="text-xs text-muted-foreground">
                  Targeted StartLine/EndLine slices &amp; isolated exploration
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSlide === 2 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">
            Key Specifications
          </h3>
          <div className="flex flex-col divide-y divide-border">
            {[
              { label: "Plan-Execute (6 Presets)", value: "Argon/Neon + Hydrogen" },
              { label: "Context Guardian", value: "PreInvocation FSM (Yellow/Red)" },
              { label: "Implicit Compact Reset", value: ">= 25% drop from >= 40k peak" },
              { label: "Lazy Skill Router", value: "5 Core + 19 Domain (7 Categories)" },
              { label: "Global MCP Overhead", value: "0 Tokens (Project-Scoped Only)" },
              { label: "Onboarding & Sync", value: "AGENT_SETUP.md + install.py" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-3.5">
                <span className="font-mono text-muted-foreground text-sm">{label}</span>
                <span className="font-mono text-sm font-semibold text-primary text-right max-w-[55%]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSlide === 3 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary text-center">
            Resources
          </h3>
          <div className="flex flex-col gap-3 max-w-xs mx-auto w-full pt-4">
            <Button variant="default" className="w-full font-mono font-bold tracking-wide" asChild>
              <a
                href="https://github.com/rizalkr/agy-setup"
                target="_blank"
                rel="noreferrer"
              >
                View Source on GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full font-mono font-bold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <Link href="/blog/agy-setup-context-engineering">
                Read Engineering Case Study
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
