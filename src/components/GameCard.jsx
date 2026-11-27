import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

export default function GameCard({ game, index = 0, onSelect }) {
  const reduced = useReducedMotion()
  const cardRef = useRef(null)
  const [canTilt, setCanTilt] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const sync = () => setCanTilt(mq.matches)
    sync()
    mq.addEventListener?.('change', sync)
    return () => mq.removeEventListener?.('change', sync)
  }, [])

  const tiltEnabled = canTilt && !reduced

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(rawX, { stiffness: 260, damping: 22, mass: 0.5 })
  const rotateY = useSpring(rawY, { stiffness: 260, damping: 22, mass: 0.5 })

  const handlePointerMove = (e) => {
    if (!tiltEnabled || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rawX.set((0.5 - py) * 14) // up to +-7deg
    rawY.set((px - 0.5) * 16) // up to +-8deg
    cardRef.current.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
    cardRef.current.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
  }

  const handlePointerLeave = () => {
    if (!tiltEnabled) return
    rawX.set(0)
    rawY.set(0)
  }

  const staggerDelay = Math.min(index, 8) * 0.055

  return (
    <motion.button
      ref={cardRef}
      type="button"
      className="gcard"
      aria-label={`${game.name}, ${game.cat}`}
      layout={reduced ? false : true}
      layoutId={reduced ? undefined : game.id}
      initial={reduced ? false : { opacity: 0, y: 30, scale: 0.95 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      exit={reduced ? undefined : { opacity: 0, scale: 0.9 }}
      whileHover={tiltEnabled ? { y: -8, scale: 1.03 } : undefined}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={
        reduced
          ? { duration: 0 }
          : {
              layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.45, delay: staggerDelay, ease: 'easeOut' },
              y: { duration: 0.45, delay: staggerDelay, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.35, ease: 'easeOut' },
            }
      }
      style={
        tiltEnabled
          ? { rotateX, rotateY, transformPerspective: 900 }
          : undefined
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={(e) => onSelect(game, 'catalogue', e.currentTarget)}
    >
      <motion.img
        layoutId={reduced ? undefined : `poster-${game.id}`}
        src={game.image}
        alt=""
        width={320}
        height={545}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="gcard__img"
      />
      <span className="gcard__shine" aria-hidden="true" />
      <span className="gcard__overlay">
        <span className="gcard__cat">{game.cat}</span>
        <span className="gcard__name">{game.name}</span>
        <span className="gcard__pill">Play now</span>
      </span>
    </motion.button>
  )
}
