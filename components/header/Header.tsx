import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction } from 'react'

import Button from '@/components/common/button/Button'
import MenuIcon from '@/components/common/icons/MenuIcon'
import CloseIcon from '@/components/common/icons/CloseIcon'

import S from './Header.module.scss'

interface Header {
  isSidePanelminimized: boolean
  setIsSidePanelMinimized: Dispatch<SetStateAction<boolean>>
  setIsUserSwitchedSidePanel: Dispatch<SetStateAction<boolean>>
}

const Header: FC<Header> = ({
  isSidePanelminimized,
  setIsSidePanelMinimized,
  setIsUserSwitchedSidePanel,
}) => {
  const router = useRouter()

  const handleSwitchPanel = () => {
    setIsSidePanelMinimized(!isSidePanelminimized)
    setIsUserSwitchedSidePanel(true)
  }

  return (
    <header className={S.header}>
      <h1 className={S.logo}>Mohammad Ahmer Malick</h1>
      <div className={S.left}>
        <div className={S.title}>
          <p className={S.text}>{router.pathname.split('/')[1] || 'home'}</p>
        </div>
        <Button className={S.menuButton} onClick={handleSwitchPanel}>
          <div className={S.buttonContent}>
            {isSidePanelminimized ? <MenuIcon /> : <CloseIcon />}
            <span className={S.text}>Menu</span>
          </div>
        </Button>
      </div>
    </header>
  )
}

export default Header
