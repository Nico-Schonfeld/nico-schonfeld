import { BleedLine, HatchBand, Section } from "@/components/ui/construction";

export function About() {
  return (
    <>
      <HatchBand height="xl" variant="solid" />

      <Section>
        <h2 className="text-2xl font-bold">Sobre mí</h2>
        <BleedLine variant="solid" className="my-2" />

        <p className="dark:dark:text-[#b5b5bf] text-[#6d6d6d]">
          Me llamo Nicolás Schönfeld, soy desarrollador Full Stack con especial
          interés en el desarrollo Front-End. Tengo 25 años y vivo en Córdoba,
          Argentina. Desde 2022 participo en productos digitales para empresas.
          Me destaco por mi creatividad y por buscar constantemente mejorar e
          innovar en los proyectos en los que participo. Puedo trabajar en
          equipo, tengo comunicación efectiva y la resolución de desafíos
          complejos forman parte de cómo desarrollo cada producto.
        </p>
      </Section>
    </>
  );
}
