import { FastifyInstance } from "fastify";

import { sendMeEmailController } from "./controllers/send-me-email";

export const ownerRoutes = async (app: FastifyInstance) => {
	app.post("/owner/contact", sendMeEmailController);
};