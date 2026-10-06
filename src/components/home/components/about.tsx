import { BleedLine, HatchBand, Section } from "@/components/ui/construction";

export function About() {
  return (
    <>
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
    </>
  );
}
