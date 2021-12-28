/**
 * State rules (this applies to UIState too):
 * - All properties are readonly
 * - Use ReadonlyArrays instead of Arrays
 * - Use ReadonlyRecords instead of Records
 * - Use readonly varieties of Maps, Sets, etc
 * - No optionals, use nullables instead
 */

type ReadonlyRecord<K extends string, T> = Readonly<Record<K, T>>

/**
 * Represents the project a player assigns workers to in order to improve a tile.
 */
export interface ProjectDefinition {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly targetTileType: TileType
  readonly cost: number
  readonly effort: number
}

export type ProjectType = string
export type ProjectCatalog = ReadonlyRecord<ProjectType, ProjectDefinition>

/**
 * A TileDBEntry stores the "starting point" and static information about tiles
 * When an actual tile is added to game board, it holds a pointer to an entry in this catalog to lookup things like assets.
 */
export interface TileDefinition {
  readonly id: string
  // Short form name suitable for displaying in most places
  readonly name: string
  // Long form description or flavor text, shown in a "detail" view
  readonly description: string
  // An array of 0 to 3 projects for a tile
  // 0 projects indicates a "final" tile that can't be improved any more
  readonly projects: ReadonlyArray<ProjectType>
  // An array of "tags" that categorize this tile.
  readonly tags: ReadonlyArray<string>
  readonly revenue: number
  readonly happiness: number
  readonly happinessGrowth: number
  readonly modelPath: string
}

export type TileType = string
export interface TilePlacement {
  readonly type: TileType
  readonly rotation?: number
}
export type TileCatalog = ReadonlyRecord<TileType, TileDefinition>

export interface ActiveProject {
  readonly type: ProjectType
  // Invariant: progress < project.effort
  readonly progress: number
  readonly assignedWorkers: number
}

/**
 * Represents the state of current tile on the game map
 */
export interface Tile {
  // Pointer into a database of tile decsriptions that are IMMUTABLE
  readonly type: TileType
  readonly rotation: number
  readonly activeProject: ActiveProject | null
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
  // Prose string for the reward
  readonly reward: string
  // properties necessary for dynamically-generated contracts
  /**
   * indicates if the conditions of the contract are satisfied
   */
   readonly isSatisfied: (state: GameState) => boolean
   /**
    * returns a set of rewards that would be given based on the current state
    * OR the minimum required conditions, whichever is greater
    */
   readonly applyReward: (state: GameState) => GameState
}

export type ContractCatalogId = string
export type ContractCatalog = ReadonlyRecord<ContractCatalogId, Contract>

export interface MapState {
  readonly tiles: ReadonlyArray<Tile>,
  readonly size: {
    readonly x: number,
    readonly y: number
  }
}

export interface WorkerState {
  readonly max: number,
  readonly free: number
}

export interface PlayerState {
  readonly resources: {
    readonly money: {
      readonly balance: number,
      readonly revenue: number
    },
    readonly workers: WorkerState
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
  readonly map: MapState
}

export interface GameMapDefinition {
  // A flat array of
  readonly tiles: ReadonlyArray<TileType>
  readonly rotations: ReadonlyArray<number>
  // The dimensions
  readonly size: {
    readonly x: number
    readonly y: number
  }
}
