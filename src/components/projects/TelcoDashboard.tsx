import { AlertTriangle, BarChart3, Tag, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectOriginBadge } from "@/components/project-origin-badge";
import type { ProjectOrigin } from "@/lib/projects";

export const SLIDE_COUNT = 4;

export function TelcoDashboardSlides({
  project,
  activeSlide,
}: {
  project: { title: string; origin: ProjectOrigin };
  activeSlide: number;
}) {
  const features = [
    {
      Icon: Tag,
      title: "Multi-label NLP Classification",
      desc: "Extracts and classifies complaints into Network, Price, and App/System categories from raw review text.",
    },
    {
      Icon: BarChart3,
      title: "Telco Friction Index (TFI)",
      desc: "Custom composite metric with 7-day moving average to track overall customer friction over time.",
    },
    {
      Icon: AlertTriangle,
      title: "Rolling Z-Score Anomaly Detection",
      desc: "14-day rolling statistical model that triggers alerts when complaint volume exceeds 2.0 standard deviations.",
    },
    {
      Icon: TrendingUp,
      title: "Operational Dashboard",
      desc: "Full visualization suite rendered with Matplotlib and Seaborn for stakeholder reporting and trend analysis.",
    },
  ];

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
              <Badge variant="secondary" className="font-mono">NLP</Badge>
              <Badge variant="secondary" className="font-mono">Matplotlib</Badge>
              <Badge variant="secondary" className="font-mono">Seaborn</Badge>
              <Badge variant="secondary" className="font-mono">Pandas</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Translates{" "}
            <strong className="text-primary">raw app store reviews</strong> into
            an automated incident detection monitor for telecom releases.
            Multi-label NLP classifies complaints into Network, Price, and
            App/System defects, feeding a 7-day moving average{" "}
            <strong className="text-primary">Telco Friction Index (TFI)</strong>{" "}
            and a 14-day rolling Z-Score model that flags volume spikes
            exceeding 2.0 standard deviations.
          </p>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-2 p-4 rounded-lg border border-border bg-muted/40"
              >
                <Icon className="h-5 w-5 text-primary" />
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
                GitHub Repository
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
