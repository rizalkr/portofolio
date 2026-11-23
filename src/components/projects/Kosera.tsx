import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const SLIDE_COUNT = 4;

export function KoseraSlides({
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
              <Badge variant="secondary" className="font-mono">Qwen2.5-7B (QLoRA)</Badge>
              <Badge variant="secondary" className="font-mono">MiniLM-L12-v2</Badge>
              <Badge variant="secondary" className="font-mono">pgvector HNSW</Badge>
              <Badge variant="secondary" className="font-mono">Next.js 15</Badge>
              <Badge variant="secondary" className="font-mono">FastAPI</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Standard boarding-house portals fail on casual Indonesian queries,
            while ranking thousands of listings with an LLM alone is too slow.
            Kosera splits retrieval and reasoning: a CPU embedding service turns
            queries into 384-dimensional vectors with{" "}
            <strong className="text-primary">MiniLM-L12-v2</strong> over{" "}
            <strong className="text-primary">7,000 pgvector HNSW</strong> listings,
            while a QLoRA-tuned{" "}
            <strong className="text-primary">Qwen2.5-7B-Instruct</strong> model
            extracts tool-call JSON and explains hybrid Profile Matching scores.
          </p>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Architecture</h3>
          <div className="w-full bg-muted/30 rounded-xl flex flex-col items-center justify-center border border-border relative shadow-inner p-8">
            <div className="absolute inset-0 opacity-10 rounded-xl bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_70%)]" />
            <div className="z-10 w-full max-w-md space-y-4">
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Web Platform &amp; Gateway (Next.js 15)
                </span>
                <span className="text-xs text-muted-foreground">
                  SSE Chat Streaming, Hybrid SPK Scoring, Listings
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ REST &amp; SSE Streaming ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Dual AI Service (FastAPI)
                </span>
                <span className="text-xs text-muted-foreground">
                  Qwen2.5-7B (QLoRA) + MiniLM-L12-v2 (384d)
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ HNSW Cosine Similarity + SQL Filters ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Vector Database (PostgreSQL 16 + pgvector)
                </span>
                <span className="text-xs text-muted-foreground">
                  7,000 Indexed Listings &amp; Iterative HNSW Scan
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSlide === 2 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Key Specifications</h3>
          <div className="flex flex-col divide-y divide-border">
            {[
              { label: "LLM Agent", value: "Qwen2.5-7B-Instruct (QLoRA)" },
              { label: "Embedding Model", value: "MiniLM-L12-v2 (384d)" },
              { label: "Vector Index", value: "pgvector HNSW (7,000 Kos)" },
              { label: "Eval Benchmark", value: "91.75% Pass · 100% Grounded" },
              { label: "Decision Engine", value: "Hybrid Semantic + Profile Matching" },
              { label: "Stack & ORM", value: "Next.js 15 · FastAPI · Drizzle ORM" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-4">
                <span className="font-mono text-muted-foreground text-sm">{label}</span>
                <span className="font-mono text-base font-semibold text-primary">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSlide === 3 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary text-center">Resources</h3>
          <div className="flex flex-col gap-3 max-w-xs mx-auto w-full pt-4">
            <Button variant="default" className="w-full font-mono font-bold tracking-wide" asChild>
              <a href="https://kosera-spk.vercel.app/" target="_blank" rel="noreferrer">
                Open Live App
              </a>
            </Button>
            <Button
              variant="secondary"
              className="w-full font-mono font-bold tracking-wide border border-border"
              asChild
            >
              <a
                href="https://github.com/rizalkr/kosera-spk"
                target="_blank"
                rel="noreferrer"
              >
                View Web Source
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full font-mono font-bold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a
                href="https://github.com/rizalkr/kosera-ai-service"
                target="_blank"
                rel="noreferrer"
              >
                View AI Service Source
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full font-mono font-bold tracking-wide border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              asChild
            >
              <Link href="/blog/kosera-part-1">
                Read 6-Part Case Study
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
