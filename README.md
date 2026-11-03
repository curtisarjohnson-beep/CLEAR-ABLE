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
