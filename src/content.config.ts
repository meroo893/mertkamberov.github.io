import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog collection — empty for now. To publish a post, drop a Markdown file
 * in src/content/blog/, e.g. src/content/blog/my-first-post.md:
 *
 *   ---
 *   title: My first post
 *   description: What it's about
 *   pubDate: 2026-08-01
 *   ---
 *   Post body in Markdown…
 *
 * The "blog" nav link appears automatically once at least one post exists.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
