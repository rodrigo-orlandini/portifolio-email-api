import { FastifyInstance } from "fastify";

import { sendMeEmailController } from "./controllers/send-me-email";

export const routes = async (app: FastifyInstance) => {
	app.post("/contact", sendMeEmailController);
};