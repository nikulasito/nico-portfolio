import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const name = clean(body.name, 80);
  const email = clean(body.email, 120).toLowerCase();
  const company = clean(body.company, 100);
  const projectType = clean(body.projectType, 100);
  const budget = clean(body.budget, 80);
  const timeline = clean(body.timeline, 80);
  const message = clean(body.message, 3000);
  const website = clean(body.website, 200);

  // Silently accept likely bot submissions caught by the hidden field.
  if (website) {
    return NextResponse.json({ message: "Message received." });
  }

  if (!name || !EMAIL_PATTERN.test(email) || !projectType || message.length < 20) {
    return NextResponse.json(
      { message: "Please complete the required fields with a valid email and project description." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact form email environment variables are not configured.");
    return NextResponse.json(
      { message: "The contact form is not configured yet. Please email n.alumbro@gmail.com directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const subject = `Portfolio inquiry: ${projectType} — ${name}`;
  const text = [
    "New portfolio inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Project type: ${projectType}`,
    `Budget: ${budget || "Not specified"}`,
    `Timeline: ${timeline || "Not specified"}`,
    "",
    "Project details:",
    message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    console.error("Resend contact form error:", error);
    return NextResponse.json(
      { message: "Your message could not be delivered. Please email n.alumbro@gmail.com directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Message sent successfully." });
}
