import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ProjectsPageFrame } from "@/components/projects/projects-page-frame";

export const metadata: Metadata = {
  title: "Proyectos · Nicolás Schönfeld",
  description:
    "Participaciones en 25Watts y proyectos personales de Nicolás Schönfeld.",
};

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;

export default function ProjectsPage() {
  if (MAINTENANCE_MODE === "true") {
    redirect("/mantenance");
  }

  return <ProjectsPageFrame />;
}
