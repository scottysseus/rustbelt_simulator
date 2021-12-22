import { ContractCatalog } from '../game_logic'

export const catalog:ContractCatalog = {
  'i\'m lovin\' it': {
    name: 'I\'m Lovin\' It',
    description: 'Build at least one drive thru restaurant',
    completed: false,
    reward: '$100/turn, 🙂3'
  },
  'green tourism': {
    name: 'Green Tourism',
    description: 'Build at least 1 park',
    completed: false,
    reward: '$85, 🙂5/turn'
  },
  'broken windows theory': {
    name: 'Broken Windows Theory',
    description: 'Improve each property at least once',
    completed: false,
    reward: '🙂22'
  }
}
