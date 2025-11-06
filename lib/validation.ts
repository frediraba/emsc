import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Palun sisesta nimi.")
    .max(100, "Nimi on liiga pikk."),
  email: z.string().trim().email("Palun sisesta kehtiv e-post."),
  message: z
    .string()
    .trim()
    .min(10, "Sõnum peab olema vähemalt 10 märki.")
    .max(2000, "Sõnum on liiga pikk."),
  company: z.string().optional(), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;
