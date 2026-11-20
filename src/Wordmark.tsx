import wordmark from './assets/clear-and-able-wordmark.svg';
import './wordmark.css';

/** Use the supplied SVG in the footer as well; never reconstruct it with fonts. */
export function Wordmark() {
  return <a className="footer-logo" href={import.meta.env.BASE_URL} aria-label="CLEAR & ABLE — home">
    <img src={wordmark} alt="" width="392" height="60"/>
  </a>;
}
