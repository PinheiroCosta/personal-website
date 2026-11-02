# Copilot Instructions for `personal-website`

## Project Purpose

This repository is a static personal website that presents the owner, selected projects, and public services.
It is not a backend, identity gateway, or runtime dependency for external applications.

## Technology Stack

- Astro (static output)
- TypeScript (strict)
- CSS
- npm

## Architectural Principles

- Keep the implementation static-first and hosting-portable.
- Maintain independence between this site and external apps/services.
- Prefer simple, incremental architecture over speculative abstractions.
- Design integrations to fail safely without blocking rendering.

## Coding Conventions

- Keep data centralized in `src/config/`.
- Keep pages thin and rely on reusable components/layouts.
- Use semantic HTML and accessible structure.
- Reuse existing dependencies; avoid adding new ones without clear need.

## Restrictions

- Do not add SSR, backend runtime, database, ORM, or auth flows without explicit requirements.
- Do not introduce frontend frameworks unless required by a concrete use case.
- Do not implement speculative integrations without a defined contract.

## Documentation Expectations

When architecture or integration behavior changes, update:

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/INTEGRATIONS.md`
