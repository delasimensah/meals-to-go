import * as logger from "firebase-functions/logger";
import { onRequest } from "firebase-functions/v2/https";

// google api key - AIzaSyDPbR4xaNNo16KVu_C6Gh5RDx5UaxUdEEs
export const helloWorld = onRequest((_, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
