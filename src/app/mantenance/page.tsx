import type { Metadata } from "next";
import Link from "next/link";
import { MailIcon } from "lucide-react";

import AnimatedGradient from "@/components/animated-gradient";
import { ThemeSwitcher } from "@/components/theme-swither";
import { Button } from "@/components/ui/button";
import {
  BleedLine,
  Construction,
  Footer,
  HatchBand,
  Header,
  Main,
} from "@/components/ui/construction";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Mantenimiento · Nicolás Schönfeld",
  description:
    "El portafolio está en mantenimiento. Podés escribirme por correo.",
};

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;

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

export default function MaintenancePage() {
  if (MAINTENANCE_MODE !== "true") {
    redirect("/");
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
        className="z-10 flex min-h-svh flex-col"
      >
        <Header className="flex items-center justify-between">
          <Link
            href="/"
            className="font-lastoria text-[8px] text-black dark:text-white"
          >
            NS
          </Link>
          <ThemeSwitcher />
        </Header>

        <BleedLine variant="solid" />
        <HatchBand height="xl" variant="solid" />

        <Main className="flex flex-1 flex-col justify-center gap-4 py-16">
          <p className="font-mono text-xs tracking-[0.18em] text-foreground/60 uppercase">
            En obra
          </p>
          <h1 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Mi portafolio está en mantenimiento
          </h1>
          <BleedLine variant="solid" />
          <p className="max-w-md text-base leading-relaxed text-[#a1a1a1] dark:text-[#b5b5bf]">
            Estoy actualizando la página. El correo sigue abierto si querés
            escribirme mientras tanto.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.linkedin.com/in/nicoschonfeld/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="cursor-pointer">
                <LinkedinIcon className="size-4" />
              </Button>
            </Link>
            <Link
              href="https://github.com/nico-schonfeld"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon" className="cursor-pointer">
                <GithubIcon className="size-4" />
              </Button>
            </Link>
            <Link
              href="mailto:nicoschonfeld88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer">
                <MailIcon className="size-4" />
                Contactar
              </Button>
            </Link>
          </div>
        </Main>

        <HatchBand height="xl" variant="solid" />
        <Footer className="flex items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nico Schönfeld</p>
          <p className="font-mono text-xs">mantenimiento</p>
        </Footer>
      </Construction>

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
