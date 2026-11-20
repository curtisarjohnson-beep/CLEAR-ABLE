export const typographySystems = {
  'outfit-only': { number: '01', label: 'Outfit Only (baseline)', description: 'Outfit for headings, body, navigation and editorial text.' },
  'contemporary-editorial': { number: '02', label: 'Contemporary + Editorial', description: 'Outfit throughout, with Newsreader for editorial statements and quotes.' },
  'architectural-humanist': { number: '03', label: 'Architectural + Humanist', description: 'Outfit headings; Manrope body, navigation, labels, buttons and editorial text.' },
} as const;
export type TypographySystem = keyof typeof typographySystems;
export const storageKey = 'clear-able:typography-system:v1';
export const isTypographySystem = (value: unknown): value is TypographySystem => typeof value === 'string' && Object.hasOwn(typographySystems, value);
export function readTypographySystem(): TypographySystem {
  try { const value = localStorage.getItem(storageKey); if (isTypographySystem(value)) return value; } catch { /* Storage may be disabled; switching still works for this visit. */ }
  // The old individual-font preference is intentionally not migrated.
  return 'contemporary-editorial';
}
export function applyTypographySystem(value: TypographySystem, persist = false) {
  document.documentElement.dataset.typographySystem = value;
  if (persist) { try { localStorage.setItem(storageKey, value); } catch { /* Preserve the in-memory selection. */ } }
}
let readiness: Promise<void> | undefined;
/** Warm all families once, so subsequent system changes need no font downloads. */
export function ensureTypographyFonts(): Promise<void> {
  if (!readiness) readiness = Promise.all([
    '400 16px "Outfit Comparison"', '650 32px "Outfit Comparison"',
    '400 16px "Manrope Comparison"', '500 16px "Manrope Comparison"',
    '400 24px "Newsreader Comparison"', 'italic 400 24px "Newsreader Comparison"',
  ].map(async descriptor => {
    const faces = await document.fonts.load(descriptor, 'Clarity creates capability.');
    if (!faces.length || !document.fonts.check(descriptor)) throw new Error('Comparison font unavailable');
  })).then(() => undefined).catch(error => { readiness = undefined; throw error; });
  return readiness;
}
