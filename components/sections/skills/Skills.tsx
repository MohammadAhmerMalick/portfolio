import Image from 'next/image'
import { useState } from 'react'
import classNames from 'classnames'

import SkillTags, {
  SkillCategories,
} from '@/components/common/skillTags/SkillTags'
import Button from '@/components/common/button/Button'
import ColarPalette from '@/components/common/icons/ColarPalette'
import WebDevelopmentIcon from '@/components/common/icons/WebDevelopmentIcon'
import SectionHeading from '@/components/common/section/sectionHeading/SectionHeading'

import S from './Skills.module.scss'

const Skills = () => {
  const [category, setCategory] = useState<SkillCategories>(SkillCategories.web)

  return (
    <div className={S.skills}>
      <div className={S.categories}>
        <button
          onClick={() => setCategory(SkillCategories.web)}
          className={classNames(S.category, {
            [S.active]: category === SkillCategories.web,
          })}
        >
          <span className={S.icon}>
            <WebDevelopmentIcon />
          </span>
          <p className={S.title}>{SkillCategories.web}</p>
        </button>
        <button
          onClick={() => setCategory(SkillCategories.graphic)}
          className={classNames(S.category, {
            [S.active]: category === SkillCategories.graphic,
          })}
        >
          <span className={S.icon}>
            <ColarPalette />
          </span>
          <p className={S.title}>{SkillCategories.graphic}</p>
        </button>
      </div>

      <div className={S.block}>
        <div className={S.haad}>
          <Image
            width={440}
            height={293}
            alt={category}
            className={S.image}
            src={
              category === SkillCategories.web
                ? '/images/web-development.svg'
                : '/images/graphic-designing.svg'
            }
          />
          <SectionHeading
            secondary="Skills"
            primary="Web Development"
            className={S.sectionHeading}
            paragraph="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            repellendus expedita recusandae quam nam doloremque accusantium quod
            nostrum voluptates earum? Eius deleniti laudantium tenetur
            consequatur iusto quidem quos eaque corrupti."
          />
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          repellendus expedita recusandae quam nam doloremque accusantium quod
          nostrum voluptates earum? Eius deleniti laudantium tenetur consequatur
          iusto quidem quos eaque corrupti.
        </p>

        <SkillTags categories={[category]} />
        <Button small>Checkout {category} Projects</Button>
      </div>
    </div>
  )
}

export default Skills
