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
    <Section className="flex flex-col gap-0 px-0 py-0">
      <div className="relative h-9 w-full md:hidden">
        <HatchFill className="absolute inset-0" />
      </div>

      <div className="flex items-start gap-0 md:items-end">
        <div className="border">
          <Avatar
            className="size-28 cursor-pointer md:size-40"
            onClick={onOpenAvatar}
          >
            <AvatarImage src={AVATAR_IMAGE} />
            <AvatarFallback>NS</AvatarFallback>
          </Avatar>
        </div>

        <div className="min-w-0 flex-1">
          <div className="relative hidden h-9 w-full md:block">
            <HatchFill className="absolute inset-0" />
          </div>

          <div className="flex w-full flex-col border">
            <Signature
              text="Nico Schönfeld"
              fontSize={isMobile ? 12 : 16}
              color={theme === "dark" ? "#ffffff" : "#000000"}
              compact={isMobile}
              className="block h-auto max-w-full"
            />
            <p className="dark:dark:text-[#b5b5bf] text-[#a1a1a1] text-ms px-3 border-t">
              Desarrollador Full Stack · Next.js y TypeScript
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
