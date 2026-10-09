import { type ReactNode } from "react";
import { ExternalLinkIcon, PlusIcon } from "lucide-react";

import { SkillPills } from "@/components/skills";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from "@/components/motion-primitives/morphing-dialog";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  liveUrl?: string;
  codeUrl?: string;
  company?: {
    name: string;
    url: string;
  };
  paragraphs: string[];
  skills: string[];
};

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-zinc-950/15 px-3 py-1 text-xs text-zinc-800 underline-offset-2 hover:underline dark:border-zinc-50/15 dark:text-zinc-200"
    >
      <ExternalLinkIcon className="size-3.5 shrink-0" />
      {children}
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex w-full flex-col overflow-hidden border border-zinc-950/10 bg-white text-left dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <MorphingDialogImage
          src={project.image}
          alt={project.imageAlt}
          className="h-40 w-full object-cover"
        />
        <div className="flex flex-col gap-3 px-3 py-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                {project.title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                {project.subtitle}
              </MorphingDialogSubtitle>
            </div>
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 dark:border-zinc-50/10"
              aria-hidden="true"
            >
              <PlusIcon size={12} />
            </span>
          </div>
          <SkillPills names={project.skills} />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-125"
        >
          <MorphingDialogImage
            src={project.image}
            alt={project.imageAlt}
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
              {project.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="mt-1 text-zinc-700 dark:text-zinc-400">
              {project.subtitle}
            </MorphingDialogSubtitle>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.liveUrl ? (
                <ProjectLink href={project.liveUrl}>Visitar sitio web</ProjectLink>
              ) : null}
              {project.company ? (
                <ProjectLink href={project.company.url}>
                  Ver {project.company.name}
                </ProjectLink>
              ) : null}
              {project.codeUrl ? (
                <ProjectLink href={project.codeUrl}>Ver código</ProjectLink>
              ) : null}
            </div>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              {project.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-zinc-500">
                  {paragraph}
                </p>
              ))}
              <SkillPills className="mt-4" names={project.skills} />
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="rounded-full bg-black/60 p-1 text-white" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
