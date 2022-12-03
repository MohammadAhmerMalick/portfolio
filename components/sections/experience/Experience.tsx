import classNames from 'classnames'
import { useEffect, useState } from 'react'

import { uuid } from '@/utils/utilFunctions'

import Card from '@/components/common/card/Card'
import Button from '@/components/common/button/Button'
import AddIcon from '@/components/common/icons/AddIcon'
import SubtractIcon from '@/components/common/icons/SubtractIcon'
import BriefcaseIcon from '@/components/common/icons/BriefcaseIcon'
import SectionHeading from '@/components/common/section/sectionHeading/SectionHeading'
import SectionContainer from '@/components/common/section/sectionContainer/SectionContainer'

import S from './Experience.module.scss'

const Epx1Details = () => {
  return (
    <>
      <h4 className={S.designation}>COMPLETE THE PROJECT DOMIK</h4>
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

      <Button small className={S.button}>
        Details
      </Button>
    </>
  )
}

const data = [
  {
    company: 'Denovers',
    period: 'December 2021 - December 2022',
    designation: 'Full Stack Developer',
    description: <Epx1Details />,
  },
  {
    company: 'Paz Technologies',
    period: 'August 2021 - November 2021',
    designation: 'Web Developer',
    description: <Epx1Details />,
  },
  {
    company: 'Phoenix Technologies',
    period: 'May 2021 - August 2021',
    designation: 'Front End Developer',
    description: <Epx1Details />,
  },
  {
    company: 'Bizz World Communications',
    period: 'January 2020 - January 2021',
    designation: 'Web Developer',
    description: <Epx1Details />,
  },
  {
    company: 'Bizz World Communications',
    period: 'August 2019 - November 2019',
    designation: 'Junior Developer',
    description: <Epx1Details />,
  },
]

const Experience = () => {
  const [collapsed, setCollapsed] = useState<boolean[]>([])

  const handleToggle = (index: number) =>
    setCollapsed(collapsed.map((v, i) => (i === index ? !v : v)))

  useEffect(() => setCollapsed(data.map((_, index) => index > 1)), [])

  return (
    <SectionContainer>
      <SectionHeading
        primary="My Working"
        secondary="Experience"
        paragraph="A Computer Scientist, specialize in websites and web applications development, having experience in frontend, backend and graphic related work"
      />

      <div className={S.experience}>
        {data.map((exp, index) => (
          <div
            key={uuid()}
            className={classNames(S.block, { [S.collapsed]: collapsed[index] })}
          >
            <div className={S.togglerContainer}>
              <button className={S.toggler} onClick={() => handleToggle(index)}>
                <div className={S.icon}>
                  {collapsed[index] ? <AddIcon /> : <SubtractIcon />}
                </div>
              </button>
            </div>
            <div className={S.companyTitleContainer}>
              <Card
                onClick={() => handleToggle(index)}
                className={classNames(S.companyTitle, {
                  [S.expended]: !collapsed[index],
                })}
              >
                <div className={S.icon}>
                  <BriefcaseIcon />
                </div>
                <h3 className={S.company}>{exp.company}</h3>
                <p className={S.period}>{exp.period}</p>
              </Card>
              <div
                className={classNames(S.count, {
                  [S.collapsed]: collapsed[index],
                })}
              >
                0{index + 1}.
              </div>
            </div>
            <Card className={S.companyDetails}>
              {exp.description}
              {collapsed[index] && <div className={S.overlay} />}
            </Card>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Experience
