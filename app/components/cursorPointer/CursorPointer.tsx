import { useEffect, useRef } from 'react'

import S from './CursorPointer.module.scss'

const CursorPointer = () => {
  const CORSOR_POINTER = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event

      CORSOR_POINTER?.current?.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 1000, fill: 'forwards' }
      )
    }
  }, [])

  return (
    <div className={S.cursorPointer} ref={CORSOR_POINTER}>
      <span className={S.point} />
    </div>
  )
}

export default CursorPointer
