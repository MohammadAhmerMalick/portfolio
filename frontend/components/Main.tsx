import { ToastContainer } from 'react-toastify'
import React, { useContext, useEffect } from 'react'

import { classNames } from '@/utils'
import { UiContext } from '@/context/uiContext'
import CursorPointer from '@/components/cursorPointer/CursorPointer'

const Main = ({ children }: { children: React.ReactNode }) => {
  const {
    isSidePanelminimized,
    isUserSwitchedSidePanel,
    setIsSidePanelMinimized,
  } = useContext(UiContext)

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
  }, [setIsSidePanelMinimized])

  return (
    <main
      className={classNames(
        isSidePanelminimized && 'expended',
        !isUserSwitchedSidePanel && 'mainInitialState' // idea is to stop the transition for initial rendering to prevent layout shift
      )}
    >
      {children}

      <ToastContainer />
      <CursorPointer />
    </main>
  )
}

export default Main
