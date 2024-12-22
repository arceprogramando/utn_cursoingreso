import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Disallow:

Sitemap: ${sitemapURL.href}

User-agent: Googlebot
Disallow:

User-agent: BadBot
Disallow: /

Allow: /public/
`;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response('Site URL is not defined.', {
      status: 500,
    });
  }

  const sitemapURL = new URL('sitemap-index.xml', site);

  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
