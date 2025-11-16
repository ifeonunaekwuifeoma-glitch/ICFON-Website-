import { Injectable } from '@nestjs/common'
import * as nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()

@Injectable()
export class MailService {
  private transporter

  constructor() {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Missing EMAIL_USER or EMAIL_PASS in .env')
    }

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  }

  async sendMail(dto: { name: string; email: string; message: string }) {
    const to = process.env.EMAIL_TO || process.env.EMAIL_USER
    if (!to) {
      throw new Error('Missing EMAIL_TO or EMAIL_USER in .env')
    }
    const { name, email, message } = dto
    const subject = `New contact form submission from ${name || 'Unknown sender'}`
    const text = `
New contact form submission:

Name: ${name}
Email: ${email}
Message:
${message}
`.trim()

    const info = await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    })
    console.log('📧 Email sent:', info.response)
    return info
  }
}
