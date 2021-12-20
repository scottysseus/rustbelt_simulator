import { Fade } from '@mui/material'
import { useState } from 'react'
import { GameDisplay } from './components/GameDisplay'
import { Menu } from './components/Menu'

function App () {
  const [inGame, setInGame] = useState(false)

  const onStart = () => {
    setInGame((prev) => !prev)
  }

  return (
    <>
      <Fade mountOnEnter unmountOnExit appear={false} in={!inGame}>
        <Menu onStart={onStart} />
      </Fade>
      <Fade mountOnEnter unmountOnExit in={inGame}>
        <GameDisplay />
      </Fade>
    </>
  )
}

export default App
