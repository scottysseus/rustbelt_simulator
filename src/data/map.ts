// This file defines a map by placing tile catalog entries in a grid.

import { GameMapDefinition } from '../game_logic'

// This creates a 3x3 map, with each space referring to a tiel catalog entry
export const map: GameMapDefinition = {
  tiles: [
    'empty', 'gas', 'grocery',
    'empty', 'library', 'empty',
    'empty', 'empty', 'empty'
  ],
  size: {
    x: 3,
    y: 3
  }
}
