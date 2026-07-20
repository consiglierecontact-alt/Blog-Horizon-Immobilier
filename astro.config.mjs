// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // À remplacer par le domaine de production quand hébergé.
  site: "https://horizon-immobilier.fr",
  trailingSlash: "never",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  markdown: {
    shikiConfig: {
      // Thème sobre, lisible sur fond clair, compatible avec la palette institutionnelle.
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: true,
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
});
