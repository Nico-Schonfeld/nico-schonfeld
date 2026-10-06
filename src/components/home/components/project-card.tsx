import { CodeXmlIcon, PlusIcon } from "lucide-react";

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

const projectSkills = ["TypeScript", "React", "Next.js", "Tailwind CSS"];

export function ProjectCard() {
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
          src="/proyect_example.png"
          alt="Tablero de Icodraw, un SaaS para capturar la pantalla, recortar y anotar."
          className="h-40 w-full object-cover"
        />
        <div className="flex flex-col gap-3 px-3 py-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                Icodraw
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                SaaS de ejemplo para capturar y anotar la pantalla.
              </MorphingDialogSubtitle>
            </div>
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 dark:border-zinc-50/10"
              aria-hidden="true"
            >
              <PlusIcon size={12} />
            </span>
          </div>
          <SkillPills names={projectSkills} />
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
            src="/proyect_example.png"
            alt="Tablero de Icodraw, un SaaS para capturar la pantalla, recortar y anotar."
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                Icodraw
              </MorphingDialogTitle>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-950/10 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-50/10 dark:text-zinc-300">
                  <span className="size-2 rounded-full bg-green-500" />
                  Live
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-950/10 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-50/10 dark:text-zinc-300">
                  <CodeXmlIcon className="size-3.5" />
                  Code
                </span>
              </div>
            </div>
            <MorphingDialogSubtitle className="mt-1 text-zinc-700 dark:text-zinc-400">
              Captura de pantalla y anotación, directo en el navegador.
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-3 text-zinc-500">
                Proyecto de ejemplo: un SaaS liviano para recortar lo que se ve
                en pantalla, marcarlo y exportarlo sin instalar nada. Sirve
                para documentar un bug, señalar un flujo o armar una guía visual
                en el momento.
              </p>
              <p className="mt-2 text-zinc-500">
                El tablero reúne recorte, formas, texto y una barra de fondos.
                Antes de descargar se ajustan el desenfoque, el formato y la
                paleta del marco.
              </p>
              <SkillPills className="mt-4" names={projectSkills} />
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="rounded-full bg-black/60 p-1 text-white" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
