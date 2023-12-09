import nodemailer, { Transporter } from "nodemailer";

import { env } from "@/env";

import { EmailProvider, SendMailDTO } from "@/domain/providers/email-provider";

export class EmailNodemailerProvider implements EmailProvider {
	private client: Transporter;

	constructor() {
		const transporter = nodemailer.createTransport({
			host: env.EMAIL_PROVIDER_HOST,
			secure: env.EMAIL_PROVIDER_SSL,
			port: env.EMAIL_PROVIDER_PORT,
			auth: {
				user: env.EMAIL_PROVIDER_ADDRESS,
				pass: env.EMAIL_PROVIDER_PASSWORD
			}
		});

		this.client = transporter;
	}

	public async send({ name, email, content }: SendMailDTO): Promise<void> {
		await this.client.sendMail({
			to: env.MY_EMAIL_ADDRESS,
			from: env.EMAIL_PROVIDER_ADDRESS,
			subject: "PORTIFOLIO - CONTACT ME",
			text: `
				AUTHOR: ${name},
				EMAIL: ${email}
				
				${content}
			`
		});
	}
}