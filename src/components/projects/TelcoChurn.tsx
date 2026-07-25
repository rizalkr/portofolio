import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const SLIDE_COUNT = 4;

export function TelcoChurnSlides({
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
              <Badge variant="secondary" className="font-mono">Python</Badge>
              <Badge variant="secondary" className="font-mono">Scikit-learn</Badge>
              <Badge variant="secondary" className="font-mono">Pandas</Badge>
              <Badge variant="secondary" className="font-mono">Logistic Regression</Badge>
              <Badge variant="secondary" className="font-mono">NumPy</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A churn prediction and retention strategy system analyzing{" "}
            <strong className="text-primary">7,000+ telecom customer records</strong> to
            identify churn behavior, expose{" "}
            <strong className="text-primary">survivorship bias</strong> in historical
            retention indicators, and formulate financial retention architectures
            such as Ecosystem Lock-in. Decision boundary engineering through threshold
            adjustment achieves 87% churn detection recall with a 3-tier risk routing
            algorithm.
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
                  Raw Customer Data
                </span>
                <span className="text-xs text-muted-foreground">
                  7,000+ Telecom Records
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ Imputation & OHE (drop_first) ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  30-dim Orthogonal Matrix
                </span>
                <span className="text-xs text-muted-foreground">
                  Multicollinearity Prevention
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ Balanced Class Weights ↓
              </div>
              <div className="p-4 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-sm font-bold text-primary block mb-1">
                  Logistic Regression
                </span>
                <span className="text-xs text-muted-foreground">
                  Threshold Tuned to 0.4
                </span>
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ Risk Routing Algorithm ↓
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "High", color: "text-red-400" },
                  { label: "Medium", color: "text-amber-400" },
                  { label: "Low", color: "text-emerald-400" },
                ].map(({ label, color }) => (
                  <div key={label} className="p-3 border border-border bg-card rounded-lg text-center shadow-sm">
                    <span className={`font-mono text-xs font-bold ${color} block`}>{label}</span>
                    <span className="text-[10px] text-muted-foreground">Risk</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center font-mono text-muted-foreground text-sm">
                ↓ Automated Export ↓
              </div>
              <div className="p-3 border border-border bg-card rounded-lg text-center shadow-sm">
                <span className="font-mono text-xs font-bold text-primary">CSV for Operations Team</span>
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
              { label: "Churn Recall", value: "87%" },
              { label: "Decision Threshold", value: "0.4 (tuned from 0.5)" },
              { label: "Feature Dimensions", value: "30 (Orthogonal)" },
              { label: "Class Weight", value: "Balanced" },
              { label: "Risk Tiers", value: "High / Medium / Low" },
              { label: "Output Format", value: "CSV (Auto-exported)" },
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
                href="https://github.com/rizalkr/telco_churn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
