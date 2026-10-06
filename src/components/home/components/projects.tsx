import { HatchBand, BleedLine, Section } from "@/components/ui/construction";
import { ProjectCard } from "@/components/home/components/project-card";

export function Projects() {
  return (
    <>
      <HatchBand height="xl" variant="solid" />
      <Section>
        <h2 className="text-2xl font-bold">Proyectos</h2>
        <BleedLine variant="solid" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Section>
    </>
  );
}
