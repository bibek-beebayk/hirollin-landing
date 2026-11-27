import { GAMES } from '../data/games'

export default function Marquee() {
  if (GAMES.length === 0) return null

  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((dup) => (
          <div className="marquee__group" key={dup}>
            {GAMES.map((g) => (
              <div className="marquee__item" key={`${dup}-${g.id}`}>
                <img
                  src={g.image}
                  alt=""
                  width={75}
                  height={128}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
