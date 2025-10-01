'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Tag, Layers } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'posts', label: 'Posts', icon: BookOpen, href: '/posts' },
    { id: 'tags', label: 'Tags', icon: Tag, href: '/tags' },
    { id: 'series', label: 'Series', icon: Layers, href: '/series' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <div className="w-8 h-8 bg-foreground rounded-sm" />
            <span className="text-xl font-semibold">Blog</span>
          </Link>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    active
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
