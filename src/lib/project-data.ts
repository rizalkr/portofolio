import { projects, type ProjectCategory } from "@/lib/projects";

export type { ProjectCategory };

export interface StackProject {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
}

export const MOCK_PROJECTS: StackProject[] = projects.map((project) => ({
  slug: project.slug,
  title: project.title,
  description: project.summary,
  category: project.category,
}));
