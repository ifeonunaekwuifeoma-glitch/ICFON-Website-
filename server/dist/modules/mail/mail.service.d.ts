export declare class MailService {
    private transporter;
    constructor();
    sendMail(dto: {
        name: string;
        email: string;
        message: string;
    }): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
}
