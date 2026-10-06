"use client";

import { useTheme } from "next-themes";

import { ContactForm } from "@/components/contact/contact-form";
import { HomeBackground } from "@/components/home/components/home-background";
import { SiteFooter } from "@/components/home/components/site-footer";
import { SiteHeader } from "@/components/home/components/site-header";
import {
  BleedLine,
  Construction,
  HatchBand,
  Main,
} from "@/components/ui/construction";

export function ContactPageFrame() {
  const { theme } = useTheme();

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
        <SiteHeader />
        <HatchBand height="xl" variant="solid" />

        <Main className="flex flex-1 flex-col justify-center gap-4 py-16">
          <h1 className="text-2xl font-semibold tracking-tight">
            Enviame un mensaje
          </h1>
          <BleedLine variant="solid" />
          <p className="text-sm leading-relaxed text-[#a1a1a1] dark:text-[#b5b5bf]">
            Escribí acá y me llega a la bandeja. Roles, trabajo freelance o una
            pregunta sobre algo que armé.
          </p>
          <ContactForm />
        </Main>

        <SiteFooter theme={theme} />
      </Construction>

      <HomeBackground />
    </>
  );
}
