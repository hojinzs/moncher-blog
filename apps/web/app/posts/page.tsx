import { getLatestPosts } from '@/entities/blog';
import { PostCard } from '@/features/post-card';

export default function PostsPage() {
  const latestPosts = getLatestPosts();

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="mb-4">
          모든 글
        </h1>
        <p className="text-muted-foreground">
          React, TypeScript, 웹 아키텍처에 대한 깊이 있는 인사이트와 실전 경험을 공유합니다.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3>최신 글</h3>
          <span className="text-sm text-muted-foreground">
            총 {latestPosts.length}개의 글
          </span>
        </div>

        <div>
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
