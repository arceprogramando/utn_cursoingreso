import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `

User-agent: *
Disallow:

User-agent: Googlebot
Disallow:

Sitemap: ${sitemapURL.href}

Sitemap: https://utn-cursoingreso.vercel.app/sitemap-0.xml
Sitemap: https://utn-cursoingreso.vercel.app/sitemap-index.xml

User-agent: BadBot
Disallow: /

User-agent: *
Allow: /public/

`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);

  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
