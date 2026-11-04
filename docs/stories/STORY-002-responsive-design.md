# STORY-002: Responsive design polish
Ticket: ZOU-31 · Size: S · Data class: INTERNAL

## Why

The price calculator must be usable on any device a small business owner might pick up — phone, tablet, or desktop. The brief requires working layouts at 375px and 1280px with no horizontal scrolling.

## Acceptance criteria

- Given the viewport is 375px wide, When the user views the page then there is no horizontal scrolling.
- Given the viewport is 1280px wide, When the user views the page then there is no horizontal scrolling.
- Given the viewport is 375px wide, When the user views the page then all content (heading, subtitle, project type selector, urgency toggle, price display, and email button) is visible and readable without zooming.
- Given the viewport is 1280px wide, When the user views the page then all content is visible and readable without zooming.
- Given the user resizes the browser from 375px to 1280px (or any width between), When the page reflows then layout remains intact with no horizontal scroll at any intermediate width.
- Given the user is on the page, When they view it then the page uses the specified colours: dark navy #0A1628 for text, white #FFFFFF background, teal #14B8A6 accent.

## Files likely to touch

- `src/app/globals.css` — base styles, responsive rules
- `src/app/page.tsx` — page layout structure
- Any component files added in STORY-001

## Out of scope

- Adding breakpoints beyond the tested sizes.
- Designing for mobile-specific features (notifications, offline mode).

## Test notes (edge cases QA must try)

- Open in a mobile device emulator (375px width) and confirm no horizontal scroll.
- Open in a desktop browser at 1280px and confirm no horizontal scroll.
- Resize the browser window slowly from narrow to wide — verify no horizontal scroll at any width.
- Verify the teal accent #14B8A6 and navy #0A1628 colours appear correctly in both dark and light rendering.
