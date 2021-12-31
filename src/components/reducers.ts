import { castDraft } from 'immer'
import { Reducer } from 'use-immer'
import { advanceTurn, GameState, playerAssignWorkers, playerInitiateProject } from '../game_logic'

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
  tileIndex: number
} | {
  type: 'assignWorkers'
  tileIndex: number
  workerCount: number
}

export interface State {
  readonly ui: UIState
  readonly game: GameState
}

export const reducer: Reducer<State, Action> = (draft, action) => {
  switch (action.type) {
    case 'advanceTurn':
      // TypeScript sometimes complains about writing to readonly properties on the draft.
      // castDraft reassures it that nothing funny is going on here
      draft.game = castDraft(advanceTurn(draft.game))
      break
    case 'selectTile':
      draft.ui.selectedTile = action.tileIndex
      break
    case 'deselectTile':
      draft.ui.selectedTile = null
      break
    case 'selectProject':
      draft.game = castDraft(playerInitiateProject(draft.game, action.tileIndex, action.projectIndex))
      break
    case 'assignWorkers':
      draft.game = castDraft(playerAssignWorkers(draft.game, action.tileIndex, action.workerCount))
      break
    default:
      assertUnreachable(action)
  }
}

function assertUnreachable (_x: never): never {
  throw new Error('One or more action types is unimplemented.')
}

export type dispatcher = (action: Action) => void
