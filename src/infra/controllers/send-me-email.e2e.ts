import { app } from "@/infra/app";

describe("Send Me Email Controller", () => {
	it("should be able to send me email", async () => {
		const response = await app.inject({
			method: "POST",
			url: "/contact",
			body: {
				name: "John Doe",
				email: "johndoe@example.com",
				content: "Hey, what are you up to?"
			}
		});
		
		expect(response.statusCode).toEqual(201);
	});
});