import type { Metadata } from 'next'
import '@/styles/global.scss'

const metaTitle = 'Mohammad Ahmer Malick'
const metaCreator = 'Mohammad Ahmer Malick'
const metaFavicon = '/icon?<generated>'
const metaUrl = 'https://www.mohammadahmermalick.com'
const metaDescription =
  'This is my portfolio website. Here you will find all my project and ways to contact me, Mohammad Ahmer Malick | mohammadahmermalick@gmail.com'

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
    title: metaTitle,
    images: metaFavicon,
    description: metaDescription,
    url: metaUrl,
    type: 'website',
  },
  twitter: {
    title: metaTitle,
    images: metaFavicon,
    creator: metaCreator,
    site: metaUrl,
    card: 'summary',

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
