import { MailService } from './mail.service';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendMail(dto: {
        name: string;
        email: string;
        message: string;
    }): Promise<{
        message: string;
        result: import("nodemailer/lib/smtp-transport").SentMessageInfo;
    }>;
}
