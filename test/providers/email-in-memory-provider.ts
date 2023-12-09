import { EmailProvider, SendMailDTO } from "../../src/domain/providers/email-provider";

export class EmailInMemoryProvider implements EmailProvider {
	private sentMails: SendMailDTO[] = [];

	public async send(mail: SendMailDTO): Promise<void> {
		this.sentMails.push(mail);
	}

	public getSentMails(): SendMailDTO[] {
		return this.sentMails;
	}
}