import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define collection using glob loader for the work entries
const workCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string()
  }),
});

// Export a single `collections` object to register the collection
export const collections = {
  'work': workCollection,
};
