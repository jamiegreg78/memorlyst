import { AppBar, Box, IconButton, Toolbar } from '@mui/material'

export default function ApplicationLayout({children}: {children: React.ReactNode}) {

  return (
    <Box
      sx={{width: 1, height: 1, flexGrow: 1}}
    >
      <AppBar position='static'> 
        <Toolbar>
          {/* <IconButton><MenuIcon size="large" edge="start" color="inherit" aria-label="navigation menu" sx={{mr: 2}}/></IconButton> */}
          <IconButton>test</IconButton>

        </Toolbar>
      </AppBar>

    </Box>
  )
}
