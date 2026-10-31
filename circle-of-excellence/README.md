# Circle of Excellence — Plant Green Inertia

Standalone frontend module built with React, TypeScript and Vite. Designed to be developed independently and integrated into the PGI-Trial repository after review.

## Features
- Internship and Campus Ambassador portal landing pages
- Responsive gallery, hero sections, benefits, scholarship tiers, program cards, certificate preview and FAQ accordion
- Registration modals with client-side validation
- Sample scholarship and ambassador assessment flows with question navigation and result screen
- Ambassador demo login screen
- Reusable typed components and data models

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Suggested integration workflow

1. Create a feature branch in the team repository, e.g. `feature/circle-of-excellence`.
2. Copy the contents of this project into the agreed module folder or integrate the `src` components into the host app.
3. Align route paths with the main website's router before merging.
4. Run `npm install` and `npm run build` in the host repository.
5. Open a pull request and ask a teammate to review before merging.

## Demo limitations — important
This is a frontend prototype. Form data is kept only in the browser session for the demo. Authentication, real referral-code verification, database persistence, official assessment questions/scoring, payment, certificate verification, and real webcam/tab-switch proctoring are not implemented. The assessment screens use sample questions and explicitly identify themselves as demos. Connect approved APIs and obtain appropriate consent before enabling any monitoring functionality.

Gallery images currently use remote Unsplash image URLs as temporary placeholders. Replace these with PGI-approved photos/assets before production.
