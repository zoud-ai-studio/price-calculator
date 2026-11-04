# PRD: Price Calculator

**Project:** Price Calculator · **Author:** Product Manager · **Date:** 2026-11-04
**Ticket:** [ZOU-31] [SPEC] Price Calculator · **Goal:** [ZOU-30]

---

## Problem

Small business owners considering a website or web app from Zoud AI Studio don't know what it costs before reaching out. They need a quick, honest answer so they can decide whether to proceed — in under a minute.

## Goal (one sentence)

Let a small business owner see the price of a project in under a minute, then email Zoud AI Studio.

## Target users

Small business owners who want a website or web app and don't know what it costs.

## Requirements (in order)

### 1. Heading and explanation line

A page heading and one-line subtitle that explain what the page does.

| Element | Value |
|---|---|
| Heading | Price your project |
| Subtitle | Pick a project type and see your price straight away. |

### 2. Project type selector

A single-choice picker. User picks one.

| Option | Price |
|---|---|
| Landing page | $1,000 |
| Business website | $2,000 |
| AI web app | $3,000 |

### 3. Urgency toggle

"Yes or No, default No." — "Need it within 1 week?"

If the user answers **Yes**, a 20% surcharge is added to the base price.

> "Delivery within 1 week adds 20% to the price."

### 4. Live price display

The total price updates immediately (without a page reload) whenever either the project type or urgency toggle changes.

| Project type | Urgency | Price |
|---|---|---|
| Landing page | No | $1,000 |
| Landing page | Yes | $1,200 |
| Business website | No | $2,000 |
| Business website | Yes | $2,400 |
| AI web app | No | $3,000 |
| AI web app | Yes | $3,600 |

### 5. Call-to-action button

A button labelled **Email us this quote** that opens the user's default email client with:

- **To:** `fathir.majeed@gmail.com`
- **Subject:** `Quote request`
- **Body:** Project type and total price

### 6. Look and feel

| Token | Value |
|---|---|
| Primary text | #0A1628 (dark navy) |
| Background | #FFFFFF (white) |
| Accent | #14B8A6 (teal) |
| Font | System font stack |
| Tone | Friendly, plain English |

## Out of scope

- Login / authentication
- Database
- Payments
- Admin page
- Saving quotes / quote history
- Other languages / i18n
- Analytics / tracking

## Tech approach

A static site with no backend. All pricing logic runs client-side. The email CTA uses a `mailto:` link.

## Acceptance criteria (QA checklist)

1. Landing page with project type "Landing page" and urgency "No" shows **$1,000**.
2. Landing page with urgency "Yes" shows **$1,200**.
3. "Business website" with "Yes" shows **$2,400**.
4. "AI web app" with "No" shows **$3,000**.
5. "AI web app" with "Yes" shows **$3,600**.
6. Changing either answer updates the total immediately (no page reload).
7. The button opens an email to `fathir.majeed@gmail.com` with the project type and total price in the body.
8. The page works at 375px and 1280px width, with no horizontal scrolling.

---

## Stories

This PR is split into 2 stories:

- **STORY-001:** Landing page with interactive price calculator (layout, selector, urgency toggle, live price display, email button).
- **STORY-002:** Responsive design polish — ensure the page works at all required widths with no horizontal scroll.
