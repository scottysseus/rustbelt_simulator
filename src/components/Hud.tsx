import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Fab, Typography } from '@mui/material'
import { Tile } from '../game_logic'
import { ContractPane } from './ContractPane'
import { State, dispatcher } from './reducers'
import { TileSummary } from './hud/TileSummary'
import { PlayerSummaryPane } from './PlayerSummaryPane'
import NextPlanIcon from '@mui/icons-material/NextPlan'

export function Hud (props: {
  state: State,
  dispatch: dispatcher
}) {
  const nextTurn = () => {
    props.dispatch({ type: 'advanceTurn' })
  }

  let selectedTile: Tile | undefined
  if (props.state.ui.selectedTile !== undefined) {
    selectedTile = props.state.game.map.tiles[props.state.ui.selectedTile]
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
            <PlayerSummaryPane id='playerSummaryPane' playerState={props.state.game.player} />
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
        <TileSummary tile={selectedTile} dispatch={props.dispatch} />
      </div>
      <div className='bottom-hud-right'>
        <Fab variant='extended' size='large' color='secondary' aria-label='add' onClick={nextTurn}>
          <NextPlanIcon sx={{ mr: 1 }} /> Next Turn
        </Fab>
      </div>
    </>
  )
}
