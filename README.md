# Nico Alumbro Portfolio — Redesign

A full redesign of the existing portfolio, repositioned around **full-stack development + creative technology** rather than a generic developer template.

## What changed

- Replaced fictional projects, employers, articles, GitHub statistics, and equipment.
- Added real portfolio categories: ENREMCO, Homeowner Agent Connect, TukodPH, and media post-production.
- Introduced a premium editorial visual system: near-black, warm off-white, fluorescent lime, and orange-red.
- Added custom project mockups built entirely with CSS, so the site does not depend on stock images.
- Added responsive navigation, reveal animations, stronger metadata, and mobile layouts.
- Uses plain CSS rather than Tailwind to keep the redesign self-contained.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy

Push the files to the `main` branch of `nikulasito/nico-portfolio`. Vercel should automatically rebuild the existing site connected to `nico-alumbro.is-a.dev`.

## Before publishing

Review these items in `app/page.tsx`:

1. Project descriptions and privacy labels.
2. Public project URLs.
3. Email address and social links.
4. Experience wording.

The contact email is currently set to `n.alumbro@gmail.com`.


## Hydration warning note

The root `<html>` element uses `suppressHydrationWarning` because some browser extensions inject temporary attributes into the document before React hydrates. This suppresses only root-level attribute mismatches; application hydration errors should still be investigated normally.

## Contact form setup

The portfolio now includes a responsive project-inquiry form. It submits to the Next.js Route Handler at `app/api/contact/route.ts`, which sends the inquiry through Resend.

1. Create a Resend account and API key.
2. Add and verify the domain/email you will use as the sender.
3. In Vercel, open **Project → Settings → Environment Variables**.
4. Add the following values:

```env
RESEND_API_KEY=re_your_api_key
CONTACT_TO_EMAIL=n.alumbro@gmail.com
CONTACT_FROM_EMAIL=Nico Portfolio <portfolio@your-verified-domain.com>
```

5. Redeploy the project after saving the variables.

For local testing, copy `.env.example` to `.env.local` and replace the sample values. Until the variables are configured, the form displays a direct-email fallback rather than silently losing a message.

The form includes server-side validation, a hidden honeypot field for basic bot filtering, a reply-to address for the visitor, and clear success/error states.
