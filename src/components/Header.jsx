import { useState } from 'react'
import { LINKS } from '../config'
import Icon, { PATHS } from './Icon'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo" aria-label="Hi-Rollin home" onClick={close}>
          <img src="/logo.png" alt="Hi-Rollin" />
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon d={open ? PATHS.close : PATHS.menu} size={26} />
        </button>

        <nav id="main-nav" className={`header__nav${open ? ' is-open' : ''}`} aria-label="Main">
          <a href="#games" onClick={close}>Games</a>
          <a href="#download" onClick={close}>Download</a>
          <a href="#community" onClick={close}>Community</a>
          <a className="btn btn--gold btn--sm" href={LINKS.play} onClick={close}>Play now</a>
        </nav>
      </div>
    </header>
  )
}
