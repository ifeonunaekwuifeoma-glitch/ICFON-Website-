"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
let MailService = class MailService {
    constructor() {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error('Missing EMAIL_USER or EMAIL_PASS in .env');
        }
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }
    async sendMail(dto) {
        const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
        if (!to) {
            throw new Error('Missing EMAIL_TO or EMAIL_USER in .env');
        }
        const { name, email, message } = dto;
        const subject = `New contact form submission from ${name || 'Unknown sender'}`;
        const text = `
New contact form submission:

Name: ${name}
Email: ${email}
Message:
${message}
`.trim();
        const info = await this.transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        });
        console.log('📧 Email sent:', info.response);
        return info;
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailService);
//# sourceMappingURL=mail.service.js.map