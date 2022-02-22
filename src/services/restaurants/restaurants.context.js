import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

const RestaurantContext = createContext();

export const useRestaurantsContext = () => useContext(RestaurantContext);

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRestaurants = () => {
    setIsLoading(true);

    setTimeout(async () => {
      setIsLoading(true);

      try {
        const data = await restaurantsRequest();
        const transformedData = restaurantsTransform(data);
        setRestaurants(transformedData);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        setError("not found");
      }
    }, 2000);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
