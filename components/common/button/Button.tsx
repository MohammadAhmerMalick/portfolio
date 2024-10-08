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
        { [S.small]: small },
        { [S.withIcon]: icon },
        { [S.shadow]: shadow },
        { [S.disabled]: disabled },
        className
      )}
    >
      {icon && <div className={S.iconContainer}>{icon}</div>}
      <span className={S.childrenContainer}>{children}</span>
    </button>
  )
}

Button.defaultProps = {
  small: false,
  shadow: false,
  className: '',
  icon: undefined,
  disabled: false,
  form: undefined,
  title: undefined,
  onClick: undefined,
  ariaLabel: undefined,
  type: buttonType.button,
}
export default Button
