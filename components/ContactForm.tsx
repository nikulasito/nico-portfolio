"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Your message could not be sent.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Thanks — your message has been sent. I’ll get back to you soon.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email me directly instead.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-heading">
        <span>Project inquiry</span>
        <p>Tell me a little about the work, timeline, and the result you need.</p>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" maxLength={80} required />
        </label>

        <label className="form-field">
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" maxLength={120} required />
        </label>

        <label className="form-field">
          <span>Company / organization</span>
          <input name="company" type="text" autoComplete="organization" maxLength={100} />
        </label>

        <label className="form-field">
          <span>Project type *</span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="Web or software development">Web or software development</option>
            <option value="Mobile app or product interface">Mobile app or product interface</option>
            <option value="Video editing or motion graphics">Video editing or motion graphics</option>
            <option value="Branding or creative production">Branding or creative production</option>
            <option value="Ongoing collaboration">Ongoing collaboration</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="form-field">
          <span>Estimated budget</span>
          <select name="budget" defaultValue="">
            <option value="">Not specified</option>
            <option value="Under $500">Under $500</option>
            <option value="$500–$1,500">$500–$1,500</option>
            <option value="$1,500–$5,000">$1,500–$5,000</option>
            <option value="$5,000+">$5,000+</option>
            <option value="Ongoing / retainer">Ongoing / retainer</option>
          </select>
        </label>

        <label className="form-field">
          <span>Preferred timeline</span>
          <input name="timeline" type="text" maxLength={80} placeholder="e.g. Within 4–6 weeks" />
        </label>

        <label className="form-field form-field-wide">
          <span>Project details *</span>
          <textarea
            name="message"
            rows={6}
            minLength={20}
            maxLength={3000}
            placeholder="What are you building, what stage is it in, and how can I help?"
            required
          />
        </label>
      </div>

      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-actions">
        <button className="form-submit" type="submit" disabled={status === "submitting"}>
          <span>{status === "submitting" ? "Sending message…" : "Send project inquiry"}</span>
          <i aria-hidden="true">↗</i>
        </button>

        <p className={`form-feedback is-${status}`} role={status === "error" ? "alert" : "status"}>
          {feedback}
        </p>

        <p className="form-fallback">
          Prefer email? <a href="mailto:n.alumbro@gmail.com?subject=Portfolio%20inquiry">n.alumbro@gmail.com</a>
        </p>
      </div>
    </form>
  );
}
