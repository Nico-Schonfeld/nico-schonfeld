import { FileIcon, MailIcon } from "lucide-react";
import Link from "next/link";

import { GithubIcon, LinkedinIcon } from "@/components/home/components/brand-icons";
import { Signature } from "@/components/signature";
import { Button } from "@/components/ui/button";
import { Footer, HatchBand } from "@/components/ui/construction";

export function SiteFooter({ theme }: { theme: string | undefined }) {
  return (
    <>
      <HatchBand height="xl" variant="solid" />
      <Footer className="flex flex-col items-center justify-center gap-4">
        <div className="my-4">
          <Signature
            text="Nico Schönfeld"
            fontSize={16}
            color={theme === "dark" ? "#ffffff" : "#000000"}
          />
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button size="icon" aria-label="CV" variant="link">
            <FileIcon className="w-4 h-4" />
          </Button>
          <Link
            href="https://www.linkedin.com/in/nicoschonfeld/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="icon" aria-label="LinkedIn" variant="link">
              <LinkedinIcon className="w-4 h-4" />
            </Button>
          </Link>
          <Link
            href="https://github.com/nico-schonfeld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="icon" aria-label="GitHub" variant="link">
              <GithubIcon className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="mailto:nicoschonfeld88@gmail.com">
            <Button size="icon" aria-label="Contacto" variant="link">
              <MailIcon className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <p className="text-sm text-gray-500">© {new Date().getFullYear()}.</p>
      </Footer>
    </>
  );
}
