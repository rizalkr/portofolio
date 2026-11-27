import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectOriginBadge } from "@/components/project-origin-badge";
import type { ProjectOrigin } from "@/lib/projects";

export const SLIDE_COUNT = 4;

export function MekoStandardsGuardSlides({
  project,
  activeSlide,
}: {
  project: { title: string; origin: ProjectOrigin };
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
              <ProjectOriginBadge origin={project.origin} variant="slide" />
              <Badge variant="secondary" className="font-mono">YugabyteDB Meko</Badge>
              <Badge variant="secondary" className="font-mono">MCP Server</Badge>
              <Badge variant="secondary" className="font-mono">ts-morph AST</Badge>
              <Badge variant="secondary" className="font-mono">Hono + Drizzle</Badge>
              <Badge variant="secondary" className="font-mono">React / Vite</Badge>
              <Badge variant="secondary" className="font-mono">TypeScript</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            AI coding agents start every session from zero, causing{" "}
            <strong className="text-primary">cross-agent amnesia</strong> when rules learned in
            one tool fail to reach another. Built for ContextCon by YugabyteDB Meko,{" "}
            <strong className="text-primary">Meko Standards Guard</strong> enforces 8 financial
            and security invariants (S1-S8) with human-gated{" "}
            <code className="font-mono text-xs text-primary">private -&gt; shared</code> memory
            quarantine to prevent context poisoning while transferring verified immunity across
            Cursor, OpenCode, Codex, and Claude Code.
          </p>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">
            Governance &amp; Enforcement Architecture
          </h3>
          <div className="w-full bg-muted/30 rounded-xl flex flex-col items-center justify-center border border-border relative shadow-inner p-8">
            <div className="absolute inset-0 opacity-10 rounded-xl bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_70%)]" />
            <div className="z-10 w-full max-w-md space-y-3">
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  ADRs (S1-S8) &amp; RFC Spec Gate
                </span>
                <span className="text-xs text-muted-foreground">
                  standards/ADR-001..008.md uploaded via knowledgebase_upload; guard spec-check gates RFCs pre-implementation
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-xs">
                ↓ Agent Preflight (context_search / guard_preflight) ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Deterministic Guard Engine (ts-morph AST + PII Taint + Vitest)
                </span>
                <span className="text-xs text-muted-foreground">
                  Verifies PayLedger double-entry invariants; isolates violation traces in agent-private memory (memory_add)
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-xs">
                ↓ Human Review Gate (CLI / Local Control Plane UI) ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Human Promotion &amp; Compliance Receipts
                </span>
                <span className="text-xs text-muted-foreground">
                  Maintainer runs memory_promote (private -&gt; shared), logs rationale in Conversations, and emits SHA-256 receipts (artifact_put)
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-xs">
                ↓ Cross-Agent Immunity ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Multi-Agent Ecosystem (6 Agent Configs + 7 stdio MCP Tools)
                </span>
                <span className="text-xs text-muted-foreground">
                  Cursor, OpenCode, Codex, Claude Code, Kiro, Copilot over mock / record / live Meko client modes
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSlide === 2 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">
            Key Specifications &amp; A/B Benchmark
          </h3>
          <div className="flex flex-col divide-y divide-border">
            {[
              {
                label: "Monorepo Workspace",
                value: "5 Packages (core, engine, payledger, cli, ui)",
              },
              {
                label: "Meko Primitives",
                value: "KB, 2-Tier Memory, Conv, Artifacts, Self-Learning",
              },
              {
                label: "Enforced Rules (S1-S8)",
                value: "Cents, Idempotency, Ledger, PII, Lock, HMAC",
              },
              {
                label: "MCP & Execution Modes",
                value: "7 stdio MCP Tools · mock / record / live",
              },
              {
                label: "A/B Prompt Tokens (5 Tasks)",
                value: "9,725 -> 1,089 (-88.8%, cl100k_base)",
              },
              {
                label: "A/B Violations & Turns",
                value: "15 -> 0 violations · 1.8 -> 0 avg turns",
              },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-3.5">
                <span className="font-mono text-muted-foreground text-sm">{label}</span>
                <span className="font-mono text-sm font-semibold text-primary text-right max-w-[55%]">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Prompt token budgets were measured via{" "}
            <code className="font-mono">tiktoken/cl100k_base</code> over live Meko retrieval
            payloads, while violation counts were scored deterministically by{" "}
            <code className="font-mono">@meko-guard/engine</code> over reproducible 5-task
            candidate fixtures (<code className="font-mono">fixtures/benchmark/runs/</code>).
          </p>
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
                href="https://github.com/rizalkr/meko-standards-guard"
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
              <a
                href="https://github.com/rizalkr/meko-standards-guard/blob/main/docs/ARCHITECTURE.md"
                target="_blank"
                rel="noreferrer"
              >
                Read Architecture Spec
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
