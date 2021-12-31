import { Fade } from '@mui/material'
import { useState } from 'react'
import { GameDisplay } from './components/GameDisplay'
import { Menu } from './components/Menu'
import { GameIntro } from './components/GameIntro'

function App () {
  const [menuState, setMenuState] = useState('menu')

  const onStart = () => {
    setMenuState(() => 'intro')
  }

  const onContinue = () => {
    setMenuState(() => 'game')
  }

  // menu -> intro -> game

  return (
    <>
      <Fade unmountOnExit appear={false} in={menuState === 'menu'}>
        <Menu onStart={onStart} />
      </Fade>
      <Fade in={menuState === 'intro'}>
        <GameIntro onContinue={onContinue} />
      </Fade>
      <Fade in={menuState === 'game'}>
        <GameDisplay started={menuState === 'game'} />
      </Fade>
    </>
  )
}

export default App
