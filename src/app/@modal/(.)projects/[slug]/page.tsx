"use client";

import { use, useMemo, Suspense, lazy } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MOCK_PROJECTS } from "@/components/ProjectStack";

export default function InterceptedProjectModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = use(params);
  const project = MOCK_PROJECTS.find((p) => p.slug === slug);

  // Convert slug "data-lakehouse" to "DataLakehouse"
  const ProjectSlides: React.ComponentType<{ project: typeof MOCK_PROJECTS[0] }> | null = useMemo(() => {
    if (!slug) return null;
    const componentName = slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
      
    // Dynamically import the component file
    return lazy(() =>
      import(`@/components/projects/${componentName}`)
        .then((mod) => ({ default: mod[`${componentName}Slides`] }))
        .catch(() => ({ default: () => <div className="p-12 text-center text-muted-foreground">Komponen tidak ditemukan.</div> }))
    );
  }, [slug]);

  if (!project || !ProjectSlides) return null;

  const onOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog defaultOpen onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <Carousel className="w-full h-full relative" opts={{ watchDrag: false }}>
          <CarouselContent className="h-[400px]">
            <Suspense fallback={<div className="p-12 text-muted-foreground w-full flex items-center justify-center">Memuat proyek...</div>}>
              <ProjectSlides project={project} />
            </Suspense>
          </CarouselContent>

          <div className="absolute bottom-6 right-6 flex gap-2">
            <CarouselPrevious className="static translate-y-0 translate-x-0 h-10 w-10 border-border bg-card text-foreground hover:bg-muted" />
            <CarouselNext className="static translate-y-0 translate-x-0 h-10 w-10 border-border bg-card text-foreground hover:bg-muted" />
          </div>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
