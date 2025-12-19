import type { Express, Request, Response } from "express";
import { type Server } from "http";
import nodemailer from "nodemailer";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
  const requestStaySchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    guests: z.string().min(1),
    message: z.string().optional(),
    dates: z
      .object({
        from: z.string().datetime().optional(),
        to: z.string().datetime().optional(),
      })
      .optional(),
  });

  const emailIsConfigured =
    Boolean(process.env.GMAIL_USER) &&
    Boolean(process.env.GMAIL_APP_PASSWORD) &&
    Boolean(process.env.REQUEST_STAY_EMAIL_TO || process.env.GMAIL_USER);

  let transporter: nodemailer.Transporter | null = null;

  function getTransporter() {
    if (!emailIsConfigured) {
      return null;
    }

    if (!transporter) {
      if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        return null;
      }

      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });
    }

    return transporter;
  }

  function formatDate(value?: string) {
    if (!value) return "Not specified";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  async function sendRequestStayEmail(
    data: z.infer<typeof requestStaySchema>,
  ): Promise<void> {
    const mailer = getTransporter();
    if (!mailer) {
      throw new Error("Email transport is not configured");
    }

    const recipient =
      process.env.REQUEST_STAY_EMAIL_TO || process.env.GMAIL_USER!;
    const fromAddress =
      process.env.REQUEST_STAY_EMAIL_FROM || process.env.GMAIL_USER!;

    const dateSummary = data.dates?.from
      ? data.dates.to
        ? `${formatDate(data.dates.from)} – ${formatDate(data.dates.to)}`
        : formatDate(data.dates.from)
      : "Not specified";

    const text = [
      "New stay request received:",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Guests: ${data.guests}`,
      `Dates: ${dateSummary}`,
      "",
      "Message:",
      data.message || "No additional message.",
    ].join("\n");

    const html = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
      <p><strong>Guests:</strong> ${data.guests}</p>
      <p><strong>Dates:</strong> ${dateSummary}</p>
      <p><strong>Message:</strong><br/>${data.message || "No additional message."}</p>
    `;

    await mailer.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: data.email,
      subject: `New Villa Norvic stay request from ${data.name}`,
      text,
      html,
    });
  }

  app.post(
    "/api/request-stay",
    async (req: Request, res: Response): Promise<void> => {
      try {
        const payload = requestStaySchema.parse(req.body);
        await sendRequestStayEmail(payload);
        res.status(200).json({ message: "Request received" });
      } catch (err) {
        if (err instanceof z.ZodError) {
          res.status(400).json({
            message: "Invalid request",
            issues: err.flatten(),
          });
          return;
        }

        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        console.error("[request-stay] failed to send email", err);
        res.status(500).json({
          message:
            errorMessage === "Email transport is not configured"
              ? "Email service is not configured. Please try again later."
              : "Failed to send request. Please try again later.",
        });
      }
    },
  );

  return httpServer;
}
