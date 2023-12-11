import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text } from "react-native";

import { useRestaurantsStore } from "@/hooks/use-restaurants-store";

const RestaurantDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const { restaurants } = useRestaurantsStore();

  const restaurant = restaurants.find((restaurant) => restaurant.name === id);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: (props) => <Text>{restaurant.name}</Text>,
        }}
      />
      <View className="flex-1 items-center justify-center">
        <Text>{id}</Text>
      </View>
    </>
  );
};

export default RestaurantDetailScreen;
