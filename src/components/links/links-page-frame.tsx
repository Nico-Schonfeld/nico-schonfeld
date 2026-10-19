"use client";

import { GlobeIcon, MailIcon } from "lucide-react";
import { useTheme } from "next-themes";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  VscoIcon,
} from "@/components/home/components/brand-icons";
import { HomeBackground } from "@/components/home/components/home-background";
import { Signature } from "@/components/signature";
import {
  Construction,
  HatchBand,
  HatchFill,
  Main,
} from "@/components/ui/construction";

const links = [
  {
    label: "VSCO",
    href: "https://vsco.co/nicoschonfeld08/gallery",
    display: "vsco.co/nicoschonfeld08/gallery",
    external: true,
    Icon: VscoIcon,
    view: true,
  },
  {
    label: "Portafolio",
    href: "https://nicoschonfeld.com",
    display: "nicoschonfeld.com",
    external: false,
    Icon: GlobeIcon,
    view: true,
  },

  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicoschonfeld/",
    display: "linkedin.com/in/nicoschonfeld",
    external: true,
    Icon: LinkedinIcon,
    view: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/nico-schonfeld",
    display: "github.com/nico-schonfeld",
    external: true,
    Icon: GithubIcon,
    view: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nicoschonfeld_/",
    display: "instagram.com/nicoschonfeld_",
    external: true,
    Icon: InstagramIcon,
    view: true,
  },
  {
    label: "Contacto",
    href: "/contact",
    display: "nicoschonfeld.com/contact",
    external: false,
    Icon: MailIcon,
    view: true,
  },
] as const;

const visibleLinks = links.filter((link) => link.view);

export function LinksPageFrame() {
  const { theme } = useTheme();
  const signatureColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <>
      <Construction
        background="transparent"
        darkBackground="transparent"
        foreground="#090909"
        darkForeground="#ffffff"
        color="rgb(0 0 0 / 0.12)"
        darkColor="rgb(255 255 255 / 0.1)"
        className="z-10 flex min-h-svh flex-col"
      >
        <HatchBand height="xl" variant="solid" />

        <Main
          animate={false}
          className="flex w-full flex-col items-center gap-8 pt-6 pb-10"
        >
          <div className="flex h-[62px] w-full items-center justify-center md:hidden">
            <Signature
              text="Nico Schönfeld"
              fontSize={12}
              color={signatureColor}
              compact
              className="block h-[62px] max-w-full"
            />
          </div>
          <div className="hidden h-[100px] w-full items-center justify-center md:flex">
            <Signature
              text="Nico Schönfeld"
              fontSize={16}
              color={signatureColor}
              className="block h-[100px] max-w-full"
            />
          </div>

          <ul className="flex w-full flex-col gap-2">
            {visibleLinks.map((link) => (
              <li key={link.label} className="border">
                <a
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <link.Icon className="size-5 shrink-0" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">
                      {link.label}
                    </span>
                    <span className="block truncate text-xs text-[#a1a1a1] dark:text-[#b5b5bf]">
                      {link.display}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Main>

        <div className="relative min-h-16 flex-1">
          <HatchFill className="absolute inset-0 hidden" />
        </div>
      </Construction>

      <HomeBackground />
    </>
  );
}
