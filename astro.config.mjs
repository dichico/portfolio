// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployment: GitHub Pages project repo served via the custom domain
// https://portfolio.dichico.com/ . A custom domain serves the site at the
// ROOT, so `base` is '/' (not '/portfolio/'). The domain is pinned by
// public/CNAME so Actions deploys keep it configured.
export default defineConfig({
  site: 'https://portfolio.dichico.com',
  base: '/',
  integrations: [sitemap()],
  compressHTML: true,
});
