import { FC, MouseEventHandler, ReactNode } from 'react'

import { classNames } from '@/utils'

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

export default Card
