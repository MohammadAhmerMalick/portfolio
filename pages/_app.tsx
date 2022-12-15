import Head from 'next/head'
import { AppProps } from 'next/app'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { capitalize } from '@/utils/utilFunctions'

import Aside from '@/components/aside/Aside'
import Header from '@/components/header/Header'
import RouteProgressBar from '@/components/common/loading/routeProgressBar/RouteProgressBar'

import '@/styles/globals.scss'

const metaUrl = 'http://www.mohammadahmermalick.com'
const metaImage = '/'
const metaDescription =
  'This is my portfolio website. Here you will find all my project and ways to contact me, Mohammad Ahmer Malick | mohammadahmermalick@gmail.com'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isSidePanelminimized, setIsSidePanelMinimized] = useState(true)

  useEffect(() => {
    setIsSidePanelMinimized(
      typeof window !== 'undefined' && window.screen.width <= 992
    )
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
      </Head>

      <Header
        isSidePanelminimized={isSidePanelminimized}
        setIsSidePanelMinimized={setIsSidePanelMinimized}
      />
      <Aside
        minimized={isSidePanelminimized}
        setMinimized={setIsSidePanelMinimized}
      />
      <RouteProgressBar minimizeSidepanel={setIsSidePanelMinimized} />
      <main className={classNames({ expended: isSidePanelminimized })}>
        <Component {...pageProps} />
        <div
          aria-hidden
          onClick={() => setIsSidePanelMinimized(true)}
          className={classNames('bodyOverlay', {
            expended: isSidePanelminimized,
          })}
        />
      </main>
    </>
  )
}
