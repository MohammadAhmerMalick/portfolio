import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import S from './RouteProgressBar.module.scss'

const RouteProgressBar = () => {
  const router = useRouter()

  const interval = useRef<NodeJS.Timer>()
  const [progress, setProgress] = useState<number>(0)
  const [isCompleted, setIsCompleted] = useState<boolean>(true) // is page loaded completely

  useEffect(() => {
    const handleRouteChange = () => setIsCompleted(false)
    const handleRouteChanged = () => setIsCompleted(true)

    router.events.on('routeChangeStart', handleRouteChange) // when page loading
    router.events.on('routeChangeComplete', handleRouteChanged) // when page loaded

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChanged)
    }
  }, [router.events])

  const handleProgress = () => {
    interval.current = setInterval(() => {
      setProgress((state) => {
        if (state > 99) {
          clearInterval(interval.current)
          return 99 // keep the progress at 99% when page taking too long to load
        }

        return state + 0.1
      })
    }, 10)
  }

  useEffect(() => {
    if (isCompleted) {
      clearInterval(interval.current)
      setProgress(100)
    } else {
      setProgress(0)
      handleProgress()
    }
  }, [isCompleted])

  return (
    <div
      className={S.routeProgressBar}
      style={{ width: `${progress}%`, opacity: isCompleted ? 0 : 1 }} // hide the progress bar when page loaded completely
    >
      <div className={S.bar} />
    </div>
  )
}

export default RouteProgressBar
