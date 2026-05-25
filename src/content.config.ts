import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const career = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/career' }),
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    author: z.string(),
    description: z
      .string()
      .optional()
      .refine((desc) => !desc || (desc.length > 150 && desc.length < 160), {
        message: 'La descripción debe tener entre 150 y 160 caracteres si se proporciona.',
      }),
    image: z
      .object({
        url: z.string().optional(),
        alt: z.string().optional(),
      })
      .optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    totalTimeClass: z.number(),
    totalExam: z.number(),
    totalTime: z.number(),
    professor: z.string().optional(),
    order: z.number(),
    downloadUrl: z.string().optional(),
  }),
});

export const collections = { career };
