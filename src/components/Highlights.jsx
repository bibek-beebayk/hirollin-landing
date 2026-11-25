import Icon, { PATHS } from './Icon'

// Replace the bracketed placeholders with real, verifiable points.
const ITEMS = [
  { icon: PATHS.bolt, text: 'Instant-play games' },
  { icon: PATHS.shield, text: '[YOUR TRUST POINT]' },
  { icon: PATHS.people, text: 'Active community' },
  { icon: PATHS.clock, text: '[YOUR SUPPORT HOURS]' },
]

export default function Highlights() {
  return (
    <section className="highlights" aria-label="Highlights">
      <div className="container highlights__inner">
        {ITEMS.map((item) => (
          <div className="highlights__item" key={item.text}>
            <Icon d={item.icon} />
            {item.text}
          </div>
        ))}
      </div>
    </section>
  )
}
