import { FC } from 'react'

import { uuid, classNames } from '@/utils'

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

export const HTMLTag = { name: 'HTML', link: '/images/html.svg' }
export const CSSTag = { name: 'CSS', link: '/images/css.svg' }
export const SASSTag = { name: 'SASS', link: '/images/sass.svg' }
export const BootstrapTag = { name: 'Bootstrap', link: '/images/bootstrap.svg' }
export const TailwindTag = {
  name: 'Tailwind',
  link: '/images/tailwind-icon.svg',
}
export const SVGAnimationTag = {
  name: 'SVG Animation',
  link: '/images/svg.svg',
}
export const JavaScriptTag = {
  name: 'JavaScript',
  link: '/images/javascript.svg',
}
export const ReactJSTag = { name: 'React.JS', link: '/images/react-js.svg' }
export const VueJSTag = { name: 'React.JS', link: '/images/vue-js.svg' }
export const NodeJSTag = { name: 'Node.JS', link: '/images/node-js.svg' }
export const NextJSTag = { name: 'Next.JS', link: '/images/next-js.svg' }
export const NuxtJSTag = { name: 'Next.JS', link: '/images/nuxt-js.svg' }
export const APITag = { name: 'API', link: '/images/api.svg' }
export const jQueryTag = { name: 'jQuery', link: '/images/jquery.svg' }
export const WordPressTag = { name: 'WordPress', link: '/images/wordpress.svg' }
export const EmailTemplatesTag = {
  name: 'Email Templates',
  link: '/images/email.svg',
}
export const SendGridTag = { name: 'SendGrid', link: '/images/sendgrid.svg' }
export const PHPTag = { name: 'PHP', link: '/images/php.svg' }
export const MongoDBTag = { name: 'MongoDB', link: '/images/mongodb.svg' }
export const MYSQLTag = { name: 'MYSQL', link: '/images/mysql.svg' }
export const GitHubTag = { name: 'GitHub', link: '/images/github.svg' }
export const CPanelTag = { name: 'CPanel', link: '/images/cpanel.svg' }

export const FigmaTag = { name: 'Figma', link: '/images/figma.svg' }
export const PhotoshopTag = {
  name: 'Photoshop',
  link: '/images/adobe-photoshop.svg',
}
export const IllustratorTag = {
  name: 'Illustrator',
  link: '/images/adobe-illustrator.svg',
}
export const FilmoraTag = { name: 'Filmora', link: '/images/filmora.svg' }
export const SonyVegasTag = {
  name: 'Sony Vegas',
  link: '/images/sony-vegas.svg',
}
export const BlenderTag = { name: 'Blender', link: '/images/blender.svg' }

export const MSWordTag = { name: 'MS Word', link: '/images/word.svg' }
export const MSExcelTag = { name: 'MS Excel', link: '/images/excel.svg' }
export const MSPowerpointTag = {
  name: 'MS Powerpoint',
  link: '/images/powerpoint.svg',
}

export const skillList: x = {
  [SkillCategories.web]: [
    HTMLTag,
    CSSTag,
    SASSTag,
    BootstrapTag,
    TailwindTag,
    SVGAnimationTag,
    WordPressTag,
    JavaScriptTag,
    ReactJSTag,
    NextJSTag,
    VueJSTag,
    NuxtJSTag,
    NodeJSTag,
    jQueryTag,
    PHPTag,
    EmailTemplatesTag,
    APITag,
    GitHubTag,
    MYSQLTag,
    MongoDBTag,
    CPanelTag,
    SendGridTag,
  ],
  [SkillCategories.graphic]: [
    FigmaTag,
    PhotoshopTag,
    IllustratorTag,
    FilmoraTag,
    SonyVegasTag,
    BlenderTag,
  ],
  [SkillCategories.extra]: [MSWordTag, MSExcelTag, MSPowerpointTag],
}

interface SkillTags {
  categories?: SkillCategories[]
  customList?: o[]
  hideName?: boolean
}

const SkillTags: FC<SkillTags> = ({ categories, customList, hideName }) => {
  return (
    <div className={S.skillTags}>
      {customList?.length
        ? customList.map((tag) => (
            <div
              key={uuid()}
              className={classNames(S.tag, hideName && [S.onlyIcon])}
            >
              <div className={S.iconContainer}>
                <img
                  width={50}
                  height={50}
                  src={tag.link}
                  alt={tag.name}
                  className={S.icon}
                />
              </div>
              {!hideName && <span>{tag.name}</span>}
            </div>
          ))
        : !!categories?.length &&
          categories.map((key) =>
            skillList[key].map((tag) => (
              <div
                key={uuid()}
                className={classNames(S.tag, hideName && [S.onlyIcon])}
              >
                <div className={S.iconContainer}>
                  <img
                    width={50}
                    height={50}
                    src={tag.link}
                    alt={tag.name}
                    className={S.icon}
                  />
                </div>
                {!hideName && <span>{tag.name}</span>}
              </div>
            ))
          )}
    </div>
  )
}

SkillTags.defaultProps = {
  categories: (
    Object.keys(SkillCategories) as Array<keyof typeof SkillCategories>
  ).map((key) => SkillCategories[key]),
  customList: [],
  hideName: false,
}

export default SkillTags
