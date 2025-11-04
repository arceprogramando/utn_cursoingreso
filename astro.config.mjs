import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://utn-cursoingreso.vercel.app',

  integrations: [
    sitemap({
      serialize(item) {
        const today = new Date().toISOString();

        const indexUrl = /^https?:\/\/[^/]+\/$/.test(item.url) || item.url === '/';
        const isCareerUrl = /career/.test(item.url) && !/\/career\/programacion(1|2)(\/|$)/.test(item.url);
        const isCareerProgramationUrl = /\/career\/programacion(1|2)(\/|$)/.test(item.url);
        const isDataBaseUrl = /\/career\/basededatos(1|2)(\/|$)/.test(item.url);

        if (indexUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 1.0 };

        if (isCareerUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 0.9 };

        if (isCareerProgramationUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 0.8 };

        if (isDataBaseUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 0.7 };

        return { ...item, changefreq: 'monthly', lastmod: today, priority: 0.6 };
      },
    }),
    icon(),
    mdx(),
  ],

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
  },
});
