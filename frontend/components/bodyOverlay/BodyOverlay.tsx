'use client'

import { useContext } from 'react'

import { classNames } from '@/utils'
import { UiContext } from '@/context/uiContext'

import S from './BodyOverlay.module.scss'

const BodyOverlay = () => {
  const {
    isUserSwitchedSidePanel,
    isSidePanelminimized: minimized,
    setIsSidePanelMinimized: setMinimized,
  } = useContext(UiContext)

  const open = () => {
    setMinimized(true)
  }

  return (
    <div
      aria-hidden
      onClick={open}
      className={classNames(
        S.bodyOverlay,
        !minimized && [S.isDrawn],
        !isUserSwitchedSidePanel && [S.initialState] // idea is to stop the transition for initial rendering to prevent layout shift
      )}
    />
  )
}

export default BodyOverlay
