import Icon, { PATHS } from './Icon'

const ITEMS = [
  {
    icon: PATHS.dice,
    title: 'Play like a real casino',
    text: 'Real casino-style games and the full table experience.',
  },
  {
    icon: PATHS.wallet,
    title: 'Automated payments',
    text: 'Deposits and withdrawals are handled by our automated payment system.',
  },
  {
    icon: PATHS.userCheck,
    title: 'No agent needed',
    text: 'Play and cash out directly, with nobody in the middle.',
  },
  {
    icon: PATHS.clock,
    title: '24x7 Support',
    text: 'Help is available around the clock whenever you need it.',
  },
]

export default function Highlights() {
  return (
    <section className="highlights" aria-label="Highlights">
      <div className="container highlights__inner">
        {ITEMS.map((item) => (
          <div className="highlights__item" key={item.title}>
            <span className="highlights__icon">
              <Icon d={item.icon} size={24} />
            </span>
            <div className="highlights__copy">
              <strong className="highlights__title">{item.title}</strong>
              <p className="highlights__text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
