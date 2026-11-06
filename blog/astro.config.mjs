// @ts-check
import { defineConfig } from 'astro/config';

// Read via globalThis so `astro check` doesn't need @types/node.
const env = /** @type {any} */ (globalThis).process?.env ?? {};

export default defineConfig({
  // Used for canonical URLs and absolute Open Graph image URLs.
  // The portfolio (with the blog at /blog) deploys to this domain via GitHub Pages.
  site: env.BLOG_SITE || 'https://kimpax.dev',

  // The portfolio's scripts/build-blog.mjs sets BLOG_BASE=/blog. Running
  // `npm run dev` inside ./blog on its own serves it at the root instead.
  base: env.BLOG_BASE || '/',

  // Fully static: Cloudflare Pages serves dist/ directly, no adapter needed.
  output: 'static',

  markdown: {
    // Shiki runs at build time — highlighted HTML, zero client JS.
    shikiConfig: {
      theme: 'github-light',
      wrap: false,
    },
  },
});
