import Head from 'next/head'
import { AppProps } from 'next/app'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { capitalize } from '@/utils/utilFunctions'

import Aside from '@/components/aside/Aside'
import Header from '@/components/header/Header'
import BodyOverlay from '@/components/bodyOverlay/BodyOverlay'
import CursorPointer from 'app/components/cursorPointer/CursorPointer'
import RouteProgressBar from '@/components/common/loading/routeProgressBar/RouteProgressBar'

import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

const metaUrl = 'https://www.mohammadahmermalick.com'
const metaImage = '/'
const metaDescription =
  'This is my portfolio website. Here you will find all my project and ways to contact me, Mohammad Ahmer Malick | mohammadahmermalick@gmail.com'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isSidePanelminimized, setIsSidePanelMinimized] = useState(true)

  // idea is to stop the transition for initial rendering to prevent layout shift
  const [isUserSwitchedSidePanel, setIsUserSwitchedSidePanel] = useState(false)

  useEffect(() => {
    // monitor the initial state if sidepanel weather is open or not and updated the 'isSidePanelminimized' state accordingly
    const handleSidePanelInitialState = () => {
      setIsSidePanelMinimized(
        typeof window !== 'undefined' && window.document.body.clientWidth <= 992
      )
    }

    handleSidePanelInitialState()

    window.addEventListener('resize', handleSidePanelInitialState)
    return () => {
      window.removeEventListener('resize', handleSidePanelInitialState)
    }
  }, [])

  return (
    <>
      <Head>
        <title>
          {capitalize(router.asPath.slice(1))
            ? `${capitalize(router.asPath.slice(1))} | Mohammad Ahmer Malick`
            : 'Mohammad Ahmer Malick'}
        </title>

        <meta charSet="UTF-8" />
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="Portfolio, mohammadahmermalick@gmail.com, mohammadahmermalick"
        />
        <meta name="author" content="Mohammad Ahmer Malick" />

        {/* SOCIAL CARDS */}
        {/* Open Graph / Facebook: this is what Facebook and other social websites will draw on */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:title" content="Mohammad Ahmer Malick" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />

        {/* Twitter: You can have different summary for Twitter! */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaUrl} />
        <meta property="twitter:title" content="Mohammad Ahmer Malick" />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={metaImage} />

        <link rel="shortcut icon" href="./favicon.svg" type="image/x-icon" />
      </Head>

      <ToastContainer />

      <CursorPointer />

      <Header
        isSidePanelminimized={isSidePanelminimized}
        setIsSidePanelMinimized={setIsSidePanelMinimized}
        setIsUserSwitchedSidePanel={setIsUserSwitchedSidePanel}
      />
      <Aside
        minimized={isSidePanelminimized}
        setMinimized={setIsSidePanelMinimized}
        isUserSwitchedSidePanel={isUserSwitchedSidePanel}
        setIsUserSwitchedSidePanel={setIsUserSwitchedSidePanel}
      />
      <BodyOverlay
        isDrawn={!isSidePanelminimized}
        onClick={setIsSidePanelMinimized}
        isUserSwitchedSidePanel={isUserSwitchedSidePanel}
      />
      <RouteProgressBar minimizeSidepanel={setIsSidePanelMinimized} />
      <main
        className={classNames({
          expended: isSidePanelminimized,
          mainInitialState: !isUserSwitchedSidePanel, // idea is to stop the transition for initial rendering to prevent layout shift
        })}
      >
        <Component {...pageProps} />
      </main>
    </>
  )
}
