// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Served at the root of a custom domain (portfolio.dichico.com), so `base`
// stays default ('/'). `site` is used for canonical URLs + sitemap.
// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.dichico.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
