import { useRef, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react'
import { CATEGORIES, GAMES } from '../data/games'
import GameCard from './GameCard'
import Icon, { PATHS } from './Icon'

const PAGE_SIZE = 10

function CategoryShelf({ category, games, onSelectGame, reduced }) {
  const rowRef = useRef(null)

  const scrollRow = (dir) => {
    const el = rowRef.current
    if (!el) return
    el.scrollBy({
      left: dir * el.clientWidth * 0.85,
      behavior: reduced ? 'auto' : 'smooth',
    })
  }

  return (
    <div className="shelf">
      <div className="shelf__head">
        <div className="shelf__titles">
          <h3 className="shelf__title">{category}</h3>
          <span className="shelf__count">{games.length} games</span>
        </div>
        <div className="shelf__arrows">
          <button
            type="button"
            className="shelf__arrow"
            aria-label={`Scroll ${category} left`}
            onClick={() => scrollRow(-1)}
          >
            <Icon d={PATHS.chevronLeft} size={20} width={2.2} />
          </button>
          <button
            type="button"
            className="shelf__arrow"
            aria-label={`Scroll ${category} right`}
            onClick={() => scrollRow(1)}
          >
            <Icon d={PATHS.chevronRight} size={20} width={2.2} />
          </button>
        </div>
      </div>

      <div ref={rowRef} className="shelf__row">
        <AnimatePresence mode="popLayout">
          {games.map((g, i) => (
            <div className="shelf__cell" key={g.id}>
              <GameCard game={g} index={i} onSelect={onSelectGame} />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Games({ onSelectGame }) {
  const reduced = useReducedMotion()
  const [cat, setCat] = useState('All')
  const [expanded, setExpanded] = useState(false)

  const shelfCategories = CATEGORIES.filter((c) => c !== 'All')
  const filtered = cat === 'All' ? GAMES : GAMES.filter((g) => g.cat === cat)
  const visible = expanded ? filtered : filtered.slice(0, PAGE_SIZE)

  const handleSelectCat = (next) => {
    setCat(next)
    setExpanded(false)
  }

  return (
    <section id="games" className="container section">
      <div className="section__head">
        <span className="eyebrow">The catalogue</span>
        <h2 className="section__title">Pick your game</h2>
        <p className="section__text">Choose a category or browse everything.</p>
      </div>

      <div className="gtabs-wrap">
        <div className="gtabs" role="group" aria-label="Filter games">
          {CATEGORIES.map((c) => {
            const active = c === cat
            return (
              <button
                type="button"
                key={c}
                className={`gtab${active ? ' is-active' : ''}`}
                aria-pressed={active}
                onClick={() => handleSelectCat(c)}
              >
                {active && (
                  <motion.span
                    layoutId="tab-pill"
                    className="gtabs__pill"
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 420, damping: 34 }
                    }
                  />
                )}
                <span className="gtab__label">{c}</span>
              </button>
            )
          })}
        </div>
      </div>

      <LayoutGroup id="games-catalogue">
        {cat === 'All' ? (
          <div className="shelves">
            {shelfCategories.map((category) => {
              const items = GAMES.filter((g) => g.cat === category)
              if (items.length === 0) return null
              return (
                <CategoryShelf
                  key={category}
                  category={category}
                  games={items}
                  onSelectGame={onSelectGame}
                  reduced={reduced}
                />
              )
            })}
          </div>
        ) : (
          <>
            <div className="ggrid">
              <AnimatePresence mode="popLayout">
                {visible.map((g, i) => (
                  <GameCard key={g.id} game={g} index={i} onSelect={onSelectGame} />
                ))}
              </AnimatePresence>
            </div>

            {filtered.length > PAGE_SIZE && (
              <div className="ggrid__more">
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => setExpanded((e) => !e)}
                >
                  {expanded ? 'Show fewer games' : `Show all ${filtered.length} games`}
                </button>
              </div>
            )}
          </>
        )}
      </LayoutGroup>
    </section>
  )
}
