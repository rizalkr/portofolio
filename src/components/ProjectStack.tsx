"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { StackProject } from "@/lib/project-data";

// Re-export for backward compatibility with the modal route
export { MOCK_PROJECTS } from "@/lib/project-data";
export type { StackProject } from "@/lib/project-data";

interface ProjectStackProps {
  projects: StackProject[];
  stackId: string;
}

export function ProjectStack({ projects, stackId }: ProjectStackProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const CARDS_PER_PAGE = 6;
  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);

  const currentProjects = isExpanded
    ? projects.slice(currentPage * CARDS_PER_PAGE, (currentPage + 1) * CARDS_PER_PAGE)
    : projects.slice(0, 4); // Show top 4 when collapsed

  return (
    <div className="w-full relative min-h-[300px]">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key={`${stackId}-collapsed`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative h-64 w-full max-w-sm cursor-pointer mx-auto group"
            onClick={() => setIsExpanded(true)}
          >
            {currentProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.slug}
                  layoutId={`project-card-${stackId}-${project.slug}`}
                  className="absolute top-0 left-0 w-full h-full rounded-xl border border-border bg-card p-6 shadow-xl flex flex-col justify-between"
                  style={{
                    zIndex: currentProjects.length - index,
                  }}
                  animate={{
                    scale: 1 - index * 0.05,
                    y: index * 16,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-right text-xs font-semibold text-primary/70 group-hover:text-primary transition-colors">
                    Click to expand stack →
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key={`${stackId}-expanded`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Projects ({projects.length})</h2>
              <Button variant="outline" onClick={() => {
                setIsExpanded(false);
                setCurrentPage(0);
              }}>
                Collapse Stack
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {currentProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layoutId={`project-card-${stackId}-${project.slug}`}
                  className="rounded-xl border border-border bg-card shadow-sm hover:border-primary transition-colors overflow-hidden"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Link href={`/projects/${project.slug}`} passHref className="flex flex-col h-full p-6">
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">
                      {project.description}
                    </p>
                    <div className="mt-4 text-primary text-sm font-medium hover:underline">
                      View Details →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  disabled={currentPage === 0}
                  onClick={() => setCurrentPage((p) => p - 1)}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages - 1}
                  onClick={() => setCurrentPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
