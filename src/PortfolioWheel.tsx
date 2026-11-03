import { useEffect, useRef, useState } from 'react';
import './portfolio.css';

type Project = { id: string; name: string; category: string; description: string; focus: string[]; url: string };
const projects: Project[] = [
  { id: 'waste-clearance', name: 'Waste clearance business', category: 'Website Design & Development', description: 'A website concept focused on making a local service clear and approachable.', focus: ['A professional online presence', 'Services that are easy to understand', 'Straightforward customer enquiries', 'A clear mobile-friendly experience'], url: '#project-waste-clearance' },
  { id: 'reptile-rescue', name: 'Reptile rescue organisation', category: 'Brand & Digital Presence', description: 'A digital presence concept focused on communicating the organisation’s purpose.', focus: ['A distinctive visual identity', 'A clearly communicated purpose', 'Accessible, well-structured information', 'Support for enquiries and engagement'], url: '#project-reptile-rescue' },
];
// Temporary project imagery; repeated sets allow seamless horizontal travel.
const segments = [
  { project: projects[0], image: 'waste-desktop.svg', description: 'Desktop website concept' },
  { project: projects[1], image: 'rescue-mobile.svg', description: 'Mobile website concept' },
  { project: projects[0], image: 'waste-detail.svg', description: 'Design detail concept' },
  { project: projects[1], image: 'rescue-desktop.svg', description: 'Desktop website concept' },
  { project: projects[0], image: 'waste-mobile.svg', description: 'Mobile website concept' },
  { project: projects[1], image: 'rescue-detail.svg', description: 'Design detail concept' },
];
const carouselPanels = [...segments, ...segments, ...segments];

export function PortfolioWheel() {
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(document.hidden);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const region = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (region.current) observer.observe(region.current);
    const visibility = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', visibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  useEffect(() => {
    if (selected && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [selected]);
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update(); preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const cards = Array.from(element.querySelectorAll<HTMLElement>('.portfolio-card'));
    const first = cards[0], nextSet = cards[segments.length];
    const arrange = () => {
      const centre = element.scrollLeft + element.clientWidth / 2;
      cards.forEach(card => {
        const distance = card.offsetLeft + card.offsetWidth / 2 - centre;
        const proportion = Math.max(-1.5, Math.min(1.5, distance / element.clientWidth));
        card.style.setProperty('--card-angle', `${proportion * 10}deg`);
        card.style.setProperty('--card-drop', `${Math.min(38, proportion * proportion * 36)}px`);
      });
    };
    const initialise = () => {
      element.scrollLeft = nextSet.offsetLeft - first.offsetLeft;
      arrange();
    };
    initialise();
    const observer = new ResizeObserver(initialise);
    observer.observe(element);
    element.addEventListener('scroll', arrange, { passive: true });
    return () => { observer.disconnect(); element.removeEventListener('scroll', arrange); };
  }, []);
  useEffect(() => {
    if (paused || !visible || hidden || selected || hovered || focused || interacting || reducedMotion) return;
    const element = track.current;
    if (!element) return;
    let frame = 0, previous = 0;
    let position = element.scrollLeft;
    const tick = (time: number) => {
      if (previous) {
        position += Math.min(time - previous, 50) * 0.018;
        const cards = element.querySelectorAll<HTMLElement>('.portfolio-card');
        const span = cards[segments.length].offsetLeft - cards[0].offsetLeft;
        if (position >= span * 2) position -= span;
        element.scrollLeft = position;
      }
      previous = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, visible, hidden, selected, hovered, focused, interacting, reducedMotion]);
  const navigate = (direction: number) => {
    setPaused(true);
    const element = track.current;
    if (!element) return;
    const cards = element.querySelectorAll<HTMLElement>('.portfolio-card');
    const span = cards[segments.length].offsetLeft - cards[0].offsetLeft;
    if (element.scrollLeft < span / 2) element.scrollLeft += span;
    else if (element.scrollLeft > span * 2) element.scrollLeft -= span;
    element.scrollBy({ left: direction * (cards[1].offsetLeft - cards[0].offsetLeft), behavior: reducedMotion ? 'instant' : 'smooth' });
  };
  const openProject = (event: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
    event.preventDefault();
    setSelected(project);
  };
  return <div ref={region} className="portfolio-display">
    <div ref={track} className="portfolio-track" role="region" aria-roledescription="carousel" aria-label="Project previews"
      onPointerEnter={() => { if (matchMedia('(hover: hover)').matches) setHovered(true); }} onPointerLeave={() => { setHovered(false); setInteracting(false); }}
      onPointerDown={() => { setInteracting(true); setPaused(true); }} onPointerUp={() => setInteracting(false)} onPointerCancel={() => setInteracting(false)}
      onWheel={() => setPaused(true)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setFocused(false); }}>
      {carouselPanels.map((segment, index) => <article className="portfolio-card" key={`${segment.image}-${index}`} aria-hidden={index < segments.length || index >= segments.length * 2 ? true : undefined}>
        <p className="portfolio-card-label">PROJECT PREVIEW</p>
        <a href={segment.project.url} tabIndex={index >= segments.length && index < segments.length * 2 ? 0 : -1} onClick={event => openProject(event, segment.project)} aria-haspopup="dialog">
          <img src={`${import.meta.env.BASE_URL}portfolio/${segment.image}`} alt={`${segment.project.name}: ${segment.description}, illustrative preview`} width="280" height="350" loading="lazy"/>
          <h3>{segment.project.name}</h3>
          <p>{segment.description}</p><span className="portfolio-card-link">View preview</span>
        </a>
      </article>)}
    </div>
    <div className="wheel-toolbar"><p>ILLUSTRATIVE PREVIEWS · APPROVED SCREENSHOTS TO FOLLOW</p><div className="portfolio-controls"><button type="button" onClick={() => navigate(-1)} aria-label="Previous project preview">Previous</button>{!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Play portfolio motion' : 'Pause portfolio motion'}>{paused ? 'Play' : 'Pause'}</button>}<button type="button" onClick={() => navigate(1)} aria-label="Next project preview">Next</button></div></div>
    <p className="wheel-help">Swipe to explore, or use the controls. Select a preview to learn more.</p>
    <div className="wheel-projects">{projects.map((project, index) => <a key={project.id} href={project.url} onClick={event => openProject(event, project)} aria-haspopup="dialog"><span className="wheel-project-number">0{index + 1}</span><div><h3>{project.name}</h3><p>{project.category}</p></div><span className="wheel-project-open">View preview <span aria-hidden="true">+</span></span></a>)}</div>
    <dialog ref={dialog} id={selected ? selected.url.slice(1) : undefined} className="project-dialog" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-status" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      {selected && <div className="project-dialog-content"><button className="project-close" type="button" onClick={() => dialog.current?.close()} autoFocus>Close ×</button><p className="eyebrow">PROJECT PREVIEW / {selected.category.toUpperCase()}</p><h2 id="project-dialog-title">{selected.name}</h2><p id="project-dialog-status" className="project-dialog-status">Illustrative concept. Approved screenshots, client details and verified outcomes are not available yet.</p><p>{selected.description}</p><h3>Project focus</h3><ul>{selected.focus.map(focus => <li key={focus}>{focus}</li>)}</ul><p className="project-dialog-footnote">This is a preview of the proposed direction, rather than a completed case study.</p></div>}
    </dialog>
  </div>;
}
