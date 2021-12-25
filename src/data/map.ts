// This file defines a map by placing tile catalog entries in a grid.

import { GameMapDefinition } from '../game_logic'

// This creates a 3x3 map, with each space referring to a tiel catalog entry
export const map: GameMapDefinition = {
  tiles: [
    'empty', 'gas-0', 'shop-0',
    'empty', 'library-0', 'empty',
    'house-2', 'empty', 'empty'
  ],
  size: {
    x: 3,
    y: 3
  }
}
