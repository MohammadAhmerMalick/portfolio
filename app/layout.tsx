import type { Metadata } from 'next'
import '@/styles/global.scss'
import {
  metaUrl,
  metaTitle,
  metaCreator,
  metaFavicon,
  metaDescription,
} from '@/constants'

export const metadata: Metadata = {
  title: metaTitle,

  description: metaDescription,

  appleWebApp: {
    capable: true,
    title: metaTitle,
    statusBarStyle: 'default',
    startupImage: metaFavicon,
  },
  openGraph: {
    url: metaUrl,
    type: 'website',
    title: metaTitle,
    images: metaFavicon,
    description: metaDescription,
  },
  twitter: {
    site: metaUrl,
    card: 'summary',
    title: metaTitle,
    images: metaFavicon,
    creator: metaCreator,
    description: metaDescription,
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
