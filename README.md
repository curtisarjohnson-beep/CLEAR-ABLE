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

Typography is self-hosted with system fallbacks; font files and SIL Open Font Licenses are in `public/fonts`. Replace placeholders and add verified business/contact/legal information before public launch.

## Enquiry delivery (not connected)

The enquiry form is a clearly labelled UI preview. Submission is disabled and prevented in JavaScript; no form data is sent or stored by the application. Do not enable submission until delivery and privacy information are ready.

For the next iteration, use a hosted form service with server-side validation and spam controls, or a small serverless endpoint that sends email using credentials held only on the server. Configure an approved recipient, origin restrictions, rate limiting and accessible success/error states. Publish a privacy notice covering the data controller, purpose, lawful basis, delivery provider, retention and contact/rights information. Test real delivery and failure handling before enabling the button. Never put mail-service API keys in Vite environment variables exposed to the client.

Portfolio descriptions are proposed project focuses, not verified outcomes. Replace illustrative artwork only with approved screenshots. Future case studies should cover context, challenge, solution, deliverables, verified outcomes and screenshots.

## Portfolio wheel

`src/PortfolioWheel.tsx` contains project metadata and the six image/description/destination entries. Replace the clearly labelled SVG concepts in `public/portfolio` with approved screenshots when supplied; these temporary visuals do not represent delivered client websites. Each sector currently opens an accessible project-preview dialog. Replace destination handling with real case-study URLs when available.

The portfolio uses a horizontal row of large rectangular previews on a shallow curved path. Neighbouring cards tilt gently; the centred card is upright. Repeated sets provide seamless slow travel. Hover, keyboard focus, offscreen state, hidden tabs and project dialogs pause automatic motion. Touch/manual navigation pauses it until Play is selected. Previous/Next controls and horizontal swiping work at all sizes. Reduced-motion users get a still, untilted row. Stable project links and Escape-enabled dialogs retain keyboard access and focus restoration.

## Typography playground (provisional)

All typography controls are in `src/typography.css`. Edit each `--type-<role>-family`, `-weight`, `-size`, `-tracking` (letter spacing) and `-leading` (line height). Component variants retain the original sizes/weights and responsive steps; these variants live alongside each role. Tablet/mobile and statement/dialog heading sizes have named controls. Variants with numeric suffixes preserve the existing component hierarchy. Layout, content and animation remain in their original files.

| Role | Current family | Current weights |
| --- | --- | --- |
| Wordmark words | Cormorant Garamond | Bold 700 |
| Wordmark ampersand | Outfit | Light 300 |
| Display/hero heading | Inter | 650 |
| Section headings | Inter | 550 |
| Subheadings | Inter | 500–600 |
| Body and form text | Inter | 400 |
| Navigation | Inter | 500 (mobile menu 400) |
| Labels/metadata | Inter | 400, with 600 for section labels/eyebrows |
| Buttons and text links | Inter | 400–500 |
| Editorial quotes (prepared, not currently rendered) | Inter | 400 |

`Wordmark.tsx` is shared by the header and footer. Tune `--wordmark-*` for word/ampersand families, weight, charcoal/blue colours, desktop/mobile/footer size, tracking, gap, ampersand scale and baseline offset. This is an adjustable type-only experiment, not a final logo asset.

The self-hosted Latin fonts come from Fontsource 5.3.0: `@fontsource-variable/inter` (variable weight), `@fontsource/cormorant-garamond` (700) and `@fontsource/outfit` (300). Licenses are included. Additional font experiments require adding licensed font files or using an already installed family, then updating the relevant role family. No external Google Fonts requests are needed.

To revert the experiment, revert the typography commit as a unit. No application content, data or animation configuration depends on the new type system.
