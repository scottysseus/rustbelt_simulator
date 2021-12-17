import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Fab, Typography } from '@mui/material'
import { GameState, Tile } from '../game_logic'
import { ContractPane } from './ContractPane'
import { UiState, gameDispatcher, uiDispatcher } from './reducers'
import { TileSummary } from './hud/TileSummary'
import { PlayerSummaryPane } from './PlayerSummaryPane'
import NextPlanIcon from '@mui/icons-material/NextPlan'

export function Hud (props: {
  gameState: GameState,
  uiState: UiState,
  dispatchGame: gameDispatcher,
  dispatchUi: uiDispatcher
}) {
  const nextTurn = () => {
    props.dispatchGame({ type: 'advanceTurn' })
  }

  let selectedTile: Tile | undefined
  if (props.uiState.selectedTile !== undefined) {
    selectedTile = props.gameState.map.tiles[props.uiState.selectedTile]
  }

  return (
    <>
      <div className='hud'>
        <Accordion defaultExpanded className='hud-pane-expander'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant='h6'>Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PlayerSummaryPane id='playerSummaryPane' playerState={props.gameState.player} />
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded className='hud-pane-expander'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h6'>Contracts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ContractPane />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='bottom-hud'>
        <TileSummary tile={selectedTile} dispatchGame={props.dispatchGame} dispatchUi={props.dispatchUi} />
      </div>
      <div className='bottom-hud-right'>
        <Fab variant='extended' size='large' color='secondary' aria-label='add' onClick={nextTurn}>
          <NextPlanIcon sx={{ mr: 1 }} /> Next Turn
        </Fab>
      </div>
    </>
  )
}
