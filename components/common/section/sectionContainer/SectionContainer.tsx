import classNames from 'classnames'
import { FC, ReactNode } from 'react'

import S from './SectionContainer.module.scss'

interface SectionContainer {
  id?: string
  className?: string
  children: ReactNode
}

const SectionContainer: FC<SectionContainer> = ({
  id,
  children,
  className,
}) => {
  return (
    <section className={S.sectionContainer} id={id}>
      <div className={classNames(S.sectionContent, className)}>{children}</div>
      <div className={S.bg} />
    </section>
  )
}

SectionContainer.defaultProps = {
  className: '',
  id: undefined,
}

export default SectionContainer
