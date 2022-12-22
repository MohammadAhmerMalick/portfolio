import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // required fields
  const { name, email, subject, message } = JSON.parse(req.body)
  if (!name || !email || !subject || !message)
    return res.status(400).json({ message: 'required fields missing' })

  // configuration data
  const host = 'mohammadahmermalick.com'
  const hostEmail = `info@${host}`
  const pass = process.env.email_pass // email uesr password
  if (!pass) return res.status(500).json({ message: 'configuration error' })

  const transporter = nodemailer.createTransport({
    host,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: { user: hostEmail, pass },
  })

  // email body
  const html = `name: ${name} \nemail: ${email} \n\n${message}\n\nThis message is from ${hostEmail} contact form`

  try {
    const emailInfo = await transporter.sendMail({
      subject,
      sender: email,
      from: hostEmail,
      replyTo: hostEmail,
      to: 'mohammadahmermalick@gmail.com',
      text: `message from ${host} contact form`,
      html: html.replace(/\r\n|\r|\n/g, '<br />'), // textbox linebreak to email linebreak
    })
    console.log({ emailInfo })
    return res.status(200).json({ message: 'success' })
  } catch (error) {
    console.error({ error })
    return res.status(424).json({ message: 'unable to send email' })
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    sendEmail(req, res)
  } else {
    res.status(404).json({ message: 'not found' })
  }
}
