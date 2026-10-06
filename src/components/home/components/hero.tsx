import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HatchFill, Section } from "@/components/ui/construction";
import { Signature } from "@/components/signature";

export const AVATAR_IMAGE = "https://github.com/nico-schonfeld.png";

export function Hero({
  isMobile,
  theme,
  onOpenAvatar,
}: {
  isMobile: boolean;
  theme: string | undefined;
  onOpenAvatar: () => void;
}) {
  return (
    <Section className="flex items-end justify-start gap-0 px-0 py-0">
      <div className="border">
        <Avatar
          className="md:w-40 md:h-40 w-20 h-20 cursor-pointer"
          onClick={onOpenAvatar}
        >
          <AvatarImage src={AVATAR_IMAGE} />
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
            fontSize={isMobile ? 12 : 16}
            color={theme === "dark" ? "#ffffff" : "#000000"}
          />
        </div>
      </div>
    </Section>
  );
}
