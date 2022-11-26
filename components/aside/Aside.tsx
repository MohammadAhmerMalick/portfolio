import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import { uuid } from '@/utils/utilFunctions'

import Button from '@/components/common/button/Button'
import HomeIcon from '@/components/common/icons/HomeIcon'
import EmailIcon from '@/components/common/icons/EmailIcon'
import GithubIcon from '@/components/common/icons/GithubIcon'
import ContactIcon from '@/components/common/icons/ContactIcon'
import LinkedInIcon from '@/components/common/icons/LinkedInIcon'
import WhatsAppIcon from '@/components/common/icons/WhatsAppIcon'
import LocationIcon from '@/components/common/icons/LocationIcon'
import PortfolioIcon from '@/components/common/icons/PortfolioIcon'

import S from './Aside.module.scss'

const routes = [
  { link: '/', icon: <HomeIcon />, text: 'Home' },
  { link: '/404', icon: <HomeIcon />, text: 'About' },
  { link: '/404', icon: <PortfolioIcon />, text: 'Portfolio' },
  { link: '/contact', icon: <ContactIcon />, text: 'Contact' },
]

const socialRoutes = [
  { link: '/', icon: <GithubIcon /> },
  { link: '/', icon: <GithubIcon /> },
  { link: '/', icon: <LinkedInIcon /> },
]

const contactRoutes = [
  { link: '/', text: 'mohammadahmermalick\n@gmail.com', icon: <EmailIcon /> },
  { link: '/', text: 'Sindh, Karchi, Pakistan', icon: <LocationIcon /> },
  { link: '/', text: 'Sharja', icon: <LocationIcon /> },
  { link: '/', text: '+92 3494941593', icon: <WhatsAppIcon /> },
  { link: '/', text: '+92 3494941593', icon: <WhatsAppIcon /> },
]

const Aside = () => {
  const router = useRouter()

  return (
    <aside className={S.aside}>
      <nav className={S.nav}>
        {routes.map((route) => (
          <Link key={uuid()} href={route.link} className={S.link}>
            {route.icon}
            <span
              className={classNames(S.text, {
                [S.active]: router.asPath === route.link,
              })}
            >
              {route.text}
            </span>
          </Link>
        ))}
      </nav>
      <div className={S.contactLinksSection}>
        <p className={S.title}>Contact Info</p>

        <div className={S.links}>
          {contactRoutes.map((route) => (
            <Link key={uuid()} href={route.link} className={S.link}>
              {route.icon} {route.text}
            </Link>
          ))}
        </div>
      </div>

      <div className={S.socialLinksSection}>
        <p className={S.title}>Social Links</p>

        <div className={S.links}>
          {socialRoutes.map((route) => (
            <Link key={uuid()} href={route.link}>
              <Button className={S.link}>{route.icon}</Button>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Aside
