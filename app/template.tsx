import 'react-toastify/dist/ReactToastify.css'

import Main from '@/components/Main'
import Aside from '@/components/aside/Aside'
import Header from '@/components/header/Header'
import { UiProvider } from '@/context/uiContext'
import BodyOverlay from '@/components/bodyOverlay/BodyOverlay'

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="__next">
      <UiProvider>
        <Header />
        <Aside />
        <BodyOverlay />

        <Main>{children}</Main>
      </UiProvider>
    </div>
  )
}

export default Template
