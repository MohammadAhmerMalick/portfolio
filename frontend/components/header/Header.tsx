'use client'

import { useContext } from 'react'
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import { usePathname } from 'next/navigation'

import { UiContext } from '@/context/uiContext'
import Button from '@/components/common/button/Button'

import S from './Header.module.scss'

const Header = () => {
  const pathname = usePathname()

  const {
    isSidePanelminimized,
    setIsSidePanelMinimized,
    setIsUserSwitchedSidePanel,
  } = useContext(UiContext)

  const handleSwitchPanel = () => {
    setIsUserSwitchedSidePanel(true)
    setIsSidePanelMinimized(!isSidePanelminimized)
  }

  return (
    <header className={S.header}>
      <h1 className={S.logo}>Mohammad Ahmer Malick</h1>
      <div className={S.left}>
        <div className={S.title}>
          <p className={S.text}>{pathname.split('/')[1] || 'home'}</p>
        </div>
        <Button className={S.menuButton} onClick={handleSwitchPanel}>
          <div className={S.buttonContent}>
            {isSidePanelminimized ? <FiMenu /> : <CgClose />}
            <span className={S.text}>Menu</span>
          </div>
        </Button>
      </div>
    </header>
  )
}

export default Header
