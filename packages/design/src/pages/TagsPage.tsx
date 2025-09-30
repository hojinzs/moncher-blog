import { getAllTags, mockPosts } from '../entities/blog';
import { Badge } from '../components/ui/badge';

interface TagsPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export function TagsPage({ onNavigate }: TagsPageProps) {
  const tags = getAllTags();

  const getPostCountByTag = (tagSlug: string) => {
    return mockPosts.filter(post => 
      post.tags.some(tag => tag.slug === tagSlug)
    ).length;
  };

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-12">
          <h1 className="mb-4">태그</h1>
          <p className="text-muted-foreground">
            관심있는 주제별로 글을 탐색해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tags.map((tag) => {
            const postCount = getPostCountByTag(tag.slug);
            
            return (
              <button
                key={tag.id}
                onClick={() => onNavigate('tag', tag.slug)}
                className="group p-6 border border-border rounded-lg hover:border-foreground transition-colors text-left"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="group-hover:text-muted-foreground transition-colors">
                    {tag.name}
                  </h4>
                  <Badge variant="secondary">{postCount}</Badge>
                </div>
                <p className="caption text-muted-foreground">
                  {postCount}개의 글
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}