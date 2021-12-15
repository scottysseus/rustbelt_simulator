import { Button, Stack } from '@mui/material'
import React from 'react'

export const Menu = React.forwardRef((props, ref) => {
  return (
    <div style={props.style} ref={ref} className='menu-main'>
      <Stack spacing={2} className='menu-main-contents'>
        Rustfield Revival
        <Button variant='contained' onClick={props.onStart}>Start</Button>
        <Button variant='contained'>Credits</Button>
      </Stack>
    </div>
  )
})
