# Hi-Rollin landing page

Vite + React single-page landing: hero, games catalogue (with category filter), Telegram and Rollin community links.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Adding a game

Drop the game poster into the matching `public/games/<category>/` folder, named in lowercase kebab-case like `my-game-name.webp` (`.webp`, `.png`, `.jpg`, or `.jpeg`), then run `npm run dev` or `npm run build` (or `npm run games` directly). `src/data/games.js` is regenerated automatically from the folders on disk.

## Edit before launch

- `src/config.js`: Telegram link, community link, "Play now" destination, legal note.
- `src/data/games.js`: your real game list (name, category, description, card colors, icon).
- `src/components/Highlights.jsx`: replace the `[YOUR ...]` placeholders.
- `public/logo.png`: the logo, also used as the favicon.

Colors and fonts live as CSS variables at the top of `src/index.css`.
