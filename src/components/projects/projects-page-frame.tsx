"use client";

import { useTheme } from "next-themes";

import { BackHome } from "@/components/home/components/back-home";
import { HomeBackground } from "@/components/home/components/home-background";
import { ProjectCard } from "@/components/home/components/project-card";
import { SiteFooter } from "@/components/home/components/site-footer";
import { SiteHeader } from "@/components/home/components/site-header";
import {
  BleedLine,
  Construction,
  HatchBand,
  Main,
} from "@/components/ui/construction";
import projects from "@/data/projects.json";

export function ProjectsPageFrame() {
  const { theme } = useTheme();

  return (
    <>
      <Construction
        background="transparent"
        darkBackground="transparent"
        foreground="#090909"
        darkForeground="#ffffff"
        color="rgb(0 0 0 / 0.12)"
        darkColor="rgb(255 255 255 / 0.1)"
        className="z-10 flex min-h-svh flex-col"
      >
        <SiteHeader />
        <HatchBand height="xl" variant="solid" />

        <Main className="flex flex-1 flex-col gap-4 py-16">
          <BackHome />
          <h1 className="text-2xl font-semibold tracking-tight">Proyectos</h1>
          <BleedLine variant="solid" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Main>

        <SiteFooter theme={theme} />
      </Construction>

      <HomeBackground />
    </>
  );
}
