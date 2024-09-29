import { defineCollection, z } from "astro:content";

const career = defineCollection({
  schema: z.object({
      layout: z.string().optional(),
      title: z.string(),
      author: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string().optional(),  
        alt: z.string().optional(),
      }).optional(),
      pubDate: z.date(),
      tags: z.array(z.string()),
      totalTimeClass: z.number(),
      totalExam: z.number(),
      totalTime: z.number(),
      professor: z.string(),
    order: z.number(),
      downloadUrl:z.string().optional(),
    }),
});

export const collections = { career };
