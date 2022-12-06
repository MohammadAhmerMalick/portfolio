import classNames from 'classnames'
import { FC, MouseEventHandler, ReactNode } from 'react'

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
  className?: string
  ariaLabel?: string
  children: ReactNode
  type?: buttonType | undefined
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<Button> = ({
  type,
  form,
  small,
  title,
  shadow,
  onClick,
  children,
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
      className={classNames(
        S.button,
        { [S.small]: small },
        { [S.shadow]: shadow },
        className
      )}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  small: false,
  shadow: false,
  className: '',
  form: undefined,
  title: undefined,
  onClick: undefined,
  ariaLabel: undefined,
  type: buttonType.button,
}
export default Button
