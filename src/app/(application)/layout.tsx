import TopBar from '@/components/application/TopBar'
import NavDrawer from '@/components/general/NavDrawer'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'

export default function ApplicationLayout({children}: {children: React.ReactNode}) {

  return (
    <div id="application-container" className='w-full h-full flex flex-col'>
      <TopBar />
      <div className='flex h-full w-full'>
        <NavDrawer />
        <main>
          { children }
        </main>
      </div>
    </div>
  )
}
