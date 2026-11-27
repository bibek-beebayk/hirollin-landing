import { LINKS, SITE } from '../config'

export default function Footer({ isSubpage = false }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src="/logo.png" alt="Hi-Rollin" className="footer__logo" />
        <nav className="footer__nav" aria-label="Footer">
          <a href={isSubpage ? '/#games' : '#games'}>Games</a>
          <a href="/download/">Download</a>
          <a href={isSubpage ? '/#community' : '#community'}>Community</a>
          <a href={LINKS.terms} target="_blank" rel="noopener noreferrer">Terms</a>
          <a href={LINKS.responsibleGaming} target="_blank" rel="noopener noreferrer">Responsible gaming</a>
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
