"use client";

import { use, useMemo, Suspense, lazy, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MOCK_PROJECTS } from "@/components/ProjectStack";

export default function InterceptedProjectModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = use(params);
  const project = MOCK_PROJECTS.find((p) => p.slug === slug);
  const [activeSlide, setActiveSlide] = useState(0);

  const { ProjectSlides, slideCount } = useMemo(() => {
    if (!slug) return { ProjectSlides: null, slideCount: 0 };

    const componentName = slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    // We store the resolved slideCount in a ref-like variable captured by the closure
    let resolvedCount = 4;

    const Component = lazy(() =>
      import(`@/components/projects/${componentName}`)
        .then((mod) => {
          // Each project module can export SLIDE_COUNT
          if (typeof mod["SLIDE_COUNT"] === "number") {
            resolvedCount = mod["SLIDE_COUNT"];
          }
          return {
            default: mod[`${componentName}Slides`] as React.ComponentType<{
              project: typeof MOCK_PROJECTS[0];
              activeSlide: number;
            }>,
          };
        })
        .catch(() => ({
          default: () => (
            <div className="p-12 text-center text-muted-foreground">
              Komponen tidak ditemukan.
            </div>
          ),
        }))
    );

    return { ProjectSlides: Component, slideCount: resolvedCount };
  }, [slug]);

  if (!project || !ProjectSlides) return null;

  const onOpenChange = (open: boolean) => {
    if (!open) router.back();
  };

  return (
    <Dialog defaultOpen onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-3xl bg-card border-border p-0 shadow-2xl flex flex-col max-h-[90vh]">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        {/* Slide content — scrollable */}
        <div className="flex-1 overflow-y-auto">
          <Suspense
            fallback={
              <div className="min-h-[400px] flex items-center justify-center text-muted-foreground">
                Memuat proyek...
              </div>
            }
          >
            <ProjectSlides project={project} activeSlide={activeSlide} />
          </Suspense>
        </div>

        {/* Navigation bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border shrink-0">
          <Button
            variant="ghost"
            size="icon"
            disabled={activeSlide === 0}
            onClick={() => setActiveSlide((s) => s - 1)}
            className="h-9 w-9 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeSlide
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            disabled={activeSlide === slideCount - 1}
            onClick={() => setActiveSlide((s) => s + 1)}
            className="h-9 w-9 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
