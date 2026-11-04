# ADR-0001: Deliver the calculator as a static client-only page

**Status:** Accepted

The calculator runs entirely in the Next.js client page. This release has no
FastAPI service, PostgreSQL database, containers, or server endpoint.

The approved PRD explicitly defines a static site with client-side pricing and
excludes login, saving quotes, analytics, payments, and administration. The
repository's default backend stack remains the standard for any later feature
that needs a backend; it is simply not instantiated for this scope.

## Consequences

- The page can be deployed as a static HTTPS build.
- No user or quote data is collected or retained.
- Adding persistence, lead capture, or protected behavior requires a new ADR
  and an architecture update.
