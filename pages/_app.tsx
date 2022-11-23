import type { AppProps } from 'next/app'

import Header from '@/components/header/Header'
import Aside from '@/components/aside/Aside'

import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="bodyLayout">
        <Aside />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}
