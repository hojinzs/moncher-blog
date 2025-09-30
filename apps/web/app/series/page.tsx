import Link from 'next/link';
import { mockSeries } from '@/entities/blog';
import { Badge } from '@/shared/ui/badge';

export default function SeriesPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="mb-4">시리즈</h1>
        <p className="text-muted-foreground">
          주제별로 연결된 글 시리즈를 확인해보세요.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {mockSeries.map((series) => (
            <Link
              key={series.id}
              href={`/series/${series.slug}`}
              className="group p-6 border border-border rounded-lg hover:border-foreground transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="group-hover:text-muted-foreground transition-colors">
                  {series.name}
                </h3>
                <Badge variant="secondary">{series.postCount}편</Badge>
              </div>
              <p className="text-muted-foreground">
                {series.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
