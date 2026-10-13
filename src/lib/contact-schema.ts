import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribí tu nombre completo."),
  email: z.string().trim().email("Ingresá un correo válido."),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje tiene que tener al menos 10 caracteres."),
});

export type ContactValues = z.infer<typeof contactSchema>;
