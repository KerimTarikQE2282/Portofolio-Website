/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = isDev
  ? {
      // Local dev only: the blog is a static Astro build in public/blog
      // (see scripts/build-blog.mjs). These rewrites let `next dev` serve
      // URLs like /blog/labs/ from their index.html.
      async rewrites() {
        return [
          { source: '/blog', destination: '/blog/index.html' },
          { source: '/blog/:path+', destination: '/blog/:path+/index.html' },
        ];
      },
    }
  : {
      // Production: static export for GitHub Pages.
      output: 'export',
      images: { unoptimized: true },
    };

export default nextConfig;