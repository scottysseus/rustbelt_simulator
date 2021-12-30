import { TileCatalog } from '../game_logic'
import { Empty, EnergyCoal, EnergyWind, Fire0, Fire1, Gas0, Gas1, House0, House1, House2, Library0, Library1, Library2, Meadow, Office1, Park0, Park1, ParkDog, ParkMem, ParkSports, Restaurant0, Restaurant1, Restaurant2, RoadIntersection, RoadStraight, RoadTurn, Shop0, ShopMarket, ShopSmall, ShopSuper, Superstore, Trees0, Trees1 } from '../components/models'

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
    modelComponent: Empty,
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
    modelComponent: Gas0,
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
    modelComponent: Gas1,
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
    modelComponent: Park0,
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
    modelComponent: Park1,
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
    modelComponent: ParkDog,
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
    modelComponent: ParkMem,
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
    modelComponent: ParkSports,
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
    modelComponent: House0,
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
    modelComponent: House1,
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
    modelComponent: House2,
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
    modelComponent: Shop0,
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
    modelComponent: ShopSmall,
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
    modelComponent: ShopMarket,
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
    modelComponent: ShopSuper,
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
    modelComponent: Library0,
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
    modelComponent: Library1,
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
    modelComponent: Library2,
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
    modelComponent: Fire0,
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
    modelComponent: Fire1,
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
    modelComponent: Restaurant0,
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
    modelComponent: Restaurant1,
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
    modelComponent: Restaurant2,
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
    modelComponent: RoadStraight,
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
    modelComponent: RoadTurn,
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
    modelComponent: RoadIntersection,
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
    modelComponent: Office1,
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
    modelComponent: Office1,
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
    modelComponent: Office1,
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
    modelComponent: Office1,
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
    modelComponent: EnergyWind,
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
    modelComponent: EnergyCoal,
    modelPath: 'models/energy-coal.glb',
    projects: [
      'demolish',
      'convert-wind'
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
    modelComponent: Superstore,
    modelPath: 'models/superstore.glb',
    projects: [
      'demolish'
    ]
  },
  'trees-0': {
    id: 'trees-0',
    name: 'Pristine Forest',
    description: 'lorem ipsum',
    tags: [],
    happiness: 5,
    happinessGrowth: 1,
    revenue: 3,
    modelComponent: Trees0,
    modelPath: 'models/trees-0.glb',
    projects: []
  },
  'trees-1': {
    id: 'trees-1',
    name: 'Pristine Forest',
    description: 'lorem ipsum',
    tags: [],
    happiness: 5,
    happinessGrowth: 1,
    revenue: 3,
    modelComponent: Trees1,
    modelPath: 'models/trees-1.glb',
    projects: []
  },
  meadow: {
    id: 'meadow',
    name: 'Pristine Meadow',
    description: 'lorem ipsum',
    tags: [],
    happiness: 5,
    happinessGrowth: 1,
    revenue: 3,
    modelComponent: Meadow,
    modelPath: 'models/meadow.glb',
    projects: []
  }
}

// 36 tiles for...
// - (+1) Placeholder isn't listed here
// - (-3) office-1 thru office-4 use Office1 model
// - (+1) Tile model is unused
// ...35 models.

console.log('how many tiles', Object.keys(tileCatalog).length)
