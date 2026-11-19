import wordmark from './assets/clear-and-able-wordmark.svg';
import './header-logo.css';

export function HeaderLogo() {
  return <a className="header-logo" href={import.meta.env.BASE_URL} aria-label="CLEAR & ABLE — home">
    <img src={wordmark} alt="" width="400" height="64"/>
  </a>;
}
