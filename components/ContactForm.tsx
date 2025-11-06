"use client";

import { useActionState, useEffect, useRef } from "react";
import { contactAction } from "@/lib/contact-action";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

const initialState: FormState = { status: "idle", message: "" };

export default function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(contactAction, initialState);

  useEffect(() => {
    if (state.status === "success") {
      ref.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={ref} action={formAction} className="grid gap-4" noValidate>
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nimi
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          aria-invalid={!!state.fieldErrors?.name}
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
        />
        {state.fieldErrors?.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {state.fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          E-post
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          aria-invalid={!!state.fieldErrors?.email}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
        />
        {state.fieldErrors?.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Sõnum
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          aria-invalid={!!state.fieldErrors?.message}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={pending}
          className="bg-foreground text-background inline-flex items-center rounded-md px-4 py-2 disabled:opacity-60"
        >
          {pending ? "Saatmine…" : "Saada"}
        </button>
        <p aria-live="polite" className="text-sm">
          {state.status === "success" && <span className="text-green-700">Sõnum on saadetud.</span>}
          {state.status === "error" && <span className="text-red-700">{state.message}</span>}
        </p>
      </div>
    </form>
  );
}
