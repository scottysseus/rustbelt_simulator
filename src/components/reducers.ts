import { advanceTurn, GameState } from '../game_logic'

export interface UIState {
  selectedTile?: number
}

export interface Action {
  type: 'selectTile' | 'deselectTile' | 'advanceTurn' | 'selectProject'
  tileIndex?: number
  projectIndex?: number
}

export interface State {
  ui: UIState
  game: GameState
}

export function reducer (state: State, action: Action): State {
  console.log(action)
  switch (action.type) {
    // TODO make advanceTurn a pure function?
    case 'advanceTurn':
      advanceTurn(state.game)
      return Object.assign({}, state, { game: state.game })
    case 'selectTile': {
      const newState = Object.assign({}, state)
      newState.ui.selectedTile = action.tileIndex
      return newState
    }
    case 'deselectTile': {
      const newState = Object.assign({}, state)
      delete newState.ui.selectedTile
      return newState
    }
    default:
      return Object.assign({}, state)
  }
}

export type dispatcher = (action: Action) => void
