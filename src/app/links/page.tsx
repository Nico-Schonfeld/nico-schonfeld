import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { LinksPageFrame } from "@/components/links/links-page-frame";

export const metadata: Metadata = {
  title: "Enlaces",
  description:
    "VSCO, portafolio, Instagram y contacto de Nicolás Schönfeld.",
  alternates: {
    canonical: "/links",
  },
};

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;

export default function LinksPage() {
  if (MAINTENANCE_MODE === "true") {
    redirect("/mantenance");
  }

  return <LinksPageFrame />;
}
