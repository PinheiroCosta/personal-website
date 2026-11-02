export type CatalogCategory = 'project' | 'service';
export type CatalogStatus = 'planned' | 'development' | 'available';

export interface CatalogEntry {
  id: string;
  name: string;
  description: string;
  url?: string;
  category: CatalogCategory;
  status: CatalogStatus;
  featured?: boolean;
  repositoryUrl?: string;
}

export const catalogEntries: readonly CatalogEntry[] = [
  {
    id: 'core-ticket-system',
    name: 'Core Ticket System',
    description: 'Independent customer support and ticket management application.',
    category: 'project',
    status: 'planned'
  },
  {
    id: 'blog',
    name: 'Blog',
    description: 'Independent publishing system for technical articles and updates.',
    category: 'project',
    status: 'development'
  },
  {
    id: 'ctflab',
    name: 'CTFLab',
    description: 'Browser-based Linux learning platform and minigames.',
    category: 'service',
    status: 'planned'
  },
  {
    id: 'devtools',
    name: 'DevTools',
    description: 'Collection of converters, calculators, encoders, and developer utilities.',
    category: 'service',
    status: 'planned'
  },
  {
    id: 'stringutils',
    name: 'StringUtils',
    description: 'String manipulation utilities and helper tools.',
    category: 'project',
    status: 'available',
    url: 'https://github.com/PinheiroCosta/stringutils',
    repositoryUrl: 'https://github.com/PinheiroCosta/stringutils',
    featured: true
  }
] as const;

export const projectEntries = catalogEntries.filter(
  (entry): entry is CatalogEntry => entry.category === 'project'
);

export const serviceEntries = catalogEntries.filter(
  (entry): entry is CatalogEntry => entry.category === 'service'
);

export const featuredEntries = catalogEntries.filter((entry) => entry.featured);
