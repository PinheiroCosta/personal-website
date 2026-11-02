export interface BlogPostPreview {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  summary?: string;
}

export type BlogIntegrationState = 'not-configured' | 'available' | 'unavailable';

export const BLOG_INTEGRATION_NOTE =
  'Blog integration is intentionally deferred until a stable external API contract exists.';
