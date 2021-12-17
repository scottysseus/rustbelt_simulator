import { advanceTurn } from '../game_logic'
import { GameState } from '../game_logic/interfaces'

export interface UIState {
  selectedTile?: number
}

export interface UIAction {
  type: 'selectTile' | 'deselectTile'
  tileIndex?: number
}

export interface GameAction {
  type: 'advanceTurn'
  projectIndex?: number
}

export function gameReducer (state: GameState, action: GameAction): GameState {
  console.log(action)
  switch (action.type) {
    case 'advanceTurn':
      advanceTurn(state)
  }
  return Object.assign({}, state)
}

export function uiReducer (state: UIState, action: UIAction): UIState {
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
export type uiDispatcher = (action: UIAction) => void
export type gameDispatcher = (action: GameAction) => void
