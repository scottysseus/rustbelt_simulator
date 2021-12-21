import { Button, Stack } from '@mui/material'
import { CSSProperties, forwardRef } from 'react'

type MenuProps = {
  style?: CSSProperties // applied by transition
  onStart: () => void
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return (
    <div style={props.style} ref={ref} className='menu-main'>
      Rustfield Revival
      <Stack spacing={2} className='menu-main-buttons'>
        <Button variant='contained' onClick={props.onStart}>Start</Button>
        <Button variant='contained'>Credits</Button>
      </Stack>
    </div>
  )
})
