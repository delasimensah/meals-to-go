import { Request, Response } from "express";

import { locations } from "./geocode.mock";
import { googleClient } from "../../utils/google-client";

export const getGeoCode = async (req: Request, res: Response) => {
  const city = req.query.city as string;
  const mock = req.query.mock;

  if (mock === "true") {
    const locationMock = (locations as any)[city];

    return res.status(200).json(locationMock);
  }

  try {
    const response = await googleClient.geocode({
      params: {
        address: city as string,
        key: process.env.GOOGLE_API_KEY!,
      },
      timeout: 1000,
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.log("Geocode API error", error.message);
    return res.status(400).json({ message: error.message });
  }
};
