# STORY-001: Landing page with interactive price calculator
Ticket: ZOU-31 · Size: S · Data class: INTERNAL

## Why

Small business owners need to see a price for their project without talking to anyone first. This story delivers the full interactive experience on the landing page.

## Acceptance criteria

- Given the user opens the page, When they see the page then they see the heading "Price your project" and the subtitle "Pick a project type and see your price straight away."
- Given the user is on the landing page, When they select "Landing page" as the project type then they see the price $1,000 in the result section.
- Given the user has selected "Landing page" and "No" for urgency, When they toggle "Yes" for "Need it within 1 week?" then the price updates to $1,200.
- Given the user has selected "Landing page" and "Yes" for urgency, When they toggle "No" then the price updates to $1,000.
- Given the user has selected "Landing page" and "No" for urgency, When they switch the project type to "Business website" then the price updates to $2,000.
- Given the user has selected "Business website" and "Yes" for urgency, When they see the result then they see the price $2,400.
- Given the user has selected "AI web app" and "No" for urgency, When they see the result then they see the price $3,000.
- Given the user has selected "AI web app" and "Yes" for urgency, When they see the result then they see the price $3,600.
- Given the user changes either the project type or the urgency toggle, When the change happens then the price updates immediately without a page reload.
- Given the user has selected a project type and urgency, When they click the "Email us this quote" button then their email client opens with a new message to `fathir.majeed@gmail.com`, subject "Quote request", body containing the selected project type and total price.
- Given the user is on the page, When they see the urgency question then the toggle defaults to "No".

## Files likely to touch

- `src/app/page.tsx` — main page component
- `src/components/ProjectTypeSelector.tsx` — project type picker
- `src/components/UrgencyToggle.tsx` — "Need it within 1 week?" yes/no
- `src/components/PriceDisplay.tsx` — live price display
- `src/components/EmailButton.tsx` — mailto: CTA button
- `src/lib/pricing.ts` — pricing calculation logic

## Out of scope

- Responsive layout at different widths (covered in STORY-002).
- Saving or recording any quote data.

## Test notes (edge cases QA must try)

- Select each project type and verify the base price shows instantly.
- Toggle urgency on and off after changing project type — price always updates.
- Verify that all three project types appear as distinct selectable options.
- Click the email button — check the `mailto:` URI has the correct recipient, subject, and body.
