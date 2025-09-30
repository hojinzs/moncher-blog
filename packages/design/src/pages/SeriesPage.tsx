import { getAllSeries } from '../entities/blog';
import { Badge } from '../components/ui/badge';
import { BookOpen } from 'lucide-react';

interface SeriesPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export function SeriesPage({ onNavigate }: SeriesPageProps) {
  const series = getAllSeries();

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-12">
          <h1 className="mb-4">시리즈</h1>
          <p className="text-muted-foreground">
            연관된 주제의 글들을 시리즈로 묶어 체계적으로 학습할 수 있습니다.
          </p>
        </div>

        <div className="space-y-6">
          {series.map((s) => (
            <button
              key={s.id}
              onClick={() => onNavigate('series-posts', s.slug)}
              className="group w-full p-8 border border-border rounded-lg hover:border-foreground transition-colors text-left"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="group-hover:text-muted-foreground transition-colors">
                      {s.name}
                    </h3>
                    <Badge variant="secondary" className="shrink-0">
                      {s.postCount}편
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}