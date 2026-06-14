import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ProjectStack } from "@/components/ProjectStack";

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 lg:py-24 space-y-24">
      {/* Section 1: Hero */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="shrink-0 overflow-hidden rounded-xl border border-border">
          <Image
            src="/profile.jpeg"
            alt="Rizal Kurnia"
            width={128}
            height={128}
            className="w-32 h-32 object-cover grayscale hover:grayscale-0 transition-all duration-500"
          // If the image doesn't exist yet, standard fallback behavior applies
          />
        </div>
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            Rizal Kurnia
          </h1>
          <p className="font-mono text-primary text-lg font-medium">
            &gt; Backend &amp; Data Engineer
          </p>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            I design and implement highly scalable backend services, resilient data pipelines, and intelligent infrastructure that power production workloads. Focused on correctness, system observability, and operational simplicity.
          </p>
        </div>
      </section>

      {/* Section 2: Tech Stack */}
      <section className="space-y-6">
        <h2 className="font-mono text-sm uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2">
          Tech Stack
        </h2>
        <ul className="flex flex-col gap-3">
          {["Node.js", "Next.js", "React", "Python", "PostgreSQL", "Docker"].map((tech) => (
            <li key={tech} className="flex items-center gap-3">
              {/* Ornamen persegi kecil (terminal cursor style) */}
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-sm"></span>
              <span className="font-mono text-sm text-zinc-300">{tech}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 3: Projects */}
      <section className="space-y-8">
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground border-b border-border pb-2">
          Selected Projects
        </h2>
        <ProjectStack />
      </section>

      {/* Section 4: Contact */}
      <section className="space-y-6">
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground border-b border-border pb-2">
          Contact
        </h2>
        <div className="flex gap-6 font-mono text-sm">
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
    </div>
  );
}
