import { advanceTurn, GameState } from '../game_logic'

export interface UIState {
  readonly selectedTile: number | null
}

type Action = {
  type: 'advanceTurn' | 'deselectTile'
} | {
  type: 'selectTile'
  tileIndex: number
} | {
  type: 'selectProject'
  projectIndex: number
}

export interface State {
  readonly ui: UIState
  readonly game: GameState
}

export function reducer (state: State, action: Action): State {
  console.log(action)
  switch (action.type) {
    // TODO make advanceTurn a pure function?
    case 'advanceTurn':
      advanceTurn(state.game)
      return { ...state }
    case 'selectTile':
      return { ...state, ui: { ...state.ui, selectedTile: action.tileIndex } }
    case 'deselectTile':
      return { ...state, ui: { ...state.ui, selectedTile: null } }
    default:
      return { ...state }
  }
}

export type dispatcher = (action: Action) => void
