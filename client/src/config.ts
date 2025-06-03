import { z } from "zod";

const configSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  NEXT_PUBLIC_FACEBOOK_APP_ID: z.string(),
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
});

if (!configProject.success) {
  console.error(configProject.error.errors);
  throw new Error("Invalid environment variable declarations");
}

const envConfig = configProject.data;

export default envConfig;
