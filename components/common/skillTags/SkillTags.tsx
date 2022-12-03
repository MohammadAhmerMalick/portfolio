import { FC } from 'react'

import { uuid } from '@/utils/utilFunctions'

import S from './SkillTags.module.scss'

export enum SkillCategories {
  web = 'Web Development',
  graphic = 'Graphic Designing',
  extra = 'Extra Skills',
}

interface o {
  name: string
  link: string
}

interface x {
  [SkillCategories.web]: o[]
  [SkillCategories.graphic]: o[]
  [SkillCategories.extra]: o[]
}

const skillList: x = {
  [SkillCategories.web]: [
    { name: 'HTML', link: '/images/html.svg' },
    { name: 'CSS', link: '/images/css.svg' },
    { name: 'SASS', link: '/images/sass.svg' },
    { name: 'Bootstrap', link: '/images/bootstrap.svg' },
    { name: 'SVG Animation', link: '/images/svg.svg' },
    { name: 'JavaScript', link: '/images/javascript.svg' },
    { name: 'React.JS', link: '/images/react-js.svg' },
    { name: 'Node.JS', link: '/images/node-js.svg' },
    { name: 'Next.JS', link: '/images/next-js.svg' },
    { name: 'API', link: '/images/api.svg' },
    { name: 'jQuery', link: '/images/jquery.svg' },
    { name: 'WordPress', link: '/images/wordpress.svg' },
    { name: 'Email Templates', link: '/images/email.svg' },
    { name: 'SendGrid', link: '/images/sendgrid.svg' },
    { name: 'PHP', link: '/images/php.svg' },
    { name: 'MongoDB', link: '/images/mongodb.svg' },
    { name: 'MYSQL', link: '/images/mysql.svg' },
    { name: 'GitHub', link: '/images/github.svg' },
    { name: 'CPanel', link: '/images/cpanel.svg' },
  ],
  [SkillCategories.graphic]: [
    { name: 'Photoshop', link: '/images/adobe-photoshop.svg' },
    { name: 'Figma', link: '/images/figma.svg' },
    { name: 'Illustrator', link: '/images/adobe-illustrator.svg' },
    { name: 'Filmora', link: '/images/filmora.svg' },
    { name: 'Sony Vegas', link: '/images/sony-vegas.svg' },
    { name: 'Blender', link: '/images/blender.svg' },
  ],
  [SkillCategories.extra]: [
    { name: 'MS Word', link: '/images/word.svg' },
    { name: 'MS Excel', link: '/images/excel.svg' },
    { name: 'MS Powerpoint', link: '/images/powerpoint.svg' },
  ],
}

interface SkillTags {
  includes?: SkillCategories[]
}

const SkillTags: FC<SkillTags> = ({ includes }) => {
  return (
    <div className={S.skillTags}>
      {!!includes?.length &&
        includes.map((key) =>
          skillList[key].map((tag) => (
            <div key={uuid()} className={S.tag}>
              <div className={S.iconContainer}>
                <img
                  width={50}
                  height={50}
                  src={tag.link}
                  alt={tag.name}
                  className={S.icon}
                />
              </div>
              <span>{tag.name}</span>
            </div>
          ))
        )}
    </div>
  )
}

SkillTags.defaultProps = {
  includes: (
    Object.keys(SkillCategories) as Array<keyof typeof SkillCategories>
  ).map((key) => SkillCategories[key]),
}

export default SkillTags
