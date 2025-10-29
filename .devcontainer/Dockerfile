# syntax=docker/dockerfile:1.4

FROM mcr.microsoft.com/devcontainers/typescript-node:22

# Install system dependencies required for Strapi (sharp) and other native modules
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        libvips \
        libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Enable pnpm via Corepack (matching the repository's pinned version)
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

# Use a persistent pnpm store to speed up installs
ENV PNPM_HOME=/home/node/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN mkdir -p "$PNPM_HOME" && chown -R node:node "$PNPM_HOME"

WORKDIR /workspace
