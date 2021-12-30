
import { ProjectCatalog } from '../game_logic'
// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const projectCatalog: ProjectCatalog = {
  "upgrade-office": {
    "id": "upgrade-office",
    "name": "Corporatize",
    "description": "That'd be great... ",
    "targetTileType": "office-1",
    "cost": 1000,
    "effort": 30,
    "tier": "3"
  },
  "upgrade-energy-coal": {
    "id": "upgrade-energy-coal",
    "name": "Convert to Coal Power Plant",
    "description": "I love the smell of particulates in the morning!",
    "targetTileType": "energy-coal",
    "cost": 2000,
    "effort": 22,
    "tier": "3"
  },
  "upgrade-energy-wind": {
    "id": "upgrade-energy-wind",
    "name": "Convert to Wind Farm",
    "description": "Breaking wind! ",
    "targetTileType": "energy-wind",
    "cost": 2500,
    "effort": 19,
    "tier": "3"
  },
  "build-fire": {
    "id": "build-fire",
    "name": "Build Fire Station",
    "description": "Put those local hunks to good use!",
    "targetTileType": "fire-1",
    "cost": 1000,
    "effort": 16,
    "tier": "3"
  },
  "build-library": {
    "id": "build-library",
    "name": "Build LIbrary",
    "description": "This is Levar Burton's house.",
    "targetTileType": "library-1",
    "cost": 233,
    "effort": 16,
    "tier": "3"
  },
  "upgrade-shop-supermarket": {
    "id": "upgrade-shop-supermarket",
    "name": "Upgrade to Supermarket",
    "description": "You want it? We got it!",
    "targetTileType": "shop-super",
    "cost": 712,
    "effort": 12,
    "tier": "2"
  },
  "demolish": {
    "id": "demolish",
    "name": "Demolish",
    "description": "Start with a fresh slate.",
    "targetTileType": "empty",
    "cost": 500,
    "effort": 10,
    "tier": "2"
  },
  "restore-forest": {
    "id": "restore-forest",
    "name": "Restore Forest",
    "description": "Allow nature to reclaim this land.",
    "targetTileType": "trees-0",
    "cost": 126,
    "effort": 10,
    "tier": "2"
  },
  "repair-library": {
    "id": "repair-library",
    "name": "Repair Library",
    "description": "Learn how to read. ",
    "targetTileType": "library-1",
    "cost": 800,
    "effort": 9,
    "tier": "2"
  },
  "repair-firestation": {
    "id": "repair-firestation",
    "name": "Repair Fire",
    "description": "Pyros not welcome! ",
    "targetTileType": "fire-1",
    "cost": 800,
    "effort": 8,
    "tier": "2"
  },
  "upgrade-house-luxury": {
    "id": "upgrade-house-luxury",
    "name": "Build Luxury Housing",
    "description": "It has a separate room for your teacup pigs.",
    "targetTileType": "house-2",
    "cost": 450,
    "effort": 6,
    "tier": "2"
  },
  "repair-house": {
    "id": "repair-house",
    "name": "Repair House",
    "description": "Bit of a fixer upper! ",
    "targetTileType": "house-1",
    "cost": 100,
    "effort": 5,
    "tier": "2"
  },
  "upgrade-office-2": {
    "id": "upgrade-office-2",
    "name": "Office Park Two ",
    "description": "PC load letter!?",
    "targetTileType": "office-2",
    "cost": 250,
    "effort": 5,
    "tier": "2"
  },
  "upgrade-office-3": {
    "id": "upgrade-office-3",
    "name": "Office Park Three",
    "description": "Fifteen minutes of real actual work.",
    "targetTileType": "office-3",
    "cost": 250,
    "effort": 5,
    "tier": "2"
  },
  "upgrade-office-4": {
    "id": "upgrade-office-4",
    "name": "Office Park Four",
    "description": "Did you see the memo?",
    "targetTileType": "office-4",
    "cost": 250,
    "effort": 5,
    "tier": "2"
  },
  "upgrade-park-sports": {
    "id": "upgrade-park-sports",
    "name": "Upgrade to Sports Complex",
    "description": "Soccer moms welcome.",
    "targetTileType": "park-sports",
    "cost": 420,
    "effort": 5,
    "tier": "2"
  },
  "repair-gas": {
    "id": "repair-gas",
    "name": "Repair Gas Station",
    "description": "New slushie machines!",
    "targetTileType": "gas-1",
    "cost": 340,
    "effort": 5,
    "tier": "2"
  },
  "deforest": {
    "id": "deforest",
    "name": "Deforest",
    "description": "Pave over the trees and shrubs.",
    "targetTileType": "empty",
    "cost": 500,
    "effort": 4,
    "tier": "2"
  },
  "upgrade-library": {
    "id": "upgrade-library",
    "name": "Upgrade Library",
    "description": "Every library needs a 3D printer, right?",
    "targetTileType": "library-2",
    "cost": 750,
    "effort": 4,
    "tier": "2"
  },
  "upgrade-rest-diner": {
    "id": "upgrade-rest-diner",
    "name": "Open a Diner",
    "description": "Make Guy Fieri proud!",
    "targetTileType": "restaurant-1",
    "cost": 505,
    "effort": 4,
    "tier": "2"
  },
  "upgrade-rest-fine-dining": {
    "id": "upgrade-rest-fine-dining",
    "name": "Open for Fine Dining",
    "description": "Go for Rustfield's first Michelin Star!",
    "targetTileType": "restaurant-2",
    "cost": 600,
    "effort": 4,
    "tier": "2"
  },
  "upgrade-shop-small": {
    "id": "upgrade-shop-small",
    "name": "Upgrade to Shop",
    "description": "Make it brick-and-mortar.",
    "targetTileType": "shop-small",
    "cost": 380,
    "effort": 4,
    "tier": "2"
  },
  "build-house": {
    "id": "build-house",
    "name": "Build Affordable Housing",
    "description": "It may not have a hot tub and 3 car garage, but it will do.",
    "targetTileType": "house-1",
    "cost": 250,
    "effort": 3,
    "tier": "1"
  },
  "build-park": {
    "id": "build-park",
    "name": "Build a Park",
    "description": "Beautify the community with natural scenery.",
    "targetTileType": "park-1",
    "cost": 300,
    "effort": 3,
    "tier": "1"
  },
  "build-shop-market": {
    "id": "build-shop-market",
    "name": "Start a Market",
    "description": "Fresh produce!",
    "targetTileType": "shop-market",
    "cost": 250,
    "effort": 3,
    "tier": "1"
  },
  "repair-park": {
    "id": "repair-park",
    "name": "Cleanup",
    "description": "Clean up! Clean up! Everybody do your share!",
    "targetTileType": "park-1",
    "cost": 75,
    "effort": 3,
    "tier": "1"
  },
  "repair-shop": {
    "id": "repair-shop",
    "name": "Repair Shop",
    "description": "Let's bring in some buisness! ",
    "targetTileType": "shop-small",
    "cost": 392,
    "effort": 3,
    "tier": "1"
  },
  "upgrade-gas": {
    "id": "upgrade-gas",
    "name": "Convert to Gas Station",
    "description": "I love the smell of diesel in the morning!",
    "targetTileType": "gas-1",
    "cost": 300,
    "effort": 3,
    "tier": "1"
  },
  "upgrade-park-mem": {
    "id": "upgrade-park-mem",
    "name": "Commemorate",
    "description": "Show some respect!",
    "targetTileType": "park-mem",
    "cost": 300,
    "effort": 3,
    "tier": "1"
  },
  "upgrade-rest-drive-thru": {
    "id": "upgrade-rest-drive-thru",
    "name": "Upgrade to Drive Thru",
    "description": "Franchising has never been easier...",
    "targetTileType": "restaurant-0",
    "cost": 420,
    "effort": 3,
    "tier": "1"
  },
  "upgrade-park-dog": {
    "id": "upgrade-park-dog",
    "name": "Poochify",
    "description": "Give the local four-legged friends somewhere to play.",
    "targetTileType": "park-dog",
    "cost": 260,
    "effort": 2,
    "tier": "1"
  },
  "convert-meadow": {
    "id": "convert-meadow",
    "name": "Clear a meadow",
    "description": "Cultivate some nice meadow habitat.",
    "targetTileType": "meadow",
    "cost": 50,
    "effort": 1,
    "tier": "1"
  },
  "convert-trees-1": {
    "id": "convert-trees-1",
    "name": "Reintroduce Fruit Trees",
    "description": "Rustfieldis scrumptious was long thought extinct.",
    "targetTileType": "trees-1",
    "cost": 100,
    "effort": 1,
    "tier": "1"
  }
}