import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { GAMES } from '../data/games'
import { FEATURED } from '../data/featured'
import { LINKS } from '../config'
import Icon, { PATHS } from './Icon'

export default function FeaturedCarousel({ onSelectGame, isModalOpen = false }) {
  const reduced = useReducedMotion()
  const items = useMemo(() => {
    const byId = new Map(GAMES.map((g) => [g.id, g]))
    return FEATURED.map((slug) => byId.get(slug)).filter(Boolean)
  }, [])

  const [active, setActive] = useState(0)
  const [stageWidth, setStageWidth] = useState(960)
  const [paused, setPaused] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)

  const stageRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, moved: false })

  const count = items.length
  const step = useCallback(
    (delta) => {
      if (count === 0) return
      setActive((prev) => (prev + delta + count) % count)
    },
    [count]
  )

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const update = () => setStageWidth(el.clientWidth || 960)
    update()
    if (typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const onVis = () => setTabHidden(document.visibilityState === 'hidden')
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  useEffect(() => {
    if (reduced || paused || tabHidden || isModalOpen || count < 2) return
    const timer = window.setInterval(() => step(1), 3800)
    return () => window.clearInterval(timer)
  }, [reduced, paused, tabHidden, isModalOpen, count, step])

  if (count === 0) return null

  const activeGame = items[active]
  const spread = Math.min(220, stageWidth * 0.27)

  const onPointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return
    dragRef.current = { active: true, startX: e.clientX, moved: false }
  }

  const onPointerMove = (e) => {
    if (!dragRef.current.active) return
    const dx = e.clientX - dragRef.current.startX
    if (Math.abs(dx) >= 45) {
      dragRef.current.moved = true
      dragRef.current.active = false
      step(dx < 0 ? 1 : -1)
    }
  }

  const onPointerUp = () => {
    dragRef.current.active = false
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      step(-1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      step(1)
    }
  }

  return (
    <section
      id="featured"
      className="section featured"
      aria-label="Featured games"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
      onKeyDown={onKeyDown}
    >
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Featured</span>
          <h2 className="section__title">Tonight&apos;s high-roller picks</h2>
          <p className="section__text">Drag, swipe or use the arrows.</p>
        </div>
      </div>

      <div className="coverflow">
        <button
          type="button"
          className="coverflow__nav coverflow__nav--prev"
          aria-label="Previous featured game"
          onClick={() => step(-1)}
        >
          <Icon d={PATHS.chevronLeft} size={22} width={2.2} />
        </button>

        <div
          ref={stageRef}
          className="coverflow__stage"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured games carousel"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {items.map((game, index) => {
            let offset = index - active
            if (offset > count / 2) offset -= count
            if (offset < -count / 2) offset += count
            const abs = Math.abs(offset)
            const hidden = abs > 3
            const isActive = abs === 0

            return (
              <motion.button
                key={game.id}
                type="button"
                className={`coverflow__item${isActive ? ' is-active' : ''}`}
                aria-label={`${game.name}, ${game.cat}`}
                aria-hidden={hidden || undefined}
                tabIndex={isActive ? 0 : -1}
                animate={{
                  x: offset * spread,
                  z: -abs * 120,
                  rotateY: reduced ? 0 : -offset * 36,
                  scale: 1 - abs * 0.03,
                  opacity: hidden ? 0 : Math.max(0, 1 - abs * 0.2),
                }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                }
                style={{
                  zIndex: 10 - abs,
                  pointerEvents: hidden ? 'none' : 'auto',
                  willChange: isActive ? 'transform' : undefined,
                }}
                onClick={(e) => {
                  if (dragRef.current.moved) {
                    dragRef.current.moved = false
                    return
                  }
                  if (isActive) {
                    onSelectGame(game, 'featured', e.currentTarget)
                  } else {
                    setActive(index)
                  }
                }}
              >
                <motion.img
                  layoutId={isActive && !reduced ? `featured-poster-${game.id}` : undefined}
                  src={game.image}
                  alt={game.name}
                  width={416}
                  height={708}
                  decoding="async"
                  draggable={false}
                  className="coverflow__img"
                />
              </motion.button>
            )
          })}
        </div>

        <button
          type="button"
          className="coverflow__nav coverflow__nav--next"
          aria-label="Next featured game"
          onClick={() => step(1)}
        >
          <Icon d={PATHS.chevronRight} size={22} width={2.2} />
        </button>
      </div>

      <div className="container coverflow__meta">
        <div className="coverflow__dots" role="tablist" aria-label="Choose featured game">
          {items.map((game, i) => (
            <button
              key={game.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${game.name}`}
              className={`coverflow__dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="coverflow__dot-pill" />
            </button>
          ))}
        </div>

        <div className="coverflow__info" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeGame.id}
              className="coverflow__title-wrap"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={reduced ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' }}
            >
              <span className="coverflow__chip">{activeGame.cat}</span>
              <h3 className="coverflow__name">{activeGame.name}</h3>
            </motion.div>
          </AnimatePresence>

          <a
            className="btn btn--gold btn--sm"
            href={LINKS.play}
            target="_blank"
            rel="noopener noreferrer"
          >
            Play now
          </a>
        </div>
      </div>
    </section>
  )
}
