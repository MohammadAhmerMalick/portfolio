import { FC, MouseEventHandler, ReactNode } from 'react'

import { classNames } from '@/utils'

import S from './Button.module.scss'

export enum buttonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

interface Button {
  form?: string
  title?: string
  small?: boolean
  shadow?: boolean
  icon?: ReactNode
  disabled?: boolean
  className?: string
  ariaLabel?: string
  children: ReactNode
  type?: buttonType | undefined
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<Button> = ({
  type,
  icon,
  form,
  small,
  title,
  shadow,
  onClick,
  children,
  disabled,
  ariaLabel,
  className,
}) => {
  return (
    <button
      type={type}
      form={form}
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        S.button,
        small && [S.small],
        icon && [S.withIcon],
        shadow && [S.shadow],
        disabled && [S.disabled],
        className
      )}
    >
      {icon && <div className={S.iconContainer}>{icon}</div>}
      <span className={S.childrenContainer}>{children}</span>
    </button>
  )
}

export default Button
