import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().min(5).max(2000),
  // Honeypot field — must be empty
  website: z.string().max(0).optional().default(""),
  // Time-to-fill (ms). Anything under 1.5s is treated as a bot.
  elapsedMs: z.number().int().nonnegative().optional().default(0),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Spam protection: honeypot + time-trap
    if (data.website && data.website.length > 0) {
      return { ok: true };
    }
    if (data.elapsedMs && data.elapsedMs < 1500) {
      return { ok: true };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message,
    });

    if (error) {
      console.error("[contact] insert failed", error);
      throw new Error("Could not save your message. Please try again.");
    }

    return { ok: true };
  });
