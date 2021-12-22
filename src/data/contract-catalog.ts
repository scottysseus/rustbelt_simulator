import { ContractCatalog } from '../game_logic'

export const contractIDs = {
  imLovinIt: 'i\'m lovin\' it',
  greenTourism: 'green tourism',
  brokenWindowsTheory: 'broken windows theory'
}

export const catalog:ContractCatalog = {
  [contractIDs.imLovinIt]: {
    name: 'I\'m Lovin\' It',
    description: 'Build at least one drive thru restaurant',
    completed: false,
    reward: '$100/turn, 🙂3'
  },
  [contractIDs.greenTourism]: {
    name: 'Green Tourism',
    description: 'Build at least 1 park',
    completed: false,
    reward: '$85, 🙂5/turn'
  },
  [contractIDs.brokenWindowsTheory]: {
    name: 'Broken Windows Theory',
    description: 'Improve each property at least once',
    completed: false,
    reward: '🙂22'
  }
}
