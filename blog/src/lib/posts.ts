import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';

export type Post = CollectionEntry<CollectionKey>;

/** All published posts in a section, newest first. Drafts are visible only in `astro dev`. */
export async function getPosts(section: CollectionKey): Promise<Post[]> {
  const posts = (await getCollection(section)) as Post[];
  return posts
    .filter((p) => import.meta.env.DEV || !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
