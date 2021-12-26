import produce from 'immer'
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
    description: 'Build at least one drive thru restaurant.',
    reward: '$100/turn, 🙂3',
    isSatisfied: function (state: GameState): boolean { return true },
    applyReward: produce((draft) => {
      draft.player.resources.money.revenue += 100
      draft.player.victory.happiness += 3
    })
  },
  [contractIDs.greenTourism]: {
    name: 'Green Tourism',
    description: 'Build at least 1 park.',
    reward: '$85, 🙂5',
    isSatisfied: function (state: GameState): boolean { return true },
    applyReward: produce((draft) => {
      draft.player.resources.money.balance += 85
      draft.player.victory.happiness += 5
    })
  },
  [contractIDs.brokenWindowsTheory]: {
    name: 'Broken Windows Theory',
    description: 'Improve each property at least once.',
    reward: '🙂22',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 22
    })
  },
  [contractIDs.educatedWorkforce]: {
    name: 'Educated Workforce',
    description: 'Build 1 new library to educate the Rustfield citizenry.',
    reward: '🙂5, 👤2',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    })
  }
}

export const contractQueue: Contract[] = Object.keys(catalog)
  .map(key => ({ value: catalog[key], sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(el => el.value)
