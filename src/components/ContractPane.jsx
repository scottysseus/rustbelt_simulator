import React from 'react'

export const testContracts = [
  {
    name: 'Green tourism',
    description: 'Improve the town\'s wellness while also driving green tourism revenue by building more parks.',
    reward: '+10 happiness, +$10,000/turn',
    condition: 'build 3 parks',
    progress: '2/3'
  },
  {
    name: 'I\'m lovin\' it',
    description: 'Everyone loves the addictive flavor of fast food, but the poor nutrition has a cost to public health.',
    reward: '+18 happiness, -$20,000 per fast food restaurant at the end of the game',
    condition: 'build more fast food restaurants',
    progress: '-'
  }
]

export function ContractPane (props) {
  const contractRows = testContracts.map(contract => <tr key={contract.name} onClick={props.onContractClicked}><td>{contract.name}</td></tr>)
  return <table className='highlight'><tbody>{contractRows}</tbody></table>
}
