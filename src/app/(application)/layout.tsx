import TopBar from '@/components/application/TopBar'
import NavDrawer from '@/components/general/NavDrawer'

export default function ApplicationLayout({children}: {children: React.ReactNode}) {

  return (
      <div id="application-container" className='w-full h-full flex'>
        <NavDrawer />
        <div className='flex flex-col h-full w-full'>
          <TopBar />
          <main className='grow h-full w-full p-md'>
            { children }
          </main>
        </div>
      </div>
  )
}
