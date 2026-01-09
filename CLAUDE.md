# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

This is a 2D RPG game built with vanilla JavaScript and HTML5 Canvas (no game engine). The game renders to a 320x180 canvas.

### Core Game Loop

**Entry point:** `main.js` initializes the canvas, creates the `Main` scene, and starts the `GameLoop`.

**GameLoop** (`src/GameLoop.js`): Fixed timestep loop (60 FPS) that calls `update(delta)` then `render()` each frame.

**GameObject** (`src/GameObject.js`): Base class for all game entities. Uses a tree structure with parent/children relationships. Key lifecycle methods:
- `ready()` - called once before first step
- `step(delta, root)` - called every frame
- `draw(ctx, x, y)` - renders self and children (sorted by Y position for depth)

### Scene Hierarchy

```
Main (root)
├── Camera (follows hero via events)
├── Inventory (HUD layer)
├── Level (current level instance)
│   ├── Background Sprite
│   ├── Ground Sprite
│   ├── Hero
│   ├── NPCs
│   ├── Items (Rod, Ball, etc.)
│   └── Exit
└── TextBox (when dialogs shown)
```

### Key Systems

**Events** (`src/Events.js`): Pub/sub system for decoupled communication. Important events:
- `CHANGE_LEVEL` - triggers level transition
- `HERO_POSITION` - camera tracking
- `HERO_REQUESTS_ACTION` - NPC interaction
- `HERO_PICKS_UP_ITEM` (and variants 2-5) - item pickup
- `START_TEXT_BOX` / `END_TEXT_BOX` - dialog control

**Resources** (`src/Resource.js`): Singleton that preloads all sprite images. Access via `resources.images.imageName`.

**StoryFlags** (`src/StoryFlags.js`): Tracks game progression flags (e.g., `GET_MELON`, `USE_REMEDY`). NPCs use `requires` and `bypass` arrays to show different dialog based on flags.

**Input** (`src/Input.js`): Handles keyboard input (Arrow keys/WASD for movement, Space for interaction). Tracks `heldDirections` queue for smooth movement.

### Rendering

- **Sprite** (`src/Sprite.js`): Handles sprite sheet rendering with frame-based animation
- **Camera** (`src/Camera.js`): Centers on hero position via event subscription
- **Main** draws in 3 passes: background (sky), objects (with camera offset), foreground (HUD)

### Levels

Levels extend `Level` class and define:
- Background/ground sprites
- Hero spawn position
- NPCs with dialog content arrays
- Collectible items (conditionally added based on story flags)
- Wall collision data as a Set of `"x,y"` coordinate strings

### Grid System

Uses 16x16 pixel grid cells. Helper `gridCells(n)` converts grid coordinates to pixels.
