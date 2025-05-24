import { config } from "dotenv";

const environment = process.env.NODE_ENV || "development";

config({ path: `.env.${environment}.local` });

export const { PORT, NODE_ENV, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } =
  process.env;
