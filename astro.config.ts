import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), sitemap()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: true,
    isr: true,
    functionPerRoute: true
  })
});