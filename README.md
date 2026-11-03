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

Typography uses Inter from Google Fonts with system sans-serif fallbacks. The site remains functional without font network access. Replace placeholders and add verified business/contact/legal information before public launch.

## Enquiry delivery (not connected)

The enquiry form is a clearly labelled UI preview. Submission is disabled and prevented in JavaScript; no form data is sent or stored by the application. Do not enable submission until delivery and privacy information are ready.

For the next iteration, use a hosted form service with server-side validation and spam controls, or a small serverless endpoint that sends email using credentials held only on the server. Configure an approved recipient, origin restrictions, rate limiting and accessible success/error states. Publish a privacy notice covering the data controller, purpose, lawful basis, delivery provider, retention and contact/rights information. Test real delivery and failure handling before enabling the button. Never put mail-service API keys in Vite environment variables exposed to the client.

Portfolio descriptions are proposed project focuses, not verified outcomes. Replace illustrative artwork only with approved screenshots. Future case studies should cover context, challenge, solution, deliverables, verified outcomes and screenshots.
