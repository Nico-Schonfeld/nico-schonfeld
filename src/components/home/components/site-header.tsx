"use client";

import { MailIcon } from "lucide-react";
import Link from "next/link";

import { ThemeSwitcher } from "@/components/theme-swither";
import { BleedLine, Header } from "@/components/ui/construction";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <Header className="flex justify-between items-center">
        <Link
          href="/"
          className="dark:text-[#ffffff] text-[#000000] font-lastoria text-[8px]"
        >
          NS
        </Link>

        <div className="flex items-center gap-4">
          {pathname === "/contact" ? null : (
            <ul className="flex items-center gap-3 text-sm">
              <li>
                <Link
                  href="mailto:nicoschonfeld88@gmail.com"
                  className="hover:underline flex items-center gap-1"
                >
                  <MailIcon className="w-4 h-4" />
                  <span className="hidden md:block">Enviame un correo</span>
                </Link>
              </li>
            </ul>
          )}

          <ThemeSwitcher />
        </div>
      </Header>

      <BleedLine variant="solid" />
    </>
  );
}
