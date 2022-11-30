import { FC } from 'react'

import S from './SectionHeading.module.scss'

interface SectionHeading1 {
  primary: string
  secondary?: string
  paragraph?: string
}

interface SectionHeading2 {
  primary?: string
  secondary: string
  paragraph?: string
}

const SectionHeading: FC<SectionHeading1 | SectionHeading2> = ({
  primary,
  secondary,
  paragraph,
}) => {
  return (
    <div className={S.sectionHeading}>
      <h1 className={S.heading}>
        <span className={S.primary}>{primary}</span>{' '}
        <span className={S.secondary}>{secondary}</span>
      </h1>
      <p className={S.paragraph}>{paragraph}</p>
    </div>
  )
}
SectionHeading.defaultProps = {}

export default SectionHeading
