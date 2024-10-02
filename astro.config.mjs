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
      'https://utn-cursoingreso.vercel.app/tags/apuntes/',
      'https://utn-cursoingreso.vercel.app/tags/arquitectura%20y%20sistemas%20operativos/',
      'https://utn-cursoingreso.vercel.app/tags/Base%20De%20Datos/',
      'https://utn-cursoingreso.vercel.app/tags/Estad%C3%ADstica/',
      'https://utn-cursoingreso.vercel.app/tags/Ingles/',
      'https://utn-cursoingreso.vercel.app/tags/lectura%20comprensiva/',
      'https://utn-cursoingreso.vercel.app/tags/lenguaje%20c/',
      'https://utn-cursoingreso.vercel.app/tags/Lenguaje%20Csharp/',
      'https://utn-cursoingreso.vercel.app/tags/matematica/',
      'https://utn-cursoingreso.vercel.app/tags/organizacion%20Empresarial/',
      'https://utn-cursoingreso.vercel.app/tags/Primer%20Cuatrimestre/',
      'https://utn-cursoingreso.vercel.app/tags/Probabilidad/',
      'https://utn-cursoingreso.vercel.app/tags/programacion/',
      'https://utn-cursoingreso.vercel.app/tags/python/',
      'https://utn-cursoingreso.vercel.app/tags/Segundo%20Cuatrimestre/',
    ];
    const isExcluded = excludedPages.some((excluded) => page === excluded);
    return !isExcluded;
  },
}),
    icon(),
    mdx(),
  ],
  devToolbar: {
    enabled: false,
  },
});
