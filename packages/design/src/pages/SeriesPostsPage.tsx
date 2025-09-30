import { ArrowLeft, ChevronRight } from 'lucide-react';
import { getPostsBySeries, getAllSeries } from '../entities/blog';
import { Badge } from '../components/ui/badge';

interface SeriesPostsPageProps {
  seriesSlug: string;
  onNavigate: (page: string, param?: string) => void;
}

export function SeriesPostsPage({ seriesSlug, onNavigate }: SeriesPostsPageProps) {
  const posts = getPostsBySeries(seriesSlug);
  const series = getAllSeries().find(s => s.slug === seriesSlug);

  if (!series) {
    return (
      <div className="mx-auto max-w-[1280px] px-6 py-12 text-center">
        <h2 className="mb-4">시리즈를 찾을 수 없습니다</h2>
        <button
          onClick={() => onNavigate('series')}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          시리즈 목록으로 돌아가기
        </button>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <button
        onClick={() => onNavigate('series')}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="caption">시리즈 목록</span>
      </button>

      <div className="max-w-[800px] mx-auto">
        <div className="mb-12">
          <h1 className="mb-4">{series.name}</h1>
          <p className="text-muted-foreground mb-4">
            {series.description}
          </p>
          <Badge variant="secondary">{posts.length}편의 글</Badge>
        </div>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <button
              key={post.id}
              onClick={() => onNavigate('post', post.slug)}
              className="group w-full p-6 border border-border rounded-lg hover:border-foreground transition-colors text-left"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>
                    {post.series?.order}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="mb-2 group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h4>
                  <p className="caption text-muted-foreground line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="detail text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="detail text-muted-foreground">
                      {post.readingTime}분
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
              </div>
            </button>
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