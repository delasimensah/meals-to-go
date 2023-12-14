import { Request, Response } from "express";

import { mocks, addMockImages } from "./mock";
import { googleClient } from "../../utils/google-client";

const addGoogleImage = (restaurant: any) => {
  const ref = restaurant.photos[0].photo_reference;

  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];

    return restaurant;
  }

  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${process
      .env.GOOGLE_API_KEY!}`,
  ];
  return restaurant;
};

export const getPlaces = async (req: Request, res: Response) => {
  const location = req.query.location as string;
  const mock = req.query.mock;

  if (mock === "true") {
    const data = (mocks as any)[location];

    if (data) {
      data.results = data.results.map(addMockImages);
    }

    return res.status(200).json(data);
  }

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

    response.data.results = response.data.results.map(addGoogleImage);

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.log("Places API error", error.message);
    return res.status(400).json({ message: error.message });
  }
};
