# CLEAR & ABLE

Responsive first-pass design prototype built with React, TypeScript, Vite and original animated SVG artwork. Project examples and contact information are explicitly placeholders; no enquiries are submitted.

## Local development

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
```

## Production validation

```sh
npm run build
npm run preview
```

The build includes TypeScript checking. Check navigation, mobile menu, animation pause/play and reduced-motion support in a browser. Artwork also pauses offscreen and in hidden tabs.

## GitHub Pages preview

Push this project to the `main` branch of `curtisarjohnson-beep/CLEAR-ABLE`. In GitHub repository Settings → Pages, set Source to **GitHub Actions**. The included workflow builds and publishes `dist` on pushes to main or manual dispatch. GitHub must permit Actions and Pages for this repository. The deployment job reports the resulting URL. No deployment has been performed merely by creating these files.

Vite uses relative asset URLs so the build works at the repository Pages subpath. No backend, credentials or paid services are required.

## Editing

- Content and reusable sections: `src/main.tsx`
- Layout, palette, responsive rules and animation: `src/style.css`
- Metadata: `index.html`

Font sources and licences are documented in `src/fonts/candidates/LICENSING.md`; all three current comparison families are self-hosted under the SIL Open Font License. Replace placeholders and add verified business/contact/legal information before public launch.

## Enquiry delivery (not connected)

The enquiry form is a clearly labelled UI preview. Submission is disabled and prevented in JavaScript; no form data is sent or stored by the application. Do not enable submission until delivery and privacy information are ready.

For the next iteration, use a hosted form service with server-side validation and spam controls, or a small serverless endpoint that sends email using credentials held only on the server. Configure an approved recipient, origin restrictions, rate limiting and accessible success/error states. Publish a privacy notice covering the data controller, purpose, lawful basis, delivery provider, retention and contact/rights information. Test real delivery and failure handling before enabling the button. Never put mail-service API keys in Vite environment variables exposed to the client.

Portfolio descriptions are proposed project focuses, not verified outcomes. Replace illustrative artwork only with approved screenshots. Future case studies should cover context, challenge, solution, deliverables, verified outcomes and screenshots.

## Portfolio wheel

`src/PortfolioWheel.tsx` contains project metadata and the six image/description/destination entries. Replace the clearly labelled SVG concepts in `public/portfolio` with approved screenshots when supplied; these temporary visuals do not represent delivered client websites. Each sector currently opens an accessible project-preview dialog. Replace destination handling with real case-study URLs when available.

The portfolio uses a horizontal row of large rectangular previews on a shallow curved path. Neighbouring cards tilt gently; the centred card is upright. Repeated sets provide seamless slow travel. Hover, keyboard focus, offscreen state, hidden tabs and project dialogs pause automatic motion. Touch/manual navigation pauses it until Play is selected. Previous/Next controls and horizontal swiping work at all sizes. Reduced-motion users get a still, untilted row. Stable project links and Escape-enabled dialogs retain keyboard access and focus restoration.

## Live typography-system comparison

Open **Type lab** at the bottom right and choose:

1. **Outfit Only (baseline)** — Outfit for every non-logo role.
2. **Contemporary + Editorial** (default) — Outfit headings, body, navigation, labels and buttons; Newsreader editorial statements and quotes, with a real italic face for emphasis.
3. **Architectural + Humanist** — Outfit headings and subheadings; Manrope body, navigation, labels, buttons and editorial text.

The existing short Approach and Freedom statements follow the editorial role. The clearly labelled **Temporary editorial preview** inside Type lab reuses existing copy at a larger size to compare regular and emphasized text. It is separate from the production page content and is removed with the selector.

The preference is validated and stored under `clear-able:typography-system:v1`; the old individual-font preference is intentionally ignored so the new experiment starts at Option 02. Refresh, homepage navigation and other tabs keep the system selection. If browser storage is disabled, switching still works for the current visit.

All fonts are self-hosted. `ensureTypographyFonts()` preloads all three families, including Newsreader italic, once at startup. The selector is briefly disabled during initial preparation; changes then apply synchronously through role variables, without a new stylesheet or font download. Loading failures are explicitly reported rather than presenting a fallback as a valid comparison.

- `src/typography.css`: unchanged role sizes, weights, spacing and independent logo settings.
- `src/typography-experiment.css`: self-hosted font faces, system-to-role assignments and isolated control/sample styles.
- `src/TypographySelector.tsx`: removable selector and temporary specimen.
- `src/typography-preference.ts`: system definitions, validation, storage, startup font preparation.
- `src/fonts/candidates/LICENSING.md`: sources, weights and licence details.

To finish the experiment, set the final role-family assignments in the central typography stylesheet, retain only the necessary self-hosted font faces, and remove `TypographySelector`, its imports, preference startup and experiment control/sample CSS. No application content or animation depends on the selector. Both the header SVG and existing footer wordmark are excluded from all systems.
