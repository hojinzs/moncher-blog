# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ============================================
# 1) 의존성 설치만 (캐시 활용 극대화)
# ============================================
FROM base AS deps
WORKDIR /app

# 빌드용 네이티브 도구 설치
RUN apk add --no-cache \
    python3 build-base vips-dev

# Lock 파일과 package.json만 먼저 복사 (캐시 레이어)
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY apps/cms/package.json ./apps/cms/
COPY packages/*/package.json ./packages/*/

# 전체 의존성 설치 (이 레이어는 lock 파일 변경시만 재실행)
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --filter cms...

# ============================================
# 2) 빌드
# ============================================
FROM base AS builder
WORKDIR /app

# 빌드용 도구만 설치
RUN apk add --no-cache python3 build-base vips-dev

# 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/cms/node_modules ./apps/cms/node_modules

# 소스 코드 복사 (의존성 이후에 복사 = 캐시 효율↑)
COPY . .

# Strapi 빌드
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV NODE_ENV=production
RUN pnpm --filter cms build

# Production 의존성만 추출
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm --filter cms deploy --prod /out/cms

# ============================================
# 3) 런타임
# ============================================
FROM node:22-alpine AS runner
RUN apk add --no-cache vips libc6-compat

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

WORKDIR /app
COPY --chown=node:node --from=builder /out/cms ./

RUN mkdir -p ./tmp ./public/uploads

USER node
EXPOSE 1337

CMD ["node", "./node_modules/.bin/strapi", "start"]