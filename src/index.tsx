import { StrictMode } from 'react'
import ReactDom from 'react-dom'
import './App.css'
import { GameDisplay } from './components/GameDisplay'

ReactDom.render(
  <StrictMode>
    <GameDisplay />
  </StrictMode>, document.getElementById('app'))
