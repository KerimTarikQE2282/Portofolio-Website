// Builds the Astro blog in ./blog (its own Astro project) with a /blog base path
// and writes the static output to public/blog, where Next.js serves it at /blog.
//
//   npm run build:blog
//   BLOG_DIR=/path/to/blog npm run build:blog
import { spawnSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = path.resolve(root, process.env.BLOG_DIR || 'blog');
const outDir = path.join(root, 'public', 'blog');

if (!existsSync(path.join(blogDir, 'package.json'))) {
  console.error(`[build-blog] No blog project found at ${blogDir}. Set BLOG_DIR to its location.`);
  process.exit(1);
}

const run = (args) => {
  const res = spawnSync('npm', args, {
    cwd: blogDir,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env, BLOG_BASE: '/blog' },
  });
  if (res.status !== 0) process.exit(res.status ?? 1);
};

if (!existsSync(path.join(blogDir, 'node_modules'))) run(['install']);

rmSync(outDir, { recursive: true, force: true });
// `astro check` (part of the blog's own `npm run build`) is skipped here; run it inside ./blog.
run(['exec', '--', 'astro', 'build', '--outDir', JSON.stringify(outDir)]);
console.log(`[build-blog] Built ${path.relative(root, blogDir) || '.'} -> ${path.relative(root, outDir)}`);
