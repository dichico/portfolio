import { defineConfig } from "cf/config";

// Assets-only Worker: serves the static Astro build (`dist/`) with no Worker
// code, so requests are free and unlimited on the Workers Free plan.
export default defineConfig({
  worker: {
    name: "portfolio-site",
    compatibilityDate: "2026-11-21",
    domains: ["portfolio.dichico.com"],
  },
});
