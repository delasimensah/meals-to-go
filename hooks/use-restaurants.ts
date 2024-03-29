import axios from "axios";
import { useEffect } from "react";

import { useLocationStore } from "@/hooks/zustand/use-location-store";
import { useRestaurantsStore } from "@/hooks/zustand/use-restaurants-store";
import { host, isMock } from "@/lib/env";
import { restaurantsTransform } from "@/lib/utils";

export const useRestaurants = () => {
  const { location } = useLocationStore();
  const { setResError, setResLoading, setRestaurants } = useRestaurantsStore();

  useEffect(() => {
    const getRestaurants = async (location: string) => {
      setResLoading(true);
      setRestaurants([]);

      try {
        const response = await axios.get(
          `${host}/placesNearby?location=${location}&mock=${isMock}`,
        );

        const transformedRestaurantsData = restaurantsTransform(
          response.data.results,
        );

        setResError("");
        setResLoading(false);
        setRestaurants(transformedRestaurantsData);
      } catch (error: any) {
        console.log("Restaurants Get Error:", error.message);
        setRestaurants([]);
        setResLoading(false);
        setResError("Error getting restaurants");
      }
    };

    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      getRestaurants(locationString);
    }
  }, [location]);
};
