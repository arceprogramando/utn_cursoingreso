import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    frontmatter: z.object({
      layout: z.string(),
      title: z.string(),
      author: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string().url(),
        alt: z.string().optional(),
      }).optional(),
      pubDate: z.string(),
      tags: z.array(z.string()),
      totalTimeClass: z.number(),
      totalExam: z.number(),
      totalTime: z.number(),
      professor: z.string(),
      order: z.number(),
    }),
    url: z.string(),
  })
});

export const collections = { posts };
