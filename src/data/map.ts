// This file defines a map by placing tile catalog entries in a grid.

import { GameMapDefinition } from '../game_logic'

// This creates a 3x3 map, with each space referring to a tiel catalog entry
export const map: GameMapDefinition = {
  tiles: [
    'library-2', 'empty', 'meadow', 'library-1', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'trees-0', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'trees-0', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'trees-0', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-straight',
    'trees-0', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'trees-0', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'trees-0', 'trees-0', 'trees-0', 'restaurant-0', 'road-straight', 'gas-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-straight',
    'house-0', 'trees-0', 'house-2', 'house-0', 'road-straight', 'park-0', 'park-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'house-0', 'house-1', 'trees-1', 'empty', 'road-straight', 'park-0', 'park-0', 'shop-market', 'road-straight', 'shop-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'restaurant-1', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'trees-0', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'library-0', 'shop-0', 'shop-small', 'road-straight', 'empty', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'trees-0', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0',
    'trees-0', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'road-straight', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0', 'trees-0'
  ],
  rotations: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2,
    Math.PI, 0, Math.PI, Math.PI, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, Math.PI / 2, 0, 0, 0, 0, 0, 0, 3 / 2 * Math.PI, 0, 0, 0, 0, 0,
    Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, 3 / 2 * Math.PI, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, Math.PI, Math.PI, Math.PI, 0, 3 / 2 * Math.PI, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ],
  size: {
    x: 15,
    y: 15
  }
}
