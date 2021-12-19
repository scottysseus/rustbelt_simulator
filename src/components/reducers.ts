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
  console.log('old state', state)
  switch (action.type) {
    case 'advanceTurn':
      return { ...state, game: advanceTurn(state.game) }
    case 'selectTile':
      return { ...state, ui: { ...state.ui, selectedTile: action.tileIndex } }
    case 'deselectTile':
      return { ...state, ui: { ...state.ui, selectedTile: null } }
    default:
      return { ...state } // TODO prevent with typechecking
  }
}

export type dispatcher = (action: Action) => void
