export const typefaces = {
  'general-sans': { label: 'General Sans', weights: '200, 300, 400, 500, 600, 700' },
  satoshi: { label: 'Satoshi', weights: '300, 400, 500, 700, 900' },
  outfit: { label: 'Outfit', weights: 'Variable 100–900' },
} as const;
export type Typeface = keyof typeof typefaces;
const storageKey = 'clear-able:typeface:v1';
export const isTypeface = (value: unknown): value is Typeface => typeof value === 'string' && Object.hasOwn(typefaces, value);
export function readTypeface(): Typeface {
  try { const value = localStorage.getItem(storageKey); if (isTypeface(value)) return value; } catch { /* Storage can be disabled; selection still works for this visit. */ }
  return 'general-sans';
}
export function applyTypeface(value: Typeface, persist = false) {
  document.documentElement.dataset.typeface = value;
  if (persist) { try { localStorage.setItem(storageKey, value); } catch { /* Keep the working in-memory selection. */ } }
}
export { storageKey };

const stylesheetPromises = new Map<Typeface, Promise<void>>();
export async function ensureTypeface(value: Typeface) {
  if (value !== 'outfit') {
    let request = stylesheetPromises.get(value);
    if (!request) {
      request = new Promise<void>((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        const query = value === 'general-sans' ? 'general-sans@200,300,400,500,600,700' : 'satoshi@300,400,500,700,900';
        link.href = `https://api.fontshare.com/v2/css?f[]=${query}&display=swap`;
        link.onload = () => resolve();
        link.onerror = () => { stylesheetPromises.delete(value); link.remove(); reject(new Error('Fontshare stylesheet unavailable')); };
        document.head.append(link);
      });
      stylesheetPromises.set(value, request);
    }
    await request;
  }
  const family = value === 'outfit' ? 'Outfit Comparison' : typefaces[value].label;
  const fonts = await document.fonts.load(`400 16px "${family}"`, 'Clarity creates capability');
  if (!fonts.length || !document.fonts.check(`400 16px "${family}"`)) throw new Error('Font file unavailable');
}
