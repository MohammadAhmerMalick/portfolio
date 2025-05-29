'use client'

import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'

import { classNames } from '@/utils'
import { UiContext } from '@/context/uiContext'
import CursorPointer from '@/components/cursorPointer/CursorPointer'

const Main = ({ children }: { children: React.ReactNode }) => {
  const { isSidePanelminimized, isUserSwitchedSidePanel } =
    useContext(UiContext)

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
