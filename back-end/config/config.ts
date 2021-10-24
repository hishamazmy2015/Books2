import dotenv from "dotenv";

dotenv.config();
const MONGO_OPTIONS = {};
const MONGO_USERNAME = process.env.MONGO_USERNAME || "admin";
const MONGO_PASSWORD = process.env.MONGO_USERNAME || "Pssw0rd2020";
const MONGO_HOST = process.env.MONGO_HOST || "localhost";

const MONGO = {
  host: MONGO_HOST,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.s7twk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const SERVER_PORT = process.env.SERVER_PORT || 1337;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  server: SERVER,
  mongo: MONGO,
};

export default config;
