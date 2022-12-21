import classNames from 'classnames'
import { FC, ReactNode } from 'react'

import S from './SectionContainer.module.scss'

interface SectionContainer {
  className?: string
  children: ReactNode
}

const SectionContainer: FC<SectionContainer> = ({ children, className }) => {
  return (
    <section className={S.sectionContainer}>
      <div className={classNames(S.sectionContent, className)}>{children}</div>
      <div className={S.bg} />
    </section>
  )
}

SectionContainer.defaultProps = {
  className: '',
}

export default SectionContainer
