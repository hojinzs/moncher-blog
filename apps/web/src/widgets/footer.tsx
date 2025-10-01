export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded-sm" />
            <span className="text-lg font-semibold">Blog</span>
          </div>
          <p className="text-muted-foreground max-w-md">
            모던 웹 개발에 대한 깊이 있는 인사이트와 실용적인 가이드를 제공합니다.
          </p>
          <div className="flex gap-6 mt-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              RSS
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-border w-full text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Blog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
