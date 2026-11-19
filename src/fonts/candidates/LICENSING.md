# Typography comparison font sources and licences

## General Sans and Satoshi — Indian Type Foundry / Fontshare

These are proprietary free-to-use Fontshare fonts governed by the **ITF Free Font License (FFL)**, not the SIL Open Font License. Fontshare's terms permit personal/commercial website use, including standard webfont embedding. Redistribution as a font library or via a public repository is restricted. External users must obtain the software from Fontshare themselves.

This project therefore **does not redistribute their font binaries**. `ensureTypeface` loads the requested webfonts directly from Fontshare's official API into the visitor's browser. No API key is required. The site's selection UI reports delivery failures rather than presenting a fallback as a successful comparison.

- General Sans: designed by Frode Helland; Indian Type Foundry.
- Satoshi: designed by Deni Anggara; Indian Type Foundry.
- Copyright 2017–2021 Indian Type Foundry. All rights reserved.
- Original embedded licence credit requirement: “You agree to identify the ITF fonts by name and credit the ITF's ownership of the trademarks and copyrights in any design or production credits.” This notice provides that credit.
- Official family pages: https://www.fontshare.com/fonts/general-sans and https://www.fontshare.com/fonts/satoshi
- Official licence: https://www.fontshare.com/licenses/itf-ffl ; https://fontshare.com/terms

The font metadata and webfont installation instructions were checked against public copies of the original font packages. The licence's self-hosting/redistribution distinction was checked against FFL 2.0 text preserved in https://github.com/hanabif/Designo/commit/3f72243e6e01bc4cff0c30a4b25076714ec1e15b (frontend/src/fonts/LICENSE-FFL.txt). The official Fontshare endpoint is blocked by this development environment's outbound policy; runtime delivery of these two families cannot be verified here. Do not switch these families to committed, self-hosted copies without reviewing the official terms and obtaining files directly from Fontshare.

## Outfit — SIL Open Font License 1.1

The unchanged Latin variable WOFF2 is from `@fontsource-variable/outfit` version 5.3.0, obtained through npm with its package integrity checks. It is self-hosted under the SIL Open Font License 1.1; full copyright and licence text are in `outfit-OFL.txt`. The original font names and metadata are preserved. The CSS alias `Outfit Comparison` isolates it from the existing logo font; it does not rename or alter the font binary.

## Weights used by the experiment

- General Sans: 200, 300, 400, 500, 600, 700. Existing 550 → 600, 650 → 700 and 750 → 700.
- Satoshi: 300, 400, 500, 700, 900. Existing 550 → 500, 600 → 700, 650 → 700 and 750 → 700. For 600, the equidistant heavier weight is used for emphasis.
- Outfit: variable 100–900. Existing weights, including 550 and 650, are retained exactly.

Existing font sizes, letter spacing, line heights, text and palette remain unchanged. Font-specific glyph metrics naturally affect wrapping. Logos are excluded from the experiment.
