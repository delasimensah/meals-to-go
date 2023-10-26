import { Stack } from "expo-router";

const RestaurantsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Restaurants",
        }}
      />

      <Stack.Screen
        name="restaurant/[id]"
        options={{
          title: "Details",
        }}
      />
    </Stack>
  );
};

export default RestaurantsLayout;
