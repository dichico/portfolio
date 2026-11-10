# Diogo Francisco Costa — Portfolio

Source code for my personal portfolio, live at
**[portfolio.dichico.com](https://portfolio.dichico.com)**.

It's a fast, static single-page site built with [Astro](https://astro.build)
and [Tailwind CSS](https://tailwindcss.com), hosted on **GitHub Pages** behind a
**Cloudflare** custom domain. The page is drawn as a transit network, inspired by
Massimo Vignelli and Unimark's 1972 New York subway diagram and signage: skill
domains are coloured route lines (Cloud, Kubernetes, CI/CD, Data), roles are
stations, and the scale figures sit on the platform sign.

## Tech

- **Astro 5** — static output, minimal client-side JS
- **Tailwind CSS 4** — styling
- **Archivo** variable font — self-hosted via Fontsource (`@fontsource-variable/archivo`)
- **GitHub Actions** — automated build & deploy to GitHub Pages
- All content lives in a single file: [`src/config.ts`](src/config.ts)

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Structure

```
public/                 static assets (favicon.svg, og-image.png, CNAME, robots.txt)
src/
  components/           page sections and the route-line system
  config.ts             site content (name, about, skills, projects, experience, education)
  pages/index.astro     assembles the single page
  styles/global.css     design tokens, Tailwind theme, fonts
scripts/og-image.html   source for the Open Graph image (rendered to public/og-image.png with a headless browser)
PRODUCT.md, DESIGN.md   product and design-system notes
.impeccable/surfaces/   design brief
astro.config.mjs        site URL + sitemap + Tailwind
.github/workflows/deploy.yml   CI build + deploy to Pages
```

## License

The site content (text, experience, projects) is © Diogo Francisco Costa.
