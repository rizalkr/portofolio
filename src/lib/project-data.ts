import { projects, type ProjectCategory, type ProjectOrigin } from "@/lib/projects";

export type { ProjectCategory, ProjectOrigin };

export interface StackProject {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  origin: ProjectOrigin;
}

export const MOCK_PROJECTS: StackProject[] = projects.map((project) => ({
  slug: project.slug,
  title: project.title,
  description: project.summary,
  category: project.category,
  origin: project.origin,
}));
