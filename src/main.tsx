import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const services = [
  {
    title: 'Brand & digital presence', subtitle: 'Make the right impression.',
    description: 'A professional digital presence that reflects your business, communicates your value and helps customers find and connect with you.',
    examples: ['Website design and development', 'Brand identity and visual design', 'Website copy and content', 'Search engine optimisation foundations', 'Website improvements and modernisation'],
    benefit: 'Look professional, communicate clearly and make it easier for customers to take action.',
  },
  {
    title: 'Automation & integration', subtitle: 'Make room for better work.',
    description: 'Reduce repetitive administration, simplify workflows and connect the systems your business relies on.',
    examples: ['Automating customer enquiries and follow-ups', 'Connecting bookings, invoices and customer records', 'Integrating existing business applications', 'Reducing manual data entry', 'Improving inefficient workflows', 'Practical AI-assisted automation where appropriate'],
    benefit: 'Less repetitive work. More time for customers and meaningful business activity.',
  },
  {
    title: 'Business solutions', subtitle: 'The right solution for the problem.',
    description: 'Practical, tailored or ready-made digital solutions for common business challenges.',
    examples: ['Online enquiry and booking workflows', 'Customer management improvements', 'Business reporting and dashboards', 'Connected website and back-office processes', 'Industry-specific digital solutions'],
    benefit: 'Useful capability without unnecessary software, complexity or ongoing expense.',
  },
];

