// This file defines a map by placing tile catalog entries in a grid.

import { GameMapDefinition } from '../game_logic'

// This creates a 3x3 map, with each space referring to a tiel catalog entry
export const map: GameMapDefinition = {
  tiles: [
    { type: 'energy-wind' }, { type: 'energy-coal' }, { type: 'park-1' }, { type: 'house-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-1' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-1' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-1' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-1' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-1' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-1' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-intersection' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' }, { type: 'road-straight' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-1' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-1' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-1' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-1' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' },
    { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-1' }, { type: 'trees-0' }, { type: 'road-straight' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-1' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }, { type: 'trees-0' }
  ],
  size: {
    x: 15,
    y: 15
  }
}
