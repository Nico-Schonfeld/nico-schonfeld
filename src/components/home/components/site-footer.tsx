import Link from "next/link";

import { Signature } from "@/components/signature";
import { Footer, HatchBand } from "@/components/ui/construction";

const links = [
  {
    href: "/CV-NicoSchonfeld-2027.pdf",
    label: "CV",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/nicoschonfeld/",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/nico-schonfeld",
    label: "GitHub",
    external: true,
  },
  {
    href: "/contact",
    label: "Contacto",
    external: false,
  },
] as const;

export function SiteFooter({ theme }: { theme: string | undefined }) {
  return (
    <>
      <HatchBand height="xl" variant="solid" />
      <Footer className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="my-4 flex flex-col items-center gap-2">
          <Signature
            text="Nico Schönfeld"
            fontSize={16}
            color={theme === "dark" ? "#ffffff" : "#000000"}
          />
          <p className="text-sm text-[#a1a1a1] dark:text-[#b5b5bf]">
            Desarrollador Full Stack · Córdoba, Argentina
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="hover:underline"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Nicolás Schönfeld
        </p>
      </Footer>
    </>
  );
}
