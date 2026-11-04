# ADR-0003: Use a standards-based mailto link for the email CTA

**Status:** Accepted

The email CTA is an anchor whose `mailto:` URI contains the PRD recipient,
subject, selected project type, and currently calculated total. Query values
are encoded with `URLSearchParams` or an equivalent browser-standard encoder.

## Consequences

- The browser opens the visitor's configured email client without sending data
  to a Zoud AI Studio server.
- Tests can inspect the generated link and decode its query fields.
- The behavior depends on the visitor having an email-client handler; the page
  still presents the quote if none is configured.
