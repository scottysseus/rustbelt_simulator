import { Fade } from '@mui/material'
import { useState } from 'react'
import { GameDisplay } from './components/GameDisplay'
import { Menu } from './components/Menu'

function App () {
  const [inGame, setInGame] = useState(false)

  const onStart = () => {
    setInGame(() => true)
  }

  return (
    <>
      <Fade unmountOnExit appear={false} in={!inGame}>
        <Menu onStart={onStart} />
      </Fade>
      <Fade in={inGame}>
        <GameDisplay started={inGame} />
      </Fade>
    </>
  )
}

export default App
