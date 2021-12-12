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
export type RawProjectCatalog = Record<ProjectCatalogId, ProjectCatalogEntry>
export type ProjectCatalog = Record<ProjectCatalogId, ProjectDefinition>

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
  readonly projects: Array<ProjectCatalogId>
  // An array of "tags" that categorize this tile.
  readonly tags: Array<string>
  readonly revenue: number
  readonly happiness: number
  readonly modelPath: string
}

export interface TileDefinition extends Omit<TileCatalogEntry, 'projects'> {
  readonly projects: Array<ProjectDefinition>
}

export type TileCatalogEntryId = string
export type RawTileCatalog = Record<TileCatalogEntryId, TileCatalogEntry>
export type TileCatalog = Record<TileCatalogEntryId, TileDefinition>

export interface ActiveProject {
  readonly project: ProjectDefinition
  // Invariant: progress < project.effort
  progress: number
  assignedWorkers: number
}

/**
 * Represents the state of current tile on the game map
 */
export interface Tile {
  // Pointer into a database of tile decsriptions that are IMMUTABLE
  definition: TileDefinition

  activeProject?: ActiveProject
}

export interface TileUnderConstruction extends Tile {
  // Defined if this tile is currently under construction
  activeProject: ActiveProject
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
  /**
   * Look at the current game state and determine if this contract has been fulfilled
   *
   * changes `isCompeleted()` if has been completed
   *
   * DO NOT modify the game state
   * @param state
   */
  check(state: GameState): boolean

  /**
   * Modify the current game state to apply the rewards of this contract
   * @param state
   */
  reward(state: GameState): void

  /**
   * Indicates if this contract has been resolved
   */
  readonly completed: boolean
}

export interface MapState {
  tiles: Array<Tile>,
  size: {
    x: number,
    y: number
  }
}

export interface PlayerState {
  resources: {
    money: {
      balance: number,
      revenue: number
    },
    workers: {
      max: number,
      free: number
    }
  },
  victory: {
    happiness: number,
    goal: number
  },
  contracts: {
    completed: Array<Contract>,
    open: Array<Contract>
  }
}

/**
 * The state of the game, design to be transformed only through specific functions, but observed by any elements.
 */
export interface GameState {
  game: {
    turnCounter: number
  },
  player: PlayerState,
  // A flat-buffer of
  map: MapState,
  tileCatalog: TileCatalog
}

export interface GameMapDefinition {
  // A flat array of
  tiles: Array<TileCatalogEntryId>
  // The dimensions
  size: {
    x: number
    y: number
  }
}
