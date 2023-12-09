import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
	// Environment
	NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
	
	// API connection settings
	API_PORT: z.coerce.number().positive().int().default(3333),

	// Email provider settings
	EMAIL_PROVIDER_HOST: z.string(),
	EMAIL_PROVIDER_PORT: z.coerce.number().default(465),
	EMAIL_PROVIDER_SSL: z.coerce.boolean().default(true),
	EMAIL_PROVIDER_ADDRESS: z.string().email(),
	EMAIL_PROVIDER_PASSWORD: z.string(),
	MY_EMAIL_ADDRESS: z.string().email()
});

const _env = envSchema.safeParse(process.env);

if(_env.success === false) {
	console.error("Invalid environment variables.", _env.error.format());
	throw new Error("Invalid environment variables.");
}

export const env = _env.data;