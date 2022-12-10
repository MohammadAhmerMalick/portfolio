import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction } from 'react'

import Button from '@/components/common/button/Button'
import MenuIcon from '@/components/common/icons/MenuIcon'
import CloseIcon from '@/components/common/icons/CloseIcon'

import S from './Header.module.scss'

interface Header {
  isSidePanelminimized: boolean
  setIsSidePanelMinimized: Dispatch<SetStateAction<boolean>>
}

const Header: FC<Header> = ({
  isSidePanelminimized,
  setIsSidePanelMinimized,
}) => {
  const router = useRouter()

  return (
    <header className={S.header}>
      <div className={S.logo}>Mohammad Ahmer Malick</div>
      <div className={S.left}>
        <div className={S.title}>
          <p className={S.text}>{router.pathname.split('/')[1] || 'home'}</p>
        </div>
        <Link href="/contact" className={S.link}>
          <Button shadow>Contact</Button>
        </Link>
      </div>
      <Button
        className={S.menuButton}
        onClick={() => setIsSidePanelMinimized(!isSidePanelminimized)}
      >
        {isSidePanelminimized ? <MenuIcon /> : <CloseIcon />}
      </Button>
    </header>
  )
}

export default Header
