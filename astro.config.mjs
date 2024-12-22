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
        const excludedPages = [
          '/tags/',
          '/tags/apuntes/',
          '/tags/arquitectura y sistemas operativos/',
          '/tags/Base De Datos/',
          '/tags/Estadística/',
          '/tags/Ingles/',
          '/tags/lectura comprensiva/',
          '/tags/lenguaje c/',
          '/tags/Lenguaje Csharp/',
          '/tags/matematica/',
          '/tags/organizacion Empresarial/',
          '/tags/Primer Cuatrimestre/',
          '/tags/Probabilidad/',
          '/tags/programacion/',
          '/tags/python/',
          '/tags/Segundo Cuatrimestre/',
        ];

        if (excludedPages.some(page => item.url.includes(page))) {
          return undefined;
        }

        if (item.url === 'https://utn-cursoingreso.vercel.app/') {
          item.changefreq = 'weekly';
          item.priority = 1;
        } else if (item.url === 'https://utn-cursoingreso.vercel.app/career/') {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (item.url === 'https://utn-cursoingreso.vercel.app/career/programacion2/') {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else if (/\/career\//.test(item.url)) {
          item.changefreq = 'weekly';
          item.priority = 0.5;
        } else {
          item.priority = 0.5;
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
