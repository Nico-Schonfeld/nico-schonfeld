import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/home/components/project-card";
import { Button } from "@/components/ui/button";
import { BleedLine, HatchBand, Section } from "@/components/ui/construction";
import projects from "@/data/projects.json";

const PREVIEW_COUNT = 3;

export function Projects() {
  const preview = projects.slice(0, PREVIEW_COUNT);

  return (
    <>
      <HatchBand height="xl" variant="solid" />
      <Section>
        <h2 className="text-2xl font-bold">Proyectos</h2>
        <BleedLine variant="solid" className="my-2" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {preview.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length > PREVIEW_COUNT ? (
          <div className="mt-6 flex justify-center">
            <Button nativeButton={false} render={<Link href="/projects" />}>
              Ver todos los proyectos
              <ArrowRightIcon />
            </Button>
          </div>
        ) : null}
      </Section>
    </>
  );
}
