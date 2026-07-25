// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Current deployment: GitHub Pages project site at
// https://dichico.github.io/portfolio/  → `base` must be '/portfolio/'.
//
// If you later point a custom domain (e.g. via Cloudflare) at the ROOT of the
// site, change `site` to 'https://yourdomain.com' and `base` back to '/',
// and re-add public/CNAME with your domain.
export default defineConfig({
  site: 'https://dichico.github.io',
  base: '/portfolio/',
  integrations: [sitemap()],
  compressHTML: true,
});
