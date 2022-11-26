import Link from 'next/link'
import Image from 'next/image'

import Button from '@/components/common/button/Button'

import S from '@/styles/404.module.scss'

const Custom404 = () => {
  return (
    <div className={S.custom404}>
      <Image
        src="/images/404.svg"
        alt="404 Page Not Found"
        width={700}
        height={500}
      />

      <Link href="/">
        <Button shadow>Go back to home page</Button>
      </Link>
    </div>
  )
}

export default Custom404
