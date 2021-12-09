import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { ContractPane } from './ContractPane'
import { PlayerSummaryPane } from './PlayerSummaryPane'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export function HUD (props) {
  return (
    <div className='hud' onClick={() => console.log('accordion1 clicked')}>
      <Accordion defaultExpanded className='hud-pane-expander' onClick={() => console.log('accordion1 clicked')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          onClick={() => console.log('accordion1 summary clicked')}
        >
          <Typography variant='h6'>Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PlayerSummaryPane />
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
  )
}
