import { Stack } from "expo-router";

const RestaurantsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="restaurant/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RestaurantsLayout;
