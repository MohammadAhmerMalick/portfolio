import Link from 'next/link'
import classNames from 'classnames'
import { FC, Fragment, useCallback, useEffect, useState } from 'react'

import { SectionIds } from '@/utils/enums'

import Card from '@/components/common/card/Card'
import Button from '@/components/common/button/Button'
import AddIcon from '@/components/common/icons/AddIcon'
import SubtractIcon from '@/components/common/icons/SubtractIcon'
import BriefcaseIcon from '@/components/common/icons/BriefcaseIcon'
import ExperienceDetail from '@/components/sections/experience/ExperienceDetail'
import SectionHeading from '@/components/common/section/sectionHeading/SectionHeading'
import SectionContainer from '@/components/common/section/sectionContainer/SectionContainer'

import S from './Experience.module.scss'

const data = [
  {
    id: 'exp-1',
    company: 'Denovers',
    period: 'Dec 2021 - Dec 2022',
    designation: 'Full Stack Developer',
    points: [
      'Collaborate with the team and international clients to produce a variety of concepts.',
      'Attend to multiple projects while prioritizing and meeting tight deadlines.',
      'Design SAAP applications on the latest technologies like Next.js, Nest.js and tailwind.',
      'Design a website with a component-based approach while maintaining responsiveness, SEO, and speed optimization on the website.',
      'Convert Figma to Next.js or Nest.js SAAP application.',
      'Debug and refactor existing applications with the latest technologies.',
    ],
  },
  {
    id: 'exp-2',
    company: 'Phoenix Technologies',
    period: 'May 2021 - Nov 2021',
    designation: 'Frontend Developer',
    points: [
      'Convert Figma designs or PSD designs into fully functioning React or vanilla javascript applications and websites.',
      'Third-party API integration into existing applications. Created SVG micro animation for websites.',
      'Lottie animation with Adobe Premiere Pro.',
      'Add on-page SEO optimization.',
      'Manage clients’ NameCheap accounts including domain, hosting and email hosting.',
    ],
  },
  {
    id: 'exp-3',
    company: 'Bizz World Communications',
    period: 'Aug 2019 - Jan 2021',
    designation: 'Full Stack Developer',
    points: [
      'E-commerce WordPress Development.',
      'WordPress theme customization.',
      'PSD to WordPress website using DIVI theme builder.',
      'Website Backup, Cloning & Migration from Cpanel.',
      'Landing page design using HTML, SCSS, jQuery, Photoshop & PHP',
      'Implemented cross-browser compatibility in websites and applications.',
      'Implement web optimization using google lighthouse and  e3c coding standards.',
      'I developed an application to automate mass emailing through Sendgrid.',
      'Create dynamic and responsive email templates.',
      'Manage website and email hosting and domain.',
      'Manage email assets and keep records.',
    ],
  },
]

interface Experience {
  limit?: number
  collapsedTill?: number
}

const Experience: FC<Experience> = ({ limit, collapsedTill }) => {
  const [collapsed, setCollapsed] = useState<boolean[]>(
    data.map((_, index) => index >= (collapsedTill || 2))
  )

  const adjustHeight = (id: string, isCollapsed: boolean) => {
    const exp = document.getElementById(id)
    const child = exp?.children[0]
    const height = child?.clientHeight

    if (exp && child && height) {
      if (isCollapsed) {
        exp.classList.add(S.collapsed)
        exp.removeAttribute('style')
      } else {
        exp.classList.remove(S.collapsed)
        exp.style.maxHeight = `${height + 50}px`
      }
    }
  }

  const handleToggle = (index: number, id: string) => {
    setCollapsed(
      collapsed.map((isCollapsed, i) => {
        if (i === index) {
          adjustHeight(id, !isCollapsed)
          return !isCollapsed
        }
        return isCollapsed
      })
    )
  }

  const adjustAllHeight = useCallback(() => {
    data.forEach(({ id }, i) => adjustHeight(id, collapsed[i]))
  }, [collapsed])

  useEffect(() => {
    adjustAllHeight()
    window.addEventListener('resize', adjustAllHeight)
    return () => {
      window.removeEventListener('resize', adjustAllHeight)
    }
  }, [adjustAllHeight])

  return (
    <SectionContainer id={SectionIds.Experience}>
      <SectionHeading
        primary="My Working"
        secondary="Experience"
        paragraph="A Computer Scientist, specialize in websites and web applications development, having experience in frontend, backend and graphic related work"
      />

      <div className={S.experience}>
        {data.map(({ id, company, period, designation, points }, index) => (
          <Fragment key={id}>
            {(limit || 100) > index && (
              <div className={S.block}>
                <div className={S.togglerContainer}>
                  <button
                    className={S.toggler}
                    onClick={() => handleToggle(index, id)}
                  >
                    <div className={S.icon}>
                      {collapsed[index] ? <AddIcon /> : <SubtractIcon />}
                    </div>
                  </button>
                </div>
                <div className={S.companyTitleContainer}>
                  <Card
                    onClick={() => handleToggle(index, id)}
                    className={classNames(S.companyTitle, {
                      [S.expended]: !collapsed[index],
                    })}
                  >
                    <div className={S.icon}>
                      <BriefcaseIcon />
                    </div>
                    <h3 className={S.company}>{company}</h3>
                    <p className={S.period}>{period}</p>
                  </Card>
                  <div
                    className={classNames(S.count, {
                      [S.collapsed]: collapsed[index],
                    })}
                  >
                    <p className={S.text}>{`0${index + 1}.`}</p>
                  </div>
                </div>
                <div className={S.companyDetails} id={id}>
                  <ExperienceDetail designation={designation} points={points} />
                  <div
                    className={classNames(S.overlay, {
                      [S.collapsed]: collapsed[index],
                    })}
                  />
                </div>
              </div>
            )}
          </Fragment>
        ))}

        {!!limit && (
          <Link
            href={`/about#${SectionIds.Experience}`}
            className={S.seeAllLink}
          >
            <Button className={S.button} small shadow>
              Sell All
            </Button>
          </Link>
        )}
      </div>
    </SectionContainer>
  )
}

Experience.defaultProps = {
  limit: 0,
  collapsedTill: 2,
}

export default Experience
