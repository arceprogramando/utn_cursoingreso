import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Tecnicatura Universitaria en Programación 2025 | Blog', 
    description: 'Información sobre la Tecnicatura Universitaria en Programación y otros cursos.', 
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.mdx')),
    customData: `<language>es-ES</language>`,
  })
}
