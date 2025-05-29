import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import SkillTags, {
  BlenderTag,
  PhotoshopTag,
  IllustratorTag,
  SkillCategories,
} from '@/components/common/skillTags/SkillTags'
import { classNames } from '@/utils'
import Button from '@/components/common/button/Button'

import S from './PortfolioGridLibrary.module.scss'

const items = [
  {
    name: 'Bizzworld communications',
    description: 'bizzworld communications main website',
    tags: [IllustratorTag, PhotoshopTag, BlenderTag],
    category: [SkillCategories.web, SkillCategories.graphic],
    image: './images/2.png',
  },
  {
    name: 'lillypads',
    description: 'lillypads main website',
    tags: [IllustratorTag],
    category: [SkillCategories.web, SkillCategories.graphic],
    image: './images/3.png',
  },
]

const PortfolioGridLibrary = () => {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<SkillCategories>(
    SkillCategories.web
  )

  // useEffect(() => {
  //   const category = router.query.category as keyof typeof SkillCategories
  //   setActiveCategory(SkillCategories[category] || SkillCategories.web)
  // }, [router])

  return (
    <section className={S.portfolioGridLibrary}>
      {/* filter */}
      <div className={S.filter}>
        <div className={S.categories}>
          {Object.values(SkillCategories).map((category) => (
            <Button
              key={category}
              className={classNames(
                S.category,
                activeCategory === category && [S.active]
              )}
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
            key={item.name}
            href={`portfolio/${item.name}`}
            className={classNames(
              S.item,
              !item.category.includes(activeCategory) && [S.hide]
            )}
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
