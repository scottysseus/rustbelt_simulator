import produce from 'immer'
import { Contract, ContractCatalog, GameState } from '../game_logic'

export const contractIDs = {
  imLovinIt: 'i\'m lovin\' it',
  greenTourism: 'green tourism',
  brokenWindowsTheory: 'broken windows theory',
  educatedWorkforce: 'educated workforce',
  mansBestFriend: 'man\'s best friend',
  civicLeader: 'civic leader',
  conservationist: 'conservationist',
  theCoalIndustryIsBack: 'the coal industry is back',
  thisOldHouse: 'this old house',
  whiteCollar: 'white collar'
}

export const catalog:ContractCatalog = {
  [contractIDs.imLovinIt]: {
    name: 'I\'m Lovin\' It',
    description: 'Build at least one drive thru restaurant.',
    reward: '$100/turn, 🙂3',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.resources.money.revenue += 100
      draft.player.victory.happiness += 3
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  },
  [contractIDs.greenTourism]: {
    name: 'Green Tourism',
    description: 'Build at least 1 park.',
    reward: '$85, 🙂5',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.resources.money.balance += 85
      draft.player.victory.happiness += 5
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  },
  [contractIDs.brokenWindowsTheory]: {
    name: 'Broken Windows Theory',
    description: 'Improve each property at least once.',
    reward: '🙂22',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 22
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  },
  [contractIDs.educatedWorkforce]: {
    name: 'Educated Workforce',
    description: 'Build 1 new library to educate the Rustfield citizenry.',
    reward: '🙂5, 👤2',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  },
  [contractIDs.mansBestFriend]: {
    name: 'Man\'s Best Friend',
    description: 'Build 2 dog parks.',
    reward: '$100, 🙂5',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  },
  [contractIDs.civicLeader]: {
    name: 'Civic Leader',
    description: 'Repair 4 #civic buildings.',
    reward: '🙂10',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  },
  [contractIDs.conservationist]: {
    name: 'Conservationist',
    description: 'Restore 3 #nature properties.',
    reward: '🙂5',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  },
  [contractIDs.theCoalIndustryIsBack]: {
    name: 'The Coal Industry is Back',
    description: 'Convert 2 coal power plants to wind farms.',
    reward: '🙂5',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  },
  [contractIDs.thisOldHouse]: {
    name: 'This Old House',
    description: 'Repair 4 abandoned houses.',
    reward: '🙂5',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  },
  [contractIDs.whiteCollar]: {
    name: 'White Collar',
    description: 'Build 3 new offices.',
    reward: '🙂5',
    isSatisfied: function (state: GameState): boolean { return false },
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    getDisplayableProgress: function (state: GameState): string { return '' }
  }
}

/**
 * contractQueue is a shuffled queue of contracts. It will be used to randomly select
 * new contracts.
 */
export const contractQueue: Contract[] = Object.keys(catalog)
  .map(key => ({ value: catalog[key], sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(el => el.value)
