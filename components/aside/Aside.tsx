import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import { uuid } from '@/utils/utilFunctions'
import { ContactEnum } from '@/utils/enums'

import Button from '@/components/common/button/Button'
import HomeIcon from '@/components/common/icons/HomeIcon'
import EmailIcon from '@/components/common/icons/EmailIcon'
import GithubIcon from '@/components/common/icons/GithubIcon'
import ContactIcon from '@/components/common/icons/ContactIcon'
import TwitterIcon from '@/components/common/icons/TwitterIcon'
import LinkedInIcon from '@/components/common/icons/LinkedInIcon'
import WhatsAppIcon from '@/components/common/icons/WhatsAppIcon'
import LocationIcon from '@/components/common/icons/LocationIcon'
// import PortfolioIcon from '@/components/common/icons/PortfolioIcon'

import S from './Aside.module.scss'

const routes = [
  { link: '/', icon: <HomeIcon />, text: 'Home' },
  { link: '/about', icon: <HomeIcon />, text: 'About' },
  // { link: '/portfolio', icon: <PortfolioIcon />, text: 'Portfolio' },
  { link: '/contact', icon: <ContactIcon />, text: 'Contact' },
]

const socialRoutes = [
  {
    ariaLabel: 'Github',
    icon: <GithubIcon />,
    link: 'https://github.com/MohammadAhmerMalick/',
  },
  {
    icon: <GithubIcon />,
    ariaLabel: 'Github Gist',
    link: 'https://gist.github.com/MohammadAhmerMalick',
  },
  {
    ariaLabel: 'linkedin',
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/mohammad-ahmer-malick-1a6586175',
  },
  {
    ariaLabel: 'Twitter',
    icon: <TwitterIcon />,
    link: 'https://twitter.com/MohammadAhmerMK',
  },
]

export const contactRoutes = [
  {
    link: `https://wa.me/${ContactEnum.UAEContactNumber}`,
    text: ContactEnum.UAEContactNumber,
    icon: <WhatsAppIcon />,
  },
  {
    link: `https://wa.me/${ContactEnum.PakistanContactNumber}`,
    text: ContactEnum.PakistanContactNumber,
    icon: <WhatsAppIcon />,
  },
  {
    link: `mailto:${ContactEnum.email}`,
    text: ContactEnum.emailWithLinebreak,
    icon: <EmailIcon />,
  },
  {
    link: 'https://goo.gl/maps/Y7ZTPGro1LHjNXF97',
    text: ContactEnum.UAELocation,
    icon: <LocationIcon />,
  },
]

interface Aside {
  minimized: boolean
  setMinimized: Dispatch<SetStateAction<boolean>>
}

const Aside: FC<Aside> = ({ minimized, setMinimized }) => {
  const router = useRouter()

  const [pageLink, setPageLink] = useState('/')

  useEffect(() => setPageLink(`/${router.pathname.split('/')[1]}`), [router])

  return (
    <aside className={classNames(S.aside, { [S.minimized]: minimized })}>
      <div className={S.container}>
        <nav className={S.nav}>
          {routes.map((route) => (
            <Link key={route.link} href={route.link} className={S.link}>
              {route.icon}
              <span
                className={classNames(S.text, {
                  [S.active]: pageLink === route.link,
                })}
              >
                {route.text}
              </span>
            </Link>
          ))}
        </nav>

        <div className={S.contactLinksSection}>
          <p className={S.title}>Contact</p>

          <div className={S.links}>
            {contactRoutes.map((route) => (
              <Link
                key={route.link}
                target="_blank"
                href={route.link}
                className={S.link}
              >
                {route.icon} {route.text}
              </Link>
            ))}
          </div>
        </div>

        <div className={S.socialLinksSection}>
          <p className={S.title}>Follow</p>

          <div className={S.links}>
            {socialRoutes.map((route) => (
              <Link
                key={uuid()}
                target="_blank"
                href={route.link}
                aria-label={route.ariaLabel}
              >
                <Button
                  className={S.link}
                  title={route.ariaLabel}
                  ariaLabel={route.ariaLabel}
                >
                  {route.icon}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <button
        aria-label="Toggle"
        onClick={() => setMinimized(!minimized)}
        className={classNames(S.toggle, { [S.minimized]: minimized })}
      >
        <span className={S.line} />
        <span className={S.line} />
      </button>
    </aside>
  )
}

export default Aside
