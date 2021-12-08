import { RawTileCatalog } from '../game_logic/interfaces'

// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const catalog: RawTileCatalog = {
  empty: {
    name: 'Empty Lot',
    description: '',
    tags: [],
    happiness: 0,
    revenue: 0,
    projects: []
  },
  'firehouse-0': {
    name: 'Ruined Fire Station',
    description: 'The earthquake really messed this one up.',
    tags: ['raw'],
    happiness: 0,
    revenue: 0,
    projects: [
      'repair-firehouse',
      'demolish'
    ]
  },
  'firehouse-1': {
    name: 'Ladder 15 Fire Station',
    description: 'Just like the old days.',
    tags: ['repaired', 'improved', 'public-service'],
    revenue: -5,
    happiness: 10,
    projects: [
      'demolish'
    ]
  }
}
