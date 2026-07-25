# Diogo Francisco Costa — Portfolio

Source code for my personal portfolio, live at
**[portfolio.dichico.com](https://portfolio.dichico.com)**.

It's a fast, static single-page site built with [Astro](https://astro.build)
and [Tailwind CSS](https://tailwindcss.com), hosted on **GitHub Pages** behind a
**Cloudflare** custom domain. Based on the
[devportfolio](https://github.com/RyanFitzgerald/devportfolio) theme.

## Tech

- **Astro 5** — static output, minimal client-side JS
- **Tailwind CSS 4** — styling
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
public/                 static assets (favicon, og-image, CNAME, robots.txt)
src/
  components/           Header, Hero, About, Projects, Experience, Education, Footer
  config.ts             site content (name, about, skills, projects, experience, education)
  pages/index.astro     assembles the single page
  styles/global.css     Tailwind + fonts
astro.config.mjs        site URL + sitemap + Tailwind
.github/workflows/deploy.yml   CI build + deploy to Pages
```

## License

The site content (text, experience, projects) is © Diogo Francisco Costa.
The underlying theme is licensed under the terms of the original
[devportfolio](https://github.com/RyanFitzgerald/devportfolio) project.
