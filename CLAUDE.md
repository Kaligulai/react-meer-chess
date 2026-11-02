# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

Starting template for a React tic-tac-toe game (from a React course, "react-essentials-deep-dive"). It is a Vite + React 19 single-page app. At the moment `src/App.jsx` only renders a heading, so the game components still have to be built. `src/index.css` already holds all of the styling (about 350 lines, plain CSS, no CSS modules or Tailwind), so new components should reuse its existing class names and IDs rather than add new styles.

## Commands

- `npm install` – install dependencies
- `npm run dev` – Vite dev server with HMR
- `npm run build` – production build to `dist/`
- `npm run preview` – serve the production build
- `npm run lint` – ESLint, `--max-warnings 0`

There is no test runner. **ESLint has no config file** (no `.eslintrc.*`), so `npm run lint` fails until one is added. The `eslint-plugin-react`, `react-hooks` and `react-refresh` plugins are already in devDependencies.

## Architecture

- `index.html` loads `/src/index.jsx`, which mounts `<App />` into `#root`.
- `src/App.jsx` is the root component. Components live in `src/`, with static images in `public/` (referenced from the root, e.g. `/game-logo.png`) and `src/assets/`.
- The ES module setup (`"type": "module"`) and the `.jsx` extension are required for files that contain JSX, because Vite's React plugin only handles JSX in `.jsx` files.

## Git

The git repo is this directory. The parent folder is not a repo. The remote is `https://github.com/Kaligulai/react-meer-chess`, branch `main`.
