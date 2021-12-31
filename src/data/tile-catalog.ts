
import { TileCatalog } from '../game_logic'
import { Empty, EnergyCoal, EnergyWind, Fire0, Fire1, Gas0, Gas1, House0, House1, House2, Library0, Library1, Library2, Meadow, Office1, Park0, Park1, ParkDog, ParkMem, ParkSports, Restaurant0, Restaurant1, Restaurant2, RoadIntersection, RoadStraight, RoadTurn, Shop0, ShopMarket, ShopSmall, ShopSuper, Trees0, Trees1 } from '../components/models'

// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const tileCatalog: TileCatalog = {
  empty: {
    id: 'empty',
    modelComponent: Empty,
    name: 'Empty Lot',
    description: "What? It's an empty lot.",
    tags: [
      'abandoned',
      ' empty'
    ],
    happiness: 0,
    happinessGrowth: 0,
    revenue: 0,
    projects: [
      'build-park',
      'upgrade-office',
      'build-shop-market',
      'build-fire',
      'build-library'
    ]
  },
  meadow: {
    id: 'meadow',
    modelComponent: Meadow,
    name: 'Meadow',
    description: 'Grassy meadow.',
    tags: [
      'nature',
      ' empty'
    ],
    happiness: 1,
    happinessGrowth: 0,
    revenue: 0,
    projects: [
      'deforest'
    ]
  },
  'trees-0': {
    id: 'trees-0',
    modelComponent: Trees0,
    name: 'Trees',
    description: 'Trees! Trees! Trees!',
    tags: [
      'nature'
    ],
    happiness: 1,
    happinessGrowth: 0,
    revenue: 0,
    projects: [
      'deforest'
    ]
  },
  'trees-1': {
    id: 'trees-1',
    modelComponent: Trees1,
    name: 'Apple Trees',
    description: 'Apples? Mmmm. Tasty.',
    tags: [
      'nature'
    ],
    happiness: 1,
    happinessGrowth: 0,
    revenue: 0,
    projects: [
      'deforest',
      'convert-trees-1',
      'convert-meadow'
    ]
  },
  'gas-0': {
    id: 'gas-0',
    modelComponent: Gas0,
    name: 'Rundown Gas Station',
    description: 'Not for late night snack runs. ',
    tags: [
      'retail',
      ' damaged'
    ],
    happiness: -5,
    happinessGrowth: 0,
    revenue: 2,
    projects: [
      'demolish',
      'repair-gas'
    ]
  },
  'gas-1': {
    id: 'gas-1',
    modelComponent: Gas1,
    name: 'Gas Station',
    description: 'Come inside, grab a coffee!',
    tags: [
      'retail'
    ],
    happiness: 2,
    happinessGrowth: 0,
    revenue: 10,
    projects: [
      'demolish'
    ]
  },
  'park-0': {
    id: 'park-0',
    modelComponent: Park0,
    name: 'Schitty Park',
    description: 'Find another field to play in. ',
    tags: [
      'park',
      ' damaged'
    ],
    happiness: -5,
    happinessGrowth: 0,
    revenue: -5,
    projects: [
      'demolish',
      'repair-park'
    ]
  },
  'park-1': {
    id: 'park-1',
    modelComponent: Park1,
    name: 'Park',
    description: 'Have a picnic! ',
    tags: [
      'park'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: -3,
    projects: [
      'demolish',
      'upgrade-park-dog',
      'upgrade-park-mem',
      'upgrade-park-sports',
      'restore-forest'
    ]
  },
  'park-dog': {
    id: 'park-dog',
    modelComponent: ParkDog,
    name: 'Dog Park',
    description: 'No cats allowed! ',
    tags: [
      'park'
    ],
    happiness: 6,
    happinessGrowth: 0,
    revenue: -5,
    projects: [
      'demolish',
      'upgrade-park-sports',
      'upgrade-park-mem',
      'restore-forest'
    ]
  },
  'park-mem': {
    id: 'park-mem',
    modelComponent: ParkMem,
    name: 'Memorial Park',
    description: 'For memorials and memorial related activities.',
    tags: [
      'park'
    ],
    happiness: 10,
    happinessGrowth: 1,
    revenue: -5,
    projects: [
      'demolish',
      'upgrade-park-sports',
      'upgrade-park-dog',
      'restore-forest'
    ]
  },
  'park-sports': {
    id: 'park-sports',
    modelComponent: ParkSports,
    name: 'Rustfield Field ',
    description: 'For sports and sport related activities.',
    tags: [
      'park',
      ' entertainment'
    ],
    happiness: 20,
    happinessGrowth: 2,
    revenue: -10,
    projects: [
      'demolish',
      'upgrade-park-mem',
      'upgrade-park-dog',
      'restore-forest'
    ]
  },
  'house-0': {
    id: 'house-0',
    modelComponent: House0,
    name: 'Abandoned House',
    description: 'Might be haunted. ',
    tags: [
      'residential',
      ' damaged'
    ],
    happiness: -10,
    happinessGrowth: 0,
    revenue: 0,
    projects: [
      'demolish',
      'repair-house'
    ]
  },
  'house-1': {
    id: 'house-1',
    modelComponent: House1,
    name: 'Shack',
    description: 'Probably not haunted. ',
    tags: [
      'residential'
    ],
    happiness: 1,
    happinessGrowth: 0,
    revenue: 0,
    projects: [
      'demolish',
      'upgrade-house-luxury'
    ]
  },
  'house-2': {
    id: 'house-2',
    modelComponent: House2,
    name: 'House',
    description: 'Home is where the heart is! ',
    tags: [
      'residential'
    ],
    happiness: 2,
    happinessGrowth: 0,
    revenue: 2,
    projects: [
      'demolish'
    ]
  },
  'shop-0': {
    id: 'shop-0',
    modelComponent: Shop0,
    name: 'Boarded-Up Shop',
    description: 'Best to avoid. ',
    tags: [
      'retail',
      ' damaged'
    ],
    happiness: -10,
    happinessGrowth: 0,
    revenue: 0,
    projects: [
      'demolish',
      'repair-shop'
    ]
  },
  'shop-small': {
    id: 'shop-small',
    modelComponent: ShopSmall,
    name: 'Stuff',
    description: 'For stuff. ',
    tags: [
      'retail'
    ],
    happiness: 10,
    happinessGrowth: 0,
    revenue: 5,
    projects: [
      'demolish',
      'upgrade-shop-supermarket'
    ]
  },
  'shop-market': {
    id: 'shop-market',
    modelComponent: ShopMarket,
    name: 'Food & Stuff',
    description: 'For food and stuff. ',
    tags: [
      'retail'
    ],
    happiness: 10,
    happinessGrowth: 0,
    revenue: 8,
    projects: [
      'demolish',
      'upgrade-shop-small',
      'upgrade-rest-diner'
    ]
  },
  'shop-super': {
    id: 'shop-super',
    modelComponent: ShopSuper,
    name: 'Super-Mart ',
    description: 'Average ordinary everyday supermarket.',
    tags: [
      'retail'
    ],
    happiness: 12,
    happinessGrowth: 1,
    revenue: 21,
    projects: [
      'demolish'
    ]
  },
  'library-0': {
    id: 'library-0',
    modelComponent: Library0,
    name: 'Rusty Books',
    description: "Don't waste your time reading. ",
    tags: [
      'civic',
      'damaged'
    ],
    happiness: -10,
    happinessGrowth: 0,
    revenue: -5,
    projects: [
      'demolish',
      'repair-library'
    ]
  },
  'library-1': {
    id: 'library-1',
    modelComponent: Library1,
    name: 'Rustfield Library ',
    description: 'To read, or not to read? ',
    tags: [
      'civic',
      ' entertainment'
    ],
    happiness: 5,
    happinessGrowth: 1,
    revenue: -10,
    projects: [
      'demolish',
      'upgrade-library'
    ]
  },
  'library-2': {
    id: 'library-2',
    modelComponent: Library2,
    name: 'Library of Rustfield',
    description: "It's not Alexandria, but it's still nice. ",
    tags: [
      'civic'
    ],
    happiness: 15,
    happinessGrowth: 2,
    revenue: -15,
    projects: [
      'demolish'
    ]
  },
  'fire-0': {
    id: 'fire-0',
    modelComponent: Fire0,
    name: 'Fire Station 0',
    description: 'Half the force was fired...',
    tags: [
      'civic',
      ' damaged'
    ],
    happiness: -15,
    happinessGrowth: 0,
    revenue: -20,
    projects: [
      'demolish',
      'repair-firestation'
    ]
  },
  'fire-1': {
    id: 'fire-1',
    modelComponent: Fire1,
    name: 'Fire Station 1 ',
    description: 'Smokeshows fighting smokeshows! ',
    tags: [
      'civic'
    ],
    happiness: 15,
    happinessGrowth: 0,
    revenue: -10,
    projects: [
      'demolish'
    ]
  },
  'restaurant-0': {
    id: 'restaurant-0',
    modelComponent: Restaurant0,
    name: 'Rust Burger ',
    description: 'Would you like to super-size that order? ',
    tags: [
      'food',
      ' damaged'
    ],
    happiness: -10,
    happinessGrowth: 0,
    revenue: 0,
    projects: [
      'demolish',
      'upgrade-rest-diner'
    ]
  },
  'restaurant-1': {
    id: 'restaurant-1',
    modelComponent: Restaurant1,
    name: "Dalilah's Diner",
    description: 'Half price apps and drinks! ',
    tags: [
      'food'
    ],
    happiness: 3,
    happinessGrowth: 0,
    revenue: 4,
    projects: [
      'demolish',
      'upgrade-rest-fine-dining'
    ]
  },
  'restaurant-2': {
    id: 'restaurant-2',
    modelComponent: Restaurant2,
    name: "Bianca's Bistro",
    description: 'Look at you big spender. ',
    tags: [
      'food'
    ],
    happiness: 7,
    happinessGrowth: 0,
    revenue: 10,
    projects: [
      'demolish'
    ]
  },
  'road-straight': {
    id: 'road-straight',
    modelComponent: RoadStraight,
    name: 'Straight Road',
    description: 'Curves are overratted. ',
    tags: [
      'road'
    ],
    happiness: 0,
    happinessGrowth: 0,
    revenue: 0,
    projects: []
  },
  'road-turn': {
    id: 'road-turn',
    modelComponent: RoadTurn,
    name: 'Turn Road',
    description: 'Curves are awesome! ',
    tags: [
      'road'
    ],
    happiness: 0,
    happinessGrowth: 0,
    revenue: 0,
    projects: []
  },
  'road-intersection': {
    id: 'road-intersection',
    modelComponent: RoadIntersection,
    name: 'Intersection Road',
    description: 'Two roads diverged... ',
    tags: [
      'road'
    ],
    happiness: 0,
    happinessGrowth: 0,
    revenue: 0,
    projects: []
  },
  'office-1': {
    id: 'office-1',
    modelComponent: Office1,
    name: 'Office One',
    description: "Somebody's got a case of the Mondays!",
    tags: [
      'commercial',
      ' corporate'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: 5,
    projects: [
      'demolish',
      'upgrade-office-2'
    ]
  },
  'office-2': {
    id: 'office-2',
    modelComponent: Office1,
    name: 'Office Two',
    description: 'Need those TPS reports ASAP.',
    tags: [
      'commercial',
      ' corporate'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: 10,
    projects: [
      'demolish',
      'upgrade-office-3'
    ]
  },
  'office-3': {
    id: 'office-3',
    modelComponent: Office1,
    name: 'Office Three',
    description: 'Next Friday is Hawaiian shirt day! ',
    tags: [
      'commercial',
      ' corporate'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: 15,
    projects: [
      'demolish',
      'upgrade-office-4'
    ]
  },
  'office-4': {
    id: 'office-4',
    modelComponent: Office1,
    name: 'Office Four',
    description: 'I believe you have my stapler. ',
    tags: [
      'commercial',
      ' corporate'
    ],
    happiness: 5,
    happinessGrowth: 0,
    revenue: 20,
    projects: [
      'demolish'
    ]
  },
  'energy-wind': {
    id: 'energy-wind',
    modelComponent: EnergyWind,
    name: 'Wind Farm',
    description: "Renewable energy? I'm a huge fan! ",
    tags: [
      'civic',
      ' power'
    ],
    happiness: 4,
    happinessGrowth: 1,
    revenue: -15,
    projects: [
      'demolish',
      'upgrade-energy-coal'
    ]
  },
  'energy-coal': {
    id: 'energy-coal',
    modelComponent: EnergyCoal,
    name: 'Coal Plant',
    description: "Tell the kids it's a cloud factory. ",
    tags: [
      'civic',
      ' power'
    ],
    happiness: 2,
    happinessGrowth: -1,
    revenue: -20,
    projects: [
      'demolish',
      'upgrade-energy-wind'
    ]
  }
}
