// Re-export types
export type { Tag, Series, Post } from './types';

// Re-export mock data
export { mockTags, mockSeries, mockPosts } from './mock/data';

// Re-export helper functions
export {
  getPostBySlug,
  getPostsByTag,
  getPostsBySeries,
  getLatestPosts,
  getSeriesBySlug,
  formatDate,
} from './model';
