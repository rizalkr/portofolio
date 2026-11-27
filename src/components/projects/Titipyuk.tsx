import { Bot, Lock, MailCheck, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectOriginBadge } from "@/components/project-origin-badge";
import type { ProjectOrigin } from "@/lib/projects";

export const SLIDE_COUNT = 4;

export function TitipyukSlides({
  project,
  activeSlide,
}: {
  project: { title: string; origin: ProjectOrigin };
  activeSlide: number;
}) {
  const features = [
    {
      Icon: Lock,
      title: "Middleware Auth & RBAC",
      desc: "Protected Next.js App Router routes backed by httpOnly session cookies and Supabase Auth.",
    },
    {
      Icon: Bot,
      title: "Lunos AI Streaming Chat",
      desc: "Real-time token streaming across 4 REST endpoints with per-user conversation persistence and domain context.",
    },
    {
      Icon: MailCheck,
      title: "Custom Bcrypt Email OTP",
      desc: "6-digit OTP via Mailry API, stored as a bcrypt hash with a 10-minute TTL and 60-second rate limiting.",
    },
    {
      Icon: ShieldCheck,
      title: "Row-Level Security (RLS)",
      desc: "Strict PostgreSQL RLS policies isolating user bookings and chat logs without exposing service-role keys.",
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
              <Badge variant="secondary" className="font-mono">Next.js 14</Badge>
              <Badge variant="secondary" className="font-mono">TypeScript</Badge>
              <Badge variant="secondary" className="font-mono">Supabase</Badge>
              <Badge variant="secondary" className="font-mono">Lunos AI</Badge>
              <Badge variant="secondary" className="font-mono">Vercel</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            End-to-end luggage storage platform built with Next.js 14 and
            Supabase. Replaces default confirmation links with a custom{" "}
            <strong className="text-primary">6-digit Email OTP</strong> hashed
            via bcrypt and dispatched through Mailry API. Includes a
            domain-tuned{" "}
            <strong className="text-primary">Lunos AI assistant</strong> that
            streams responses in real time and stores conversation threads per
            authenticated user.
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
          <h3 className="text-xl font-heading font-bold text-primary">Tech &amp; API</h3>
          <div className="flex flex-col divide-y divide-border">
            {[
              { label: "Framework", value: "Next.js 14 (App Router)" },
              { label: "Database & Auth", value: "Supabase (PostgreSQL + RLS)" },
              { label: "AI Model", value: "Lunos (OpenAI Compatible)" },
              { label: "Email Service", value: "Mailry API" },
              { label: "Chat Endpoints", value: "4 REST API (stream, history, conversations)" },
              { label: "Deployment", value: "Vercel" },
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
              <a href="https://titipyuk-delta.vercel.app/" target="_blank" rel="noreferrer">
                Open Live App
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full font-mono font-bold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a
                href="https://github.com/rizalkr/titipyuk"
                target="_blank"
                rel="noreferrer"
              >
                View Source on GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
