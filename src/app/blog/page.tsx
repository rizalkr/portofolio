import Link from "next/link";
import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { formatBlogDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Rizal Kurnia",
  description:
    "Engineering notes on backend systems, semantic search, model evaluation, and production hardening.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-2xl px-6 pt-16 pb-24">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <span aria-hidden>←</span>
            <span>Back to home</span>
          </Link>
          <Link href="/" aria-label="Rizal Kurnia — Home">
            <BrandLogo size="sm" showText />
          </Link>
        </div>

        <header className="mb-12 space-y-3 border-b border-zinc-800/80 pb-8">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-zinc-100">
            Blog
          </h1>
          <p className="text-sm leading-relaxed text-zinc-400">
            Technical write-ups on backend architecture, AI search, evaluation
            benchmarks, and production lessons.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="font-mono text-sm text-zinc-500">
            No articles published yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-6 transition-colors hover:border-indigo-500/50 hover:bg-zinc-900/60"
              >
                <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                  {post.series ? (
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 font-mono text-[11px] text-indigo-300">
                      <span>{post.series}</span>
                      {typeof post.part === "number" && (
                        <>
                          <span aria-hidden className="text-indigo-400/60">
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
                      className="font-mono text-xs text-zinc-500"
                    >
                      {formatBlogDate(post.date)}
                    </time>
                  )}
                </div>

                <h2 className="font-heading text-lg font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-indigo-300">
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {post.excerpt}
                  </p>
                )}

                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-indigo-400 transition-colors group-hover:text-indigo-300">
                  <span>Read article</span>
                  <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
