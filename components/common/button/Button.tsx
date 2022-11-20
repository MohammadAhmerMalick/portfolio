import classNames from 'classnames'
import { FC, ReactNode } from 'react'

import S from './Button.module.scss'

enum buttonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

interface Button {
  form?: string
  shadow?: boolean
  className?: string
  children: ReactNode
  type?: buttonType | undefined
}

const Button: FC<Button> = ({ children, type, form, className, shadow }) => {
  return (
    <button
      type={type}
      form={form}
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
  type: buttonType.button,
}
export default Button
