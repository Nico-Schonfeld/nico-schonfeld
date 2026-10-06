"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Construction,
  Section,
  HatchBand,
  HatchFill,
  BleedLine,
  Header,
  Footer,
} from "@/components/ui/construction";

import { CodeXmlIcon, FileIcon, MailIcon } from "lucide-react";
import { WorkExperience } from "@/components/work-experience";
import type { ExperienceItemType } from "@/components/work-experience";
import { Signature } from "@/components/signature";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "@/components/theme-swither";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from "@/components/animate-ui/components/animate/cursor";
import AnimatedGradient from "@/components/animated-gradient";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { Tilt } from "@/components/motion-primitives/tilt";
import GitHubContributionsDemo from "@/components/GithubComponent";
import { Skills } from "@/components/skills";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73A1.75 1.75 0 1 1 6.5 3.23a1.75 1.75 0 0 1 0 3.5zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77C14.4 7.18 20 7 20 10.48V19z"
      />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"
      />
    </svg>
  );
}

export default function HomePage() {
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

  const { theme } = useTheme();

  const [isOpen, setIsOpen] = React.useState(false);

  const avatarImage = "https://github.com/nico-schonfeld.png";

  const springOptions = { bounce: 0.1 };

  return (
    <>
      <Construction
        background="transparent"
        darkBackground="transparent"
        foreground="#090909"
        darkForeground="#ffffff"
        color="rgb(0 0 0 / 0.12)"
        darkColor="rgb(255 255 255 / 0.1)"
        className="z-10 relative"
      >
        <Header className="flex justify-between items-center">
          <Link
            href="/"
            className="dark:text-[#ffffff] text-[#000000] font-lastoria text-[8px]"
          >
            NS
          </Link>

          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-3 text-sm">
              <li>
                <Link
                  href="mailto:nicoschonfeld88@gmail.com"
                  className="hover:underline flex items-center gap-1"
                >
                  <MailIcon className="w-4 h-4" />
                  <span className="hidden md:block">Enviame un correo</span>
                </Link>
              </li>
            </ul>

            <ThemeSwitcher />
          </div>
        </Header>

        <BleedLine variant="solid" />

        <Section className="flex items-end justify-start gap-0 px-0 py-0">
          <div className="border">
            <Avatar
              className="w-40 h-40 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <AvatarImage src={avatarImage} />
              <AvatarFallback>NS</AvatarFallback>
            </Avatar>
          </div>

          <div className="w-full">
            <div className="w-full relative min-h-[3.7rem]">
              <HatchFill className="absolute inset-0" />
            </div>

            <div className="border w-full">
              <Signature
                text="Nico Schönfeld"
                fontSize={16}
                color={theme === "dark" ? "#ffffff" : "#000000"}
              />
            </div>
          </div>
        </Section>

        <HatchBand height="xl" variant="solid" />

        <Section>
          <h2 className="text-2xl font-bold">Contacto</h2>

          <BleedLine variant="solid" className="mb-3" />

          <div className="flex items-center gap-2">
            <Button>
              <FileIcon className="w-4 h-4" /> CV
            </Button>
            <Link
              href="https://www.linkedin.com/in/nicoschonfeld/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </Button>
            </Link>
            <Link
              href="https://github.com/nico-schonfeld"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <GithubIcon className="w-4 h-4" /> GitHub
              </Button>
            </Link>

            <Magnetic
              intensity={0.2}
              springOptions={springOptions}
              actionArea="global"
              range={250}
            >
              <Button type="button">
                <Magnetic
                  intensity={0.1}
                  springOptions={springOptions}
                  actionArea="global"
                  range={250}
                >
                  <div className="flex items-center gap-2">
                    <MailIcon className="w-4 h-4" />
                    <span>Contacto</span>
                    <span
                      className="relative flex items-center justify-center"
                      aria-label="Trabajo actual"
                    >
                      <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50" />
                      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                    </span>
                  </div>
                </Magnetic>
              </Button>
            </Magnetic>
          </div>
        </Section>
        <HatchBand height="xl" variant="solid" />

        <Section>
          <h2 className="text-2xl font-bold">Sobre mí</h2>
          <BleedLine variant="solid" />
          <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed">
            <li className="dark:dark:text-[#b5b5bf] text-[#a1a1a1]">
              ¡Hola! Me llamo Nicolás Schönfeld, soy desarrollador Full-Stack
              aunque me apasiona el Front-End. Tengo 24 años y vivo en Cruz del
              Eje, Córdoba, Argentina.
            </li>
            <li className="dark:text-[#b5b5bf] text-[#a1a1a1]">
              Soy creativo y me esfuerzo constantemente por innovar o mejorar lo
              que ya existe, con especial foco en la experiencia de usuario.
            </li>
            <li className="dark:text-[#b5b5bf] text-[#a1a1a1]">
              Construyo productos end-to-end principalmente con{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                React.js
              </strong>{" "}
              y{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                TypeScript
              </strong>{" "}
              en el frontend, y{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                Next.js
              </strong>{" "}
              o{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                Express.js
              </strong>{" "}
              en el backend, diseñando APIs REST eficientes.
            </li>
            <li className="dark:text-[#b5b5bf] text-[#a1a1a1]">
              Experiencia trabajando con bases de datos relacionales como{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                MySQL
              </strong>
              .
            </li>
            <li className="dark:text-[#b5b5bf] text-[#a1a1a1]">
              Sólidos conocimientos de{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                GIT
              </strong>{" "}
              para versionado de código,{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                Docker
              </strong>{" "}
              para ambientes reproducibles, y metodologías ágiles{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                SCRUM
              </strong>
              .
            </li>
            <li className="dark:text-[#b5b5bf] text-[#a1a1a1]">
              Manejo herramientas Atlassian como{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                Jira
              </strong>
              ,{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                Confluence
              </strong>{" "}
              y{" "}
              <strong className="font-medium dark:text-white text-black underline underline-offset-2">
                BitBucket
              </strong>
              .
            </li>
          </ul>
        </Section>

        <HatchBand height="xl" variant="solid" />
        <Section>
          <h2 className="text-2xl font-bold">Experiencia profesional</h2>
          <BleedLine variant="solid" />

          <WorkExperience experiences={WORK_EXPERIENCE} />
        </Section>
        <HatchBand height="xl" variant="solid" />
        <Section>
          <h2 className="text-2xl font-bold">Contribuciones en GitHub</h2>
          <BleedLine variant="solid" />

          <GitHubContributionsDemo />
        </Section>
        <HatchBand height="xl" variant="solid" />
        <Section>
          <h2 className="text-2xl font-bold">Habilidades</h2>
          <BleedLine variant="solid" />

          <Skills />
        </Section>
        <HatchBand height="xl" variant="solid" />
        <Section>
          <h2 className="text-2xl font-bold">Proyectos</h2>
          <BleedLine variant="solid" />
          <p>hola</p>
        </Section>

        <HatchBand height="xl" variant="solid" />
        <Footer className="flex flex-col items-center justify-center gap-4">
          <div className="my-4">
            <Signature
              text="Nico Schönfeld"
              fontSize={16}
              color={theme === "dark" ? "#ffffff" : "#000000"}
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <Button size="icon" aria-label="CV" variant="link">
              <FileIcon className="w-4 h-4" />
            </Button>
            <Link
              href="https://www.linkedin.com/in/nicoschonfeld/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="icon" aria-label="LinkedIn" variant="link">
                <LinkedinIcon className="w-4 h-4" />
              </Button>
            </Link>
            <Link
              href="https://github.com/nico-schonfeld"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="icon" aria-label="GitHub" variant="link">
                <GithubIcon className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="mailto:nicoschonfeld88@gmail.com">
              <Button size="icon" aria-label="Contacto" variant="link">
                <MailIcon className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-500">© {new Date().getFullYear()}.</p>
        </Footer>
      </Construction>

      {isOpen && (
        <AnimatePresence>
          <motion.div
            onClick={() => setIsOpen(false)}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm  items-center justify-center flex"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center p-4"
            >
              <Tilt rotationFactor={8} isRevese>
                <Image
                  src={avatarImage}
                  alt="Nico Schönfeld"
                  width={300}
                  height={3000}
                  className="rounded-sm hover:scale-125 transition-all duration-300"
                />
              </Tilt>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {isOpen ? null : (
        <CursorProvider global>
          <Cursor />
          <CursorFollow
            side="bottom"
            sideOffset={15}
            align="end"
            alignOffset={5}
          >
            Hola!
          </CursorFollow>
        </CursorProvider>
      )}

      <AnimatedGradient
        style={{
          zIndex: 0,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        config={{ preset: "Prism", opacity: 0.01 }}
      />
    </>
  );
}
