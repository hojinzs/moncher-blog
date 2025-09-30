import { useState } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { getPostBySlug, Post } from '../entities/blog';
import { Badge } from '../components/ui/badge';
import { ImageModal } from '../components/ImageModal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface PostDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
}

export function PostDetailPage({ slug, onNavigate }: PostDetailPageProps) {
  const post = getPostBySlug(slug);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  if (!post) {
    return (
      <div className="mx-auto max-w-[1280px] px-6 py-12 text-center">
        <h2 className="mb-4">글을 찾을 수 없습니다</h2>
        <button
          onClick={() => onNavigate('home')}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let key = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join('\n');
        if (text.trim()) {
          elements.push(<p key={`p-${key++}`} className="mb-6">{text}</p>);
        }
        currentParagraph = [];
      }
    };

    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        flushParagraph();
        elements.push(
          <h2 key={`h2-${key++}`} className="mt-12 mb-6">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        flushParagraph();
        elements.push(
          <h3 key={`h3-${key++}`} className="mt-10 mb-4">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('![')) {
        flushParagraph();
        // Parse markdown image: ![alt text](url)
        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [, alt, src] = match;
          elements.push(
            <div key={`img-${key++}`} className="my-8">
              <ImageWithFallback
                src={src}
                alt={alt}
                className="w-full max-w-[800px] rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setModalImage({ src, alt })}
              />
            </div>
          );
        }
      } else if (line.trim() === '') {
        flushParagraph();
      } else {
        currentParagraph.push(line);
      }
    });

    flushParagraph();

    return elements;
  };

  return (
    <>
      <article className="mx-auto max-w-[1280px] px-6 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="caption">돌아가기</span>
        </button>

        <div className="max-w-[800px] mx-auto">
          {post.series && (
            <div className="mb-4">
              <button
                onClick={() => onNavigate('series-posts', post.series!.slug)}
                className="inline-block"
              >
                <Badge variant="secondary" className="text-muted-foreground border-0 hover:bg-accent transition-colors">
                  {post.series.name} #{post.series.order}
                </Badge>
              </button>
            </div>
          )}

          <h1 className="mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-border">
            <div className="flex items-center gap-2 caption text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <time>{formatDate(post.publishedAt)}</time>
            </div>

            <div className="flex items-center gap-2 caption text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}분</span>
            </div>

            {post.tags.length > 0 && (
              <>
                <div className="w-px h-4 bg-border" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => onNavigate('tag', tag.slug)}
                      className="caption text-muted-foreground hover:text-foreground transition-colors"
                    >
                      #{tag.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {post.coverImage && (
            <div className="mb-12 -mx-4 sm:mx-0">
              <ImageWithFallback
                src={post.coverImage}
                alt={post.title}
                className="w-full max-w-[800px] rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setModalImage({ src: post.coverImage!, alt: post.title })}
              />
            </div>
          )}

          <div className="prose prose-slate max-w-none">
            {renderContent(post.content)}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => onNavigate('tag', tag.slug)}
                >
                  <Badge variant="secondary" className="hover:bg-accent transition-colors">
                    {tag.name}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>

      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}
    </>
  );
}