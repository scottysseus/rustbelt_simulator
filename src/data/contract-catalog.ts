import produce from 'immer'
import { Contract, ContractCatalog, GameState } from '../game_logic'
import { COMP_EQ, satisfiesTagCount, satisfiesTileTypeCount, satisifiesCompletedProjectCount, satisfiesCompletedProjectsAnyCount } from '../game_logic/contracts'

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

export const catalog: ContractCatalog = {
  [contractIDs.imLovinIt]: {
    name: 'I\'m not Lovin\' It anymore',
    description: 'Upgrade at least one drive thru restaurant.',
    reward: '$100/turn, 🙂3',
    isSatisfied: (gameState: GameState) => satisifiesCompletedProjectCount(gameState, { 'upgrade-restaurant-family': 1 }),
    applyReward: produce((draft) => {
      draft.player.resources.money.revenue += 100
      draft.player.victory.happiness += 3
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
  },
  [contractIDs.greenTourism]: {
    name: 'Green Tourism',
    description: 'Build at least 1 park.',
    reward: '$85, 🙂5',
    isSatisfied: (gameState: GameState) => satisfiesTagCount(gameState, { park: 1 }),
    applyReward: produce((draft) => {
      draft.player.resources.money.balance += 85
      draft.player.victory.happiness += 5
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
  },
  [contractIDs.brokenWindowsTheory]: {
    name: 'Broken Windows Theory',
    description: 'Repair all #damaged properties',
    reward: '🙂22',
    isSatisfied: (gameState: GameState) => satisfiesTagCount(gameState, { damaged: 0 }, COMP_EQ),
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 22
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
  },
  [contractIDs.educatedWorkforce]: {
    name: 'Educated Workforce',
    description: 'Build 1 new library to educate the Rustfield citizenry.',
    reward: '🙂5, 👤2',
    isSatisfied: (gameState: GameState) => satisifiesCompletedProjectCount(gameState, { 'build-library': 1 }),
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
  },
  [contractIDs.mansBestFriend]: {
    name: 'Man\'s Best Friend',
    description: 'Have 2 dog parks.',
    reward: '$100, 🙂5',
    isSatisfied: (gameState: GameState) => satisfiesTileTypeCount(gameState, { 'park-dog': 2 }),
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
  },
  [contractIDs.civicLeader]: {
    name: 'Civic Leader',
    description: 'Repair 2 #civic buildings.',
    reward: '🙂10',
    isSatisfied: (gameState: GameState) => satisfiesCompletedProjectsAnyCount(gameState, ['repair-library', 'repair-firestation'], 2),
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 10
      draft.player.resources.workers.max += 2
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
  },
  [contractIDs.conservationist]: {
    name: 'Conservationist',
    description: 'Restore 3 #nature properties.',
    reward: '🙂5',
    isSatisfied: (gameState: GameState) => satisfiesCompletedProjectsAnyCount(gameState, ['restore-forest'], 2),
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
  },
  [contractIDs.theCoalIndustryIsBack]: {
    name: 'The Coal Industry is Back',
    description: 'Convert 2 coal power plants to wind farms.',
    reward: '🙂5',
    isSatisfied: (gameState: GameState) => satisifiesCompletedProjectCount(gameState, { 'convert-wind': 2 }),
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
  },
  [contractIDs.thisOldHouse]: {
    name: 'This Old House',
    description: 'Repair 4 abandoned houses.',
    reward: '🙂5',
    isSatisfied: (gameState: GameState) => satisifiesCompletedProjectCount(gameState, { 'repair-house': 2 }),
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
  },
  [contractIDs.whiteCollar]: {
    name: 'White Collar',
    description: 'Build 3 new offices.',
    reward: '🙂5',
    isSatisfied: (gameState: GameState) => satisifiesCompletedProjectCount(gameState, { 'build-office-tower': 3 }),
    applyReward: produce((draft) => {
      draft.player.victory.happiness += 5
      draft.player.resources.workers.max += 2
    }),
    calculateProgress: () => ({ current: 0, required: 2 })
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
