import { defineConfig } from 'astro/config';
import compress from "astro-compress";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [compress()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    isr: true,
    functionPerRoute: true,
  })
});
