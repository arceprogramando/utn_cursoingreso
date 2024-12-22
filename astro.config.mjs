import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

const excludedPages = [
  '/tags/',
  '/tags/apuntes/',
  '/tags/arquitectura-y-sistemas-operativos/',
  '/tags/base-de-datos/',
  '/tags/estadistica/',
  '/tags/ingles/',
  '/tags/lectura-comprensiva/',
  '/tags/lenguaje-c/',
  '/tags/lenguaje-csharp/',
  '/tags/matematica/',
  '/tags/organizacion-empresarial/',
  '/tags/primer-cuatrimestre/',
  '/tags/probabilidad/',
  '/tags/programacion/',
  '/tags/python/',
  '/tags/segundo-cuatrimestre/',
];

export default defineConfig({
  site: 'https://utn-cursoingreso.vercel.app',
  integrations: [
    preact(),
    tailwind(),
    sitemap(),
    icon(),
    mdx(),
  ],
  devToolbar: {
    enabled: false,
  },
});
