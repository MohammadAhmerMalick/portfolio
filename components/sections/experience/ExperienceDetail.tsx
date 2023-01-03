import { FC } from 'react'

import Card from '@/components/common/card/Card'

import S from './ExperienceDetail.module.scss'

interface ExperienceDetail {
  designation: string
  points: string[]
}

const ExperienceDetail: FC<ExperienceDetail> = ({ designation, points }) => {
  return (
    <Card className={S.experienceDetail}>
      <h4 className={S.designation}>{designation}</h4>

      <ul className={S.points}>
        {points.map((point) => (
          <li key={point} className={S.point}>
            {point}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default ExperienceDetail
