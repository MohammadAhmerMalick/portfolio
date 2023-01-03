import About from '@/components/sections/about/About'
import Contact from '@/components/sections/contact/Contact'
import Experience from '@/components/sections/experience/Experience'
import Skills from '@/components/sections/skills/Skills'

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
