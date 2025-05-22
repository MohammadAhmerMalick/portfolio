import { type Metadata } from 'next'

import { metaTitle } from '@/constants'
import About from '@/components/sections/about/About'
import Contact from '@/components/sections/contact/Contact'

export const metadata: Metadata = {
  title: `Contact | ${metaTitle}`,
}

const ContactPage = () => {
  return (
    <>
      <About />
      <Contact />
    </>
  )
}

export default ContactPage
