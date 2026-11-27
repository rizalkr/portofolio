import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectOriginBadge } from "@/components/project-origin-badge";
import type { ProjectOrigin } from "@/lib/projects";

export const SLIDE_COUNT = 4;

export function FraudDetectionSlides({
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
              <Badge variant="secondary" className="font-mono">Python</Badge>
              <Badge variant="secondary" className="font-mono">Pandas</Badge>
              <Badge variant="secondary" className="font-mono">Scikit-learn</Badge>
              <Badge variant="secondary" className="font-mono">Random Forest</Badge>
              <Badge variant="secondary" className="font-mono">Matplotlib</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Binary fraud classifiers force a trade-off between blocking good
            customers and missing fraud. This pipeline downcasts and imputes a{" "}
            <strong className="text-primary">2.06 GB e-commerce dataset</strong>{" "}
            down to 922 MB (55% memory reduction) and benchmarks a{" "}
            <strong className="text-primary">Random Forest</strong> classifier
            against a Logistic Regression baseline. Transactions route into
            three operational tiers—Approve, Step-Up Auth, and Manual Review—catching
            65.4% of fraud while holding customer friction to 3.06%.
          </p>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Pipeline Architecture</h3>
          <div className="w-full bg-muted/30 rounded-xl flex flex-col items-center justify-center border border-border relative shadow-inner p-8">
            <div className="absolute inset-0 opacity-10 rounded-xl bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_70%)]" />
            <div className="z-10 w-full max-w-sm space-y-4">
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Raw Transaction Data
                </span>
                <span className="text-xs text-muted-foreground">
                  2.06 GB E-commerce Dataset
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ Selective Imputation & Downcasting ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Feature Engineering
                </span>
                <span className="text-xs text-muted-foreground">
                  922 MB (55% Reduction)
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ Model Evaluation ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Random Forest Classifier
                </span>
                <span className="text-xs text-muted-foreground">
                  vs Logistic Regression Baseline
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ Decision Engine ↓
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Approve", color: "text-emerald-400" },
                  { label: "Auth", color: "text-amber-400" },
                  { label: "Review", color: "text-red-400" },
                ].map(({ label, color }) => (
                  <div key={label} className="p-3 border border-border bg-card rounded-lg text-center shadow-sm">
                    <span className={`font-mono text-xs font-bold ${color}`}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSlide === 2 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Key Metrics</h3>
          <div className="flex flex-col divide-y divide-border">
            {[
              { label: "Memory Reduction", value: "55% (2.06 GB → 922 MB)" },
              { label: "Fraud Recall", value: "65.4%" },
              { label: "Intervention Friction", value: "3.06% of Total Volume" },
              { label: "Primary Model", value: "Random Forest" },
              { label: "Baseline Model", value: "Logistic Regression" },
              { label: "Risk Tiers", value: "Approve / Auth / Review" },
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
            <Button
              variant="outline"
              className="w-full font-mono font-bold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a
                href="https://github.com/rizalkr/fraud_detection"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
