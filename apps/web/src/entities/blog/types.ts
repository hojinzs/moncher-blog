export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Series {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail?: string;
  coverImage?: string;
  publishedAt: string;
  tags: Tag[];
  series?: {
    id: string;
    name: string;
    slug: string;
    order: number;
  };
  readingTime: number;
}
