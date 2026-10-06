import { Skills } from "@/components/skills";
import { BleedLine, HatchBand, Section } from "@/components/ui/construction";

export function SkillsSection() {
  return (
    <>
      <HatchBand height="xl" variant="solid" />
      <Section>
        <h2 className="text-2xl font-bold">Habilidades</h2>
        <BleedLine variant="solid" />

        <Skills />
      </Section>
    </>
  );
}
