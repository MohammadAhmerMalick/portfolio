import classNames from 'classnames'
import { FC, ReactNode } from 'react'

import S from './Button.module.scss'

export enum buttonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

interface Button {
  form?: string
  title?: string
  shadow?: boolean
  className?: string
  ariaLabel?: string
  children: ReactNode
  type?: buttonType | undefined
}

const Button: FC<Button> = ({
  type,
  form,
  title,
  shadow,
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
      className={classNames(S.button, { [S.shadow]: shadow }, className)}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  shadow: false,
  className: '',
  form: undefined,
  title: undefined,
  ariaLabel: undefined,
  type: buttonType.button,
}
export default Button
