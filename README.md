# Nico Next.js Portfolio

A Next.js App Router conversion of the supplied Google Stitch HTML portfolio.

## Included

- Next.js App Router + TypeScript
- Tailwind CSS with the original Stitch design tokens
- Responsive navigation and mobile menu
- React-based WebGL hero background
- IntersectionObserver reveal animations
- Deterministic contribution chart (no `document.write`)
- Original Stitch design reference and screenshot

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the detected framework as **Next.js**.
4. Deploy with the default build command: `npm run build`.

## Customize before publishing

- Update project text and links in `app/page.tsx`.
- Replace placeholder social links.
- Change `hello@nico.dev` to your preferred email.
- Add your resume as `public/resume.pdf`.
- The supplied Stitch image URLs remain remote because the original archive did not contain the project images. Replace them with local images in `public/images` when available.

## Original files

- `DESIGN.md` contains the supplied Stitch design system.
- `public/original/stitch-preview.png` contains the supplied preview screenshot.
