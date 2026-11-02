# Integrations

## Planned External Services

The website catalog references independent applications and services, including:

- Core Ticket System
- Blog
- CTFLab
- DevTools
- StringUtils

Each service is expected to have its own repository, deployment, and operational lifecycle.

## Blog Integration Requirements

Future blog integration should be implemented inside `src/integrations/blog/` and only after defining a stable API contract.

Expected requirements:

- Query latest published article metadata through a documented contract.
- Handle unavailable or failing upstream responses safely.
- Preserve full homepage rendering when the blog API is unavailable.
- Avoid coupling to storage/provider details (GitHub, R2, or custom backend).

No API client is implemented yet to avoid speculative contracts.

## Loose Coupling Expectations

Integration code must depend on stable interfaces and typed domain models rather than provider-specific behavior.

## Graceful Degradation

External failures must degrade to safe fallback content without breaking page rendering.

## Future Routing Strategy

The domain is expected to support path-based URLs (`/blog/`, `/atendimento/`, `/ctflab/`, `/tools/`) for independently deployed apps.
A future edge router may forward paths to external deployments, but this repository does not implement that router.
