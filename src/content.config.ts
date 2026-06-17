import { defineCollection, z } from 'astro:content';

// Define a `type: 'content'` collection for the work entries
const workCollection = defineCollection({
  type: 'content',
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
