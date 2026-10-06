"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";

import { About } from "@/components/home/components/about";
import { AvatarLightbox } from "@/components/home/components/avatar-lightbox";
import { Contact } from "@/components/home/components/contact";
import { Experience } from "@/components/home/components/experience";
import { GitHubSection } from "@/components/home/components/github-section";
import { Hero } from "@/components/home/components/hero";
import { HomeBackground } from "@/components/home/components/home-background";
import { HomeCursor } from "@/components/home/components/home-cursor";
import { Projects } from "@/components/home/components/projects";
import { SiteFooter } from "@/components/home/components/site-footer";
import { SiteHeader } from "@/components/home/components/site-header";
import { SkillsSection } from "@/components/home/components/skills-section";
import { useMedia } from "@/components/home/use-media";
import { Construction } from "@/components/ui/construction";

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;

export default function HomePage() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 768px)");

  if (MAINTENANCE_MODE === "true") {
    redirect("/mantenance");
  }

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
        <SiteHeader />
        <Hero
          isMobile={isMobile}
          theme={theme}
          onOpenAvatar={() => setIsOpen(true)}
        />
        <Contact />
        <About />
        <Experience />
        <GitHubSection />
        <SkillsSection />
        <Projects />
        <SiteFooter theme={theme} />
      </Construction>

      <AvatarLightbox open={isOpen} onClose={() => setIsOpen(false)} />
      <HomeCursor hidden={isOpen || isMobile} />
      <HomeBackground />
    </>
  );
}
