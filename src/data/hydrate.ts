import { ProjectCatalog, ProjectDefinition, RawProjectCatalog, RawTileCatalog, TileCatalog } from '../game_logic'

// Hydrate the cross references in these two maps so that lookups don't need to be made later
export interface Catalogs {
  tileCatalog: TileCatalog
  projectCatalog: ProjectCatalog
}
export function hydrate (rawTiles: RawTileCatalog, rawProjects: RawProjectCatalog): Catalogs {
  const tileCatalog: TileCatalog = {}
  const projectCatalog: ProjectCatalog = {}

  for (const projectId in rawProjects) {
    projectCatalog[projectId] = Object.assign(
      {},
      rawProjects[projectId],
      {
        targetTileDefinition: rawTiles[rawProjects[projectId].targetTileDefinition]
      }
    ) as unknown as ProjectDefinition
  }

  for (const tileId in rawTiles) {
    tileCatalog[tileId] = Object.assign({}, rawTiles[tileId], {
      projects: rawTiles[tileId].projects.map((id) => projectCatalog[id])
    })
  }

  return {
    tileCatalog,
    projectCatalog
  }
}
