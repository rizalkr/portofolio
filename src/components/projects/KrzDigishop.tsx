import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const SLIDE_COUNT = 4;

export function KrzDigishopSlides({
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
              <Badge variant="secondary" className="font-mono">Astro.js</Badge>
              <Badge variant="secondary" className="font-mono">Scoped CSS</Badge>
              <Badge variant="secondary" className="font-mono">Space Grotesk</Badge>
              <Badge variant="secondary" className="font-mono">Google Fonts</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Landing page modern dan minimalis untuk{" "}
            <strong className="text-primary">KRZ DIGISHOP</strong>, platform layanan digital
            premium (AI software & VPN). Dibangun dengan Astro.js untuk performa maksimal —
            pendekatan <strong className="text-primary">Zero-JS by default</strong> menghasilkan
            bundle minimal dengan loading yang sangat cepat. Menampilkan dark theme futuristik
            dengan aksen lime green, tipografi Space Grotesk, animasi CSS bertahap, dan product
            grid yang dapat difilter per kategori.
          </p>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Design System</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Color palette visual */}
            <div className="flex flex-col gap-3 p-4 rounded-lg border border-border bg-muted/20">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Color Palette</span>
              <div className="flex flex-col gap-2">
                {[
                  { color: "#1A103C", label: "Dark Purple (BG)" },
                  { color: "#0A0A0A", label: "Off-Black (BG alt)" },
                  { color: "#32CD32", label: "Lime Green (Accent)" },
                  { color: "#FFFFFF", label: "White (Text)" },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded border border-border shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-mono text-xs text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Typography */}
            <div className="flex flex-col gap-3 p-4 rounded-lg border border-border bg-muted/20">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Typography</span>
              <div className="flex flex-col gap-3">
                <div>
                  <span className="font-mono text-xs text-muted-foreground">Display</span>
                  <p className="text-primary font-bold text-lg" style={{ fontFamily: "sans-serif" }}>Space Grotesk</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground">Body</span>
                  <p className="text-foreground text-sm">Inter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Hero", "Features", "Products", "About", "Testimonials", "Footer"].map((section) => (
              <div key={section} className="text-center py-2 px-3 rounded border border-border bg-muted/10">
                <span className="font-mono text-xs text-muted-foreground">{section}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSlide === 2 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Performance & Tech</h3>
          <div className="flex flex-col divide-y divide-border">
            {[
              { label: "Framework", value: "Astro.js" },
              { label: "Styling", value: "Scoped CSS + Custom Properties" },
              { label: "JS Strategy", value: "Zero-JS by Default" },
              { label: "Sections", value: "6 Full Sections" },
              { label: "Fonts", value: "Google Fonts (Inter, Space Grotesk)" },
              { label: "Icons", value: "Custom SVG" },
              { label: "Responsive", value: "Mobile-first, CSS Grid + Flexbox" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center py-3">
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
            <Button variant="default" className="w-full font-mono font-bold tracking-wide" asChild>
              <a href="https://kzr-digishop.vercel.app/" target="_blank" rel="noreferrer">
                Visit Live Web
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full font-mono font-bold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a
                href="https://github.com/rizalkr/krz-digishop"
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
