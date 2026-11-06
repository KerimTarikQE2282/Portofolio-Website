// Builds the Astro blog in ./blog (its own Astro project) with a /blog base path
// and writes the static output to public/blog, so Next.js serves it at /blog in dev
// and `next build` copies it into the static export (out/blog) for GitHub Pages.
//
//   npm run build:blog
//   BLOG_DIR=/path/to/blog npm run build:blog
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, readFileSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = path.resolve(root, process.env.BLOG_DIR || 'blog');
const outDir = path.join(root, 'public', 'blog');
const distDir = path.join(blogDir, 'dist');
// On Windows a running `next dev` watches public/blog and can briefly lock files; retry instead of failing.
const rmOpts = { recursive: true, force: true, maxRetries: 10, retryDelay: 200 };

const fail = (msg) => {
  console.error(`[build-blog] ${msg}`);
  process.exit(1);
};

if (!existsSync(path.join(blogDir, 'package.json'))) {
  fail(`No blog project found at ${blogDir}. Set BLOG_DIR to its location.`);
}

// Install the blog's dependencies if needed. npm is a .cmd on Windows, so it needs a shell
// there; no paths are passed, so there is nothing to quote.
if (!existsSync(path.join(blogDir, 'node_modules', 'astro'))) {
  const res = spawnSync('npm', ['install'], { cwd: blogDir, stdio: 'inherit', shell: process.platform === 'win32' });
  if (res.status !== 0) fail('npm install failed in the blog project.');
}

// Run Astro's CLI directly with Node: no shell, so nothing depends on how a shell quotes arguments.
const astroPkgPath = path.join(blogDir, 'node_modules', 'astro', 'package.json');
const astroPkg = JSON.parse(readFileSync(astroPkgPath, 'utf8'));
const astroBin = path.join(path.dirname(astroPkgPath), typeof astroPkg.bin === 'string' ? astroPkg.bin : astroPkg.bin.astro);

// Build into the blog's own dist/ first (nothing else touches it), then copy into public/blog.
// `astro check` (part of the blog's own `npm run build`) is skipped here; run it inside ./blog.
const res = spawnSync(process.execPath, [astroBin, 'build'], {
  cwd: blogDir,
  stdio: 'inherit',
  env: { ...process.env, BLOG_BASE: '/blog' },
});
if (res.status !== 0) fail('astro build failed.');

rmSync(outDir, rmOpts);
cpSync(distDir, outDir, { recursive: true });

// Fail the deploy loudly instead of shipping a site without the blog.
if (!existsSync(path.join(outDir, 'index.html'))) {
  fail(`Build finished but ${path.relative(root, outDir)}/index.html is missing.`);
}

console.log(`[build-blog] Built ${path.relative(root, blogDir) || '.'} -> ${path.relative(root, outDir)}`);
