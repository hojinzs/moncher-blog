import { format } from 'date-fns';
import { mockPosts, mockSeries } from './mock/data';
import type { Post, Series } from './types';

// Helper functions
export const getPostBySlug = (slug: string): Post | undefined => {
  return mockPosts.find(post => post.slug === slug);
};

export const getPostsByTag = (tagSlug: string): Post[] => {
  return mockPosts.filter(post => 
    post.tags.some(tag => tag.slug === tagSlug)
  );
};

export const getPostsBySeries = (seriesSlug: string): Post[] => {
  return mockPosts
    .filter(post => post.series?.slug === seriesSlug)
    .sort((a, b) => (a.series?.order || 0) - (b.series?.order || 0));
};

export const getLatestPosts = (limit?: number): Post[] => {
  const sorted = [...mockPosts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
};

export const getSeriesBySlug = (slug: string): Series | undefined => {
  return mockSeries.find(series => series.slug === slug);
};

export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), 'yyyy년 MM월 dd일');
  } catch {
    return dateString;
  }
};
