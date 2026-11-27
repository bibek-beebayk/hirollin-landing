import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { LINKS } from '../config'
import Icon, { PATHS } from './Icon'

export default function GameModal({ selected, onClose }) {
  const reduced = useReducedMotion()
  const closeBtnRef = useRef(null)
  const game = selected?.game || null
  const source = selected?.source || 'catalogue'
  const opener = selected?.opener || null

  useEffect(() => {
    if (!game) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
      opener?.focus?.()
    }
  }, [game, opener, onClose])

  return (
    <AnimatePresence>
      {game && (
        <motion.div
          className="gmodal__backdrop"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={reduced ? { duration: 0 } : { duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            className="gmodal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="game-modal-title"
            initial={reduced ? false : { opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: 16, scale: 0.97 }}
            transition={reduced ? { duration: 0 } : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className="gmodal__close"
              aria-label="Close dialog"
              onClick={onClose}
            >
              <Icon d={PATHS.close} size={22} width={2.2} />
            </button>

            <div className="gmodal__poster-wrap">
              <motion.img
                layoutId={
                  reduced
                    ? undefined
                    : `${source === 'featured' ? 'featured-poster' : 'poster'}-${game.id}`
                }
                src={game.image}
                alt={game.name}
                width={320}
                height={545}
                className="gmodal__poster"
              />
            </div>

            <div className="gmodal__copy">
              <span className="gmodal__chip">{game.cat}</span>
              <h2 id="game-modal-title" className="gmodal__title">{game.name}</h2>
              <p className="gmodal__text">
                Jump straight in, or ask the community for tips first.
              </p>
              <div className="gmodal__actions">
                <a
                  className="btn btn--gold"
                  href={LINKS.play}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play now
                </a>
                <a
                  className="btn btn--outline"
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon d={PATHS.telegram} size={20} width={2} />
                  Join Telegram
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
