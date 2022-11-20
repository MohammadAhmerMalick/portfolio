import { useRouter } from 'next/router'

import Button from '@/components/common/button/Button'

import S from './Header.module.scss'

const Header = () => {
  const router = useRouter()

  console.log({ router })

  return (
    <header className={S.header}>
      <div className={S.logo}>Mohammad Ahmer Malick</div>
      <div className={S.left}>
        <div className={S.title}>
          <p className={S.text}>HOME</p>
        </div>
        <Button shadow>Contact</Button>
      </div>
    </header>
  )
}

export default Header
