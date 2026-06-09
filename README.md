# Nexora — Web & Mobile Studio Landing

A bilingual (English / Romanian) animated landing page for **Nexora**, an IT
studio from Sibiu, Transylvania. Built with Next.js 16, next-intl, Tailwind CSS
v4 and Motion (Framer Motion).

## Features

- **Bilingual** — English (`/`) and Romanian (`/ro`) with a locale switcher and a
  persistent cookie preference.
- **3D parallax hero** — pointer-driven tilt, floating tech chips with depth and
  scroll parallax.
- **Scroll animations** — reveal-on-scroll, aurora background orbs, animated
  gradient grid, marquee, scroll progress bar.
- **Fully responsive** — dedicated mobile layout with a glass slide-down menu.
- **Logo-matched design** — violet → indigo → blue → cyan palette pulled from the
  Nexora logo.

## Content sections

Hero · Tech marquee · Services (web + mobile) · Technology stack · About (Sibiu
story) · Reviews · Contact · Footer.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the build
```

## Contacts (single source of truth)

Edit [`lib/site.ts`](lib/site.ts) — WhatsApp, Instagram, email and location.
Copy lives in [`messages/en.json`](messages/en.json) and
[`messages/ro.json`](messages/ro.json).
