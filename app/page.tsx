import { type Metadata } from 'next'

import { metaTitle } from '@/constants'
import About from '@/components/sections/about/About'
import Skills from '@/components/sections/skills/Skills'
import Contact from '@/components/sections/contact/Contact'
import Experience from '@/components/sections/experience/Experience'

export const metadata: Metadata = {
  title: `Home | ${metaTitle}`,
}

const Home = () => {
  return (
    <>
      <About />
      <Contact />
      <Experience limit={2} collapsedTill={1} />
      <Skills />
    </>
  )
}

export default Home
