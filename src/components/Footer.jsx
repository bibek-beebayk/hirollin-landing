import { LINKS, SITE } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src="/logo.png" alt="Hi-Rollin" className="footer__logo" />
        <nav className="footer__nav" aria-label="Footer">
          <a href="#games">Games</a>
          <a href="#community">Community</a>
          <a href={LINKS.terms}>Terms</a>
          <a href={LINKS.responsibleGaming}>Responsible gaming</a>
        </nav>
      </div>
      <div className="container">
        <p className="footer__note">
          18+ only. Gambling involves risk; play responsibly and only with money you can afford to lose. {SITE.legalNote}
        </p>
      </div>
    </footer>
  )
}
