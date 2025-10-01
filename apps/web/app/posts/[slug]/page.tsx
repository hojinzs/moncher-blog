import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { getPostBySlug, formatDate, mockPosts } from '@/entities/blog';
import { Badge } from '@/shared/ui/badge';
import { ContentRenderer } from '@/features/content-renderer';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">목록으로</span>
      </Link>

      <article className="max-w-[800px] mx-auto">
        {/* Post Header */}
        <header className="mb-12">
          {post.series && (
            <div className="mb-4">
              <Link href={`/series/${post.series.slug}`}>
                <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">
                  {post.series.name} #{post.series.order}
                </Badge>
              </Link>
            </div>
          )}

          <h1 className="mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time className="text-sm">{formatDate(post.publishedAt)}</time>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readingTime}분</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/tags/${tag.slug}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-12">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        )}

        {/* Post Content */}
        <div className="mb-12">
          <ContentRenderer content={post.content} />
        </div>

        {/* Series Navigation */}
        {post.series && (
          <div className="border-t border-border pt-8 mt-12">
            <Link
              href={`/series/${post.series.slug}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-sm font-medium">
                {post.series.name} 시리즈의 다른 글 보기 →
              </span>
            </Link>
          </div>
        )}
      </article>
    </div>
  );
}
