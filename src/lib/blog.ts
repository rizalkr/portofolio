import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  series?: string;
  part?: number;
}

export type BlogPostMeta = BlogPostFrontmatter;

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export interface SeriesNavigation {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
}

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function normalizeDate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "string") {
    return value.trim();
  }
  return "";
}

function parsePostFile(fileName: string): BlogPost {
  const fullPath = path.join(BLOG_CONTENT_DIR, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const fallbackSlug = fileName.replace(/\.mdx$/, "");
  const slug =
    typeof data.slug === "string" && data.slug.trim().length > 0
      ? data.slug.trim()
      : fallbackSlug;

  const title =
    typeof data.title === "string" && data.title.trim().length > 0
      ? data.title.trim()
      : slug;

  const excerpt =
    typeof data.excerpt === "string" ? data.excerpt.trim() : "";

  const date = normalizeDate(data.date);

  const series =
    typeof data.series === "string" && data.series.trim().length > 0
      ? data.series.trim()
      : undefined;

  const part =
    typeof data.part === "number" && Number.isFinite(data.part)
      ? data.part
      : undefined;

  return {
    title,
    date,
    excerpt,
    slug,
    ...(series !== undefined ? { series } : {}),
    ...(part !== undefined ? { part } : {}),
    content,
  };
}

function getMdxFileNames(): string[] {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return [];
  }
  return fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"));
}

function stripContent(post: BlogPost): BlogPostMeta {
  const { content: _, ...meta } = post;
  void _;
  return meta;
}

export function getAllPosts(): BlogPostMeta[] {
  const files = getMdxFileNames();

  return files
    .map((file) => stripContent(parsePostFile(file)))
    .sort((a, b) => {
      const timeA = Date.parse(a.date);
      const timeB = Date.parse(b.date);
      const validA = !Number.isNaN(timeA);
      const validB = !Number.isNaN(timeB);

      if (validA && validB && timeB !== timeA) {
        return timeB - timeA;
      }
      if (validA !== validB) {
        return validB ? 1 : -1;
      }

      const partDiff = (b.part ?? 0) - (a.part ?? 0);
      if (partDiff !== 0) {
        return partDiff;
      }

      return a.title.localeCompare(b.title);
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = getMdxFileNames();
  for (const file of files) {
    const post = parsePostFile(file);
    if (post.slug === slug) {
      return post;
    }
  }
  return null;
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getSeriesNavigation(post: BlogPostMeta): SeriesNavigation {
  if (!post.series || typeof post.part !== "number") {
    return { prev: null, next: null };
  }

  const seriesPosts = getAllPosts()
    .filter((p) => p.series === post.series && typeof p.part === "number")
    .sort((a, b) => (a.part ?? 0) - (b.part ?? 0));

  const index = seriesPosts.findIndex((p) => p.slug === post.slug);
  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? seriesPosts[index - 1] : null,
    next: index < seriesPosts.length - 1 ? seriesPosts[index + 1] : null,
  };
}

export function formatBlogDate(dateStr: string): string {
  const parsed = Date.parse(dateStr);
  if (Number.isNaN(parsed)) {
    return dateStr;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(parsed));
}
