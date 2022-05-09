import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9bf2c72926883c",
      pass: "25dd6e5db3ff1f"
    }
});

export class NodemailerAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Wesley Estacio <wesleyestacio4@gmail.com>',
            subject,
            html: body,
        })
    };
} 