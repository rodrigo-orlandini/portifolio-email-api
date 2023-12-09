import { z } from "zod";

import { EmailProvider } from "../providers/email-provider";

interface SendMeEmailUseCaseRequest {
	name: string;
	email: string;
	content: string;
}

export class SendMeEmailUseCase {
	public constructor (
		private emailProvider: EmailProvider
	) {	}

	public async execute(data: SendMeEmailUseCaseRequest): Promise<void> {
		const sendMeEmailUseCaseParser = z.object({
			name: z.string(),
			email: z.string(),
			content: z.string()
		});

		const mailData = sendMeEmailUseCaseParser.parse(data);

		await this.emailProvider.send(mailData);
	}
}