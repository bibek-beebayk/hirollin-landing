import { LINKS } from '../config'
import Icon, { PATHS } from './Icon'

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero__copy">
        <span className="pill">
          <Icon d={PATHS.crown} size={16} stroke="currentColor" width={2} />
          Welcome to the high table
        </span>
        <h1 className="hero__title">
          Roll big.<br />Play like royalty.
        </h1>
        <p className="hero__text">
          Dice, cards, crash and more, all in one place. Jump into a game, then bring your luck to the Rollin community.
        </p>
        <div className="hero__cta">
          <a className="btn btn--gold btn--lg" href="#games">Browse games</a>
          <a className="btn btn--outline btn--lg" href={LINKS.telegram} target="_blank" rel="noopener noreferrer">
            <Icon d={PATHS.telegram} size={20} width={2} />
            Join Telegram
          </a>
        </div>
      </div>
      <div className="hero__art">
        <img src="/logo.png" alt="Hi-Rollin crown and red dice emblem" />
      </div>
    </section>
  )
}
