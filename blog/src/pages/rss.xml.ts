// RSS feed of every published post, newest first, served at <base>/rss.xml.
// Newsletter services (Buttondown, Mailchimp, Kit, ...) can watch this feed to
// email subscribers automatically whenever a new post is published.
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPosts } from '../lib/posts';
import { sections } from '../lib/sections';
import { withBase } from '../lib/url';

export async function GET(context: APIContext) {
  const perSection = await Promise.all(
    sections.map(async (s) => (await getPosts(s.id)).map((post) => ({ post, section: s }))),
  );
  const items = perSection
    .flat()
    .sort((a, b) => b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf())
    .map(({ post, section }) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: withBase(`/${section.id}/${post.id}/`),
      categories: [section.title, ...post.data.tags],
    }));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items,
  });
}
