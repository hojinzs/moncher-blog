import { ArrowLeft } from 'lucide-react';
import { getPostsByTag, getAllTags } from '../entities/blog';
import { PostCard } from '../components/PostCard';

interface TagPostsPageProps {
  tagSlug: string;
  onNavigate: (page: string, param?: string) => void;
}

export function TagPostsPage({ tagSlug, onNavigate }: TagPostsPageProps) {
  const posts = getPostsByTag(tagSlug);
  const tag = getAllTags().find(t => t.slug === tagSlug);

  if (!tag) {
    return (
      <div className="mx-auto max-w-[1280px] px-6 py-12 text-center">
        <h2 className="mb-4">태그를 찾을 수 없습니다</h2>
        <button
          onClick={() => onNavigate('tags')}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          태그 목록으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <button
        onClick={() => onNavigate('tags')}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="caption">태그 목록</span>
      </button>

      <div className="max-w-[800px] mx-auto">
        <div className="mb-12">
          <h1 className="mb-4">#{tag.name}</h1>
          <p className="text-muted-foreground">
            {posts.length}개의 글이 있습니다.
          </p>
        </div>

        <div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onClick={() => onNavigate('post', post.slug)}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">아직 작성된 글이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}