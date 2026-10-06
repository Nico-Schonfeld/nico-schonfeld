"use client";

import { useState } from "react";
import { z } from "zod";

import { SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Escribí tu nombre completo."),
  email: z.string().trim().email("Ingresá un correo válido."),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje tiene que tener al menos 10 caracteres."),
});

type ContactValues = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactValues, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = contactSchema.safeParse({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    });

    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (
          typeof field === "string" &&
          !nextErrors[field as keyof ContactValues]
        ) {
          nextErrors[field as keyof ContactValues] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
  }

  return (
    <form
      className="flex w-full flex-col gap-5"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Tu nombre</Label>
        <Input
          id="name"
          name="name"
          placeholder="Nicolás Schönfeld"
          autoComplete="name"
          className="h-10 rounded-md bg-muted/40 px-3 dark:bg-input/40"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Tu correo</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="vos@ejemplo.com"
          autoComplete="email"
          className="h-10 rounded-md bg-muted/40 px-3 dark:bg-input/40"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Tu mensaje</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="¿Qué estás armando y en qué te ayudo?"
          className="min-h-28 rounded-md bg-muted/40 px-3 py-2.5 dark:bg-input/40"
          aria-invalid={Boolean(errors.message)}
          aria-describedby="message-hint"
        />
        <p
          id="message-hint"
          className={
            errors.message
              ? "text-sm text-destructive"
              : "text-sm text-muted-foreground"
          }
        >
          {errors.message ??
            "Al menos 10 caracteres para saber qué necesitás."}
        </p>
      </div>

      <Button
        type="submit"
        variant="secondary"
        className="h-11 w-full rounded-md"
      >
        <SendIcon />
        Enviar mensaje
      </Button>
    </form>
  );
}
