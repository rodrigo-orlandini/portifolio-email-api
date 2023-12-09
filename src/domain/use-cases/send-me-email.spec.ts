import { faker } from "@faker-js/faker";

import { SendMeEmailUseCase } from "./send-me-email";

import { EmailInMemoryProvider } from "@test/providers/email-in-memory-provider";

let sut: SendMeEmailUseCase;

let emailProvider: EmailInMemoryProvider;

describe("Send Me Email Use Case", () => {
	beforeEach(() => {
		emailProvider = new EmailInMemoryProvider();

		sut = new SendMeEmailUseCase(emailProvider);
	});

	it("should be able to send me an email", async () => {
		await sut.execute({
			name: faker.person.fullName(),
			email: faker.internet.email(),
			content: faker.lorem.sentence()
		});

		const sentEmails = emailProvider.getSentMails();
		expect(sentEmails).toHaveLength(1);
	});
});