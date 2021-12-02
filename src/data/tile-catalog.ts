import { TileCatalog } from '../game_logic';

// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const db: TileCatalog = {
  "empty": {
    rawName: "Empty Lot",
    projects: [
      {
        projectName: "Clear Debris",
        description: "Just get the junk out of the way",
        tileName: "Empty Lot",
        cost: 100,
        revenue: 0,
        effort: 10,
        happiness: 2
      }
    ]
  },
  "grocery": {
    rawName: "Grocery Store",
    projects: [
      {
        projectName: "Repair",
        description: "Oh, the watermelons!",
        tileName: "Grocery Store",
        cost: 100,
        revenue: 0,
        effort: 10,
        happiness: 2
      }
    ]
  },
  "liquor": {
    rawName: "Liquor Store",
    projects: [
      {
        projectName: "Repair",
        description: "Bob's ur uncle!",
        tileName: "Liquor Store",
        cost: 100,
        revenue: 0,
        effort: 10,
        happiness: 2
      }
    ]
  },
  "muffins": {
    rawName: "Grandma's Muffin Shop",
    projects: [
      {
        projectName: "Repair",
        description: "MMM Just like my grandma used to bake.",
        tileName: "Grandma's Muffin Shop",
        cost: 300,
        revenue: 10,
        effort: 20,
        happiness: 5
      },
      {
        projectName: "Replace",
        description: "NEW! Pumpink Spice Orange Juice",
        tileName: "Blunkin Donuts",
        cost: 200,
        revenue: 20,
        effort: 30,
        happiness: 4
      },
      {
        projectName: "Replace",
        tileName: "Burrito Gong",
        description: "It's a hot log of maybe hispanic food!",
        cost: 200,
        revenue: 20,
        effort: 30,
        happiness: 4
      }
    ]
  }
};