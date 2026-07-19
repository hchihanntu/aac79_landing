import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://aac79.com.vn",
  base: "/",
  redirects: {
    "/ho-so-nang-luc": "/ho-so-nang-luc/aac79-protech/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
