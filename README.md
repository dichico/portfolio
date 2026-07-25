# Portfolio Site

A fast, single-page personal portfolio built with [Astro](https://astro.build),
designed to be hosted on **GitHub Pages** with a **Cloudflare** custom domain.

- ⚡ Static, zero client-JS by default (only tiny inline scripts for theme + menu)
- 🌗 Light/dark theme with system preference + persistence
- 📱 Fully responsive, accessible, SEO-ready (meta, Open Graph, sitemap, robots)
- ✏️ All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts)

---

## 1. Edit your content

Open **`src/data/portfolio.ts`** and replace the placeholder values:

- `name`, `headline`, `tagline`, `location`, `email`, `resumeUrl`
- `about` — bio paragraphs
- `socials` — GitHub / LinkedIn / email etc. (icons: `github`, `linkedin`, `email`, `twitter`, `website`)
- `experience`, `skills`, `projects`, `education`
- `seo` — page title, description, and social share image

Optional assets in `public/`:

- `favicon.svg` — browser tab icon
- `og-image.svg` — social share preview (update the name/role text inside)
- `resume.pdf` — add this file if you set a `resumeUrl` of `/resume.pdf`

## 2. Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

> Note: if `npm install` reports skipped install scripts (esbuild/sharp),
> approve them with `npm approve-scripts esbuild && npm approve-scripts sharp`.
> This only affects some local npm setups — CI installs them normally.

---

## 3. Deploy to GitHub Pages

1. Create a GitHub repo and push this project to the **`main`** branch.
2. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. The included workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
   builds and deploys automatically on every push to `main`.

### Set your domain in two places

- **`astro.config.mjs`** → `site: 'https://yourdomain.com'` (used for canonical
  URLs + sitemap). Because you use a custom domain, keep `base: '/'`.
- **`public/CNAME`** → replace `example.com` with your real domain. This tells
  GitHub Pages which custom domain to serve.
- **`public/robots.txt`** → update the `Sitemap:` URL to your domain.

---

## 4. Point your Cloudflare domain at GitHub Pages

In the **Cloudflare dashboard → your domain → DNS → Records**, add records
depending on whether you use an apex domain or a subdomain.

### Option A — Apex domain (e.g. `yourdomain.com`)

Add four `A` records pointing to GitHub Pages' IPs, plus a `CNAME` for `www`:

| Type  | Name | Content                  | Proxy status |
| ----- | ---- | ------------------------ | ------------ |
| A     | @    | 185.199.108.153          | DNS only\*   |
| A     | @    | 185.199.109.153          | DNS only\*   |
| A     | @    | 185.199.110.153          | DNS only\*   |
| A     | @    | 185.199.111.153          | DNS only\*   |
| CNAME | www  | `<username>.github.io`   | DNS only\*   |

### Option B — Subdomain (e.g. `www.yourdomain.com` or `me.yourdomain.com`)

| Type  | Name | Content                | Proxy status |
| ----- | ---- | ---------------------- | ------------ |
| CNAME | www  | `<username>.github.io` | DNS only\*   |

> Replace `<username>` with your GitHub username (or `<org>` for an org site).

### \* Proxy status & SSL — important

- **Start with "DNS only" (grey cloud).** This lets GitHub provision its own
  Let's Encrypt certificate for your custom domain. Once GitHub Pages shows the
  certificate as issued and **"Enforce HTTPS"** is enabled
  (Settings → Pages), the site is served over HTTPS.
- If you later switch Cloudflare's proxy **on** (orange cloud) for CDN/caching,
  set **SSL/TLS → Overview → encryption mode to "Full"** (not "Flexible") to
  avoid redirect loops. Leaving it proxied + "Full" is a common, valid setup.
- In **SSL/TLS → Edge Certificates**, enabling **Always Use HTTPS** and
  **Automatic HTTPS Rewrites** is recommended.

### Finish

1. Push your changes (with the real domain in `CNAME` + `astro.config.mjs`).
2. In **Settings → Pages → Custom domain**, enter your domain and save. GitHub
   verifies DNS and issues the certificate (can take a few minutes).
3. Tick **Enforce HTTPS** once it becomes available.

Your portfolio is now live on your Cloudflare domain. 🎉

---

## Project structure

```
public/                 static assets (favicon, og-image, CNAME, robots.txt)
src/
  components/           Navbar, Hero, About, Experience, Skills, Projects, Education, Contact, Footer, Icon
  data/portfolio.ts     ← YOUR CONTENT lives here
  layouts/BaseLayout.astro
  pages/index.astro     assembles the single page
  styles/global.css     design tokens + light/dark themes
astro.config.mjs        set your `site` URL here
.github/workflows/deploy.yml   CI build + deploy to Pages
```
