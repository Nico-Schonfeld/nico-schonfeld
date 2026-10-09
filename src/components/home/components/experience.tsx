import { CodeXmlIcon } from "lucide-react";

import { WorkExperience } from "@/components/work-experience";
import type { ExperienceItemType } from "@/components/work-experience";
import { BleedLine, HatchBand, Section } from "@/components/ui/construction";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "25watts",
    companyName: "25Watts",
    companyWebsite: "https://25watts.com.ar/",
    isCurrentEmployer: true,
    positions: [
      {
        id: "25watts-fullstack",
        title: "Desarrollador Full Stack",
        employmentPeriod: { start: "11.2023" },
        employmentType: "Jornada completa",
        icon: <CodeXmlIcon />,
        isExpanded: true,
        description:
          "Actualmente desarrollo e implemento sitios, aplicaciones y paneles para distintos clientes, tanto en Front-End como en Back-End. Trabajo de manera colaborativa con equipos interdisciplinarios en el análisis de requerimientos, la optimización de procesos y la creación de soluciones que mejoran la experiencia del usuario.",
        skills: [
          "Next.js",
          "React.js",
          "TypeScript",
          "MySQL",
          "AWS",
          "Docker",
          "API REST",
          "Express.js",
          "Git",
          "Scrum",
          "Herramientas Atlassian",
        ],
      },
    ],
  },
  {
    id: "nutrixya",
    companyName: "Nutrixya",
    positions: [
      {
        id: "nutrixya-frontend",
        title: "Desarrollador Front-End",
        employmentPeriod: { start: "03.2022", end: "10.2023" },
        employmentType: "Jornada completa",
        icon: <CodeXmlIcon />,
        isExpanded: true,
        description:
          "Participé como desarrollador Front-End en esta startup de nutrición inteligente para cultivos y fertilización. Me encargaba del diseño y el maquetado del sistema con React.js, SASS y Bootstrap 5, colaboré en la integración con bases de datos y en la documentación técnica del proyecto.",
        skills: ["React.js", "SASS", "Bootstrap 5"],
      },
    ],
  },
];

export function Experience() {
  return (
    <>
      <HatchBand height="xl" variant="solid" />
      <Section>
        <h2 className="text-2xl font-bold">Experiencia profesional</h2>
        <BleedLine variant="solid" className="my-2" />

        <WorkExperience experiences={WORK_EXPERIENCE} />
      </Section>
    </>
  );
}
