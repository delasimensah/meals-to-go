import axios from "axios";
import { useEffect } from "react";

import { useLocationStore } from "@/hooks/zustand/use-location-store";
import { host, isMock } from "@/lib/env";
import { formatLocationData } from "@/lib/utils";
import { Location } from "@/types";

export const useLocation = () => {
  const { keyword, setLocation, setLocError, setLocLoading } =
    useLocationStore();

  useEffect(() => {
    if (!keyword.length) return;

    const getLocation = async () => {
      try {
        const response = await axios.get(
          `${host}/geocode?city=${keyword.toLowerCase()}&mock=${isMock}`,
        );

        const formattedLocationData: Location = formatLocationData(
          response.data.results[0].geometry,
        );

        setLocError("");
        setLocLoading(false);
        setLocation(formattedLocationData);
      } catch (error: any) {
        console.log("Location Get Error: ", error.message);
        setLocLoading(false);
        setLocError("Error getting location");
      }
    };

    getLocation();
  }, [keyword]);
};
