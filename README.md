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

Font sources and licences are documented in `src/fonts/candidates/LICENSING.md`; the comparison uses official Fontshare delivery and a self-hosted Outfit font. Replace placeholders and add verified business/contact/legal information before public launch.

## Enquiry delivery (not connected)

The enquiry form is a clearly labelled UI preview. Submission is disabled and prevented in JavaScript; no form data is sent or stored by the application. Do not enable submission until delivery and privacy information are ready.

For the next iteration, use a hosted form service with server-side validation and spam controls, or a small serverless endpoint that sends email using credentials held only on the server. Configure an approved recipient, origin restrictions, rate limiting and accessible success/error states. Publish a privacy notice covering the data controller, purpose, lawful basis, delivery provider, retention and contact/rights information. Test real delivery and failure handling before enabling the button. Never put mail-service API keys in Vite environment variables exposed to the client.

Portfolio descriptions are proposed project focuses, not verified outcomes. Replace illustrative artwork only with approved screenshots. Future case studies should cover context, challenge, solution, deliverables, verified outcomes and screenshots.

## Portfolio wheel

`src/PortfolioWheel.tsx` contains project metadata and the six image/description/destination entries. Replace the clearly labelled SVG concepts in `public/portfolio` with approved screenshots when supplied; these temporary visuals do not represent delivered client websites. Each sector currently opens an accessible project-preview dialog. Replace destination handling with real case-study URLs when available.

The portfolio uses a horizontal row of large rectangular previews on a shallow curved path. Neighbouring cards tilt gently; the centred card is upright. Repeated sets provide seamless slow travel. Hover, keyboard focus, offscreen state, hidden tabs and project dialogs pause automatic motion. Touch/manual navigation pauses it until Play is selected. Previous/Next controls and horizontal swiping work at all sizes. Reduced-motion users get a still, untilted row. Stable project links and Escape-enabled dialogs retain keyboard access and focus restoration.

## Live typography comparison

Open **Type lab** at the bottom right, then choose **General Sans**, **Satoshi** or **Outfit**. General Sans is the initial choice. The selection changes all non-logo text and is stored under `clear-able:typeface:v1` in localStorage, so refresh/navigation retains it. Another tab updates through the storage event. With storage disabled, switching still works for the current visit.

The selector is a separate native details/select UI using system fonts, outside the actual design. A visible unavailable state means the named candidate did not load; it is never reported as ready merely because a fallback rendered. Outfit is bundled locally; General Sans and Satoshi use Fontshare's official webfont service. Fontshare delivery could not be verified in this restricted development environment.

- `src/typography.css`: existing central role sizes, weights, spacing and logo settings.
- `src/typography-experiment.css`: candidate fonts, family/nearest-weight overrides and isolated control styles.
- `src/TypographySelector.tsx`: removable comparison panel.
- `src/typography-preference.ts`: validated preference storage and font-loading checks.
- `src/fonts/candidates/LICENSING.md`: source, copyright, licensing requirements and weight mappings.

General Sans offers 200/300/400/500/600/700; Satoshi is requested at 300/400/500/700/900; Outfit is variable 100–900. Unsupported current weights map to the closest available value (mapping table in the licence notes). All non-logo roles use the selected family. Both the supplied header SVG and the existing footer logo are excluded.

To finish the experiment, choose a final family, set it in the central typography variables, and remove the selector, preference startup and experiment CSS imports from `main.tsx`. No page content or animation depends on the control. Inter is no longer loaded.
