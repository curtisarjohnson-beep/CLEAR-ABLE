# Permanent website fonts

The website self-hosts exactly two font families, both under the **SIL Open Font License 1.1**. The unchanged WOFF2 files retain their internal names and copyright metadata. Their full licence and copyright notices are included in `public/font-licenses/` and shipped with the website.

| Family | Source | Included face | Assigned roles |
| --- | --- | --- | --- |
| Outfit | `@fontsource-variable/outfit` 5.3.0; https://github.com/Outfitio/Outfit-Fonts | Latin upright variable, 100–900 | Display 600; section and content headings 500 |
| Manrope | `@fontsource-variable/manrope` 5.3.0; https://github.com/sharanda/manrope | Latin upright variable, 200–800 | Body/supporting/editorial text 400; navigation/buttons/labels 500 |

The OFL permits commercial web embedding and redistribution with the notices retained. Neither font is sold separately or modified. See `public/font-licenses/outfit-OFL.txt` and `public/font-licenses/manrope-OFL.txt` for the full terms; https://openfontlicense.org/ is the licence reference.

Both files were acquired from npm using package-integrity verification. They are preloaded, served locally and use `font-display: swap` with Arial/Helvetica/sans-serif fallbacks. No font service, API key, selection persistence, italic face or third font family is required.

The supplied SVG wordmark is an unchanged graphic asset shared by the header and footer, independent of website font loading.
