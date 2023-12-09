import { FastifyReply, FastifyRequest } from "fastify";

import { sendMeEmailUseCaseFactory } from "@/infra/factories/send-me-email";

interface SendMeEmailRequestBody {
	name: string;
	email: string;
	content: string;
}

export const sendMeEmailController = async (
	request: FastifyRequest, reply: FastifyReply
): Promise<FastifyReply> => {
	const sendMeEmailUseCase = sendMeEmailUseCaseFactory();

	const { name, email, content } = request.body as SendMeEmailRequestBody;

	await sendMeEmailUseCase.execute({ name, email, content });

	return reply.status(201).send();
};