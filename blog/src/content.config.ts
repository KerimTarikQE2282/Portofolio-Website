import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One collection per section. Each post is a folder: <slug>/index.md + <slug>/images/.
// The glob loader strips the trailing `/index` from entry IDs, so the folder name is the URL slug.
const postCollection = (section: string) =>
  defineCollection({
    loader: glob({ pattern: '**/index.md', base: `./src/content/${section}` }),
    // A function so we get `image()`, which resolves paths relative to each entry's index.md
    // and turns them into ImageMetadata for <Image />. Missing files fail the build.
    schema: ({ image }) =>
      z
        .object({
          title: z.string().min(1),
          description: z.string().min(1).max(200),
          pubDate: z.coerce.date(),
          updatedDate: z.coerce.date().optional(),
          tags: z.array(z.string().min(1)).min(1),
          cover: image().optional(),
          coverAlt: z.string().optional(),
          draft: z.boolean().default(false),
        })
        .strict()
        .refine((d) => !d.cover || d.coverAlt, {
          error: 'coverAlt is required when cover is set',
          path: ['coverAlt'],
        }),
  });

export const collections = {
  labs: postCollection('labs'),
  htb: postCollection('htb'),
  research: postCollection('research'),
};
