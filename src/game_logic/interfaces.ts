/**
 * State rules (this applies to UIState too):
 * - All properties are readonly
 * - Use ReadonlyArrays instead of Arrays
 * - Use ReadonlyRecords instead of Records
 * - Use readonly varieties of Maps, Sets, etc
 */

type ReadonlyRecord<K extends string, T> = Readonly<Record<K, T>>

/**
 * Represents the project a player assigns workers to in order to improve a tile.
 */
export interface ProjectCatalogEntry {
  readonly name: string
  readonly description: string
  readonly targetTileDefinition: string
  readonly cost: number
  readonly effort: number
}

export interface ProjectDefinition extends Omit<ProjectCatalogEntry, 'targetTileDefinition'> {
  readonly targetTileDefinition: TileDefinition
}

export type ProjectCatalogId = string
export type RawProjectCatalog = ReadonlyRecord<ProjectCatalogId, ProjectCatalogEntry>
export type ProjectCatalog = ReadonlyRecord<ProjectCatalogId, ProjectDefinition>

/**
 * A TileDBEntry stores the "starting point" and static information about tiles
 * When an actual tile is added to game board, it holds a pointer to an entry in this catalog to lookup things like assets.
 */
export interface TileCatalogEntry {
  // Short form name suitable for displaying in most places
  readonly name: string
  // Long form description or flavor text, shown in a "detail" view
  readonly description: string
  // An array of 0 to 3 projects for a tile
  // 0 projects indicates a "final" tile that can't be improved any more
  readonly projects: ReadonlyArray<ProjectCatalogId>
  // An array of "tags" that categorize this tile.
  readonly tags: ReadonlyArray<string>
  readonly revenue: number
  readonly happiness: number
  readonly modelPath: string
}

export interface TileDefinition extends Omit<TileCatalogEntry, 'projects'> {
  readonly projects: ReadonlyArray<ProjectDefinition>
}

export type TileCatalogEntryId = string
export type RawTileCatalog = ReadonlyRecord<TileCatalogEntryId, TileCatalogEntry>
export type TileCatalog = ReadonlyRecord<TileCatalogEntryId, TileDefinition>

export interface ActiveProject {
  readonly project: ProjectDefinition
  // Invariant: progress < project.effort
  readonly progress: number
  readonly assignedWorkers: number
}

/**
 * Represents the state of current tile on the game map
 */
export interface Tile {
  // Pointer into a database of tile decsriptions that are IMMUTABLE
  readonly definition: TileDefinition

  readonly activeProject?: ActiveProject
}

export interface TileUnderConstruction extends Tile {
  // Defined if this tile is currently under construction
  readonly activeProject: ActiveProject
}

export function isTileUnderConstruction (tile: Tile): tile is TileUnderConstruction {
  return !!((tile as TileUnderConstruction).activeProject)
}

/**
 * Represents an "additional objective" or "side quest" that players can complete
 * to gain rewards.
 *
 */
export interface Contract {
  // aka title
  readonly name: string
  // Long form description / flavor text
  readonly description: string
  // Indicates if this contract has been resolved
  readonly completed: boolean
}

export interface MapState {
  readonly tiles: ReadonlyArray<Tile>,
  readonly size: {
    readonly x: number,
    readonly y: number
  }
}

export interface PlayerState {
  readonly resources: {
    readonly money: {
      readonly balance: number,
      readonly revenue: number
    },
    readonly workers: {
      readonly max: number,
      readonly free: number
    }
  },
  readonly victory: {
    readonly happiness: number,
    readonly goal: number
  },
  readonly contracts: {
    readonly completed: ReadonlyArray<Contract>,
    readonly open: ReadonlyArray<Contract>
  }
}

/**
 * The state of the game, design to be transformed only through specific functions, but observed by any elements.
 */
export interface GameState {
  readonly game: {
    readonly turnCounter: number
  },
  readonly player: PlayerState,
  // A flat-buffer of
  readonly map: MapState,
  readonly tileCatalog: TileCatalog
}

export interface GameMapDefinition {
  // A flat array of
  readonly tiles: ReadonlyArray<TileCatalogEntryId>
  // The dimensions
  readonly size: {
    readonly x: number
    readonly y: number
  }
}
