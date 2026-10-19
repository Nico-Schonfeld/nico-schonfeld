"use server";

import { Resend } from "resend";

import { ContactEmail } from "@/emails/contact-email";
import { contactSchema } from "@/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(input: {
  name: string;
  email: string;
  message: string;
}) {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success || !process.env.RESEND_API_KEY) {
    return { ok: false as const };
  }

  const { name, email, message } = parsed.data;
  const { error } = await resend.emails.send({
    from: "Portafolio de Nicolás Schönfeld <portfolio@nicoschonfeld.com>",
    to: "nicoschonfeld88@gmail.com",
    replyTo: email,
    subject: `Mensaje de ${name}`,
    react: ContactEmail({ name, email, message }),
    text: `${name} (${email})\n\n${message}`,
  });

  if (error) {
    console.error("No se pudo enviar el mensaje de contacto:", error.message);
    return { ok: false as const };
  }

  return { ok: true as const };
}
