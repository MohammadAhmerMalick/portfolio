import { type Metadata } from 'next'

import { metaTitle } from '@/constants'
import About from '@/components/sections/about/About'
import Skills from '@/components/sections/skills/Skills'
import Experience from '@/components/sections/experience/Experience'

export const metadata: Metadata = {
  title: `About | ${metaTitle}`,
}
const AboutPage = () => {
  return (
    <>
      <About />
      <Experience />
      <Skills />
    </>
  )
}

export default AboutPage
