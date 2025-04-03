import { configDotenv } from "dotenv";

configDotenv();

export const config = {
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT as string,
    dbname: process.env.DB_NAME?.toLowerCase() as string,
}
Object.freeze(config);

export const uri = `postgres://${config.username}:${config.password}@${config.host}:${config.port}/${config.dbname}`;