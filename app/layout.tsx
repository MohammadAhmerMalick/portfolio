import type { Metadata } from 'next'

import '@/styles/global.scss'

import { routes, metaTitle, metaCreator, metaDescription } from '@/constants'

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  metadataBase: new URL(routes.baseUrl || '/'),
  appleWebApp: {
    capable: true,
    title: metaTitle,
    statusBarStyle: 'default',
  },
  openGraph: {
    type: 'website',

    url: new URL(routes.baseUrl || '/'),
  },
  twitter: {
    card: 'summary',
    creator: metaCreator,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
