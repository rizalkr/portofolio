import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { mdxComponents } from "@/components/mdx-components";
import { PageAtmosphere, SubpageHeader } from "@/components/theme-toggle";
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
    <div className="relative min-h-screen overflow-x-clip bg-[#F4F1EA] text-[#1C1A17] transition-colors duration-300 selection:bg-indigo-600/15 selection:text-indigo-900 dark:bg-zinc-950 dark:text-zinc-100">
      <PageAtmosphere />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-8 pb-24 sm:px-8 sm:pt-10">
        <SubpageHeader backHref="/blog" backLabel="Back to blog" />

        <article className="rounded-2xl border border-[#DFD9CE] bg-[#FAF8F3]/95 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.04),0_1px_0_rgba(255,255,255,0.85)_inset] sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:shadow-none">
          <header className="mb-10 space-y-4 border-b border-[#DFD9CE] pb-8 dark:border-zinc-800/80">
            <div className="flex flex-wrap items-center justify-between gap-2">
              {post.series && (
                <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-600/20 bg-indigo-500/[0.07] px-2.5 py-0.5 font-mono text-[11px] text-[#4338CA] dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
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

            <h1 className="font-heading text-2xl font-bold tracking-tight text-[#1C1A17] sm:text-3xl dark:text-zinc-100">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-sm leading-relaxed text-[#57534A] dark:text-zinc-400">
                {post.excerpt}
              </p>
            )}
          </header>

          <div>{content}</div>
        </article>

        {(prev || next) && (
          <nav
            aria-label="Series navigation"
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {prev && (
              <Link
                href={`/blog/${prev.slug}`}
                className="group rounded-xl border border-[#DFD9CE] bg-[#FAF8F3]/95 p-4 shadow-[0_1px_3px_rgba(28,25,23,0.04)] transition-colors hover:border-indigo-600/45 hover:bg-[#FDFCF9] dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:shadow-none dark:hover:border-indigo-500/50 dark:hover:bg-zinc-900/60"
              >
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#7A7468] dark:text-zinc-500">
                  <ArrowLeft className="h-3 w-3" />
                  <span>
                    Previous
                    {typeof prev.part === "number" ? ` · Part ${prev.part}` : ""}
                  </span>
                </span>
                <p className="mt-1.5 text-sm font-medium text-[#1C1A17] transition-colors group-hover:text-[#4338CA] dark:text-zinc-200 dark:group-hover:text-indigo-300">
                  {prev.title}
                </p>
              </Link>
            )}

            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className={`group rounded-xl border border-[#DFD9CE] bg-[#FAF8F3]/95 p-4 text-right shadow-[0_1px_3px_rgba(28,25,23,0.04)] transition-colors hover:border-indigo-600/45 hover:bg-[#FDFCF9] dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:shadow-none dark:hover:border-indigo-500/50 dark:hover:bg-zinc-900/60 ${
                  !prev ? "sm:col-start-2" : ""
                }`}
              >
                <span className="inline-flex items-center justify-end gap-1 font-mono text-[11px] text-[#7A7468] dark:text-zinc-500">
                  <span>
                    Next
                    {typeof next.part === "number" ? ` · Part ${next.part}` : ""}
                  </span>
                  <ArrowRight className="h-3 w-3" />
                </span>
                <p className="mt-1.5 text-sm font-medium text-[#1C1A17] transition-colors group-hover:text-[#4338CA] dark:text-zinc-200 dark:group-hover:text-indigo-300">
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
