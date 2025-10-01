import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostsByTag, mockTags } from '@/entities/blog';
import { PostCard } from '@/features/post-card';

interface TagPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all tags
export async function generateStaticParams() {
  return mockTags.map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = mockTags.find((t) => t.slug === slug);

  if (!tag) {
    return {
      title: 'Tag Not Found',
    };
  }

  return {
    title: `#${tag.name} | Blog`,
    description: `${tag.name} 태그가 포함된 글 목록`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = mockTags.find((t) => t.slug === slug);
  const posts = getPostsByTag(slug);

  if (!tag) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <Link
        href="/tags"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">태그 목록</span>
      </Link>

      <div className="max-w-[800px] mx-auto">
        <div className="mb-12">
          <h1 className="mb-4">#{tag.name}</h1>
          <p className="text-muted-foreground">
            {posts.length}개의 글
          </p>
        </div>

        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">아직 작성된 글이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
