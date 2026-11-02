# Architecture

## Purpose and Scope

This repository hosts a static personal website for presenting the owner, selected projects, and public services.
It is intentionally scoped as a public presentation layer and not an application platform.

## Technology Choices

- Astro with static site generation
- TypeScript in strict mode
- CSS custom properties for foundational design tokens
- npm for dependency management
- Cloudflare Pages as the initial static hosting target

## Architectural Principles

- **Static-first:** site must render from static assets only.
- **Service independence:** external services remain independent repositories and deployments.
- **Loose coupling:** integrations are contract-driven and optional.
- **Graceful degradation:** integration failures must not block page rendering.
- **Infrastructure portability:** avoid provider lock-in and provider-specific runtime dependencies.
- **Progressive complexity:** add complexity only with concrete requirements.

## Static Rendering Strategy

The site is built using Astro static output (`output: "static"`) and contains no backend runtime, server-side rendering, or database dependency.

## Directory Responsibilities

- `src/config/`: centralized typed configuration for site metadata and catalog entries.
- `src/components/`: reusable UI, navigation, and section building blocks.
- `src/layouts/`: shared page layout and metadata shell.
- `src/pages/`: route-level content pages.
- `src/integrations/blog/`: reserved area for future blog integration contract.
- `src/styles/`: global styles and design tokens.
- `docs/`: architecture and integration documentation.

## Service Independence

Projects and services listed in the catalog are external systems. This website links to them and may consume optional future read-only integrations, but never becomes their runtime dependency.

## Future Considerations

- Optional blog integration via a dedicated module with explicit interface contracts.
- Optional path-based edge routing to independent applications under the same domain.
- Optional future identity federation via external OIDC provider, without embedding authentication concerns now.
