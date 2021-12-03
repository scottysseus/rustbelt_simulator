export interface Project {
  projectName: string
  description: string
  tileName: string
  cost: number
  revenue: number
  effort: number
  happiness: number
}

/**
 * A TileDBEntry stores the "starting point" and static information about tiles
 * When an actual tile is added to game board, it holds a pointer to an entry in this catalog to lookup things like assets.
 */
export interface TileCatalogEntry {
  rawName: string
  projects: Array<Project>
  sprite?: string
}

export type TileCatalog = Record<string, TileCatalogEntry>;



export interface Tile {
  // Pointer into a database of tile decriptions that are IMMUTABLE
  // determines what 
  tileId: string
  state: string
}

export interface RawTile extends Tile {
  state: 'raw'
}

export interface InProgressTile extends Tile {
  state: 'in-progress'
  projectId: string
  progress: number
  assignedWorkers: number
}


export interface Contract {
  check(state: GameState): boolean
  reward(state: GameState): void,
  completed: boolean
}


export interface CompletedContract extends Contract {
  completed: true;
}

export interface MapState {
  tiles: Array<RawTile | InProgressTile>,
  size: {
    x: number,
    y: number
  }
}


/**
 * The state of the game, design to be transformed only through specific functions, but observed by any elements.
 */
export interface GameState {
  game: {
    turnCounter: number
  },
  player: {
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
      completed: Array<CompletedContract>,
      open: Array<Contract>
    }
  },
  // A flat-buffer of 
  map: MapState
}


export type GameMapDefinition = Array<Array<string>>;