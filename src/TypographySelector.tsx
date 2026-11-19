import { useEffect, useState, useRef } from 'react';
import { applyTypeface, ensureTypeface, isTypeface, readTypeface, storageKey, typefaces, type Typeface } from './typography-preference';

/** Standalone design-review control. Remove this component and its CSS when finished. */
export function TypographySelector() {
  const [selected, setSelected] = useState<Typeface>(readTypeface);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  const requestId = useRef(0);
  useEffect(() => {
    const id = ++requestId.current;
    setStatus('loading');
    ensureTypeface(selected).then(() => { if (id === requestId.current) setStatus('ready'); }).catch(() => { if (id === requestId.current) setStatus('error'); });
    return () => { requestId.current++; };
  }, [selected, attempt]);
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return;
      const value = readTypeface(); applyTypeface(value); setSelected(value);
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  return <details className="type-lab">
    <summary aria-label={`Typography comparison: ${typefaces[selected].label}${status === 'error' ? ' unavailable' : status === 'loading' ? ' loading' : ''}`}><span>Type lab</span><span>{typefaces[selected].label}{status === 'error' ? ' · unavailable' : status === 'loading' ? ' · loading' : ''}</span></summary>
    <div className="type-lab-panel"><label htmlFor="comparison-typeface">Preview website font</label>
      <select id="comparison-typeface" value={selected} onChange={event => {
        const value = event.target.value;
        if (isTypeface(value)) { applyTypeface(value, true); setSelected(value); }
      }}>{Object.entries(typefaces).map(([value, font]) => <option key={value} value={value}>{font.label}</option>)}</select>
      <p role="status" className={status === 'error' ? 'type-lab-error' : undefined}>{status === 'ready' ? `Weights: ${typefaces[selected].weights}.` : status === 'loading' ? 'Loading font…' : 'Font could not load. You’re seeing a fallback, not this candidate.'}</p>
      {status === 'error' && <button type="button" onClick={() => setAttempt(attempt + 1)}>Retry font</button>}
      <p>Design experiment · Applies to website text. Logos stay unchanged.</p>
    </div>
  </details>;
}
