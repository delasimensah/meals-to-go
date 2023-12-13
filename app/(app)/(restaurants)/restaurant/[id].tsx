import { useLocalSearchParams } from "expo-router";

import { RestaurantInfoCard, SafeAreaView } from "@/components";
import { useRestaurantsStore } from "@/hooks/use-restaurants-store";

const RestaurantDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const { restaurants } = useRestaurantsStore();

  const restaurant = restaurants.find((restaurant) => restaurant.name === id);

  return (
    <SafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeAreaView>
  );
};

export default RestaurantDetailScreen;
