import { Home, BookOpen, Tag, Layers } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'posts', label: 'Posts', icon: BookOpen },
    { id: 'tags', label: 'Tags', icon: Tag },
    { id: 'series', label: 'Series', icon: Layers },
  ];

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <div className="w-8 h-8 bg-foreground rounded-sm" />
            <span style={{ fontSize: '20px', fontWeight: 600 }}>Blog</span>
          </button>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}