import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageAtmosphere, SiteFooter, SubpageHeader } from "@/components/theme-toggle";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Rizal Kurnia",
  description:
    "Engineering notes on backend systems, semantic search, model evaluation, and production hardening.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#F4F1EA] text-[#1C1A17] transition-colors duration-300 selection:bg-indigo-600/15 selection:text-indigo-900 dark:bg-zinc-950 dark:text-zinc-100">
      <PageAtmosphere />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-8 pb-24 sm:px-8 sm:pt-10">
        <SubpageHeader backHref="/" backLabel="Back to home" />

        <header className="mb-10 space-y-3 border-b border-[#DFD9CE] pb-8 dark:border-zinc-800/80">
          <p className="font-mono text-xs uppercase tracking-widest text-[#7A7468] dark:text-zinc-500">
            Engineering Writing
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-[#1C1A17] dark:text-zinc-100">
            Blog
          </h1>
          <p className="text-sm leading-relaxed text-[#57534A] dark:text-zinc-400">
            Post-mortems and architecture notes on context engineering,
            fine-tuning 7B models without local GPUs, and production hardening.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="font-mono text-sm text-[#7A7468] dark:text-zinc-500">
            No articles published yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-[#DFD9CE] bg-[#FAF8F3]/95 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.04),0_1px_0_rgba(255,255,255,0.8)_inset] transition-colors duration-150 hover:border-indigo-600/45 hover:bg-[#FDFCF9] dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:shadow-none dark:hover:border-indigo-500/50 dark:hover:bg-zinc-900/60"
              >
                <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                  {post.series ? (
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-600/20 bg-indigo-500/[0.07] px-2 py-0.5 font-mono text-[11px] text-[#4338CA] dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
                      <span>{post.series}</span>
                      {typeof post.part === "number" && (
                        <>
                          <span aria-hidden className="opacity-50">
                            ·
                          </span>
                          <span>Part {post.part}</span>
                        </>
                      )}
                    </span>
                  ) : (
                    <span />
                  )}

                  {post.date && (
                    <time
                      dateTime={post.date}
                      className="font-mono text-xs tabular-nums text-[#7A7468] dark:text-zinc-500"
                    >
                      {formatBlogDate(post.date)}
                    </time>
                  )}
                </div>

                <h2 className="font-heading text-lg font-semibold tracking-tight text-[#1C1A17] transition-colors group-hover:text-[#4338CA] dark:text-zinc-100 dark:group-hover:text-indigo-300">
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p className="mt-2 text-sm leading-relaxed text-[#57534A] dark:text-zinc-400">
                    {post.excerpt}
                  </p>
                )}

                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-[#4338CA] transition-colors group-hover:text-indigo-600 dark:text-indigo-400 dark:group-hover:text-indigo-300">
                  <span>Read article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        )}

        <SiteFooter />
      </div>
    </div>
  );
}
