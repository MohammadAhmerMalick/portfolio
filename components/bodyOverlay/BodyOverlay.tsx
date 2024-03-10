import classNames from 'classnames'
import type { FC, Dispatch, SetStateAction } from 'react'

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
      className={classNames(S.bodyOverlay, {
        [S.isDrawn]: isDrawn,
        [S.initialState]: !isUserSwitchedSidePanel, // idea is to stop the transition for initial rendering to prevent layout shift
      })}
    />
  )
}

export default BodyOverlay
