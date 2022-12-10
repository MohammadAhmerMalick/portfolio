import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames'

import { uuid } from '@/utils/utilFunctions'

import SkillTags, {
  BlenderTag,
  IllustratorTag,
  PhotoshopTag,
  SkillCategories,
} from '@/components/common/skillTags/SkillTags'
import Button from '@/components/common/button/Button'

import S from './PortfolioGridLibrary.module.scss'

const item = [
  {
    name: 'card',
    description: 'card',
    tags: [IllustratorTag],
    category: SkillCategories.graphic,
    image: './images/3.png',
  },
  {
    name: 'Bizzworld communications',
    description: 'bizzworld communications main website',
    tags: [IllustratorTag, PhotoshopTag, BlenderTag],
    category: [SkillCategories.web, SkillCategories.graphic],
    image: './images/2.png',
  },
  {
    name: 'card',
    description: 'card',
    tags: [IllustratorTag],
    category: SkillCategories.graphic,
    image: './images/3.png',
  },
  {
    name: 'lillypads',
    description: 'lillypads main website',
    tags: [IllustratorTag],
    category: SkillCategories.web,
    image: './images/3.png',
  },
]

const PortfolioGridLibrary = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategories>(
    SkillCategories.web
  )

  return (
    <section className={S.portfolioGridLibrary}>
      {/* filter */}
      <div className={S.filter}>
        <div className={S.categories}>
          {Object.values(SkillCategories).map((category) => (
            <Button
              key={category}
              className={classNames(S.category, {
                [S.active]: activeCategory === category,
              })}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* items */}
      <div className={S.items}>
        {item.map((e, i) => (
          <Link
            key={uuid()}
            href={`portfolio/${e.name}`}
            className={classNames(S.item, {
              [S.hide]: !e.category.includes(activeCategory),
            })}
          >
            <img src={e.image} alt="" />
            <div className={S.details}>
              <h3 className={S.title}>{e.name}</h3>
              <SkillTags customList={e.tags} hideName />
              <p className={S.para}>{e.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PortfolioGridLibrary
