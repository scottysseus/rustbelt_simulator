import { advanceTurn } from '../game_logic'
import { GameState } from '../game_logic/interfaces'

export interface UiState {
  selectedTile?: number
}

export interface UiAction {
  type: 'selectTile' | 'deselectTile'
  tileIndex?: number
}

export interface GameAction {
  type: 'advanceTurn' | 'selectProject'
  projectIndex?: number
}

export function gameReducer (state: GameState, action: GameAction): GameState {
  console.log(action)
  switch (action.type) {
    // TODO make advanceTurn a pure function?
    case 'advanceTurn':
      advanceTurn(state)
  }
  return Object.assign({}, state)
}

export function uiReducer (state: UiState, action: UiAction): UiState {
  switch (action.type) {
    case 'selectTile':
      return Object.assign({}, state, { selectedTile: action.tileIndex })
    case 'deselectTile': {
      const newState = Object.assign({}, state)
      delete newState.selectedTile
      return newState
    }
    default:
      return Object.assign({}, state)
  }
}
export type uiDispatcher = (action: UiAction) => void
export type gameDispatcher = (action: GameAction) => void
