import { FormEvent, useState } from 'react'

import UserIcon from '@/components/common/icons/UserIcon'
import EmailIcon from '@/components/common/icons/EmailIcon'
import Button, { buttonType } from '@/components/common/button/Button'
import SectionHeading from '@/components/common/section/sectionHeading/SectionHeading'
import SectionContainer from '@/components/common/section/sectionContainer/SectionContainer'

import S from './Contact.module.scss'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  interface HandleOnChange {
    target: HTMLInputElement | HTMLTextAreaElement
  }

  const handleOnChange = ({ target }: HandleOnChange) => {
    const { value, name } = target

    setForm((state) => ({ ...state, [name]: value }))
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({ form })
  }

  return (
    <SectionContainer className={S.contact}>
      <SectionHeading
        primary="get in touch"
        secondary="with me"
        paragraph="If you have anything to say please let me know in the following form."
      />

      <form
        className={S.form}
        id="contactForm"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <div className={S.field}>
          <div className={S.icon}>
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
          />
        </div>
        <div className={S.field}>
          <div className={S.icon}>
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
        />
      </form>
      <Button type={buttonType.submit} form="contactForm">
        Submit
      </Button>
    </SectionContainer>
  )
}

export default Contact
