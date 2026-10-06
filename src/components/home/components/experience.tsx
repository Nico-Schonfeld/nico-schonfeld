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
        description: `- Desarrollo front-end con React.js y TypeScript.
- Desarrollo back-end con Next.js y Express, y consumo de APIs REST.
- Trabajo con bases de datos relacionales en MySQL.
- Versionado con Git y contenedores con Docker.
- Trabajo con Scrum y herramientas de Atlassian: Jira, Confluence y Bitbucket.`,
        skills: [
          "React.js",
          "TypeScript",
          "Next.js",
          "Express.js",
          "API REST",
          "MySQL",
          "Git",
          "Docker",
          "Scrum",
          "Jira",
          "Confluence",
          "Bitbucket",
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
        description: "Adaptación y maquetación de una plantilla en React.js.",
        skills: ["React.js", "Desarrollo front-end"],
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
        <BleedLine variant="solid" />

        <WorkExperience experiences={WORK_EXPERIENCE} />
      </Section>
    </>
  );
}
