# ADR-0002: Centralize price calculation and email-quote data

**Status:** Accepted

Prices, the 20% urgency surcharge, currency formatting, and data used in the
quote email are defined in one typed `src/lib/pricing.ts` module. UI components
receive the derived value through props and do not contain independent price
tables or surcharge rules.

## Consequences

- All visible prices and the email quote stay consistent.
- Unit tests can exhaustively test the six approved combinations without a
  browser.
- A price change has one implementation location and one test boundary.
