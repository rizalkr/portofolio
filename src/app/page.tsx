import Image from "next/image";
import { ProjectStack } from "@/components/ProjectStack";

export default function HomePage() {
  const techStack = [
    "Next.js",
    "Node.js",
    "React",
    "Python",
    "PostgreSQL",
    "Drizzle ORM",
    "Docker",
    "FastAPI",
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-12 lg:py-24">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-16 gap-16">

        {/* ═══════════════════════════════════
            LEFT COLUMN — Sticky Identity Panel
            ═══════════════════════════════════ */}
        <aside className="lg:sticky lg:top-24 self-start flex flex-col gap-8">

          {/* Avatar + Name */}
          <section className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start gap-6">
            <div className="shrink-0 overflow-hidden rounded-xl border border-border">
              <Image
                src="/profile.jpeg"
                alt="Rizal Kurnia"
                width={128}
                height={128}
                className="w-32 h-32 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col gap-3 text-center sm:text-left lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
                Rizal Kurnia
              </h1>
              <p className="font-mono text-primary text-base font-medium">
                &gt; Backend &amp; Data Engineer
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                I design and implement highly scalable backend services, resilient data pipelines,
                and intelligent infrastructure that power production workloads. Focused on
                correctness, system observability, and operational simplicity.
              </p>
            </div>
          </section>

          {/* Contact — directly below bio */}
          <section className="border-t border-slate-700/50 pt-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
              Contact
            </h2>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a
                href="mailto:rizalkurnia.me@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                Email
              </a>
              <a
                href="https://github.com/rizalkr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                GitHub
              </a>
            </div>
          </section>

          {/* Tech Stack — 2 column grid */}
          <section className="border-t border-slate-700/50 pt-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
              Tech Stack
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {techStack.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-sm shrink-0" />
                  <span className="font-mono text-sm text-slate-300">{tech}</span>
                </li>
              ))}
            </ul>
          </section>

        </aside>

        {/* ═══════════════════════════════════
            RIGHT COLUMN — Scrollable Content
            ═══════════════════════════════════ */}
        <main className="flex flex-col gap-16">

          {/* Projects */}
          <section className="space-y-8">
            <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground border-b border-border pb-2">
              Selected Projects
            </h2>
            <ProjectStack />
          </section>

        </main>

      </div>
    </div>
  );
}
