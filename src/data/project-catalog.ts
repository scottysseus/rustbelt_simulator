import { ProjectCatalog } from '../game_logic'

// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const projectCatalog: ProjectCatalog = {
  // 'repair-firehouse': {
  //   name: 'Repair',
  //   description: 'Fix it up!',
  //   targetTileType: 'firehouse-1',
  //   cost: 300,
  //   effort: 9
  // },
  demolish: {
    name: 'Demolish',
    description: 'Tear it down!',
    targetTileType: 'empty',
    cost: 500,
    effort: 20
  },
  refine: {
    name: 'Refine',
    description: 'Honestly, nothing.',
    targetTileType: 'empty',
    cost: 0,
    effort: 1
  }
}
