# kerim.sec

A static cybersecurity blog built with [Astro](https://astro.build): home-lab builds, retired Hack The Box writeups and secure-usability research. It has no server and no database, and deploys to Cloudflare Pages.

```bash
npm install
npm run dev       # http://localhost:4321 (drafts visible)
npm run build     # astro check + static build to dist/
npm run preview   # serve dist/ locally
```

Requires Node 22.12+ (major version pinned in `.node-version` for Cloudflare's build).

## How it fits together

| Path | Purpose |
| --- | --- |
| `src/content.config.ts` | One content collection per section, plus the frontmatter schema |
| `src/content/<section>/<slug>/index.md` | A post. Its screenshots live in `images/` next to it |
| `src/lib/sections.ts` | Section registry with title, blurb, accent colour and icon. Drives the landing cards, nav and routes |
| `src/pages/[section]/index.astro` | Listing page for every section, newest first |
| `src/pages/[section]/[...slug].astro` | Post page for every section |
| `src/layouts/PostLayout.astro` | Article shell: cover, meta, table of contents, code-block copy buttons |
| `src/styles/prose.css` | Long-form typography and code block styling |

## Adding a post

1. Create a folder. **The folder name becomes the URL slug.**

   ```
   src/content/htb/box-name/
   ├── index.md
   └── images/
       ├── cover.png
       └── nmap.png
   ```

2. Add the frontmatter:

   ```yaml
   ---
   title: "HTB: BoxName"
   description: "One or two sentences, max 200 chars."
   pubDate: 2026-11-05
   tags: [htb, linux, privesc]
   cover: ./images/cover.png          # optional
   coverAlt: "Describe the image"     # required if cover is set
   updatedDate: 2026-11-10            # optional
   draft: true                        # optional, defaults to false
   ---
   ```

3. Reference images with paths relative to `index.md`:

   ```md
   ![nmap scan results](./images/nmap.png)
   ```

   Astro optimizes these at build time, so you get WebP output, correct width and height, and hashed filenames. A typo in an image path fails the build.

**Validation:** a post fails the build if a required field (`title`, `description`, `pubDate`, `tags` with at least one entry) is missing, if a frontmatter key is unknown (this catches typos like `pubdate`), if `cover` is set without `coverAlt`, or if an image path doesn't resolve.

**Drafts:** `draft: true` posts appear in `npm run dev` with a "Draft" badge and are left out of production builds. Use this for HTB boxes that haven't retired yet. Write the post while you're on the box, commit it as a draft, and flip the flag once the box retires.

**Multi-part series:** nested folders work. `labs/ad-lab/part-2/index.md` is served at `/labs/ad-lab/part-2/`.

## Adding a section

1. Add a collection in `src/content.config.ts`:

   ```ts
   export const collections = {
     // ...
     ctf: postCollection('ctf'),
   };
   ```

2. Create `src/content/ctf/` and put a post in it, or a `.gitkeep` for now.
3. Register the section in `src/lib/sections.ts` with a title, tagline, description, accent and icon. `npm run build` reports a type error if a collection has no registry entry.

The landing card, nav link, listing page and post routes are generated from these entries automatically.

## Deploying to Cloudflare Pages

The site is fully static, so it needs no adapter.

1. Push this repo to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and choose the repo.
3. Build settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave empty)* |

   Cloudflare reads the Node version from `.node-version`.
4. Deploy. Every push to `main` deploys to production, and other branches and PRs get preview URLs.
5. Set `site` in `astro.config.mjs` to your `*.pages.dev` URL or your custom domain. It's used for canonical URLs and Open Graph images.

`public/_headers` is applied by Cloudflare Pages. It caches the hashed `/_astro/*` assets as immutable and adds a few baseline security headers.

## Customising

- Site name, author and links are in `src/consts.ts`.
- Colours, spacing and shadows are tokens at the top of `src/styles/global.css`.
- The code theme is `markdown.shikiConfig.theme` in `astro.config.mjs`. Any [Shiki theme](https://shiki.style/themes) works.
