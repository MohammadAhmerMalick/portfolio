import type { FC, Dispatch, SetStateAction } from 'react'

import { classNames } from '@/utils'

import S from './BodyOverlay.module.scss'

interface BodyOverlay {
  isDrawn: boolean
  isUserSwitchedSidePanel: boolean
  onClick: Dispatch<SetStateAction<boolean>>
}
const BodyOverlay: FC<BodyOverlay> = ({
  isDrawn,
  isUserSwitchedSidePanel,
  onClick,
}) => {
  return (
    <div
      aria-hidden
      onClick={() => onClick(true)}
      className={classNames(
        S.bodyOverlay,
        isDrawn && [S.isDrawn],
        !isUserSwitchedSidePanel && [S.initialState] // idea is to stop the transition for initial rendering to prevent layout shift
      )}
    />
  )
}

export default BodyOverlay
