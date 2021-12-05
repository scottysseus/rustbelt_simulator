import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './App.css'
import { playGameLogic } from './play_game_logic'

ReactDom.render(<App />, document.getElementById('app'))

playGameLogic()
