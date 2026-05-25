/** Slug de URL para entradas de la colección career (Astro 6 content layer). */
export function careerSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/i, '').toLowerCase();
}
