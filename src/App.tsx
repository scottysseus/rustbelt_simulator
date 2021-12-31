import { Fade, Typography } from '@mui/material'
import { Suspense, useState } from 'react'
import { GameDisplay } from './components/GameDisplay'
import { Menu } from './components/Menu'
import { GameIntro } from './components/GameIntro'
import Background from './assets/images/menu-background.png'
import { useProgress } from '@react-three/drei'

function Loader () {
  const { loaded, total, progress } = useProgress()
  return (
    <Typography className='loader'>
      Loading... {progress}% - {total - loaded} items remain
    </Typography>
  )
}

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
        <div style={{ backgroundImage: `url(${Background})` }} className='menu-main'>
          <Menu onStart={onStart} />
        </div>
      </Fade>
      <Fade in={menuState === 'intro'}>
        <div className='menu-intro'>
          <GameIntro onContinue={onContinue} />
        </div>
      </Fade>
      <Fade in={menuState === 'game'}>
        <div className='container'>
          <Suspense fallback={<Loader />}>
            <GameDisplay started={menuState === 'game'} />
          </Suspense>
        </div>
      </Fade>
    </>
  )
}

export default App
