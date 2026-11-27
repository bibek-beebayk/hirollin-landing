import { useState } from 'react'
import { CATEGORIES, GAMES } from '../data/games'
import { LINKS } from '../config'

export default function Games() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? GAMES : GAMES.filter((g) => g.cat === cat)

  return (
    <section id="games" className="container section">
      <div className="section__head">
        <span className="eyebrow">The catalogue</span>
        <h2 className="section__title">Pick your game</h2>
        <p className="section__text">Choose a category or browse everything.</p>
      </div>

      <div className="tabs" role="group" aria-label="Filter games">
        {CATEGORIES.map((c) => (
          <button
            type="button"
            key={c}
            className={`tab${c === cat ? ' is-active' : ''}`}
            aria-pressed={c === cat}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="games">
        {list.map((g) => (
          <article className="card" key={g.id}>
            <div className="card__art">
              <span className="card__tag">{g.cat}</span>
              <img
                className="card__img"
                src={g.image}
                alt={g.name}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="card__body">
              <h3 className="card__title">{g.name}</h3>
              {g.desc && <p className="card__text">{g.desc}</p>}
              <a className="btn btn--outline btn--sm btn--block" href={LINKS.play} target="_blank" rel="noopener noreferrer">Play now</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
