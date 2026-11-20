import { useEffect, useState, useRef } from 'react';
import { applyTypographySystem, ensureTypographyFonts, isTypographySystem, readTypographySystem, storageKey, typographySystems, type TypographySystem } from './typography-preference';

/** Standalone, removable design-review control and temporary specimen. */
export function TypographySelector() {
  const [selected, setSelected] = useState<TypographySystem>(readTypographySystem);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const requestId = useRef(0);
  useEffect(() => {
    const id = ++requestId.current;
    setStatus('loading');
    ensureTypographyFonts().then(() => { if (id === requestId.current) setStatus('ready'); }).catch(() => { if (id === requestId.current) setStatus('error'); });
    return () => { requestId.current++; };
  }, []);
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return;
      const value = readTypographySystem(); applyTypographySystem(value); setSelected(value);
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  const system = typographySystems[selected];
  return <details className="type-lab">
    <summary aria-label={`Typography systems: Option ${system.number}${status === 'error' ? ', fonts unavailable' : status === 'loading' ? ', loading fonts' : ''}`}><span>Type lab</span><span>Option {system.number}{status === 'error' ? ' · unavailable' : status === 'loading' ? ' · loading' : ''}</span></summary>
    <div className="type-lab-panel"><label htmlFor="comparison-system">Preview typography system</label>
      <select id="comparison-system" disabled={status === 'loading'} value={selected} onChange={event => {
        const value = event.target.value;
        if (isTypographySystem(value)) { applyTypographySystem(value, true); setSelected(value); }
      }}>{Object.entries(typographySystems).map(([value, option]) => <option key={value} value={value}>Option {option.number} — {option.label}</option>)}</select>
      <p aria-live="polite">{system.description}</p>
      <p role="status" className={status === 'error' ? 'type-lab-error' : undefined}>{status === 'ready' ? 'All system fonts loaded. Your selection is remembered.' : status === 'loading' ? 'Preparing all three systems…' : 'Some fonts could not load. You may be seeing a fallback.'}</p>
      {status === 'error' && <button type="button" onClick={() => window.location.reload()}>Retry fonts</button>}
      <section className="type-lab-specimen" aria-labelledby="specimen-heading">
        <h2 id="specimen-heading">Temporary editorial preview</h2>
        <blockquote>Clarity creates capability.</blockquote>
        <p className="type-lab-editorial"><em>Thoughtful digital solutions that give businesses the freedom to focus on what they do best.</em></p>
      </section>
      <p>Design experiment · Logos stay unchanged.</p>
    </div>
  </details>;
}
