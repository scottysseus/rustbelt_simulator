// This file defines a map by placing tile catalog entries in a grid.

import { GameMapDefinition } from '../game_logic'

// This creates a 3x3 map, with each space referring to a tiel catalog entry
export const map: GameMapDefinition = {
  tiles: [
    'trees-0', 'meadow', 'meadow', 'energy-coal', 'road-straight', 'energy-coal', 'trees-0', 'trees-1', 'road-straight', 'house-0', 'empty', 'trees-0', 'empty', 'empty', 'trees-0',
    'trees-1', 'trees-0', 'meadow', 'trees-0', 'road-straight', 'meadow', 'meadow', 'restaurant-0', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-turn', 'empty',
    'trees-0', 'park-0', 'trees-1', 'empty', 'road-straight', 'empty', 'trees-1', 'empty', 'road-straight', 'meadow', 'house-2', 'house-1', 'trees-0', 'road-straight', 'trees-0',
    'park-0', 'park-dog', 'house-0', 'house-1', 'road-straight', 'house-0', 'house-0', 'empty', 'road-straight', 'gas-1', 'shop-0', 'empty', 'restaurant-2', 'road-straight', 'house-0',
    'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight',
    'house-0', 'house-0', 'empty', 'empty', 'road-straight', 'house-2', 'meadow', 'restaurant-1', 'road-straight', 'empty', 'trees-0', 'house-0', 'house-1', 'house-2', 'empty',
    'trees-0', 'meadow', 'trees-0', 'empty', 'road-straight', 'house-1', 'trees-1', 'empty', 'road-straight', 'empty', 'empty', 'trees-0', 'trees-0', 'meadow', 'meadow',
    'house-1', 'house-0', 'empty', 'restaurant-0', 'road-straight', 'gas-0', 'empty', 'meadow', 'road-straight', 'empty', 'empty', 'restaurant-0', 'house-2', 'empty', 'house-0',
    'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight',
    'house-0', 'trees-0', 'house-2', 'house-0', 'road-straight', 'meadow', 'park-1', 'trees-0', 'road-straight', 'trees-0', 'empty', 'empty', 'road-straight', 'empty', 'house-1',
    'house-0', 'house-1', 'trees-1', 'empty', 'road-straight', 'park-0', 'meadow', 'shop-market', 'road-straight', 'shop-0', 'trees-0', 'gas-0', 'road-straight', 'empty', 'trees-0',
    'road-straight', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'road-straight', 'road-straight', 'road-straight', 'road-intersection', 'restaurant-1', 'trees-1', 'shop-0', 'road-straight', 'empty', 'trees-1',
    'house-2', 'house-0', 'meadow', 'empty', 'road-straight', 'library-0', 'shop-0', 'shop-small', 'road-straight', 'empty', 'trees-0', 'empty', 'road-straight', 'trees-0', 'trees-0',
    'trees-0', 'trees-0', 'meadow', 'house-0', 'road-straight', 'fire-0', 'trees-0', 'empty', 'road-straight', 'restaurant-0', 'trees-0', 'empty', 'road-straight', 'empty', 'meadow',
    'trees-0', 'trees-1', 'trees-0', 'house-1', 'road-straight', 'house-2', 'trees-0', 'empty', 'road-straight', 'trees-0', 'meadow', 'energy-coal', 'road-straight', 'energy-coal', 'trees-0'
  ],
  rotations: [
    3 / 2 * Math.PI, Math.PI, Math.PI / 2, Math.PI / 2, 0, 3 / 2 * Math.PI, Math.PI, 3 / 2 * Math.PI, 0, 0, Math.PI / 2, 0, 3 / 2 * Math.PI, 0, Math.PI,
    Math.PI / 2, Math.PI, 3 / 2 * Math.PI, 0, 0, 0, 3 / 2 * Math.PI, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, 3 / 2 * Math.PI, 0,
    0, 0, Math.PI, 0, 0, 0, Math.PI, Math.PI / 2, 0, Math.PI, Math.PI, Math.PI, 0, 0, Math.PI,
    Math.PI, Math.PI / 2, 0, 0, 0, 3 / 2 * Math.PI, 0, Math.PI, 0, 0, 0, 0, 0, 0, 3 / 2 * Math.PI,
    Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2,
    Math.PI, Math.PI, Math.PI, 0, 0, 3 / 2 * Math.PI, 0, Math.PI, 0, 0, Math.PI / 2, Math.PI, Math.PI, Math.PI, 0,
    0, 0, 0, 0, 0, 3 / 2 * Math.PI, 3 / 2 * Math.PI, 0, 0, Math.PI, Math.PI / 2, Math.PI / 2, 0, 0, Math.PI,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3 / 2 * Math.PI, 0, 0, 0, 0,
    Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2,
    Math.PI, 0, Math.PI, Math.PI, 0, 0, 3 / 2 * Math.PI, 0, 0, 0, Math.PI, 0, 0, 0, Math.PI,
    0, 0, Math.PI / 2, 0, 0, Math.PI / 2, Math.PI, 0, 0, 3 / 2 * Math.PI, Math.PI, Math.PI / 2, 0, Math.PI, 0,
    Math.PI / 2, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, Math.PI / 2, Math.PI / 2, Math.PI / 2, 0, 3 / 2 * Math.PI, Math.PI / 2, Math.PI / 2, 0, 3 / 2 * Math.PI, Math.PI / 2,
    Math.PI, Math.PI, 0, 0, 0, Math.PI, Math.PI, Math.PI, 0, 3 / 2 * Math.PI, 3 / 2 * Math.PI, 0, 0, 0, Math.PI,
    0, Math.PI, Math.PI, Math.PI / 2, 0, 3 / 2 * Math.PI, Math.PI, 3 / 2 * Math.PI, 0, 3 / 2 * Math.PI, Math.PI, 0, 0, 3 / 2 * Math.PI, 0,
    0, 0, Math.PI / 2, Math.PI / 2, 0, 3 / 2 * Math.PI, Math.PI / 2, 0, 0, 3 / 2 * Math.PI, 0, Math.PI / 2, 0, 3 / 2 * Math.PI, 3 / 2 * Math.PI
  ],
  size: {
    x: 15,
    y: 15
  }
}
