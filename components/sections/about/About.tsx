import Link from 'next/link'
import Image from 'next/image'

import { ContactEnum } from '@/utils/enums'

import Button from '@/components/common/button/Button'
import SectionHeading from '@/components/common/section/sectionHeading/SectionHeading'
import SectionContainer from '@/components/common/section/sectionContainer/SectionContainer'

import S from './About.module.scss'

const About = () => {
  return (
    <SectionContainer>
      <SectionHeading primary="About" secondary="Me">
        <div className={S.about}>
          <div className={S.content}>
            <p>
              I am a Computer Scientist with more than three years of field
              experience as a Web Developer. I have developed analytical skills
              with expertise in handling teams along with other challenges. I am
              Specialize in developing responsive, search engine optimized,
              speed optimized web applications and websites and have extensive
              experience in frontend and can handle backend on multiple
              programming languages, also capable of handling a variety of
              graphic-based tasks as well.
            </p>
            <p>
              I am passionate about growing businesses profitably. I aspire to
              create value with my work, both personally and professionally.
            </p>
            <p>
              <Link
                target="_blank"
                className={S.link}
                href="https://shorturl.at/uIQZ5"
              >
                Here
              </Link>{' '}
              are some of the websites that I designed in my career.
            </p>
            <p>
              Currently located in UAE till February-20-2023 and you can contact
              me through{' '}
              <Link
                target="_blank"
                className={S.link}
                href={`tel:+${ContactEnum.PakistanContactNumber}`}
              >
                +{ContactEnum.UAEContactNumber}
              </Link>
            </p>
          </div>
          <div className={S.resume}>
            <Image
              width={300}
              height={220}
              className={S.resumeQRCode}
              src="/images/resume-qr-code.svg"
              alt="mohammadahmermalick.com/resume/Mohammad%20Ahmer%20Malick%20CV.pdf"
            />
            <Link
              target="_blank"
              href="/resume/Mohammad%20Ahmer%20Malick%20Resume.pdf"
            >
              <Button shadow small className={S.button}>
                My Resume
              </Button>
            </Link>
          </div>
        </div>
      </SectionHeading>
    </SectionContainer>
  )
}

export default About
