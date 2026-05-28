# CineSort: Movie Timeline Sorting Game

CineSort is a Wikitrivia-style web game where players sort iconic events from famous movie series in chronological order. Players can play across multiple popular franchises and choose between the *in-universe narrative timeline* or the *real-world release date timeline*.

## Features

- **Multi-Franchise Support**: Preloaded with high-fidelity datasets for:
  - Marvel Cinematic Universe (MCU)
  - Star Wars
  - Harry Potter / Wizarding World
  - Lord of the Rings / Middle-earth
- **Dual Timelines**: Choose to sort cards by **In-Universe Timeline** (e.g. BBY/ABY for Star Wars, Ages for LotR) or **Real-World Release Dates**.
- **Dynamic Theming**: Interactive, animated glassmorphic interface that changes color palettes, card glowing borders, and icons to match the aesthetic of the active franchise.
- **Synth Audio System**: Generates custom chime, buzz, clicking, and victory arpeggios directly using the HTML5 Web Audio API (no external asset downloads required, supports muting).
- **Mobile Friendly Control**: Full desktop Drag-and-Drop functionality alongside a tap-to-place button layout optimized for mobile screens.
- **Local Custom Game Builder**: Design custom decks inside the app, play them locally, export them as portable JSON files, or import custom JSON decks shared by others.

## How to Play

1. Run the application locally (see instructions below).
2. Choose your timeline mode: **In-Universe Timeline** or **Release Date Timeline**.
3. Select a Movie Franchise to begin.
4. Drag the drawn event card from the top and drop it into a dashed drop-zone on the timeline. Alternatively, you can click/tap any of the green **"+"** insert buttons.
5. If you place a card correctly, your score increases and you build a streak.
6. If you place a card incorrectly, it is highlighted in red, inserted into its correct position, and you lose one of your 3 lives.
7. Keep your streak alive to beat the high score!

## Running the Project

The application is a pure client-side single-page app (HTML, CSS, JS) with zero external dependencies.

To play, simply serve the files locally. You can use any lightweight HTTP server. For example:

### Using Python
Run this command in the project directory:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your web browser.

### Using Node (npx)
Run this command:
```bash
npx http-server -p 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your web browser.
