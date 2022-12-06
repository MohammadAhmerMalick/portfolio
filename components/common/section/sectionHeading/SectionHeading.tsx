import { FC } from 'react'
import classNames from 'classnames'

import S from './SectionHeading.module.scss'

interface SectionHeading {
  paragraph?: string
  className?: string
}

interface SectionHeading1 extends SectionHeading {
  primary: string
  secondary?: string
}

interface SectionHeading2 extends SectionHeading {
  primary?: string
  secondary: string
}

const SectionHeading: FC<SectionHeading1 | SectionHeading2> = ({
  primary,
  secondary,
  paragraph,
  className,
}) => {
  return (
    <div className={classNames(S.sectionHeading, className)}>
      <h1 className={S.heading}>
        <span className={S.primary}>{primary}</span>{' '}
        <span className={S.secondary}>{secondary}</span>
      </h1>
      <p className={S.paragraph}>{paragraph}</p>
    </div>
  )
}

export default SectionHeading
