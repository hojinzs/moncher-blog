'use client';

import React from 'react';
import Image from 'next/image';

interface ContentRendererProps {
  content: string;
}

// Simple markdown renderer for blog post content
export function ContentRenderer({ content }: ContentRendererProps) {
  // Split content by lines and parse markdown
  const renderMarkdown = () => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentIndex = 0;

    lines.forEach((line, index) => {
      // Skip empty lines
      if (!line.trim()) {
        return;
      }

      // Headers
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${currentIndex++}`} className="text-2xl font-semibold mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${currentIndex++}`} className="text-xl font-semibold mt-6 mb-3">
            {line.replace('### ', '')}
          </h3>
        );
      }
      // Images
      else if (line.match(/^!\[.*\]\(.*\)$/)) {
        const match = line.match(/^!\[(.*)\]\((.*)\)$/);
        if (match && match[2]) {
          const [, alt, src] = match;
          elements.push(
            <div key={`img-${currentIndex++}`} className="my-8">
              <Image
                src={src || ''}
                alt={alt || ''}
                width={800}
                height={450}
                className="w-full h-auto rounded-lg"
              />
            </div>
          );
        }
      }
      // Lists (numbered)
      else if (line.match(/^\d+\. /)) {
        elements.push(
          <li key={`li-${currentIndex++}`} className="ml-6 mb-2">
            {line.replace(/^\d+\. /, '')}
          </li>
        );
      }
      // Lists (bullet)
      else if (line.startsWith('- ')) {
        elements.push(
          <li key={`li-${currentIndex++}`} className="ml-6 mb-2 list-disc">
            {line.replace(/^- /, '')}
          </li>
        );
      }
      // Paragraphs
      else {
        elements.push(
          <p key={`p-${currentIndex++}`} className="text-muted-foreground leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="prose prose-lg max-w-none">
      {renderMarkdown()}
    </div>
  );
}
