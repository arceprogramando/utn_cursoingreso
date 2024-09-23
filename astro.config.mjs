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
      filter: (page) => {
        const excludedPages = [
          'https://utn-cursoingreso.vercel.app/tags',
          'https://utn-cursoingreso.vercel.app/correlativity/',
          'https://utn-cursoingreso.vercel.app/collaborators',
        ];
        const isExcluded = excludedPages.some((excluded) => page === excluded);
        return !isExcluded;
      }
      
    }),
    icon(),
    mdx(),
  ],
  devToolbar: {
    enabled: false,
  },
});
