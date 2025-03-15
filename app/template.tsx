'use client'

import { usePathname } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'

import Aside from '@/components/aside/Aside'
import Header from '@/components/header/Header'
import BodyOverlay from '@/components/bodyOverlay/BodyOverlay'

import { capitalize } from '@/utils'
import Main from '@/components/Main'
import { UiProvider } from '@/context/uiContext'

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <div id="__next">
      <UiProvider>
        <title>
          {capitalize(pathname.slice(1))
            ? `${capitalize(pathname.slice(1))} | Mohammad Ahmer Malick`
            : 'Mohammad Ahmer Malick'}
        </title>

        <Header />
        <Aside />
        <BodyOverlay />

        <Main>{children}</Main>
      </UiProvider>
    </div>
  )
}

export default Template
