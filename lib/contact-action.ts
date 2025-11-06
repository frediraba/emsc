"use server";

import { contactSchema } from "@/lib/validation";
import resend from "@/lib/resend";
import { headers } from "next/headers";

const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 min
const RATE_LIMIT_MAX = 3; // max requests per window per IP
const rateMap = new Map<string, { count: number; start: number }>();

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

export async function contactAction(_: FormState, formData: FormData): Promise<FormState> {
  const data = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    message: String(formData.get("message") || ""),
    company: String(formData.get("company") || ""), // honeypot
  };

  if (data.company && data.company.trim().length > 0) {
    return { status: "success", message: "OK" };
  }

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Vigased andmed.", fieldErrors };
  }

  const to = process.env.CONTACT_TO;
  if (!to) {
    return {
      status: "error",
      message: "Serveri seadistus puudub (CONTACT_TO)",
    };
  }

  try {
    // Basic host check
    const hdrs = await headers();
    const host = hdrs.get("host") || "";
    const allowed = process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL).host
      : undefined;
    if (allowed && host && host !== allowed) {
      return { status: "error", message: "Päringu päritolu ei ole lubatud." };
    }

    // Rate limit by IP
    const ip = (hdrs.get("x-forwarded-for") || hdrs.get("x-real-ip") || "unknown")
      .split(",")[0]
      .trim();
    const now = Date.now();
    const rec = rateMap.get(ip);
    if (!rec || now - rec.start > RATE_LIMIT_WINDOW_MS) {
      rateMap.set(ip, { count: 1, start: now });
    } else if (rec.count >= RATE_LIMIT_MAX) {
      return {
        status: "error",
        message: "Liiga palju päringuid. Proovi mõne minuti pärast uuesti.",
      };
    } else {
      rec.count += 1;
      rateMap.set(ip, rec);
    }

    await resend.emails.send({
      from: "EMSC <noreply@emsc.ee>",
      to,
      replyTo: parsed.data.email,
      subject: `Uus päring: ${parsed.data.name}`,
      text: `Nimi: ${parsed.data.name}\nE-post: ${parsed.data.email}\n\nSõnum:\n${parsed.data.message}`,
    });

    return { status: "success", message: "Sõnum on saadetud." };
  } catch (err) {
    console.error("Resend error", err);
    return { status: "error", message: "Saatmine ebaõnnestus. Palun proovi hiljem uuesti." };
  }
}
