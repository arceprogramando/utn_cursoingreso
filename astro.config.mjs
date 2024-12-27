import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://utn-cursoingreso.vercel.app',
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        const today = new Date('2024-12-27').toISOString();

        const indexUrl = /^https?:\/\/[^/]+\/$/.test(item.url) || item.url === '/';
        const isCareerUrl = /career/.test(item.url) && !/\/career\/programacion(1|2)(\/|$)/.test(item.url);
        const isCareerProgramationUrl = /\/career\/programacion(1|2)(\/|$)/.test(item.url);

        if (indexUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 1.0 };

        if (isCareerUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 0.9 };

        if (isCareerProgramationUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 0.8 };

        return { ...item, changefreq: 'monthly', lastmod: today, priority: 0.6 };
      },
    }),
    icon(),
    mdx(),
  ],
  devToolbar: {
    enabled: false,
  },
});
