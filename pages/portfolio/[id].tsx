import { FC } from 'react'
import { GetServerSideProps } from 'next'

import Contact from '@/components/sections/contact/Contact'
import SectionHeading from '@/components/common/section/sectionHeading/SectionHeading'
import SectionContainer from '@/components/common/section/sectionContainer/SectionContainer'

interface SinglePortfolio {
  id: string
}

const SinglePortfolio: FC<SinglePortfolio> = ({ id }) => {
  return (
    <>
      <SectionContainer>
        <SectionHeading
          primary="Bizzworld Communications"
          paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis tempora similique voluptate nesciunt excepturi ipsam debitis doloremque ab odit maiores."
        />
        <article>{id}</article>
      </SectionContainer>

      <Contact />
    </>
  )
}

export default SinglePortfolio

export const getServerSideProps: GetServerSideProps = async ({ params }) => ({
  props: { id: params?.id },
})
