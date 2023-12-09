export interface SendMailDTO {
	name: string;
	email: string;
	content: string;
}

export interface EmailProvider {
	send(mail: SendMailDTO): Promise<void>;
}