import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ProjectsPageFrame } from "@/components/projects/projects-page-frame";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Participaciones en productos digitales y proyectos personales de Nicolás Schönfeld.",
  alternates: {
    canonical: "/projects",
  },
};

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;

export default function ProjectsPage() {
  if (MAINTENANCE_MODE === "true") {
    redirect("/mantenance");
  }

  return <ProjectsPageFrame />;
}
