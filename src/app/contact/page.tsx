import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ContactPageFrame } from "@/components/contact/contact-page-frame";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribile a Nicolás Schönfeld por un puesto, un proyecto o una consulta.",
  alternates: {
    canonical: "/contact",
  },
};

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;

export default function ContactPage() {
  if (MAINTENANCE_MODE === "true") {
    redirect("/mantenance");
  }

  return <ContactPageFrame />;
}
