import {
  PortfolioMonolith,
  type PortfolioBlogItem,
  type PortfolioProjectItem,
} from "@/components/portfolio-monolith";
import { formatBlogDate, getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const portfolioProjects: PortfolioProjectItem[] = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    category: project.category,
    origin: project.origin,
    summary: project.summary,
    role: project.role,
    year: project.year,
    status: project.status,
    metrics: project.metrics,
    tech: project.tech,
    repoUrl: project.repoUrl,
    blogLink: project.blogLink,
  }));

  const allPosts = getAllPosts();
  const latestPosts: PortfolioBlogItem[] = allPosts.slice(0, 4).map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    formattedDate: post.date ? formatBlogDate(post.date) : "",
    series: post.series,
    part: post.part,
  }));

  return (
    <PortfolioMonolith
      projects={portfolioProjects}
      posts={latestPosts}
      totalPosts={allPosts.length}
    />
  );
}
