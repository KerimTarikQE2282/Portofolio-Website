// The blog can be served at the site root (standalone deploy) or under a sub-path
// such as /blog (embedded in the portfolio). Route every internal link through here.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path ("/labs/") with the configured base ("/blog/labs/"). */
export function withBase(path: string): string {
  return `${base}${path}`;
}

/** Strip the base from a pathname so it can be compared against root-relative routes. */
export function stripBase(pathname: string): string {
  return base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}

/** True when the blog is mounted under a sub-path of a larger site. */
export const isEmbedded = base !== '';
