'use client'

// import Head from 'next/head'
// import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ToastContainer } from 'react-toastify'

import Aside from '@/components/aside/Aside'
import Header from '@/components/header/Header'
import BodyOverlay from '@/components/bodyOverlay/BodyOverlay'
import CursorPointer from '@/components/cursorPointer/CursorPointer'
import RouteProgressBar from '@/components/common/loading/routeProgressBar/RouteProgressBar'

// import '@/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import { capitalize, classNames } from '@/utils'

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [isSidePanelminimized, setIsSidePanelMinimized] = useState(true)

  // idea is to stop the transition for initial rendering to prevent layout shift
  const [isUserSwitchedSidePanel, setIsUserSwitchedSidePanel] = useState(false)

  useEffect(() => {
    // monitor the initial state if sidepanel weather is open or not and updated the 'isSidePanelminimized' state accordingly
    const handleSidePanelInitialState = () => {
      setIsSidePanelMinimized(
        typeof window !== 'undefined' && window.document.body.clientWidth <= 992
      )
    }

    handleSidePanelInitialState()

    window.addEventListener('resize', handleSidePanelInitialState)
    return () => {
      window.removeEventListener('resize', handleSidePanelInitialState)
    }
  }, [])
  return (
    <div id="__next">
      <title>
        {capitalize(pathname.slice(1))
          ? `${capitalize(pathname.slice(1))} | Mohammad Ahmer Malick`
          : 'Mohammad Ahmer Malick'}
      </title>

      <ToastContainer />

      <CursorPointer />

      <Header
        isSidePanelminimized={isSidePanelminimized}
        setIsSidePanelMinimized={setIsSidePanelMinimized}
        setIsUserSwitchedSidePanel={setIsUserSwitchedSidePanel}
      />
      <Aside
        minimized={isSidePanelminimized}
        setMinimized={setIsSidePanelMinimized}
        isUserSwitchedSidePanel={isUserSwitchedSidePanel}
        setIsUserSwitchedSidePanel={setIsUserSwitchedSidePanel}
      />
      <BodyOverlay
        isDrawn={!isSidePanelminimized}
        onClick={setIsSidePanelMinimized}
        isUserSwitchedSidePanel={isUserSwitchedSidePanel}
      />
      <RouteProgressBar minimizeSidepanel={setIsSidePanelMinimized} />
      <main
        className={classNames(
          isSidePanelminimized && 'expended',
          !isUserSwitchedSidePanel && 'mainInitialState' // idea is to stop the transition for initial rendering to prevent layout shift
        )}
      >
        {/* <Component {...pageProps} /> */}
        {children}
      </main>
    </div>
  )
}

export default Template
