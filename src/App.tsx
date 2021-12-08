import { GameViewPort } from './components/view/GameViewPort'

function App () {
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <GameViewPort />
    </div>
  )
}

export default App
