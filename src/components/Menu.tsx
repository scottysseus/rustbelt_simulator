import { Button, Stack } from '@mui/material'

type MenuProps = {
  onStart: () => void
}

export function Menu (props: MenuProps) {
  return (
    <>
      Rustfield Revival
      <Stack spacing={2} className='menu-main-buttons'>
        <Button variant='contained' onClick={props.onStart}>Start</Button>
      </Stack>
    </>
  )
}
