import { getProjectBySlug, projects } from "@/lib/projects";
import { BrandLogo } from "@/components/brand-logo";
import { ProjectDetail } from "@/components/project-detail";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Portfolio`,
    description: project.summary,
  };
}

export default async function StandaloneProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-2xl px-6 pt-16 pb-24">
        {/* Top bar */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <span aria-hidden>←</span>
            <span>Back to projects</span>
          </Link>
          <Link href="/" aria-label="Rizal Kurnia — Home">
            <BrandLogo size="sm" showText />
          </Link>
        </div>

        <ProjectDetail project={project} />
      </div>
    </div>
  );
}
