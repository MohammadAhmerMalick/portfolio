'use client'

import { createContext, ReactNode, useState } from 'react'

const defaultState = {
  isSidePanelminimized: true,
  isUserSwitchedSidePanel: true,
  setIsSidePanelMinimized: (value: boolean) => {},
  setIsUserSwitchedSidePanel: (value: boolean) => {},
}

export const UiContext = createContext(defaultState)

export const UiProvider = ({ children }: { children: ReactNode }) => {
  const [isSidePanelminimized, setIsSidePanelMinimized] = useState(false)
  const [isUserSwitchedSidePanel, setIsUserSwitchedSidePanel] = useState(false)

  return (
    <UiContext.Provider
      value={{
        isSidePanelminimized,
        isUserSwitchedSidePanel,
        setIsSidePanelMinimized,
        setIsUserSwitchedSidePanel,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}
