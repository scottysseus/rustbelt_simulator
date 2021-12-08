import { RawProjectCatalog } from '../game_logic'

// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const catalog: RawProjectCatalog = {
  'repair-firehouse': {
    name: 'Repair',
    description: 'Fix it up!',
    targetTileDefinition: 'firehouse-1',
    cost: 300,
    effort: 9
  },
  demolish: {
    name: 'Demolish',
    description: 'Tear it down!',
    targetTileDefinition: 'empty',
    cost: 500,
    effort: 20
  }
}
