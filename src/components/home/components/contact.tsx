import { FileIcon, MailIcon } from "lucide-react";
import Link from "next/link";

import { Magnetic } from "@/components/motion-primitives/magnetic";
import { Button } from "@/components/ui/button";
import { BleedLine, HatchBand, Section } from "@/components/ui/construction";
import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/home/components/brand-icons";

const springOptions = { bounce: 0.1 };

export function Contact() {
  return (
    <>
      <HatchBand height="xl" variant="solid" />

      <Section>
        <h2 className="text-2xl font-bold">Contacto</h2>

        <BleedLine variant="solid" className="mb-3" />

        <div className="flex items-center flex-wrap gap-2">
          <Button>
            <FileIcon className="w-4 h-4" /> CV
          </Button>
          <Link
            href="https://www.linkedin.com/in/nicoschonfeld/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </Button>
          </Link>
          <Link
            href="https://github.com/nico-schonfeld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <GithubIcon className="w-4 h-4" /> GitHub
            </Button>
          </Link>

          <Link href="/contact">
            <Magnetic
              intensity={0.2}
              springOptions={springOptions}
              actionArea="global"
              range={250}
            >
              <Button type="button" className="cursor-pointer">
                <Magnetic
                  intensity={0.1}
                  springOptions={springOptions}
                  actionArea="global"
                  range={250}
                >
                  <div className="flex items-center gap-2">
                    <MailIcon className="w-4 h-4" />
                    <span>Contacto</span>
                    <span
                      className="relative flex items-center justify-center"
                      aria-label="Trabajo actual"
                    >
                      <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50" />
                      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                    </span>
                  </div>
                </Magnetic>
              </Button>
            </Magnetic>
          </Link>
        </div>
      </Section>
    </>
  );
}
