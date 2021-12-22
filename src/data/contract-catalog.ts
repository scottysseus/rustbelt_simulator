import { ContractCatalog, GameState, playerAssignWorkers } from '../game_logic'

export const catalog:ContractCatalog = {
  'i\'m lovin\' it': {
    name: 'I\'m Lovin\' It',
    description: 'Build at least one drive thru restaurant',
    completed: false,
    check: function (state: GameState) {
      return state.map.tiles.findIndex(tile => tile.definition.name === 'drive thru') >= 0
    },
    reward: function (state: GameState) {
      state.player.resources.money.revenue += 1000
      state.player.victory.happiness += 8
    }
  },
  'green tourism': {
    name: 'Green Tourism',
    description: 'Build at least 1 park',
    completed: false,
    check: function (state: GameState) {
      return state.map.tiles.findIndex(tile => tile.definition.tags.includes('park')) >= 0
    },
    reward: function (state: GameState) {
      state.player.resources.money.revenue += 1000
      state.player.victory.happiness += 8
    }
  },
  'broken windows theory': {
    name: 'Broken Windows Theory',
    description: 'Improve each property at least once',
    completed: false,
    // TODO implement this check
    check: function (state: GameState) {
      return state.map.tiles.findIndex(tile => tile.definition.name === 'drive thru') >= 0
    },
    reward: function (state: GameState) {
      state.player.resources.money.revenue += 1000
      state.player.victory.happiness += 8
    }
  }
}
