import Link from 'next/link'
import Image from 'next/image'

import Button from '@/components/common/button/Button'
import SectionContainer from '@/components/common/section/sectionContainer/SectionContainer'

import S from '@/styles/404.module.scss'

const Custom404 = () => {
  return (
    <SectionContainer className={S.custom404}>
      <Image
        width={700}
        height={500}
        className={S.image}
        src="/images/404.svg"
        alt="404 Page Not Found"
      />

      <Link href="/">
        <Button shadow>Go back to home page</Button>
      </Link>
    </SectionContainer>
  )
}

export default Custom404
