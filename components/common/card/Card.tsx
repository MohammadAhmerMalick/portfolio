import classNames from 'classnames'
import { FC, MouseEventHandler, ReactNode } from 'react'

import S from './Card.module.scss'

interface Card {
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

const Card: FC<Card> = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      aria-hidden={!!onClick}
      className={classNames(S.card, className)}
    >
      {children}
    </div>
  )
}
Card.defaultProps = {
  className: '',
  onClick: undefined,
}

export default Card
