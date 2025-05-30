import { type Metadata } from 'next'
import { redirect } from 'next/navigation'

import { metaTitle } from '@/constants'

export const metadata: Metadata = {
  title: `Resume | ${metaTitle}`,
}

const Resume = () => {
  return redirect(
    'https://drive.google.com/file/d/1Z5aDJsvSm1HMUXWR-P-CheLRTDRrYCMu/view'
  )
}

export default Resume
