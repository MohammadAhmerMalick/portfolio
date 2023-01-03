import { FC } from 'react'

import Card from '@/components/common/card/Card'

import S from './ExperienceDetail.module.scss'

interface ExperienceDetail {
  designation: string
}

const ExperienceDetail: FC<ExperienceDetail> = ({ designation }) => {
  return (
    <Card className={S.experienceDetail}>
      <h4 className={S.designation}>{designation}</h4>
      <div className={S.details}>
        <p className={S.detail}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text.F
        </p>
      </div>

      <ul className={S.points}>
        <li className={S.point}>Door portals plan</li>
        <li className={S.point}>Furniture specifications</li>
        <li className={S.point}>Interior design</li>
      </ul>
    </Card>
  )
}

export default ExperienceDetail
