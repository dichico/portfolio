// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your final Cloudflare custom domain (used for SEO,
// sitemap and canonical URLs). Because you use a custom domain, `base`
// stays at the root ('/').
export default defineConfig({
  site: 'https://example.com',
  base: '/',
  integrations: [sitemap()],
  compressHTML: true,
});
