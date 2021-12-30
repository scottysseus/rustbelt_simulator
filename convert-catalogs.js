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
    entry.tags = entry.tags.split(',')
    entry.happiness = parseInt(entry.happiness)
    entry.revenue = parseInt(entry.revenue)
    entry.happinessGrowth = parseInt(entry.happinessGrowth)
    delete entry.project1
    delete entry.project2
    delete entry.project3
    delete entry['Modeling Status']
    delete entry['GLTF Export Status']
    delete entry['Export Instructions']
    delete entry['happiness growth']
    finalCatalog[entry.id] = entry
  }
  const catalogFile = `
import { TileCatalog } from '../game_logic'

// This file implements a "database" of tiles, each with unique appearance, choices, etc
export const tileCatalog: TileCatalog = ${JSON.stringify(finalCatalog, undefined, 2)}`
  await writeFile('src/data/tile-catalog.ts', catalogFile)
}

async function convertProjectCatalog () {
  await convertTileCatalog()

  const csvProjectCatalog = await readFile('./Rustfield Catalog - Projects.csv')
  const projectCat = parse(csvProjectCatalog, { columns: true })
  const finalCat = {}
  for (entry of projectCat) {
    entry.cost = parseInt(entry.cost)
    entry.effort = parseInt(entry.effort)
    finalCat[entry.id] = entry
  }

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
