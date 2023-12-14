import * as express from "express";
import { onRequest } from "firebase-functions/v2/https";

import { getGeoCode } from "./handlers/geocode/geocode-handlers";
import { getPlaces } from "./handlers/places/places-handlers";

const app = express();

app.get("/geocode", getGeoCode);
app.get("/placesNearby", getPlaces);

export const api = onRequest({ cors: true }, app);
