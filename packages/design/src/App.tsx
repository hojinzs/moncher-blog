import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { PostDetailPage } from './pages/PostDetailPage';
import { TagsPage } from './pages/TagsPage';
import { TagPostsPage } from './pages/TagPostsPage';
import { SeriesPage } from './pages/SeriesPage';
import { SeriesPostsPage } from './pages/SeriesPostsPage';

type Route = 
  | { page: 'home' }
  | { page: 'posts' }
  | { page: 'post'; slug: string }
  | { page: 'tags' }
  | { page: 'tag'; slug: string }
  | { page: 'series' }
  | { page: 'series-posts'; slug: string };

export default function App() {
  const [route, setRoute] = useState<Route>({ page: 'home' });

  const navigate = (page: string, param?: string) => {
    if (page === 'home' || page === 'posts') {
      setRoute({ page: 'home' });
    } else if (page === 'post' && param) {
      setRoute({ page: 'post', slug: param });
    } else if (page === 'tags') {
      setRoute({ page: 'tags' });
    } else if (page === 'tag' && param) {
      setRoute({ page: 'tag', slug: param });
    } else if (page === 'series') {
      setRoute({ page: 'series' });
    } else if (page === 'series-posts' && param) {
      setRoute({ page: 'series-posts', slug: param });
    }

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentPageId = () => {
    if (route.page === 'home' || route.page === 'posts') return 'home';
    if (route.page === 'post') return 'posts';
    if (route.page === 'tags' || route.page === 'tag') return 'tags';
    if (route.page === 'series' || route.page === 'series-posts') return 'series';
    return 'home';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={getCurrentPageId()} onNavigate={navigate} />
      
      <main className="flex-1">
        {(route.page === 'home' || route.page === 'posts') && (
          <MainPage onNavigate={navigate} />
        )}
        
        {route.page === 'post' && (
          <PostDetailPage slug={route.slug} onNavigate={navigate} />
        )}
        
        {route.page === 'tags' && (
          <TagsPage onNavigate={navigate} />
        )}
        
        {route.page === 'tag' && (
          <TagPostsPage tagSlug={route.slug} onNavigate={navigate} />
        )}
        
        {route.page === 'series' && (
          <SeriesPage onNavigate={navigate} />
        )}
        
        {route.page === 'series-posts' && (
          <SeriesPostsPage seriesSlug={route.slug} onNavigate={navigate} />
        )}
      </main>

      <Footer />
    </div>
  );
}