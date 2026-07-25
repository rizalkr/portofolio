import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const SLIDE_COUNT = 4;

export function TelcoDashboardSlides({
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
              <Badge variant="secondary" className="font-mono">NLP</Badge>
              <Badge variant="secondary" className="font-mono">Matplotlib</Badge>
              <Badge variant="secondary" className="font-mono">Seaborn</Badge>
              <Badge variant="secondary" className="font-mono">Pandas</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            An analytical system that translates{" "}
            <strong className="text-primary">raw customer review text</strong> into
            actionable business insights for monitoring app release stability and
            proactively detecting infrastructure anomalies. Implements a custom{" "}
            <strong className="text-primary">Telco Friction Index (TFI)</strong> with
            statistical anomaly detection to isolate mass infrastructure incidents
            and price sentiment shifts in real-time.
          </p>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🏷️",
                title: "Multi-label NLP Classification",
                desc: "Extracts and classifies complaints into Network, Price, and App/System categories from raw review text.",
              },
              {
                icon: "📊",
                title: "Telco Friction Index (TFI)",
                desc: "Custom composite metric with 7-day moving average to track overall customer friction over time.",
              },
              {
                icon: "🚨",
                title: "Rolling Z-Score Anomaly Detection",
                desc: "14-day rolling statistical model that triggers alerts when complaint volume exceeds 2.0 standard deviations.",
              },
              {
                icon: "📈",
                title: "Operational Dashboard",
                desc: "Full visualization suite rendered with Matplotlib and Seaborn for stakeholder reporting and trend analysis.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-2 p-4 rounded-lg border border-border bg-muted/20"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-mono font-bold text-primary text-sm">{title}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSlide === 2 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Key Metrics</h3>
          <div className="flex flex-col divide-y divide-border">
            {[
              { label: "TFI Moving Average", value: "7-day Window" },
              { label: "Z-Score Window", value: "14-day Rolling" },
              { label: "Anomaly Threshold", value: "> 2.0 Std. Deviations" },
              { label: "Label Categories", value: "Network / Price / App-System" },
              { label: "Visualization", value: "Matplotlib + Seaborn" },
              { label: "Detection Target", value: "Infrastructure Incidents & Sentiment Shifts" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-4">
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
          <h3 className="text-xl font-heading font-bold text-primary text-center">Resources</h3>
          <div className="flex flex-col gap-3 max-w-xs mx-auto w-full pt-4">
            <Button
              variant="outline"
              className="w-full font-mono font-bold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a
                href="https://github.com/rizalkr/provider_tfi"
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
