import type { CollectionKey } from 'astro:content';

export type SectionIconName = 'server' | 'target' | 'flask' | 'doc';

interface SectionMeta {
  title: string;
  /** Short line shown under the title on cards and the listing header. */
  tagline: string;
  description: string;
  /** Any CSS colour. Drives the card glow, accent bar and listing highlights. */
  accent: string;
  icon: SectionIconName;
}

export interface Section extends SectionMeta {
  id: CollectionKey;
}

// Keyed by collection name. Typed as Record<CollectionKey, …> so that adding a
// collection in content.config.ts without an entry here is a type error (`astro check`).
// Object order = display order on the landing page and in the nav.
const registry: Record<CollectionKey, SectionMeta> = {
  labs: {
    title: 'Labs',
    tagline: 'Home-lab builds',
    description:
      'Multi-part builds: Active Directory, networking, detection engineering — documented end to end.',
    accent: '#0f766e',
    icon: 'server',
  },
  htb: {
    title: 'HTB',
    tagline: 'Hack The Box writeups',
    description:
      'Walkthroughs of retired machines: enumeration, foothold, privesc, and what I learned on the way.',
    accent: '#4d7c0f',
    icon: 'target',
  },
  research: {
    title: 'Research',
    tagline: 'Secure usability',
    description:
      'Summaries of research on how people actually interact with security — and how to design for it.',
    accent: '#6d28d9',
    icon: 'flask',
  },
};

export const sections: Section[] = Object.entries(registry).map(([id, meta]) => ({
  id: id as CollectionKey,
  ...meta,
}));

export function getSection(id: string): Section {
  const section = sections.find((s) => s.id === id);
  if (!section) throw new Error(`Unknown section "${id}"`);
  return section;
}
