# Diogo Francisco Costa — Portfolio

Source code for my personal portfolio, live at
**[portfolio.dichico.com](https://portfolio.dichico.com)**.

It's a fast, static single-page site built with [Astro](https://astro.build)
and [Tailwind CSS](https://tailwindcss.com), hosted on **Cloudflare Workers**
(static assets, free plan) at a custom domain. The page is drawn as a transit network, inspired by
Massimo Vignelli and Unimark's 1972 New York subway diagram and signage: skill
domains are coloured route lines (Cloud, Kubernetes, CI/CD, Data), roles are
stations, and the scale figures sit on the platform sign.

## Tech

- **Astro 5** — static output, minimal client-side JS
- **Tailwind CSS 4** — styling
- **Archivo** variable font — self-hosted via Fontsource (`@fontsource-variable/archivo`)
- **Cloudflare Workers Static Assets** — assets-only Worker, no server code
- **Cloudflare Workers Builds** — Git-connected build & deploy with the [`cf` CLI](https://developers.cloudflare.com/cf/)
- All content lives in a single file: [`src/config.ts`](src/config.ts)

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
npm run deploy   # build + deploy to Cloudflare (needs `cf auth login`)
```

## Deploy

CI/CD runs on [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/):
the `portfolio-site` Worker is connected to this repository, so pushes to
`main` deploy to production and other branches run a credential-free build +
`--dry-run` validation, reported as the required `Workers Builds: portfolio-site`
PR check. Build settings (Worker → **Settings** → **Builds**):

| Setting         | Value                          |
| --------------- | ------------------------------ |
| Git branch      | `main`                         |
| Build command   | `npm run build`                |
| Deploy command  | `npx cf deploy dist`           |
| Preview command | `npx cf deploy dist --dry-run` |
| Root directory  | `/`                            |

The Node version comes from `.node-version`. The Worker name and custom domain
live in `cloudflare.config.ts`; the Worker name in the dashboard must match.

## Structure

```
public/                 static assets (favicon.svg, og-image.png, robots.txt) + _headers (security headers)
src/
  components/           page sections and the route-line system
  config.ts             site content (name, about, skills, projects, experience, education)
  pages/index.astro     assembles the single page
  styles/global.css     design tokens, Tailwind theme, fonts
scripts/og-image.html   source for the Open Graph image (rendered to public/og-image.png with a headless browser)
PRODUCT.md, DESIGN.md   product and design-system notes
.impeccable/surfaces/   design brief
astro.config.mjs        site URL + sitemap + Tailwind
cloudflare.config.ts    Worker name + custom domain for Cloudflare
.node-version           Node.js version for Workers Builds
```

## License

The site content (text, experience, projects) is © Diogo Francisco Costa.
