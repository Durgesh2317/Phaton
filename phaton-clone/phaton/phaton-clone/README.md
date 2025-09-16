# Phaton Landing Clone (React + Tailwind via Vite)

A lightweight clone of the hero section you shared, built with React and Tailwind CSS.

## Quick Start

```bash
# 1) Extract the zip
unzip phaton-clone.zip && cd phaton-clone

# 2) Install deps
npm install

# 3) Start dev server
npm run dev
```

Open the URL printed in your terminal.

## Project Structure
```
phaton-clone/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ src/
│  ├─ index.css
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ components/
│     ├─ Header.jsx
│     └─ Hero.jsx
└─ README.md
```

## Notes
- No external icon packages are used; search/caret icons are inline SVG.
- Images use Unsplash sources and load at runtime.
- Tailwind is pre-configured; just `npm install` and `npm run dev`.
