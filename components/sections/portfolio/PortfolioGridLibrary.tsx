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

const items = [
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
        {items.map((item) => (
          <Link
            key={uuid()}
            href={`portfolio/${item.name}`}
            className={classNames(S.item, {
              [S.hide]: !item.category.includes(activeCategory),
            })}
          >
            <img src={item.image} alt={item.name} />
            <div className={S.details}>
              <h3 className={S.title}>{item.name}</h3>
              <SkillTags customList={item.tags} hideName />
              <p className={S.para}>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PortfolioGridLibrary
