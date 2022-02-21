import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { restaurantsRequest, restaurantTransform } from "./restaurants.service";

const RestaurantContext = createContext();

export const useRestaurantsContext = () => useContext(RestaurantContext);

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    // get restaurants
  }, []);
  return (
    <RestaurantContext.Provider
      value={{
        retaurants: [1, 2, 3],
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
