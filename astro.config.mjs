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
        const excludedPages = ['https://utn-cursoingreso.vercel.app/tags', 'https://utn-cursoingreso.vercel.app/correlativity/'];
        return !excludedPages.some((excluded) => page.startsWith(excluded));
      },
      changefreq: (page) => {
        if (page === 'https://utn-cursoingreso.vercel.app') return 'monthly';
        if (
          [
            'https://utn-cursoingreso.vercel.app/career/ProgramacionI',
            'https://utn-cursoingreso.vercel.app/career/BaseDeDatos',
            'https://utn-cursoingreso.vercel.app/career/ProbabilidadYEstadistica',
          ].includes(page)
        )
          return 'weekly';
        return 'weekly';
      },
      priority: (page) => {
        if (page === 'https://utn-cursoingreso.vercel.app') return 1.0;
        if (
          [
            'https://utn-cursoingreso.vercel.app/career/ProgramacionI',
            'https://utn-cursoingreso.vercel.app/career/BaseDeDatos',
            'https://utn-cursoingreso.vercel.app/career/ProbabilidadYEstadistica',
          ].includes(page)
        )
          return 0.8;
        return 0.7;
      },
      lastmod: (page) => {
        if (page === 'https://utn-cursoingreso.vercel.app') return new Date('2024-09-23');
        return undefined;
      },
    }),
    icon(),
    mdx(),
  ],
  devToolbar: {
    enabled: false,
  },
});
