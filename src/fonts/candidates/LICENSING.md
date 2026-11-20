# Self-hosted typography-system fonts

All three families are licensed under the **SIL Open Font License 1.1**, which permits commercial website embedding and redistribution with the original copyright and licence notices. The unchanged WOFF2 files and full licence texts are included here. Font files are not sold separately, subsetted, renamed internally or otherwise modified. The CSS family aliases only isolate this experiment from the existing logos.

| Family | Package/source | Included faces | Available weights |
| --- | --- | --- | --- |
| Outfit | `@fontsource-variable/outfit` 5.3.0 | Latin upright variable | 100–900 |
| Manrope | `@fontsource-variable/manrope` 5.3.0 | Latin upright variable | 200–800 |
| Newsreader | `@fontsource-variable/newsreader` 5.3.0 | Latin upright and italic, variable weight and optical size | 200–800; optical size 6–72 |

Packages were downloaded from npm with the package manager's integrity verification. Full copyright and terms are in `outfit-OFL.txt`, `manrope-OFL.txt` and `newsreader-OFL.txt`.

- Outfit upstream: https://github.com/Outfitio/Outfit-Fonts
- Manrope upstream: https://github.com/sharanda/manrope
- Newsreader upstream: https://github.com/productiontype/Newsreader
- Licence reference: https://openfontlicense.org/

All existing used role weights fit these variable ranges; 550 and 650 are retained exactly. No synthetic italic is used: Newsreader has its own italic WOFF2. Systems 01 and 03 keep editorial emphasis upright because they do not include italic faces.

No General Sans, Satoshi, Fontshare API, or external font-CDN request is used by the current experiment. The SVG header logo and the existing footer logo fonts remain unchanged and independent.
