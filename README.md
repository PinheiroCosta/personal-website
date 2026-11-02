# personal-website

Minimal, static-first personal website foundation for **romulopinheiro.dev**.

## Overview

This project is the public entry point for personal presentation, selected projects, and independent services.
It is intentionally lightweight and does not provide backend runtime features.

## Technology Stack

- Astro
- TypeScript (strict)
- CSS
- npm
- Cloudflare Pages (initial hosting target)

## Prerequisites

- Node.js LTS
- npm (bundled with Node.js)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Validation

```bash
npm run check
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment Overview

The generated output is a static build compatible with Cloudflare Pages.
No SSR, Pages Functions, or Workers are required for this repository at this stage.

## Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [Integrations](./docs/INTEGRATIONS.md)
