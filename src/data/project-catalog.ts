
import { ProjectCatalog } from '../game_logic'
// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const projectCatalog: ProjectCatalog = {
  demolish: {
    id: 'demolish',
    name: 'Demolish',
    description: 'lorem ipsum',
    targetTileType: 'empty',
    cost: 500,
    effort: 10
  },
  'repair-gas': {
    id: 'repair-gas',
    name: 'Repair',
    description: 'lorem ipsum',
    targetTileType: 'gas-1',
    cost: 340,
    effort: 4
  },
  'repair-park': {
    id: 'repair-park',
    name: 'Cleanup',
    description: 'lorem ipsum',
    targetTileType: 'park-1',
    cost: 75,
    effort: 3
  },
  'upgrade-park-dog': {
    id: 'upgrade-park-dog',
    name: 'Dogs!',
    description: 'lorem ipsum',
    targetTileType: 'park-dog',
    cost: 200,
    effort: 2
  },
  'upgrade-park-memorial': {
    id: 'upgrade-park-memorial',
    name: 'Commerate',
    description: 'lorem ipsum',
    targetTileType: 'park-mem',
    cost: 300,
    effort: 7
  },
  'upgrade-park-sports': {
    id: 'upgrade-park-sports',
    name: 'Sports',
    description: 'lorem ipsum',
    targetTileType: 'park-sports',
    cost: 150,
    effort: 8
  },
  'build-park': {
    id: 'build-park',
    name: 'Make a park',
    description: 'lorem ipsum',
    targetTileType: 'park-1',
    cost: 250,
    effort: 6
  },
  'repair-house': {
    id: 'repair-house',
    name: 'Repair',
    description: 'lorem ipsum',
    targetTileType: 'house-1',
    cost: 100,
    effort: 5
  },
  'upgrade-house-family': {
    id: 'upgrade-house-family',
    name: 'Make it bigger',
    description: 'lorem ipsum',
    targetTileType: 'house-2',
    cost: 286,
    effort: 7
  },
  'repair-shop': {
    id: 'repair-shop',
    name: 'Repair',
    description: 'lorem ipsum',
    targetTileType: 'shop-small',
    cost: 392,
    effort: 3
  },
  'upgrade-shop-market': {
    id: 'upgrade-shop-market',
    name: 'Market',
    description: 'lorem ipsum',
    targetTileType: 'shop-market',
    cost: 289,
    effort: 7
  },
  'upgrade-shop-supermarket': {
    id: 'upgrade-shop-supermarket',
    name: 'Supermarket',
    description: 'lorem ipsum',
    targetTileType: 'shop-super',
    cost: 712,
    effort: 12
  },
  'repair-library': {
    id: 'repair-library',
    name: 'Repair',
    description: 'lorem ipsum',
    targetTileType: 'library-1',
    cost: 800,
    effort: 15
  },
  'upgrade-library': {
    id: 'upgrade-library',
    name: 'Upgrade',
    description: 'lorem ipsum',
    targetTileType: 'library-2',
    cost: 750,
    effort: 4
  },
  'repair-firestation': {
    id: 'repair-firestation',
    name: 'Repair',
    description: 'lorem ipsum',
    targetTileType: 'fire-1',
    cost: 800,
    effort: 7
  },
  'upgrade-restaurant-family': {
    id: 'upgrade-restaurant-family',
    name: 'Family',
    description: 'lorem ipsum',
    targetTileType: 'restaurant-1',
    cost: 870,
    effort: 5
  },
  'upgrade-restaurant-fine': {
    id: 'upgrade-restaurant-fine',
    name: 'Fine',
    description: 'lorem ipsum',
    targetTileType: 'restaurant-2',
    cost: 438,
    effort: 8
  },
  'build-office-tower': {
    id: 'build-office-tower',
    name: 'Corporitize',
    description: 'lorem ipsum',
    targetTileType: 'office-1',
    cost: 1000,
    effort: 15
  },
  'build-wind': {
    id: 'build-wind',
    name: 'Build a Wind Plant',
    description: 'lorem ipsum',
    targetTileType: 'energy-wind',
    cost: 950,
    effort: 10
  },
  'convert-wind': {
    id: 'convert-wind',
    name: 'Convert to Wind',
    description: 'lorem ipsum',
    targetTileType: 'energy-wind',
    cost: 1200,
    effort: 25
  },
  'upgrade-office-2': {
    id: 'upgrade-office-2',
    name: 'Add a business',
    description: 'lorem ipsum',
    targetTileType: 'office-2',
    cost: 250,
    effort: 5
  },
  'upgrade-office-3': {
    id: 'upgrade-office-3',
    name: 'Add a business',
    description: 'lorem ipsum',
    targetTileType: 'office-3',
    cost: 250,
    effort: 5
  },
  'upgrade-office-4': {
    id: 'upgrade-office-4',
    name: 'Add a business',
    description: 'lorem ipsum',
    targetTileType: 'office-4',
    cost: 250,
    effort: 5
  }
}
