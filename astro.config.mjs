import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://julicode07.github.io",
  base: "/YoutubeClone",
  output: "server",
  integrations: [tailwind(), react()],

  devToolbar: {
    enabled: false,
  },

  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});