'use client'

import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { IoLocationOutline } from 'react-icons/io5'
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import { AiOutlineContacts, AiOutlineHome, AiOutlineMail } from 'react-icons/ai'

import {
  githubLink,
  twitterLink,
  contactInfo,
  linkedinLink,
  githubGistLink,
} from '@/constants'
import { classNames } from '@/utils'
import { UiContext } from '@/context/uiContext'
import Button from '@/components/common/button/Button'

import S from './Aside.module.scss'

const routes = [
  { link: '/', icon: <AiOutlineHome />, text: 'Home' },
  { link: '/about', icon: <AiOutlineHome />, text: 'About' },
  // { link: '/portfolio', icon: <PortfolioIcon />, text: 'Portfolio' },
  { link: '/contact', icon: <AiOutlineContacts />, text: 'Contact' },
]

const socialRoutes = [
  {
    ariaLabel: 'Github',
    icon: <FaGithub />,
    link: githubLink,
  },
  {
    icon: <FaGithub />,
    ariaLabel: 'Github Gist',
    link: githubGistLink,
  },
  {
    ariaLabel: 'linkedin',
    icon: <FaLinkedin />,
    link: linkedinLink,
  },
  {
    ariaLabel: 'Twitter',
    icon: <FaTwitter />,
    link: twitterLink,
  },
]

export const contactRoutes = [
  {
    link: `https://wa.me/${contactInfo.uaeContactNumber}`,
    text: contactInfo.uaeContactNumber,
    icon: <FaWhatsapp />,
  },
  {
    link: `https://wa.me/${contactInfo.pakistanContactNumber}`,
    text: contactInfo.pakistanContactNumber,
    icon: <FaWhatsapp />,
  },
  {
    link: `mailto:${contactInfo.email}`,
    text: contactInfo.emailWithLinebreak,
    icon: <AiOutlineMail />,
  },
  {
    link: 'https://goo.gl/maps/Y7ZTPGro1LHjNXF97',
    text: contactInfo.uaeLocation,
    icon: <IoLocationOutline size={20} />,
  },
]

const Aside = () => {
  const pathname = usePathname()

  const {
    isUserSwitchedSidePanel,
    setIsUserSwitchedSidePanel,
    isSidePanelminimized: minimized,
    setIsSidePanelMinimized: setMinimized,
  } = useContext(UiContext)

  const toggleSidePanel = () => {
    setMinimized(!minimized)
    setIsUserSwitchedSidePanel(true)
  }

  useEffect(() => {
    // monitor the initial state if sidepanel weather is open or not and updated the 'isSidePanelminimized' state accordingly
    const handleSidePanelInitialState = () => {
      setMinimized(
        typeof window !== 'undefined' && window.document.body.clientWidth <= 992
      )
    }

    handleSidePanelInitialState()

    window.addEventListener('resize', handleSidePanelInitialState)
    return () => {
      window.removeEventListener('resize', handleSidePanelInitialState)
    }
  }, [setMinimized])

  return (
    <aside
      className={classNames(
        S.aside,
        !isUserSwitchedSidePanel && [S.initialState], // idea is to stop the transition for initial rendering to prevent layout shift
        minimized && [S.minimized]
      )}
    >
      <div className={S.container}>
        <nav className={S.nav}>
          {routes.map((route) => (
            <Link key={route.link} href={route.link} className={S.link}>
              {route.icon}
              <span
                className={classNames(
                  S.text,
                  `/${pathname.split('/')[1]}` === route.link && [S.active]
                )}
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
                target="_blank"
                href={route.link}
                key={route.ariaLabel}
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
        onClick={toggleSidePanel}
        className={classNames(S.toggle, minimized && [S.minimized])}
      >
        <span className={S.line} />
        <span className={S.line} />
      </button>
    </aside>
  )
}

export default Aside
