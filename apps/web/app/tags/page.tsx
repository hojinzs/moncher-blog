import Link from 'next/link';
import { mockTags, getPostsByTag } from '@/entities/blog';

export default function TagsPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-12">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="mb-4">태그</h1>
        <p className="text-muted-foreground">
          관심있는 주제별로 글을 찾아보세요.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockTags.map((tag) => {
            const posts = getPostsByTag(tag.slug);
            return (
              <Link
                key={tag.id}
                href={`/tags/${tag.slug}`}
                className="group p-6 border border-border rounded-lg hover:border-foreground transition-colors"
              >
                <h3 className="mb-2 group-hover:text-muted-foreground transition-colors">
                  #{tag.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {posts.length}개의 글
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