function Arrow({direction='diagonal'}:{direction?:'diagonal'|'down'|'right'|'up'}){return <svg className={'arrow arrow-'+direction} viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16 16 4M4 4h12v12" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>}
function Header(){const [open,setOpen]=useState(false);return <header className="header"><a className="wordmark" href="#" aria-label="Clear and Able home">CLEAR <span>&</span> ABLE<span className="brand-dot">.</span></a><button className="menu" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close −':'Menu +'}</button><nav id="navigation" className={open?'open':''} aria-label="Main navigation">{['Services','Approach','Work','About'].map(item=><a key={item} href={'#'+item.toLowerCase()} onClick={()=>setOpen(false)}>{item}</a>)}<a className="contact-nav" href="#contact" onClick={()=>setOpen(false)}>Get in touch <span><Arrow/></span></a></nav></header>}
function GeometricArt(){const ref=useRef<HTMLDivElement>(null);const [paused,setPaused]=useState(false);useEffect(()=>{const element=ref.current;if(!element)return;const observer=new IntersectionObserver(([entry])=>element.classList.toggle('offscreen',!entry.isIntersecting));observer.observe(element);const visibility=()=>element.classList.toggle('hidden-tab',document.hidden);document.addEventListener('visibilitychange',visibility);return()=>{observer.disconnect();document.removeEventListener('visibilitychange',visibility)}},[]);return <div ref={ref} className={'artwork '+(paused?'paused':'')}><svg viewBox="0 0 640 640" role="img" aria-labelledby="art-title">
  <title id="art-title">A kinetic composition of interrupted black arcs and overlapping translucent ice-blue forms</title>
  <g className="plane plane-back">
    <path d="M320 66A254 254 0 0 1 574 320L435 320A115 115 0 0 0 320 205Z" fill="#b9d7e8" fillOpacity=".58"/>
  </g>
  <g className="plane plane-disc">
    <path d="M125 320A195 195 0 0 1 320 125L320 320Z" fill="#dcecf5" fillOpacity=".8"/>
  </g>
  <g className="orbit orbit-one"><circle cx="320" cy="320" r="264" fill="none" stroke="#111" strokeWidth="40" strokeDasharray="640 68 230 721" transform="rotate(-74 320 320)"/></g>
  <g className="orbit orbit-two"><circle cx="320" cy="320" r="219" fill="none" stroke="#111" strokeWidth="7" strokeDasharray="470 110 185 611" transform="rotate(38 320 320)"/></g>
  <g className="orbit orbit-three"><circle cx="320" cy="320" r="178" fill="none" stroke="#111" strokeWidth="50" strokeDasharray="530 589" transform="rotate(102 320 320)"/></g>
  <g className="plane plane-one">
    <path d="M71 320A249 249 0 0 0 569 320L435 320A115 115 0 0 1 205 320Z" fill="#b9d7e8" fillOpacity=".65"/>
  </g>
  <g className="orbit orbit-four"><circle cx="320" cy="320" r="134" fill="none" stroke="#111" strokeWidth="14" strokeDasharray="285 64 100 393" transform="rotate(-48 320 320)"/></g>
  <g className="orbit orbit-five"><circle cx="320" cy="320" r="101" fill="none" stroke="#111" strokeWidth="4" strokeDasharray="350 285" transform="rotate(75 320 320)"/></g>
  <g className="orbit orbit-six"><circle cx="320" cy="320" r="76" fill="none" stroke="#111" strokeWidth="23" strokeDasharray="140 338" transform="rotate(192 320 320)"/></g>
  <g className="plane plane-two">
    <path d="M320 95A225 225 0 0 1 545 320L425 320A105 105 0 0 0 320 215Z" fill="#dcecf5" fillOpacity=".62"/>
  </g>
  <g className="orbit orbit-seven"><circle cx="320" cy="320" r="298" fill="none" stroke="#111" strokeWidth="3" strokeDasharray="320 1552" transform="rotate(145 320 320)"/></g>
</svg><div className="art-caption"><span>FIG. 01 — COMPLEXITY, IN COMPOSITION</span><button onClick={()=>setPaused(!paused)} aria-label={paused?'Play artwork animation':'Pause artwork animation'}>{paused?'Play':'Pause'}</button></div></div>}
function Hero(){return <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span className="square"/> INDEPENDENT THINKING. PRACTICAL SOLUTIONS.</p><h1 id="hero-title">Clarity creates<br/><span>capability.</span></h1><p className="intro">Thoughtful digital solutions that give businesses the freedom to focus on what they do best.</p><div className="hero-actions"><a className="button" href="#services">Our services <span><Arrow/></span></a><a className="text-link" href="#approach">Our approach <span><Arrow direction="down"/></span></a></div></div><GeometricArt/><div className="hero-foot"><span>WEBSITES. IDENTITY. SYSTEMS. SOLUTIONS.</span><a href="#services">A clearer way forward <span><Arrow direction="down"/></span></a></div></section>}
function SectionLabel({number,children}:{number:string,children:React.ReactNode}){return <p className="section-label"><span>{number} /</span> {children}</p>}
function Services(){return <section id="services" className="section services">
  <SectionLabel number="01">WHAT WE DO</SectionLabel>
  <div className="section-intro"><h2>Good thinking.<br/>Useful outcomes.</h2><p>From the way your business looks to the way it works. We choose proven tools where they fit, and build something new when it adds real value.</p></div>
  <div className="service-list">{services.map(({title,subtitle,description,examples,benefit},i)=><article className="service" key={title}>
    <span className="index">0{i+1}</span><h3>{title}</h3>
    <div><h4>{subtitle}</h4><p>{description}</p>
      <details className="service-details"><summary>Explore {title.toLowerCase()}<span className="detail-toggle" aria-hidden="true"/></summary>
        <ul>{examples.map(example=><li key={example}>{example}</li>)}</ul>
        <p className="service-benefit">{benefit}</p>
        <a className="service-enquiry" href="#contact">Talk to us about your business <Arrow/></a>
      </details>
    </div>
  </article>)}</div>
</section>}

function Approach(){return <section id="approach" className="section approach"><SectionLabel number="02">A CLEARER APPROACH</SectionLabel><div className="approach-grid"><div className="approach-heading"><h2>First, clarity.<br/>Then, possibility.</h2><p className="approach-note">The right solution.<br/>Not the most complicated one.</p></div><div className="principles"><article><p className="eyebrow">CLEAR / HOW WE WORK</p><h3>Understand what matters.</h3><p>We start with your business, not the technology. We understand the challenge, identify what matters and find the simplest effective solution. Sometimes that means building something new. Often, it means making better use of what you already have. We favour proven tools that fit the need, and build custom solutions when there’s a clear reason. Every solution should earn its cost and complexity.</p></article><article><p className="eyebrow">ABLE / WHAT WE MAKE POSSIBLE</p><h3>More freedom to do what you do best.</h3><p>Less time spent on repetitive tasks and unnecessary administration. More time for your customers, your craft and the work that creates real value. Practical solutions that leave you capable, confident and in control. Wherever practical, your accounts, systems and data stay yours, so you can work independently.</p></article></div></div><div className="process">{['Discover','Assess','Propose','Deliver','Empower'].map((stage,i)=><span key={stage}><small>0{i+1}</small>{stage}<b aria-hidden="true"><Arrow direction={i<4?'right':'diagonal'}/></b></span>)}</div></section>}
function Portfolio(){return <section id="work" className="section portfolio"><SectionLabel number="03">WORK, IN PROGRESS</SectionLabel><div className="section-intro"><h2>Purpose in practice.</h2><p>A look at the projects taking shape.<br/>Approved screenshots and project details will follow.</p></div><div className="projects"><article><div className="project-art waste" aria-hidden="true"><div className="waste-circle"/><span>CLEAR SPACE.<br/>FRESH START.</span><small>WEBSITE / PROJECT PREVIEW</small></div><div className="project-caption"><div><h3>Waste clearance business</h3><p>Website Design & Development</p></div><span>PROJECT PREVIEW</span></div><p className="project-focus">Project focus: a professional online presence, clear services, straightforward enquiries and a mobile-friendly experience.</p><p className="project-status">Illustrative placeholder · Approved project details and screenshots to follow.</p></article><article><div className="project-art rescue" aria-hidden="true"><svg viewBox="0 0 500 300"><path d="M90 180Q145 65 260 135T410 85" fill="none" stroke="currentColor" strokeWidth="44"/><circle cx="406" cy="84" r="32"/><circle cx="417" cy="78" r="4" fill="#dcecf5"/><path d="m203 126-20-45m103 65 20 50" stroke="currentColor" strokeWidth="19"/></svg><small>WEBSITE / PROJECT PREVIEW</small></div><div className="project-caption"><div><h3>Reptile rescue organisation</h3><p>Brand & Digital Presence</p></div><span>PROJECT PREVIEW</span></div><p className="project-focus">Project focus: a distinctive identity, a clearly communicated purpose and accessible information that supports enquiries and engagement.</p><p className="project-status">Illustrative placeholder · Approved project details and screenshots to follow.</p></article></div></section>}
function Bird(){return <svg className="bird" viewBox="0 0 600 450" role="img" aria-label="Original abstract geometric bird in flight"><path d="m95 290 135-45-65 90Z"/><path d="m180 340 115-240 95 175Z"/><path d="m286 96-52-65 11 166Z"/><path d="m303 92 17-72 74 175Z"/><path d="m395 270 18-104 74-30Z"/><path d="m425 167 69-18 46 55Z"/></svg>}
function Freedom(){return <section id="about" className="freedom section"><div><SectionLabel number="04">THE BIGGER PICTURE</SectionLabel><h2>Freedom<br/>to focus.</h2><p>By making business operations clearer, simpler and more effective, we help people spend more time doing what matters most.</p><p className="freedom-note">Less friction. More possibility.</p></div><Bird/></section>}
function Contact(){return <section id="contact" className="section contact">
  <SectionLabel number="05">LET’S TALK</SectionLabel>
  <div className="contact-grid"><div><h2>What could be<br/>clearer for you?</h2><p className="contact-intro">Whether you need a website, want to reduce repetitive work or have a business challenge you're not sure how to solve, it starts with a conversation.</p></div>
    <div className="enquiry-panel">
      <p className="enquiry-status" id="enquiry-status"><strong>Enquiries aren’t available yet.</strong><br/>This form is a preview. It does not send or store your information.</p>
      <form aria-label="Enquiry form preview" aria-describedby="enquiry-status enquiry-privacy" onSubmit={event=>event.preventDefault()}>
        <div className="form-row"><div><label htmlFor="enquiry-name">Name</label><input id="enquiry-name" name="name" autoComplete="name" required/></div><div><label htmlFor="enquiry-business">Business name <span>(optional)</span></label><input id="enquiry-business" name="business" autoComplete="organization"/></div></div>
        <label htmlFor="enquiry-email">Email address</label><input id="enquiry-email" name="email" type="email" autoComplete="email" required/>
        <label htmlFor="enquiry-service">What can we help with? <span>(optional)</span></label><select id="enquiry-service" name="service" defaultValue=""><option value="">Select a service, or leave this open</option>{services.map(service=><option key={service.title} value={service.title}>{service.title}</option>)}<option value="unsure">I’m not sure yet</option></select>
        <label htmlFor="enquiry-message">Tell us a little about your business or challenge</label><textarea id="enquiry-message" name="message" rows={4} required/>
        <p id="enquiry-privacy" className="form-privacy">Please don’t enter sensitive information. Secure delivery and a privacy notice will be in place before enquiries open.</p>
        <button className="button enquiry-submit" type="submit" disabled>Submission unavailable</button>
      </form>
    </div>
  </div>
</section>}

function Footer(){return <footer><a className="wordmark" href="#">CLEAR <span>&</span> ABLE.</a><p>Clarity creates capability.</p><div><span>© {new Date().getFullYear()} CLEAR & ABLE</span><span>UK · INDEPENDENT DIGITAL SOLUTIONS</span><a href="#">Back to top <Arrow direction="up"/></a></div><small>Design preview · Business and legal information to be confirmed before launch.</small></footer>}
function App(){return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><Hero/><Services/><Approach/><Portfolio/><Freedom/><Contact/></main><Footer/></>}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
