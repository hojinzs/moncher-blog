import { getLatestPosts } from '../entities/blog';
import { PostCard } from '../components/PostCard';

interface MainPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export function MainPage({ onNavigate }: MainPageProps) {
  const latestPosts = getLatestPosts();

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="mb-4">
          모던 웹 개발 블로그
        </h1>
        <p className="text-muted-foreground">
          React, TypeScript, 웹 아키텍처에 대한 깊이 있는 인사이트와 실전 경험을 공유합니다.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3>최신 글</h3>
          <span className="caption text-muted-foreground">
            총 {latestPosts.length}개의 글
          </span>
        </div>

        <div>
          {latestPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={() => onNavigate('post', post.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}