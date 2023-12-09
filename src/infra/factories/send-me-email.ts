import { SendMeEmailUseCase } from "../../domain/use-cases/send-me-email";

import { EmailNodemailerProvider } from "@/infra/providers/email-nodemailer-provider";

export const sendMeEmailUseCaseFactory = (): SendMeEmailUseCase => {
	const emailProvider = new EmailNodemailerProvider();

	const sendMeEmailUseCase = new SendMeEmailUseCase(emailProvider);

	return sendMeEmailUseCase;
};