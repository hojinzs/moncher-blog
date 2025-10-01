'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { Post, formatDate } from '@/entities/blog';
import { Badge } from '@/shared/ui/badge';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group cursor-pointer border-b border-border pb-8 mb-8 last:border-b-0">
      <Link href={`/posts/${post.slug}`} className="block">
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
              <time className="text-sm text-muted-foreground">
                {formatDate(post.publishedAt)}
              </time>
              
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
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
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
            <div className="shrink-0 hidden sm:block">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
