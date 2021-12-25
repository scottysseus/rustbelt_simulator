
import { TileCatalog } from '../game_logic'

// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const tileCatalog: TileCatalog = {
  empty: {
    id: 'empty',
    name: 'Empty Lot',
    description: 'lorem ipsum',
    tags: [
      'empty'
    ],
    happiness: 0,
    happinessGrowth: 0,
    revenue: 0,
    modelPath: 'models/empty.glb',
    projects: [
      'build-park',
      'build-office-tower'
    ]
  },
  'gas-0': {
    id: 'gas-0',
    name: 'Rundown Gas Station',
    description: 'lorem ipsum',
    tags: [
      'retail',
      ' damaged'
    ],
    happiness: -5,
    happinessGrowth: 0,
    revenue: 2,
    modelPath: 'models/gas-0.glb',
    projects: [
      'demolish',
      'repair-gas'
    ]
  },
  'gas-1': {
    id: 'gas-1',
    name: 'Gas Station',
    description: 'lorem ipsum',
    tags: [
      'retail'
    ],
    happiness: 2,
    happinessGrowth: 0,
    revenue: 10,
    modelPath: 'models/gas-1.glb',
    projects: [
      'demolish'
    ]
  },
  'park-0': {
    id: 'park-0',
    name: 'Schitty Park',
    description: 'lorem ipsum',
    tags: [
      'park',
      ' damaged'
    ],
    happiness: -5,
    happinessGrowth: 0,
    revenue: -5,
    modelPath: 'models/park-0.glb',
    projects: [
      'demolish',
      'repair-park'
    ]
  },
  'park-1': {
    id: 'park-1',
    name: 'Park',
    description: 'lorem ipsum',
    tags: [
      'park'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: -3,
    modelPath: 'models/park-1.glb',
    projects: [
      'demolish',
      'upgrade-park-dog',
      'upgrade-park-memorial'
    ]
  },
  'park-dog': {
    id: 'park-dog',
    name: 'Dog Park',
    description: 'lorem ipsum',
    tags: [
      'park'
    ],
    happiness: 6,
    happinessGrowth: 0,
    revenue: -5,
    modelPath: 'models/park-dog.glb',
    projects: [
      'demolish',
      'upgrade-park-sports',
      'upgrade-park-memorial'
    ]
  },
  'park-mem': {
    id: 'park-mem',
    name: 'Memorial Park',
    description: 'lorem ipsum',
    tags: [
      'park'
    ],
    happiness: 10,
    happinessGrowth: 1,
    revenue: -5,
    modelPath: 'models/park-mem.glb',
    projects: [
      'demolish',
      'upgrade-park-sports',
      'upgrade-park-dog'
    ]
  },
  'park-sports': {
    id: 'park-sports',
    name: 'Sports Complex',
    description: 'lorem ipsum',
    tags: [
      'park',
      ' entertainment'
    ],
    happiness: 20,
    happinessGrowth: 2,
    revenue: -10,
    modelPath: 'models/park-sports.glb',
    projects: [
      'demolish'
    ]
  },
  'house-0': {
    id: 'house-0',
    name: 'Abandoned House',
    description: 'lorem ipsum',
    tags: [
      'residential',
      ' damaged'
    ],
    happiness: -10,
    happinessGrowth: 0,
    revenue: 0,
    modelPath: 'models/house-0.glb',
    projects: [
      'demolish',
      'repair-house'
    ]
  },
  'house-1': {
    id: 'house-1',
    name: 'Shack',
    description: 'lorem ipsum',
    tags: [
      'residential'
    ],
    happiness: 1,
    happinessGrowth: 0,
    revenue: 0,
    modelPath: 'models/house-1.glb',
    projects: [
      'demolish'
    ]
  },
  'house-2': {
    id: 'house-2',
    name: 'House',
    description: 'lorem ipsum',
    tags: [
      'residential'
    ],
    happiness: 2,
    happinessGrowth: 0,
    revenue: 2,
    modelPath: 'models/house-2.glb',
    projects: [
      'demolish',
      'upgrade-house-family'
    ]
  },
  'shop-0': {
    id: 'shop-0',
    name: 'Boarded up shop',
    description: 'lorem ipsum',
    tags: [
      'retail',
      ' damaged'
    ],
    happiness: -10,
    happinessGrowth: 0,
    revenue: 0,
    modelPath: 'models/shop-0.glb',
    projects: [
      'demolish',
      'repair-shop'
    ]
  },
  'shop-small': {
    id: 'shop-small',
    name: 'quaint small business',
    description: 'lorem ipsum',
    tags: [
      'retail'
    ],
    happiness: 10,
    happinessGrowth: 0,
    revenue: 5,
    modelPath: 'models/shop-small.glb',
    projects: [
      'demolish',
      'upgrade-shop-market'
    ]
  },
  'shop-market': {
    id: 'shop-market',
    name: 'market',
    description: 'lorem ipsum',
    tags: [
      'retail'
    ],
    happiness: 10,
    happinessGrowth: 0,
    revenue: 8,
    modelPath: 'models/shop-market.glb',
    projects: [
      'demolish',
      'upgrade-shop-supermarket'
    ]
  },
  'shop-super': {
    id: 'shop-super',
    name: 'supermarket',
    description: 'lorem ipsum',
    tags: [
      'retail'
    ],
    happiness: 12,
    happinessGrowth: 1,
    revenue: 21,
    modelPath: 'models/shop-super.glb',
    projects: [
      'demolish'
    ]
  },
  'library-0': {
    id: 'library-0',
    name: 'neglected library',
    description: 'lorem ipsum',
    tags: [
      'civic',
      ' damaged'
    ],
    happiness: -10,
    happinessGrowth: 0,
    revenue: -5,
    modelPath: 'models/library-0.glb',
    projects: [
      'demolish',
      'repair-library'
    ]
  },
  'library-1': {
    id: 'library-1',
    name: 'library',
    description: 'lorem ipsum',
    tags: [
      'civic',
      ' entertainment'
    ],
    happiness: 5,
    happinessGrowth: 1,
    revenue: -10,
    modelPath: 'models/library-1.glb',
    projects: [
      'demolish',
      'upgrade-library'
    ]
  },
  'library-2': {
    id: 'library-2',
    name: 'modern library',
    description: 'lorem ipsum',
    tags: [
      'civic'
    ],
    happiness: 15,
    happinessGrowth: 2,
    revenue: -15,
    modelPath: 'models/library-2.glb',
    projects: [
      'demolish'
    ]
  },
  'fire-0': {
    id: 'fire-0',
    name: 'crumbling fire station',
    description: 'lorem ipsum',
    tags: [
      'civic',
      ' damaged'
    ],
    happiness: -15,
    happinessGrowth: 0,
    revenue: -20,
    modelPath: 'models/fire-0.glb',
    projects: [
      'demolish',
      'repair-firestation'
    ]
  },
  'fire-1': {
    id: 'fire-1',
    name: 'fire station',
    description: 'lorem ipsum',
    tags: [
      'civic'
    ],
    happiness: 15,
    happinessGrowth: 0,
    revenue: -10,
    modelPath: 'models/fire-1.glb',
    projects: [
      'demolish'
    ]
  },
  'restaurant-0': {
    id: 'restaurant-0',
    name: 'drive thru',
    description: 'lorem ipsum',
    tags: [
      'food',
      ' damaged'
    ],
    happiness: -10,
    happinessGrowth: 0,
    revenue: 0,
    modelPath: 'models/restaurant-0.glb',
    projects: [
      'demolish',
      'upgrade-restaurant-family'
    ]
  },
  'restaurant-1': {
    id: 'restaurant-1',
    name: 'diner',
    description: 'lorem ipsum',
    tags: [
      'food'
    ],
    happiness: 3,
    happinessGrowth: 0,
    revenue: 4,
    modelPath: 'models/restaurant-1.glb',
    projects: [
      'demolish',
      'upgrade-restaurant-fine'
    ]
  },
  'restaurant-2': {
    id: 'restaurant-2',
    name: 'fine dining',
    description: 'lorem ipsum',
    tags: [
      'food'
    ],
    happiness: 7,
    happinessGrowth: 0,
    revenue: 10,
    modelPath: 'models/restaurant-2.glb',
    projects: [
      'demolish'
    ]
  },
  'road-straight': {
    id: 'road-straight',
    name: 'Straight Road',
    description: 'lorem ipsum',
    tags: [
      'road'
    ],
    happiness: 0,
    happinessGrowth: 0,
    revenue: 0,
    modelPath: 'models/road-straight.glb',
    projects: [
      'demolish'
    ]
  },
  'road-turn': {
    id: 'road-turn',
    name: 'Turn Road',
    description: 'lorem ipsum',
    tags: [
      'road'
    ],
    happiness: 0,
    happinessGrowth: 0,
    revenue: 0,
    modelPath: 'models/road-turn.glb',
    projects: [
      'demolish'
    ]
  },
  'road-intersection': {
    id: 'road-intersection',
    name: 'Intersection Road',
    description: 'lorem ipsum',
    tags: [
      'road'
    ],
    happiness: 0,
    happinessGrowth: 0,
    revenue: 0,
    modelPath: 'models/road-intersection.glb',
    projects: [
      'demolish'
    ]
  },
  'office-1': {
    id: 'office-1',
    name: 'Offices',
    description: 'lorem ipsum',
    tags: [
      'commercial',
      ' corporate'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: 5,
    modelPath: 'models/office-1.glb',
    projects: [
      'demolish',
      'upgrade-office-2'
    ]
  },
  'office-2': {
    id: 'office-2',
    name: 'Offices',
    description: 'lorem ipsum',
    tags: [
      'commercial',
      ' corporate'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: 10,
    modelPath: 'models/office-1.glb',
    projects: [
      'demolish',
      'upgrade-office-3'
    ]
  },
  'office-3': {
    id: 'office-3',
    name: 'Offices',
    description: 'lorem ipsum',
    tags: [
      'commercial',
      ' corporate'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: 15,
    modelPath: 'models/office-1.glb',
    projects: [
      'demolish',
      'upgrade-office-4'
    ]
  },
  'office-4': {
    id: 'office-4',
    name: 'Offices',
    description: 'lorem ipsum',
    tags: [
      'commercial',
      ' corporate'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: 20,
    modelPath: 'models/office-1.glb',
    projects: [
      'demolish'
    ]
  },
  'energy-wind': {
    id: 'energy-wind',
    name: 'Wind Farm',
    description: 'lorem ipsum',
    tags: [
      'civic',
      ' power'
    ],
    happiness: 4,
    happinessGrowth: 1,
    revenue: 10,
    modelPath: 'models/energy-wind.glb',
    projects: [
      'demolish'
    ]
  },
  'energy-coal': {
    id: 'energy-coal',
    name: 'Coal Plant',
    description: 'lorem ipsum',
    tags: [
      'civic',
      ' power'
    ],
    happiness: 2,
    happinessGrowth: -1,
    revenue: 30,
    modelPath: 'models/energy-coal.glb',
    projects: [
      'demolish',
      'convert-wind'
    ]
  },
  'movie-0': {
    id: 'movie-0',
    name: 'Sketchy Theater',
    description: 'lorem ipsum',
    tags: [
      'commercial',
      ' entertainment'
    ],
    happiness: 0,
    happinessGrowth: 0,
    revenue: 0,
    modelPath: 'models/movie-0.glb',
    projects: [
      'demolish'
    ]
  },
  'movie-1': {
    id: 'movie-1',
    name: 'Movie Theater',
    description: 'lorem ipsum',
    tags: [
      'commercial',
      ' corporate',
      ' entertainment'
    ],
    happiness: 10,
    happinessGrowth: 0,
    revenue: 8,
    modelPath: 'models/movie-1.glb',
    projects: [
      'demolish'
    ]
  },
  'school-0': {
    id: 'school-0',
    name: 'school',
    description: 'lorem ipsum',
    tags: [
      'civic',
      ' education'
    ],
    happiness: 12,
    happinessGrowth: 1,
    revenue: -10,
    modelPath: 'models/school-0.glb',
    projects: [
      'demolish'
    ]
  },
  'jail-0': {
    id: 'jail-0',
    name: 'jail',
    description: 'lorem ipsum',
    tags: [
      'civic'
    ],
    happiness: 2,
    happinessGrowth: -1,
    revenue: -20,
    modelPath: 'models/jail-0.glb',
    projects: [
      'demolish'
    ]
  },
  superstore: {
    id: 'superstore',
    name: 'walmart',
    description: 'lorem ipsum',
    tags: [
      'retail',
      ' commercial'
    ],
    happiness: 12,
    happinessGrowth: -1,
    revenue: 9,
    modelPath: 'models/superstore.glb',
    projects: [
      'demolish'
    ]
  },
  fireworks: {
    id: 'fireworks',
    name: 'fireworks store',
    description: 'lorem ipsum',
    tags: [
      'retail',
      ' commercial'
    ],
    happiness: 2,
    happinessGrowth: 0,
    revenue: 2,
    modelPath: 'models/fireworks.glb',
    projects: [
      'demolish'
    ]
  },
  bowling: {
    id: 'bowling',
    name: 'bowling alley',
    description: 'lorem ipsum',
    tags: [
      'commerical'
    ],
    happiness: 5,
    happinessGrowth: 1,
    revenue: 3,
    modelPath: 'models/bowling.glb',
    projects: [
      'demolish'
    ]
  }
}
