// Placeholder lineup. Replace with your real games.
// `icon` is an SVG path (24x24 viewBox, stroke style). `art` is a CSS background.
export const CATEGORIES = ['All', 'Dice', 'Table', 'Slots', 'Instant']

export const GAMES = [
  {
    id: 'hi-lo-dice',
    name: 'Hi-Lo Dice',
    cat: 'Dice',
    desc: 'Call high or low on the roll and ride the streak.',
    art: 'linear-gradient(135deg, #7b2fbe, #3b1368)',
    icon: 'M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z M8 8h.01 M16 8h.01 M12 12h.01 M8 16h.01 M16 16h.01',
  },
  {
    id: 'crash',
    name: 'Crash',
    cat: 'Instant',
    desc: 'Watch the multiplier climb and cash out before it crashes.',
    art: 'linear-gradient(135deg, #b3121f, #4a0d3a)',
    icon: 'M3 20l6-8 4 4 8-11 M15 5h6v6',
  },
  {
    id: 'royal-roulette',
    name: 'Royal Roulette',
    cat: 'Table',
    desc: 'Place your chips and spin the wheel.',
    art: 'linear-gradient(135deg, #0f7a4a, #123a3a)',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 3v5 M12 16v5 M3 12h5 M16 12h5',
  },
  {
    id: 'blackjack',
    name: 'Blackjack',
    cat: 'Table',
    desc: 'Beat the dealer to 21 at the high-roller table.',
    art: 'linear-gradient(135deg, #3b1368, #12061f)',
    icon: 'M12 3c3 4 7 6 7 10a4 4 0 0 1-7 2.6A4 4 0 0 1 5 13c0-4 4-6 7-10z M12 15v6 M9 21h6',
  },
  {
    id: 'golden-slots',
    name: 'Golden Slots',
    cat: 'Slots',
    desc: 'Line up the sevens and chase the jackpot.',
    art: 'linear-gradient(135deg, #b9801a, #5a3a08)',
    icon: 'M5 5h14l-8 15 M8 12h7',
  },
  {
    id: 'mines',
    name: 'Mines',
    cat: 'Instant',
    desc: 'Uncover gems, dodge the mines, cash out when you dare.',
    art: 'linear-gradient(135deg, #5b1f8f, #1d0b33)',
    icon: 'M11 9a6 6 0 1 0 0 12 6 6 0 0 0 0-12z M15 8l3-3 M18 3v2 M20 5h-2',
  },
  {
    id: 'plinko',
    name: 'Plinko',
    cat: 'Instant',
    desc: 'Drop the ball and let the pegs decide.',
    art: 'linear-gradient(135deg, #1f4aa8, #1d0b33)',
    icon: 'M12 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z M7 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z M17 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z M4 21h16',
  },
  {
    id: 'coin-flip',
    name: 'Coin Flip',
    cat: 'Dice',
    desc: 'Heads or tails. Pure, simple, fast.',
    art: 'linear-gradient(135deg, #8a1c5a, #2a0d4a)',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M14.5 9.5c-.6-.8-1.5-1.2-2.5-1.2-1.4 0-2.5.7-2.5 1.8 0 2.4 5 1.2 5 3.7 0 1.1-1.1 1.9-2.5 1.9-1.1 0-2-.4-2.6-1.3 M12 6.5v1.8 M12 15.7v1.8',
  },
]
