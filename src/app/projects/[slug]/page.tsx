import { getProjectBySlug, projects } from "@/lib/projects";
import { ProjectDetail } from "@/components/project-detail";
import { PageAtmosphere, SiteFooter, SubpageHeader } from "@/components/theme-toggle";
import { notFound } from "next/navigation";
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
    title: `${project.title} — Rizal Kurnia`,
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
    <div className="relative min-h-screen overflow-x-clip bg-[#F4F1EA] text-[#1C1A17] transition-colors duration-300 selection:bg-indigo-600/15 selection:text-indigo-900 dark:bg-zinc-950 dark:text-zinc-100">
      <PageAtmosphere />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-8 pb-24 sm:px-8 sm:pt-10">
        <SubpageHeader backHref="/" backLabel="Back to projects" />

        <div className="rounded-2xl border border-[#DFD9CE] bg-[#FAF8F3]/95 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.04),0_1px_0_rgba(255,255,255,0.85)_inset] sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/35 dark:shadow-none">
          <ProjectDetail project={project} />
        </div>

        <SiteFooter />
      </div>
    </div>
  );
}
