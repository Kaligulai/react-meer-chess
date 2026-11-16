# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

A finished React tic-tac-toe game (it started as a template from the React course "react-essentials-deep-dive"). It is a Vite + React 19 single-page app and is deployed to GitHub Pages at https://kaligulai.github.io/react-meer-chess/. `src/index.css` holds all of the styling (plain CSS, no CSS modules or Tailwind), so new components should reuse its existing class names and IDs rather than add new styles.

## Commands

- `npm install` – install dependencies
- `npm run dev` – Vite dev server with HMR, at http://localhost:5173/react-meer-chess/
- `npm run build` – production build to `dist/`
- `npm run preview` – serve the production build
- `npm run lint` – ESLint (`.eslintrc.cjs`), `--max-warnings 0`. CI fails when lint fails.

There is no test runner.

## Architecture

- `index.html` loads `/src/index.jsx`, which mounts `<App />` into `#root`.
- `src/App.jsx` holds the only state: `gameTurns` (the list of moves, newest first) and `players` (names by symbol). The board, active player, winner and draw are derived from it on each render by the `derive*` helpers. Keep it that way and don't add state that can be computed.
- Components live in `src/components/`. Static images live in `public/`.
- `vite.config.js` sets `base: "/react-meer-chess/"` for GitHub Pages. Reference public files with absolute paths (`/game-logo.png`, `url('/bg-pattern-dark.png')`) so that Vite adds the base. Relative paths break in the production build.
- The ES module setup (`"type": "module"`) and the `.jsx` extension are required for files that contain JSX, because Vite's React plugin only handles JSX in `.jsx` files.

## Deployment

`.github/workflows/deploy.yml` runs lint and build and deploys `dist/` to GitHub Pages on every push to `main`. `docs/screenshot.png` is the screenshot used in the README.

## Git

The git repo is this directory. The parent folder is not a repo. The remote is `https://github.com/Kaligulai/react-meer-chess`, branch `main`. Pushing works through the `gh` credential helper (account Kaligulai).
