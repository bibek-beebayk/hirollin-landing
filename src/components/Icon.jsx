// Small stroke-icon helper. `d` is an SVG path string on a 24x24 grid.
export default function Icon({ d, size = 24, stroke = 'currentColor', width = 1.8 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

export const PATHS = {
  crown: 'M3 8l4 4 5-7 5 7 4-4-2 11H5L3 8z',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z M9 12l2 2 4-4',
  people: 'M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0z M4 21c0-4 3.6-6 8-6s8 2 8 6',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 7v5l3 2',
  telegram: 'M21 4L3 11l6 2.5L11.5 20 14 15l5 3.5L21 4z',
  menu: 'M4 7h16 M4 12h16 M4 17h16',
  close: 'M6 6l12 12 M18 6L6 18',
}
