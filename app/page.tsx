'use client'

import About from '@/components/sections/about/About'
import Skills from '@/components/sections/skills/Skills'
import Contact from '@/components/sections/contact/Contact'
import Experience from '@/components/sections/experience/Experience'

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
