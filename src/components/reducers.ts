import { castDraft, Draft } from 'immer'
import { Reducer } from 'use-immer'
import { advanceTurn, GameState } from '../game_logic'

export interface UIState {
  readonly selectedTile: number | null
}

export type Action = {
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

export const reducer: Reducer<State, Action> = (draft, action) => {
  console.log('old state', draft)
  switch (action.type) {
    case 'advanceTurn':
      draft.game = castDraft(advanceTurn(draft.game))
      break
    case 'selectTile':
      draft.ui.selectedTile = action.tileIndex
      break
    case 'deselectTile':
      draft.ui.selectedTile = castDraft(null)
      break
    case 'selectProject':
      break
    default:
      assertUnreachable(action)
  }
}

function assertUnreachable (_x: never): never {
  throw new Error('One or more action types is unimplemented.')
}

export type dispatcher = (action: Action) => void
