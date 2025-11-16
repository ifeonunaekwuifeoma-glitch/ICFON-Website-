import { Controller, Post, Body } from '@nestjs/common'
import { MailService } from './mail.service'

@Controller('contact')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async sendMail(@Body() dto: { name: string; email: string; message: string }) {
    console.log('New contact form submission:', dto)
    const result = await this.mailService.sendMail(dto)

    return {
      message: 'Email successfully sent to ' + process.env.EMAIL_TO,
      result,
    }
  }
}
