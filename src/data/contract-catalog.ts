import { Contract, ContractCatalog, GameState } from '../game_logic'

export const contractIDs = {
  imLovinIt: 'i\'m lovin\' it',
  greenTourism: 'green tourism',
  brokenWindowsTheory: 'broken windows theory',
  educatedWorkforce: 'educated workforce'
}

export const catalog:ContractCatalog = {
  [contractIDs.imLovinIt]: {
    name: 'I\'m Lovin\' It',
    description: 'Build at least one drive thru restaurant',
    completed: false,
    reward: '$100/turn, 🙂3',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: function (state: GameState): GameState { return state }
  },
  [contractIDs.greenTourism]: {
    name: 'Green Tourism',
    description: 'Build at least 1 park',
    completed: false,
    reward: '$85, 🙂5',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: function (state: GameState): GameState {
      return {
        ...state,
        player: {
          ...state.player,
          resources: {
            ...state.player.resources,
            money: {
              ...state.player.resources.money,
              balance: state.player.resources.money.balance + 85
            }
          },
          victory: {
            ...state.player.victory,
            happiness: state.player.victory.happiness + 5
          }
        }
      }
    }
  },
  [contractIDs.brokenWindowsTheory]: {
    name: 'Broken Windows Theory',
    description: 'Improve each property at least once',
    completed: false,
    reward: '🙂22',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: function (state: GameState): GameState { return state }
  },
  [contractIDs.educatedWorkforce]: {
    name: 'Educated Workforce',
    description: 'Build 1 new library to educate the Rustfield citizenry',
    completed: false,
    reward: '🙂5, 👤2',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: function (state: GameState): GameState { return state }
  }
}

export const contractQueue: Contract[] = Object.keys(catalog)
  .map(key => ({ value: catalog[key], sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(el => el.value)
