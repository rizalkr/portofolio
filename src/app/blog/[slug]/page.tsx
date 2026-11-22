import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import {
  formatBlogDate,
  getAllPostSlugs,
  getPostBySlug,
  getSeriesNavigation,
} from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found — Rizal Kurnia" };
  }

  return {
    title: `${post.title} — Rizal Kurnia`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const { prev, next } = getSeriesNavigation(post);

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-2xl px-6 pt-16 pb-24">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-300"
        >
          <span aria-hidden>←</span>
          <span>Back to blog</span>
        </Link>

        <article>
          <header className="mb-10 space-y-4 border-b border-zinc-800/80 pb-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              {post.series && (
                <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-[11px] text-indigo-300">
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

            <h1 className="font-heading text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-sm leading-relaxed text-zinc-400">
                {post.excerpt}
              </p>
            )}
          </header>

          <div>{content}</div>
        </article>

        {(prev || next) && (
          <nav
            aria-label="Series navigation"
            className="mt-14 grid grid-cols-1 gap-4 border-t border-zinc-800/80 pt-8 sm:grid-cols-2"
          >
            {prev && (
              <Link
                href={`/blog/${prev.slug}`}
                className="group rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4 transition-colors hover:border-indigo-500/50 hover:bg-zinc-900/60"
              >
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-zinc-500">
                  <span aria-hidden>←</span>
                  <span>
                    Previous
                    {typeof prev.part === "number" ? ` · Part ${prev.part}` : ""}
                  </span>
                </span>
                <p className="mt-1.5 text-sm font-medium text-zinc-200 transition-colors group-hover:text-indigo-300">
                  {prev.title}
                </p>
              </Link>
            )}

            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className={`group rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4 text-right transition-colors hover:border-indigo-500/50 hover:bg-zinc-900/60 ${
                  !prev ? "sm:col-start-2" : ""
                }`}
              >
                <span className="inline-flex items-center justify-end gap-1 font-mono text-[11px] text-zinc-500">
                  <span>
                    Next
                    {typeof next.part === "number" ? ` · Part ${next.part}` : ""}
                  </span>
                  <span aria-hidden>→</span>
                </span>
                <p className="mt-1.5 text-sm font-medium text-zinc-200 transition-colors group-hover:text-indigo-300">
                  {next.title}
                </p>
              </Link>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
