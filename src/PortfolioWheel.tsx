import { useEffect, useRef, useState } from 'react';
import './portfolio.css';

type Project = { id: string; name: string; category: string; description: string; focus: string[]; url: string };
const projects: Project[] = [
  { id: 'waste-clearance', name: 'Waste clearance business', category: 'Website Design & Development', description: 'A website concept focused on making a local service clear and approachable.', focus: ['A professional online presence', 'Services that are easy to understand', 'Straightforward customer enquiries', 'A clear mobile-friendly experience'], url: '#project-waste-clearance' },
  { id: 'reptile-rescue', name: 'Reptile rescue organisation', category: 'Brand & Digital Presence', description: 'A digital presence concept focused on communicating the organisation’s purpose.', focus: ['A distinctive visual identity', 'A clearly communicated purpose', 'Accessible, well-structured information', 'Support for enquiries and engagement'], url: '#project-reptile-rescue' },
];
// Six preview assets repeat around a full orbit, leaving the centre empty.
// Panels counter-rotate so their rectangular artwork always remains upright.
const segments = [
  { project: projects[0], image: 'waste-desktop.svg', description: 'Desktop website concept' },
  { project: projects[1], image: 'rescue-mobile.svg', description: 'Mobile website concept' },
  { project: projects[0], image: 'waste-detail.svg', description: 'Design detail concept' },
  { project: projects[1], image: 'rescue-desktop.svg', description: 'Desktop website concept' },
  { project: projects[0], image: 'waste-mobile.svg', description: 'Mobile website concept' },
  { project: projects[1], image: 'rescue-detail.svg', description: 'Design detail concept' },
];
const orbitPanels = [...segments, ...segments];

export function PortfolioWheel() {
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(document.hidden);
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
  const openProject = (event: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
    event.preventDefault();
    setSelected(project);
  };
  return <div ref={region} className={'portfolio-display' + (paused || !visible || hidden || selected ? ' wheel-paused' : '')}>
    <div className="wheel-viewport">
      {/* Stable project links below provide keyboard access, including to sectors
          currently outside the clipping boundary. Pointer users can select any visible sector. */}
      <svg className="portfolio-wheel" viewBox="0 0 1200 600" aria-hidden="true" focusable="false">
        <g className="portfolio-rotor">
          {orbitPanels.map((segment, index) => {
            const angle = (-165 + index * 30) * Math.PI / 180;
            const x = 600 + 490 * Math.cos(angle);
            const y = 600 + 490 * Math.sin(angle);
            return <g key={`${segment.image}-${index}`} transform={`translate(${x} ${y})`}>
              <g className="portfolio-panel">
                <a href={segment.project.url} tabIndex={-1} onClick={event => openProject(event, segment.project)} aria-label={`${segment.project.name}: ${segment.description}`}>
                  <image href={`${import.meta.env.BASE_URL}portfolio/${segment.image}`} x="-75" y="-95" width="150" height="190" preserveAspectRatio="xMidYMid slice"/>
                  <rect className="panel-outline" x="-75" y="-95" width="150" height="190"/>
                </a>
              </g>
            </g>;
          })}
        </g>
      </svg>
      <div className="portfolio-mobile-panels" aria-label="Project previews">{segments.map(segment => <a key={segment.image} href={segment.project.url} onClick={event => openProject(event, segment.project)} aria-haspopup="dialog"><img src={`${import.meta.env.BASE_URL}portfolio/${segment.image}`} alt={`${segment.project.name}: ${segment.description}, illustrative preview`} loading="lazy" width="150" height="190"/><span>{segment.project.name}</span></a>)}</div>
    </div>
    <div className="wheel-toolbar"><p>ILLUSTRATIVE PREVIEWS · APPROVED SCREENSHOTS TO FOLLOW</p><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Play portfolio rotation' : 'Pause portfolio rotation'}>{paused ? 'Play rotation' : 'Pause rotation'}</button></div>
    <p className="wheel-help">Explore a project below, or select a panel. Hover to pause. On mobile, swipe through the still previews.</p>
    <div className="wheel-projects">{projects.map((project, index) => <a key={project.id} href={project.url} onClick={event => openProject(event, project)} aria-haspopup="dialog"><span className="wheel-project-number">0{index + 1}</span><div><h3>{project.name}</h3><p>{project.category}</p></div><span className="wheel-project-open">View preview <span aria-hidden="true">+</span></span></a>)}</div>
    <dialog ref={dialog} id={selected ? selected.url.slice(1) : undefined} className="project-dialog" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-status" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      {selected && <div className="project-dialog-content"><button className="project-close" type="button" onClick={() => dialog.current?.close()} autoFocus>Close ×</button><p className="eyebrow">PROJECT PREVIEW / {selected.category.toUpperCase()}</p><h2 id="project-dialog-title">{selected.name}</h2><p id="project-dialog-status" className="project-dialog-status">Illustrative concept. Approved screenshots, client details and verified outcomes are not available yet.</p><p>{selected.description}</p><h3>Project focus</h3><ul>{selected.focus.map(focus => <li key={focus}>{focus}</li>)}</ul><p className="project-dialog-footnote">This is a preview of the proposed direction, rather than a completed case study.</p></div>}
    </dialog>
  </div>;
}
