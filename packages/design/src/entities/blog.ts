// Blog data types and mock data

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Series {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail?: string;
  coverImage?: string;
  publishedAt: string;
  tags: Tag[];
  series?: {
    id: string;
    name: string;
    slug: string;
    order: number;
  };
  readingTime: number;
}

// Mock data
export const mockTags: Tag[] = [
  { id: '1', name: 'React', slug: 'react' },
  { id: '2', name: 'TypeScript', slug: 'typescript' },
  { id: '3', name: 'Design', slug: 'design' },
  { id: '4', name: 'Web Development', slug: 'web-development' },
  { id: '5', name: 'Performance', slug: 'performance' },
];

export const mockSeries: Series[] = [
  {
    id: '1',
    name: 'React Deep Dive',
    slug: 'react-deep-dive',
    description: 'React의 내부 동작 원리와 고급 패턴을 탐구합니다.',
    postCount: 3,
  },
  {
    id: '2',
    name: 'Modern Web Architecture',
    slug: 'modern-web-architecture',
    description: '현대 웹 애플리케이션의 아키텍처 설계 패턴을 다룹니다.',
    postCount: 2,
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'React 렌더링 최적화 완벽 가이드',
    slug: 'react-rendering-optimization',
    excerpt: 'React 애플리케이션의 성능을 극대화하기 위한 렌더링 최적화 기법을 상세히 알아봅니다.',
    thumbnail: 'https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NTkxMzAyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    coverImage: 'https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NTkxMzAyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `React 애플리케이션의 성능 최적화는 사용자 경험을 향상시키는 가장 중요한 요소 중 하나입니다.

## 렌더링의 이해

React는 선언적 UI 라이브러리로, 상태가 변경될 때마다 컴포넌트를 다시 렌더링합니다. 하지만 모든 렌더링이 실제 DOM 업데이트로 이어지는 것은 아닙니다.

![React 개발 환경](https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800)

### Virtual DOM의 역할

React는 Virtual DOM을 사용하여 실제 DOM 업데이트를 최소화합니다. 렌더링 과정은 다음과 같습니다:

1. 컴포넌트 함수 실행
2. Virtual DOM 생성
3. 이전 Virtual DOM과 비교 (Reconciliation)
4. 변경된 부분만 실제 DOM에 반영

## 최적화 기법

### 1. React.memo 사용하기

컴포넌트의 props가 변경되지 않으면 재렌더링을 건너뛸 수 있습니다.

![성능 모니터링](https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800)

### 2. useMemo와 useCallback

연산 비용이 큰 계산을 메모이제이션하거나, 자식 컴포넌트에 전달되는 함수를 최적화할 수 있습니다.

### 3. Code Splitting

React.lazy와 Suspense를 사용하여 필요한 코드만 로드합니다.

## 실전 팁

- 불필요한 상태 끌어올리기 피하기
- 리스트 렌더링 시 안정적인 key 사용
- 개발자 도구의 Profiler 활용

성능 최적화는 측정에서 시작됩니다. 항상 프로파일링을 통해 병목 지점을 찾아낸 후 최적화를 진행하세요.`,
    publishedAt: '2025-09-28',
    tags: [mockTags[0], mockTags[1], mockTags[4]],
    series: {
      id: '1',
      name: 'React Deep Dive',
      slug: 'react-deep-dive',
      order: 1,
    },
    readingTime: 8,
  },
  {
    id: '2',
    title: '타입스크립트 고급 타입 시스템 활용하기',
    slug: 'advanced-typescript-types',
    excerpt: 'TypeScript의 강력한 타입 시스템을 활용하여 더 안전하고 표현력 있는 코드를 작성하는 방법을 알아봅니다.',
    thumbnail: 'https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    coverImage: 'https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    content: `TypeScript는 단순히 타입을 추가하는 것 이상의 강력한 기능을 제공합니다.

## 제네릭의 힘

제네릭을 사용하면 재사용 가능하고 유연한 타입을 만들 수 있습니다.

![코딩 환경](https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800)

### 조건부 타입

TypeScript의 조건부 타입을 사용하면 입력 타입에 따라 출력 타입을 동적으로 결정할 수 있습니다.

## 유틸리티 타입

TypeScript는 일반적인 타입 변환을 위한 유틸리티 타입을 제공합니다:

- Partial<T>
- Required<T>
- Pick<T, K>
- Omit<T, K>

![추상적인 패턴](https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800)

## 타입 가드

런타임에 타입을 좁혀나가는 타입 가드는 안전한 코드 작성의 핵심입니다.

타입 시스템을 잘 활용하면 런타임 에러를 컴파일 타임에 잡아낼 수 있습니다.`,
    publishedAt: '2025-09-25',
    tags: [mockTags[1], mockTags[3]],
    readingTime: 6,
  },
  {
    id: '3',
    title: 'UI 디자인 시스템 구축하기',
    slug: 'building-design-system',
    excerpt: '일관성 있고 확장 가능한 디자인 시스템을 구축하는 방법과 베스트 프랙티스를 공유합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    coverImage: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    content: `디자인 시스템은 제품의 일관성을 유지하고 개발 속도를 높이는 핵심 자산입니다.

## 디자인 토큰

디자인 토큰은 색상, 간격, 타이포그래피 등의 디자인 결정을 코드로 표현한 것입니다.

![디자인 작업 환경](https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800)

### CSS 변수 활용

CSS 변수를 사용하면 디자인 토큰을 효과적으로 관리할 수 있습니다.

## 컴포넌트 라이브러리

재사용 가능한 컴포넌트를 만들 때는 다음을 고려해야 합니다:

- 접근성 (a11y)
- 반응형 디자인
- 다크 모드 지원
- 커스터마이징 가능성

## 문서화

Storybook 같은 도구를 사용하여 컴포넌트를 문서화하고 시각적으로 테스트할 수 있습니다.

좋은 디자인 시스템은 팀의 생산성을 크게 향상시킵니다.`,
    publishedAt: '2025-09-20',
    tags: [mockTags[2], mockTags[3]],
    readingTime: 7,
  },
  {
    id: '4',
    title: 'React Hooks의 올바른 사용법',
    slug: 'react-hooks-best-practices',
    excerpt: 'React Hooks를 효과적으로 사용하기 위한 패턴과 주의사항을 다룹니다.',
    thumbnail: 'https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    coverImage: 'https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    content: `React Hooks는 함수형 컴포넌트에서 상태와 라이프사이클을 다루는 강력한 도구입니다.

## 기본 Hooks

### useState

상태 관리의 기본입니다. 함수형 업데이트를 사용하면 이전 상태를 안전하게 참조할 수 있습니다.

![개발 환경](https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800)

### useEffect

부수 효과를 다루는 Hook입니다. 의존성 배열을 올바르게 관리하는 것이 중요합니다.

## 커스텀 Hooks

로직을 재사용 가능한 형태로 추출할 수 있습니다.

### 규칙

- Hook은 최상위에서만 호출
- React 함수 컴포넌트나 커스텀 Hook에서만 호출
- Hook 이름은 'use'로 시작

## 성능 최적화

useCallback과 useMemo를 사용하여 불필요한 재계산을 방지할 수 있습니다.

Hooks를 올바르게 사용하면 코드가 더 간결하고 읽기 쉬워집니다.`,
    publishedAt: '2025-09-15',
    tags: [mockTags[0], mockTags[3]],
    series: {
      id: '1',
      name: 'React Deep Dive',
      slug: 'react-deep-dive',
      order: 2,
    },
    readingTime: 5,
  },
  {
    id: '5',
    title: '마이크로 프론트엔드 아키텍처 이해하기',
    slug: 'micro-frontend-architecture',
    excerpt: '대규모 웹 애플리케이션을 위한 마이크로 프론트엔드 아키텍처의 개념과 구현 방법을 살펴봅니다.',
    thumbnail: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    coverImage: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    content: `마이크로 프론트엔드는 프론트엔드 애플리케이션을 독립적으로 개발 가능한 작은 단위로 나누는 아키텍처 패턴입니다.

## 왜 마이크로 프론트엔드인가?

대규모 팀에서 협업할 때 모노리식 프론트엔드는 다음과 같은 문제를 야기합니다:

- 코드베이스 복잡도 증가
- 배포 시간 증가
- 팀 간 의존성

![모던 아키텍처](https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800)

## 구현 방법

### 1. iframe 기반

가장 간단하지만 제한적인 방법입니다.

### 2. Web Components

표준 기술을 활용한 캡슐화가 가능합니다.

### 3. Module Federation

Webpack 5의 Module Federation을 사용하면 런타임에 모듈을 동적으로 로드할 수 있습니다.

## 고려사항

- 공유 의존성 관리
- 라우팅 조정
- 상태 공유
- 스타일 격리

마이크로 프론트엔드는 은탄환이 아닙니다. 팀의 규모와 요구사항을 고려하여 선택해야 합니다.`,
    publishedAt: '2025-09-10',
    tags: [mockTags[3], mockTags[0]],
    series: {
      id: '2',
      name: 'Modern Web Architecture',
      slug: 'modern-web-architecture',
      order: 1,
    },
    readingTime: 9,
  },
  {
    id: '6',
    title: 'Context와 상태 관리의 모든 것',
    slug: 'react-context-state-management',
    excerpt: 'React Context API와 다양한 상태 관리 솔루션을 비교하고 적절한 선택 기준을 제시합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    coverImage: 'https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    content: `React에서 상태 관리는 애플리케이션의 복잡도가 증가할수록 중요해집니다.

## Context API

React의 내장 상태 공유 메커니즘입니다.

### 언제 사용할까?

- 테마, 로케일 같은 전역 설정
- 인증 정보
- 자주 변경되지 않는 데이터

![코드 리뷰](https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800)

### 성능 고려사항

Context 값이 변경되면 모든 구독자가 리렌더링됩니다. 이를 최적화하려면:

- Context를 작게 나누기
- useMemo 활용
- Context 선택자 패턴 사용

## 상태 관리 라이브러리

### Redux

예측 가능한 상태 컨테이너로, 대규모 애플리케이션에 적합합니다.

### Zustand

간단하고 가벼운 상태 관리 솔루션입니다.

### Jotai / Recoil

원자적 상태 관리 접근 방식을 제공합니다.

## 선택 기준

- 애플리케이션 크기
- 팀의 경험
- 요구사항 복잡도

적절한 상태 관리 솔루션은 개발 생산성과 유지보수성을 크게 향상시킵니다.`,
    publishedAt: '2025-09-05',
    tags: [mockTags[0], mockTags[3]],
    series: {
      id: '1',
      name: 'React Deep Dive',
      slug: 'react-deep-dive',
      order: 3,
    },
    readingTime: 7,
  },
  {
    id: '7',
    title: '서버 컴포넌트와 클라이언트 컴포넌트',
    slug: 'server-client-components',
    excerpt: 'Next.js의 서버 컴포넌트와 클라이언트 컴포넌트의 차이점과 올바른 사용법을 알아봅니다.',
    thumbnail: 'https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    coverImage: 'https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    content: `React Server Components는 서버에서 렌더링되어 클라이언트로 전송되는 새로운 컴포넌트 타입입니다.

## 서버 컴포넌트의 장점

- 번들 크기 감소
- 직접 데이터베이스 접근
- 민감한 정보 보호
- 초기 페이지 로드 개선

![서버 아키텍처](https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800)

## 클라이언트 컴포넌트

인터랙티브한 기능이 필요한 경우 사용합니다:

- 이벤트 리스너
- useState, useEffect 같은 Hooks
- 브라우저 전용 API

## 하이브리드 접근

서버와 클라이언트 컴포넌트를 함께 사용하여 최적의 성능을 달성할 수 있습니다.

새로운 패러다임을 이해하고 활용하면 더 빠르고 효율적인 웹 애플리케이션을 만들 수 있습니다.`,
    publishedAt: '2025-09-01',
    tags: [mockTags[0], mockTags[3], mockTags[4]],
    series: {
      id: '2',
      name: 'Modern Web Architecture',
      slug: 'modern-web-architecture',
      order: 2,
    },
    readingTime: 6,
  },
];

// Helper functions
export const getPostBySlug = (slug: string): Post | undefined => {
  return mockPosts.find(post => post.slug === slug);
};

export const getPostsByTag = (tagSlug: string): Post[] => {
  return mockPosts.filter(post => 
    post.tags.some(tag => tag.slug === tagSlug)
  );
};

export const getPostsBySeries = (seriesSlug: string): Post[] => {
  return mockPosts
    .filter(post => post.series?.slug === seriesSlug)
    .sort((a, b) => (a.series?.order || 0) - (b.series?.order || 0));
};

export const getAllTags = (): Tag[] => {
  return mockTags;
};

export const getAllSeries = (): Series[] => {
  return mockSeries;
};

export const getLatestPosts = (limit?: number): Post[] => {
  const sorted = [...mockPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
};