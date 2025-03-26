import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";


// https://astro.build/config
export default defineConfig({
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

  adapter: vercel(),
});