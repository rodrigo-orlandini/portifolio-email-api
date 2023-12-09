import fastify from "fastify";
import cors from "@fastify/cors";
import { ZodError } from "zod";

import { env } from "../env";

import { routes } from "./routes";

export const app = fastify();

app.register(cors, {
	origin: "*"
});

app.register(routes);

app.setErrorHandler((error, _request, reply) => {
	if(error instanceof ZodError) {
		throw error;
	}

	if(env.NODE_ENV !== "production") {
		console.error(error);
	} else {
		// TODO Add external tool to error handling (DataDog / NewRelic / Sentry) 
	}

	return reply.status(500).send({ message: "Internal server error." });
});