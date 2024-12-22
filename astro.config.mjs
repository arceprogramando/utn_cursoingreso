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
      serialize(item) {
        if (item.url === '/') {
          item.changefreq = 'daily';
          item.lastmod = new Date('2024-12-22');
          item.priority = 1.0;
        } else if (item.url === '/career') {
          item.changefreq = 'daily';
          item.lastmod = new Date('2024-12-22');
          item.priority = 0.9;
        } else if (item.url === '/career/programacion1' || item.url === '/career/programacion2') {
          item.changefreq = 'weekly';
          item.lastmod = new Date('2024-12-22');
          item.priority = 0.8;
        } else {
          item.changefreq = 'weekly';
          item.lastmod = new Date('2024-12-22');
          item.priority = 0.7;
        }
        return item;
      },
    }),
    icon(),
    mdx(),
  ],
  devToolbar: {
    enabled: false,
  },
});
