import { Clock } from 'lucide-react';
import { Post } from '../entities/blog';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export function PostCard({ post, onClick }: PostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <article
      className="group cursor-pointer border-b border-border pb-8 mb-8 last:border-b-0"
      onClick={onClick}
    >
      <div className="flex gap-6">
        <div className="flex-1 min-w-0">
          {post.series && (
            <div className="mb-3">
              <Badge variant="secondary" className="text-muted-foreground border-0">
                {post.series.name} #{post.series.order}
              </Badge>
            </div>
          )}
          
          <h2 className="mb-3 group-hover:text-muted-foreground transition-colors">
            {post.title}
          </h2>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <time className="caption text-muted-foreground">
              {formatDate(post.publishedAt)}
            </time>
            
            <div className="flex items-center gap-1.5 caption text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}분</span>
            </div>

            {post.tags.length > 0 && (
              <>
                <div className="w-px h-4 bg-border" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="caption text-muted-foreground hover:text-foreground transition-colors"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {post.thumbnail && (
          <div className="shrink-0">
            <ImageWithFallback
              src={post.thumbnail}
              alt={post.title}
              className="w-32 h-32 object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </article>
  );
}