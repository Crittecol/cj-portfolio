import { defineCollection, z } from 'astro:content';

const CATEGORIES = ['webdev', 'av', 'design', 'gamedev'] as const;

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.enum(CATEGORIES),
    description: z.string(),
    thumbnail: image().optional(),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().int().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
