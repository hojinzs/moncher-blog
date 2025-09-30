import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Clock } from 'lucide-react';
import { getSeriesBySlug, getPostsBySeries, formatDate, mockSeries } from '@/entities/blog';
import { Badge } from '@/shared/ui/badge';

interface SeriesPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all series
export async function generateStaticParams() {
  return mockSeries.map((series) => ({
    slug: series.slug,
  }));
}

export async function generateMetadata({ params }: SeriesPageProps) {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);

  if (!series) {
    return {
      title: 'Series Not Found',
    };
  }

  return {
    title: `${series.name} | Blog`,
    description: series.description,
  };
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);
  const posts = getPostsBySeries(slug);

  if (!series) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <Link
        href="/series"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">시리즈 목록</span>
      </Link>

      <div className="max-w-[800px] mx-auto">
        <div className="mb-12">
          <h1 className="mb-4">{series.name}</h1>
          <p className="text-muted-foreground mb-4">{series.description}</p>
          <Badge variant="secondary">{posts.length}편의 글</Badge>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className="group block p-6 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-sm font-semibold">
                    {post.series?.order}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="mb-2 group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}분
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
              </div>
            </Link>
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
