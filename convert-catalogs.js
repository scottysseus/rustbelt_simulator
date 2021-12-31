const { parse } = require('csv-parse/sync')
const { readFile, writeFile } = require('fs/promises')

async function convertTileCatalog () {
  const csvTileCatalog = await readFile('./Rustfield Catalog - Tiles.csv')
  const tileCat = parse(csvTileCatalog, { columns: true })
  const finalCatalog = {}
  for (const entry of tileCat) {
    entry.projects = []
    if (entry.project1) {
      entry.projects.push(entry.project1)
    }
    if (entry.project2) {
      entry.projects.push(entry.project2)
    }
    if (entry.project3) {
      entry.projects.push(entry.project3)
    }
    if (entry.project4) {
      entry.projects.push(entry.project4)
    }
    if (entry.project5) {
      entry.projects.push(entry.project5)
    }

    entry.tags = entry.tags.split(',')
    entry.happiness = parseInt(entry.happiness)
    entry.revenue = parseInt(entry.revenue)
    entry.happinessGrowth = parseInt(entry.happinessGrowth)

    entry.modelComponent = 'REPLACE_ME' + entry.modelComponent
    delete entry.project1
    delete entry.project2
    delete entry.project3
    delete entry.project4
    delete entry.project5
    delete entry.project6
    delete entry['Modeling Status']
    delete entry['GLTF Export Status']
    delete entry['Export Instructions']
    delete entry['happiness growth']
    delete entry.modelPath
    finalCatalog[entry.id] = entry
  }

  const replaceMeRegex = /"REPLACE_ME(.+)"/g

  // replace the double quotes around the entry.modelComponent values, e.g. "Empty" -> Empty
  const jsonString = JSON.stringify(finalCatalog, undefined, 2).replaceAll(replaceMeRegex, (_match, p1) => p1)

  const catalogFile = `
import { TileCatalog } from '../game_logic'
import { Empty, EnergyCoal, EnergyWind, Fire0, Fire1, Gas0, Gas1, House0, House1, House2, Library0, Library1, Library2, Meadow, Office1, Park0, Park1, ParkDog, ParkMem, ParkSports, Restaurant0, Restaurant1, Restaurant2, RoadIntersection, RoadStraight, RoadTurn, Shop0, ShopMarket, ShopSmall, ShopSuper, Trees0, Trees1 } from '../components/models'




// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const tileCatalog: TileCatalog = ${jsonString}`
  await writeFile('src/data/tile-catalog.ts', catalogFile)
}

async function convertProjectCatalog () {
  const csvProjectCatalog = await readFile('./Rustfield Catalog - Projects.csv')
  const projectCat = parse(csvProjectCatalog, { columns: true })
  const finalCat = {}
  for (entry of projectCat) {
    entry.cost = parseInt(entry.cost)
    entry.effort = parseInt(entry.effort)
    delete entry.tier
    finalCat[entry.id] = entry
  }
  console.log(projectCat)
  console.log(finalCat)

  const projectCatalogFile = `
import { ProjectCatalog } from '../game_logic'
// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const projectCatalog: ProjectCatalog = ${JSON.stringify(finalCat, undefined, 2)}`
  await writeFile('src/data/project-catalog.ts', projectCatalogFile)
}

async function convert () {
  await convertTileCatalog()
  await convertProjectCatalog()
}

convert().catch(console.log)
