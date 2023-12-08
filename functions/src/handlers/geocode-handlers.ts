import { Request, Response } from "express";

import { googleClient } from "../utils/google-client";

export const getGeoCode = async (req: Request, res: Response) => {
  const city = req.query.city;

  try {
    const response = await googleClient.geocode({
      params: {
        address: city as string,
        key: process.env.GOOGLE_API_KEY!,
      },
      timeout: 1000,
    });

    return res.json(response.data);
  } catch (error: any) {
    console.log("Something went wrong", error.message);
    return res.status(400).json({ message: error.message });
  }
};
