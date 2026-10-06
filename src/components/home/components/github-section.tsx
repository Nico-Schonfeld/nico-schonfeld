import GitHubContributionsDemo from "@/components/GithubComponent";
import { BleedLine, HatchBand, Section } from "@/components/ui/construction";

export function GitHubSection() {
  return (
    <>
      <HatchBand height="xl" variant="solid" />
      <Section>
        <h2 className="text-2xl font-bold">Contribuciones en GitHub</h2>
        <BleedLine variant="solid" />

        <GitHubContributionsDemo />
      </Section>
    </>
  );
}
