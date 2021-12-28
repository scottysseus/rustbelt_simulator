// This file defines a map by placing tile catalog entries in a grid.

import { GameMapDefinition } from '../game_logic'

// This creates a 3x3 map, with each space referring to a tiel catalog entry
export const map: GameMapDefinition = {
  tiles: [
    'empty', 'gas-0', 'shop-0',
    'empty', 'library-0', 'empty',
    'house-0', 'empty', 'empty',
    'restaurant-0', 'fire-0', 'energy-coal'
  ],
  size: {
    x: 4,
    y: 3
  }
}
