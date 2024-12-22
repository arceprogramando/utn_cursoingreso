import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://utn-cursoingreso.vercel.app',
  integrations: [
    preact(),
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }),
    icon(),
    mdx(),
  ],
  devToolbar: {
    enabled: false,
  },
});
