import Link from 'next/link'
import classNames from 'classnames'
import { toast } from 'react-toastify'
import { FormEvent, useState } from 'react'

import { contactRoutes } from '@/components/aside/Aside'
import UserIcon from '@/components/common/icons/UserIcon'
import BookIcon from '@/components/common/icons/BookIcon'
import EmailIcon from '@/components/common/icons/EmailIcon'
import ContactIcon from '@/components/common/icons/ContactIcon'
import Button, { buttonType } from '@/components/common/button/Button'
import SectionHeading from '@/components/common/section/sectionHeading/SectionHeading'
import SectionContainer from '@/components/common/section/sectionContainer/SectionContainer'

import S from './Contact.module.scss'

const Contact = () => {
  const [isFormDisabled, setIsFormDisabled] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  interface HandleOnChange {
    target: HTMLInputElement | HTMLTextAreaElement
  }

  const handleOnChange = ({ target }: HandleOnChange) => {
    const { value, name } = target

    setForm((state) => ({ ...state, [name]: value }))
  }

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormDisabled(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
      })

      if (res.status !== 200) throw Error
      toast.success('I will get back to you soon')
    } catch (error) {
      toast.error('Unable to send email')
      toast.info('You can contact me on mohammadahmermalick@gmail.com')
      console.log({ error })
    } finally {
      setIsFormDisabled(false)
    }
  }

  return (
    <SectionContainer className={S.contact}>
      <SectionHeading
        primary="get in touch"
        secondary="with me"
        paragraph="If you have anything to say please let me know in the following form."
      >
        <div className={S.links}>
          {contactRoutes.map((route) => (
            <Link
              key={route.link}
              target="_blank"
              href={route.link}
              className={S.link}
            >
              {route.icon} {route.text.replace('\n', '')}
            </Link>
          ))}
        </div>
      </SectionHeading>

      <form
        className={S.form}
        id="contactForm"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <div className={S.field}>
          <div className={classNames(S.icon, { [S.disabled]: isFormDisabled })}>
            <UserIcon />
          </div>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            className={S.input}
            placeholder="Name"
            onChange={handleOnChange}
            disabled={isFormDisabled}
          />
        </div>
        <div className={S.field}>
          <div className={classNames(S.icon, { [S.disabled]: isFormDisabled })}>
            <EmailIcon />
          </div>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            className={S.input}
            placeholder="Email"
            onChange={handleOnChange}
            disabled={isFormDisabled}
          />
        </div>
        <div className={S.field}>
          <div className={classNames(S.icon, { [S.disabled]: isFormDisabled })}>
            <BookIcon />
          </div>
          <input
            required
            type="text"
            name="subject"
            value={form.subject}
            className={S.input}
            placeholder="Subject"
            onChange={handleOnChange}
            disabled={isFormDisabled}
          />
        </div>
        <textarea
          cols={30}
          rows={10}
          name="message"
          value={form.message}
          className={S.textarea}
          placeholder="Message"
          onChange={handleOnChange}
          disabled={isFormDisabled}
        />
      </form>
      <Button
        form="contactForm"
        className={S.button}
        icon={<ContactIcon />}
        type={buttonType.submit}
        disabled={isFormDisabled}
      >
        Submit
      </Button>
    </SectionContainer>
  )
}

export default Contact
