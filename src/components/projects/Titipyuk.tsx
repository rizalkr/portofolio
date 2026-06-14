import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const SLIDE_COUNT = 4;

export function TitipyukSlides({
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
              <Badge variant="secondary" className="font-mono">Next.js 14</Badge>
              <Badge variant="secondary" className="font-mono">TypeScript</Badge>
              <Badge variant="secondary" className="font-mono">Supabase</Badge>
              <Badge variant="secondary" className="font-mono">Lunos AI</Badge>
              <Badge variant="secondary" className="font-mono">Vercel</Badge>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Platform layanan penitipan barang yang dibangun secara{" "}
            <strong className="text-primary">end-to-end</strong> dengan Next.js 14 dan
            Supabase. Sistem memiliki alur autentikasi lengkap dengan{" "}
            <strong className="text-primary">Email OTP custom</strong> yang diverifikasi
            menggunakan bcrypt dan dikirim via Mailry API — menggantikan email konfirmasi
            default Supabase. Fitur unggulan berupa Chatbot AI Lunos yang mendukung
            streaming token real-time dengan persistensi riwayat percakapan per user.
          </p>
        </div>
      )}

      {activeSlide === 1 && (
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-heading font-bold text-primary">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🔐",
                title: "Auth System",
                desc: "Sign Up, Login, protected routes via Next.js middleware dengan session cookies httpOnly.",
              },
              {
                icon: "🤖",
                title: "Chatbot Lunos AI",
                desc: "Streaming token real-time, riwayat percakapan tersimpan per user, konteks khusus domain TitipYuk.",
              },
              {
                icon: "📧",
                title: "Email OTP Custom",
                desc: "OTP 6 digit, disimpan hashed (bcrypt), masa berlaku 10 menit, rate limit 1 request/60 detik.",
              },
              {
                icon: "🛡️",
                title: "Security First",
                desc: "RLS policies aktif, service role key tidak di-expose ke client, generic error response.",
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
          <h3 className="text-xl font-heading font-bold text-primary">Tech & API</h3>
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
                Visit Live Web
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
                GitHub Repo
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
