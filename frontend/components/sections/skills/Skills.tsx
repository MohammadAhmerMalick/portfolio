'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { VscSymbolColor } from 'react-icons/vsc'

import SkillTags, {
  SkillCategories,
} from '@/components/common/skillTags/SkillTags'
import { classNames } from '@/utils'
import SectionHeading from '@/components/common/section/sectionHeading/SectionHeading'
import SectionContainer from '@/components/common/section/sectionContainer/SectionContainer'

import S from './Skills.module.scss'

const Skills = () => {
  const [category, setCategory] = useState<SkillCategories>(SkillCategories.web)

  return (
    <div className={S.skills}>
      <div className={S.categories}>
        <button
          onClick={() => setCategory(SkillCategories.web)}
          className={classNames(
            S.category,
            category === SkillCategories.web && [S.active]
          )}
        >
          <span className={S.icon}>
            <BsCodeSlash />
          </span>
          <p className={S.title}>{SkillCategories.web}</p>
        </button>
        <button
          onClick={() => setCategory(SkillCategories.graphic)}
          className={classNames(
            S.category,
            category === SkillCategories.graphic && [S.active]
          )}
        >
          <span className={S.icon}>
            <VscSymbolColor />
          </span>
          <p className={S.title}>{SkillCategories.graphic}</p>
        </button>
      </div>

      <SectionContainer className={S.block}>
        <div className={S.head}>
          <Image
            width={440}
            height={316}
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
            primary={
              category === SkillCategories.web
                ? 'Web Development'
                : 'Graphic Designer'
            }
            className={S.sectionHeading}
            fullWidthPara
            paragraph="
            As a graphic designer, I always had a passion for creating visually stunning designs that effectively communicated a message. However, I delved deeper into the world of design and became increasingly interested in the technical side of things. I wanted to be able to not just create the design, but also bring it to life on the web.
            So, I decided to make the transition from graphic design to web development and taught myself the necessary skills, such as HTML, CSS, and JavaScript, and began building websites from scratch.
            Now, as a web developer, I am able to combine my creative eye with technical proficiency to build websites that are not only visually appealing, but also functional and user-friendly. I constantly learning and staying up-to-date on the latest graphic skills along with web development technologies."
          />
        </div>

        <SkillTags categories={[category]} />
      </SectionContainer>
    </div>
  )
}

export default Skills
