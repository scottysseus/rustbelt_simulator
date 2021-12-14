import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { ContractPane } from './ContractPane'
import { PlayerSummaryPane } from './PlayerSummaryPane'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export function Hud () {
  return (
    <div className='hud'>
      <Accordion defaultExpanded className='hud-pane-expander'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
