import { GameViewPort } from './components/view/GameViewPort'

function App () {
  return (
    <>
      <h2 className='title'>Rustfield Revival</h2>
      <div className='viewport-section'>
        <div className='viewport-center'>
          <GameViewPort />
        </div>
      </div>
    </>
  )
}

export default App
