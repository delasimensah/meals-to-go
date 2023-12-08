import { Request, Response } from "express";

import { googleClient } from "../utils/google-client";

export const getPlaces = async (req: Request, res: Response) => {
  const location = req.query.location;

  try {
    const response = await googleClient.placesNearby({
      params: {
        location: location as string,
        radius: 1500,
        type: "restaurant",
        key: process.env.GOOGLE_API_KEY!,
      },
      timeout: 1000,
    });

    return res.json(response.data);
  } catch (error: any) {
    console.log("Places API error", error.message);
    return res.status(400).json({ message: error.message });
  }
};
