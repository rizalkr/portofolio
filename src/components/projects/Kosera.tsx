import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const SLIDE_COUNT = 4;

export function KoseraSlides({
  project,
  activeSlide,
}: {
  project: any;
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
              <Badge variant="secondary" className="font-mono">Next.js</Badge>
              <Badge variant="secondary" className="font-mono">PostgreSQL</Badge>
              <Badge variant="secondary" className="font-mono">FastAPI</Badge>
              <Badge variant="secondary" className="font-mono">Docker</Badge>
              <Badge variant="secondary" className="font-mono">HuggingFace</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
              Platform pencarian properti (kos) terintegrasi berbasis Next.js. Kosera
              dirancang secara komprehensif menggunakan arsitektur microservices,
              mengisolasi layanan utama dari AI Service khusus yang dibangun dengan
              Python dan FastAPI. Pipeline sistem memanfaatkan model Sentence Transformers
              untuk mengeksekusi <strong className="text-primary">Semantic Search</strong>,
              memungkinkan mesin menerjemahkan konteks bahasa natural secara spasial,
              alih-alih bergantung pada kueri filter relasional yang kaku.
          </p>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Architecture</h3>
          <div className="w-full bg-muted/30 rounded-xl flex flex-col items-center justify-center border border-border relative shadow-inner p-8">
            <div className="absolute inset-0 opacity-10 rounded-xl bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_70%)]" />
            <div className="z-10 w-full max-w-sm space-y-4">
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Web Platform (Next.js)
                </span>
                <span className="text-xs text-muted-foreground">
                  UI, User Management, Listings
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ REST API ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  AI Microservice (FastAPI + Docker)
                </span>
                <span className="text-xs text-muted-foreground">
                  Sentence Transformers Encoding
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ Vector Similarity Search ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Database (PostgreSQL + Drizzle)
                </span>
                <span className="text-xs text-muted-foreground">
                  Listings & Vector Storage
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
              { label: "Vector Dimension", value: "384 (MiniLM-L12-v2)" },
              { label: "Multilingual Support", value: "50+ Languages" },
              { label: "Web Deployment", value: "Vercel" },
              { label: "AI Deployment", value: "HuggingFace Spaces" },
              { label: "Database", value: "Supabase / PostgreSQL" },
              { label: "ORM", value: "Drizzle ORM" },
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
                Visit Live Web
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
                Web Repo
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
                AI Service Repo
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
